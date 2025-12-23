import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, User, Mail, Send, Loader2, ThumbsUp, Flag, Reply } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { BlogComment } from '@/pages/blog/BlogTypes';
import { getCommentsByPost } from '@/pages/blog/BlogData';

interface CommentsSectionProps {
  postId: string;
}

export const CommentsSection = ({ postId }: CommentsSectionProps) => {
  const [comments, setComments] = useState<BlogComment[]>(getCommentsByPost(postId));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newComment: BlogComment = {
      id: `comment-${Date.now()}`,
      postId,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      date: new Date().toISOString().split('T')[0],
      isApproved: false,
    };

    setIsSubmitting(false);
    toast.success('Comment submitted! It will appear after moderation.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="space-y-8">
      {/* Comments Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-slate-600" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-xl">Comments</h3>
            <p className="text-sm text-slate-500">{comments.length} comment{comments.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>

      {/* Comment Form */}
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <h4 className="font-semibold text-slate-900 mb-4">Leave a Comment</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 border-slate-200"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-slate-200"
                />
              </div>
            </div>
            <Textarea
              placeholder="Write your comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="border-slate-200 resize-none"
            />
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">
                Your email won't be published. Comments are moderated.
              </p>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-secondary hover:bg-secondary/90 text-white gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Posting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Post Comment
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment, idx) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-slate-200 hover:border-slate-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-green-100 rounded-full flex items-center justify-center shrink-0">
                      <span className="font-bold text-secondary text-lg">
                        {comment.name.charAt(0).toUpperCase()}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-2 mb-2">
                        <span className="font-semibold text-slate-900">
                          {comment.name}
                        </span>
                        <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                          {new Date(comment.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </Badge>
                      </div>

                      <p className="text-slate-700 leading-relaxed mb-4">
                        {comment.message}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-secondary transition-colors">
                          <ThumbsUp className="w-3 h-3" />
                          Like
                        </button>
                        <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-secondary transition-colors">
                          <Reply className="w-3 h-3" />
                          Reply
                        </button>
                        <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-red-500 transition-colors">
                          <Flag className="w-3 h-3" />
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <Card className="border-slate-200 bg-slate-50">
          <CardContent className="p-8 text-center">
            <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h4 className="font-semibold text-slate-700 mb-2">No comments yet</h4>
            <p className="text-sm text-slate-500">
              Be the first to share your thoughts on this article!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
