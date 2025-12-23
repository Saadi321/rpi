import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2, CheckCircle2, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    toast.success('Successfully subscribed to newsletter!');
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <Card className="border-secondary/20 bg-gradient-to-br from-green-50 to-emerald-50">
        <CardContent className="p-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-secondary" />
            </div>
          </motion.div>
          <h3 className="font-bold text-slate-900 text-lg mb-2">You're Subscribed!</h3>
          <p className="text-sm text-slate-600">
            Thank you for subscribing. You'll receive updates about new posts and RPI news.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSubscribed(false)}
            className="mt-4 text-secondary"
          >
            Subscribe another email
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-secondary/5 to-green-50 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
            <Mail className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Newsletter</h3>
            <p className="text-xs text-slate-500">Stay updated</p>
          </div>
          <Sparkles className="w-5 h-5 text-secondary ml-auto" />
        </div>

        <p className="text-sm text-slate-600 mb-4">
          Get the latest news, articles, and updates from RPI delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-slate-200 focus:border-secondary focus:ring-secondary/20"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary hover:bg-secondary/90 text-white gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Subscribe
              </>
            )}
          </Button>
        </form>

        <p className="text-xs text-slate-400 mt-3 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </CardContent>
    </Card>
  );
};
