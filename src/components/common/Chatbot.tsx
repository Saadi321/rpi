import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

// Message interface
interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content:
                "Hello! I'm the RPI Assistant. Ask me anything about Rawalpindi Polytechnic Institute.",
            timestamp: new Date(),
        },
    ]);

    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    // API clients
    const openai = useRef<OpenAI | null>(null);
    const gemini = useRef<GoogleGenerativeAI | null>(null);

    // Initialize API clients (from .env)
    useEffect(() => {
        const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;
        const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;

        if (openaiKey) {
            openai.current = new OpenAI({
                apiKey: openaiKey,
                dangerouslyAllowBrowser: true, // OK for localhost only — move to backend for production
            });
            console.log("OpenAI initialized.");
        }

        if (geminiKey) {
            gemini.current = new GoogleGenerativeAI(geminiKey);
            console.log("Gemini initialized.");
        }

        if (!openaiKey && !geminiKey) {
            console.warn(
                "No API keys found. Add VITE_OPENAI_API_KEY or VITE_GEMINI_API_KEY to your .env."
            );
        }
    }, []);

    // Auto-scroll on new messages or typing state
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    // STRICT system prompt (ONLY use the information below)
    const siteContext = `
You are an AI assistant for Rawalpindi Polytechnic Institute (RPI).

🔥 VERY STRICT RULES — FOLLOW EXACTLY:
- ONLY answer using the information provided in this prompt.
- NEVER invent, guess, assume, or add information that is NOT listed here.
- If the user asks for anything outside this data, reply exactly:
  "Sorry, this information is not available on the official RPI website."

✔ OFFICIAL INSTITUTE DETAILS:
- RPI stands for Rawalpindi Polytechnic Institute.
- RPI is a private technical institute.
- It is affiliated with the Punjab Board of Technical Education (PBTE), Lahore.
- Offers 3-year Diploma of Associate Engineering (DAE) programs.

✔ OFFICIAL PROGRAMS (ONLY THESE FOUR — DO NOT ADD OTHERS):
1. Civil Technology
2. Electrical Technology
3. Electronics Technology
4. Computer Information Technology (CIT)

✔ ELIGIBILITY CRITERIA:
- Matriculation (secondary school) pass **with Science**.
- Candidate **must have studied Mathematics, Physics, and Chemistry in matric**.

✔ BASIC CAMPUS CHARACTERISTICS:
- Provides classrooms, labs, workshops, and technical training.
- Focuses on practical skills and technical education.

❗ If users ask about fees, faculty names, precise admission dates, hostel, job placement, or any detail NOT listed above:
Respond with:
"Sorry, this information is not available on the official RPI website."
`;

    // Send message handler
    const handleSendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userText = input.trim();
        setInput("");

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: userText,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setIsLoading(true);
        setIsTyping(true);

        let reply = "";
        try {
            // Primary: OpenAI
            if (openai.current) {
                try {
                    const completion = await openai.current.chat.completions.create({
                        model: "gpt-4.1",
                        messages: [
                            { role: "system", content: siteContext },
                            { role: "user", content: userText },
                        ],
                        max_tokens: 400,
                    });

                    reply =
                        completion.choices?.[0]?.message?.content ??
                        "No response received from OpenAI.";
                } catch (openaiErr) {
                    console.warn("OpenAI failed, will fallback to Gemini if available.", openaiErr);
                }
            }

            // Fallback: Gemini
            if (!reply && gemini.current) {
                try {
                    const model = gemini.current.getGenerativeModel({
                        model: "gemini-1.5-flash",
                    });
                    const result = await model.generateContent(`${siteContext}\n\nUser: ${userText}\nAI:`);
                    // result.response.text() is the recommended access pattern
                    reply = result.response.text();
                } catch (gemErr) {
                    console.error("Gemini fallback failed:", gemErr);
                }
            }

            // If still no reply, show a friendly error
            if (!reply) {
                reply = "⚠️ I’m having trouble processing your request. Please check API keys or try again.";
            }

            // Append assistant message
            const assistantMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: reply,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, assistantMsg]);
        } catch (err) {
            console.error("Unexpected error:", err);
            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 2).toString(),
                    role: "assistant",
                    content: "⚠️ Error connecting to AI services. Please verify your API keys.",
                    timestamp: new Date(),
                },
            ]);
        } finally {
            setIsLoading(false);
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:bg-secondary/90"
                aria-label="Open chat"
            >
                <MessageCircle className="w-6 h-6" />
            </motion.button>

            {/* Chat Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 60, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 60, scale: 0.98 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed bottom-6 right-6 w-full max-w-md h-[600px] bg-card border border-border rounded-lg shadow-2xl z-50 flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary-foreground/20 rounded-full">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">RPI Assistant</h3>
                                        <p className="text-xs opacity-90">Ask me about RPI programs, eligibility, or general details.</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            {/* Messages Area */}
                            <ScrollArea className="flex-1 p-4">
                                <div className="space-y-4">
                                    {messages.map((m) => (
                                        <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                            <div className={`max-w-[80%] rounded-lg px-4 py-2 ${m.role === "user" ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}>
                                                <p className="text-sm whitespace-pre-wrap">{m.content}</p>
                                                <p className="text-xs opacity-60 mt-1">
                                                    {m.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Typing Indicator */}
                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="bg-muted text-muted-foreground rounded-lg px-4 py-2">
                                                <div className="flex gap-1">
                                                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-current rounded-full" />
                                                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-current rounded-full" />
                                                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-current rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div ref={chatEndRef} />
                                </div>
                            </ScrollArea>

                            {/* Input Area */}
                            <div className="p-4 border-t border-border bg-card">
                                <div className="flex gap-2">
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && !e.shiftKey && !isLoading) {
                                                e.preventDefault();
                                                handleSendMessage();
                                            }
                                        }}
                                        placeholder="Type your message..."
                                        disabled={isLoading}
                                        className="flex-1"
                                    />
                                    <Button onClick={handleSendMessage} disabled={isLoading || !input.trim()} size="icon" className="bg-secondary hover:bg-secondary/90">
                                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
