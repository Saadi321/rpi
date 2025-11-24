import { useState } from 'react';
import { Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from './ContactData';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Get in Touch</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Have questions about admissions, fee structure, or campus life? Visit us or drop a message.
            </p>

            <div className="space-y-8">
              {CONTACT_INFO.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-1">{item.title}</h4>
                    {Array.isArray(item.content) ? (
                      item.content.map((line, i) => <p key={i} className="text-slate-600">{line}</p>)
                    ) : (
                      <p className="text-slate-600 leading-relaxed">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className="bg-slate-50 text-slate-900 border border-slate-200 shadow-lg">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">Message Sent!</h3>
                    <p className="text-slate-500">We will get back to you shortly.</p>
                    <Button className="mt-6" onClick={() => setSubmitted(false)} variant="outline">Send Another</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-2xl font-bold mb-6 text-slate-900">Send a Message</h3>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                        <input 
                          id="name"
                          required
                          className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                        <input 
                          id="phone"
                          required
                          className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" 
                          placeholder="0300-1234567" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                      <input 
                        id="email"
                        type="email"
                        required
                        className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" 
                        placeholder="john@example.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                      <textarea 
                        id="message"
                        required
                        rows={4}
                        className="w-full p-4 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none" 
                        placeholder="How can we help you?" 
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 text-base font-bold bg-secondary hover:bg-secondary/90" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
