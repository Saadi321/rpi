import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Facebook, Twitter, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';
import { CallToAction, Testimonials, DynamicHero } from '@/components';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BLOG_POSTS, BLOG_CATEGORIES } from './BlogData';
import { toast } from 'sonner';

export const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts from same category
  const relatedPosts = BLOG_POSTS.filter(
    p => p.category === post.category && p.id !== post.id
  ).slice(0, 3);

  // Social Share Handlers
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
    toast.success(`Sharing on ${platform}!`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success('Link copied to clipboard!');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("${post.coverImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/blog">
            <Button variant="ghost" className="text-white hover:text-secondary hover:bg-white/10 mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4 bg-secondary text-white border-0">
              {BLOG_CATEGORIES.find(c => c.id === post.category)?.label}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full border-2 border-white/20"
                />
                <span className="font-medium">{post.author}</span>
              </div>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Cover Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-2xl mb-12"
              >
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Article Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="prose prose-lg prose-slate max-w-none mb-12"
              >
                {post.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
              </motion.article>

              {/* Tags */}
              <div className="mb-12 pb-8 border-b border-slate-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-slate-400" />
                  {post.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Social Share */}
              <div className="mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-slate-600" />
                    <span className="font-bold text-slate-900">Share this article:</span>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('facebook')}
                      className="gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                    >
                      <Facebook className="w-4 h-4" /> Facebook
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('twitter')}
                      className="gap-2 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200"
                    >
                      <Twitter className="w-4 h-4" /> Twitter
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('linkedin')}
                      className="gap-2 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
                    >
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('whatsapp')}
                      className="gap-2 hover:bg-green-50 hover:text-green-600 hover:border-green-200"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mb-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-start gap-4">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">About the Author</h3>
                    <p className="text-slate-600 text-sm mb-2">{post.author}</p>
                    <p className="text-slate-500 text-sm">
                      Contributing author at Rawalpindi Polytechnic Institute
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Recent Posts */}
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-4 pb-3 border-b border-slate-200">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {BLOG_POSTS.slice(0, 4).map((recentPost) => (
                      <Link
                        key={recentPost.id}
                        to={`/blog/${recentPost.slug}`}
                        className="flex gap-3 group hover:bg-slate-50 p-2 rounded-lg transition-colors"
                      >
                        <img
                          src={recentPost.coverImage}
                          alt={recentPost.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-slate-900 group-hover:text-secondary transition-colors line-clamp-2">
                            {recentPost.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">
                            {new Date(recentPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-4 pb-3 border-b border-slate-200">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {BLOG_CATEGORIES.filter(c => c.id !== 'all').map((cat) => {
                      const count = BLOG_POSTS.filter(p => p.category === cat.id).length;
                      return (
                        <Link
                          key={cat.id}
                          to={`/blog?category=${cat.id}`}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-sm text-slate-700 group-hover:text-secondary font-medium">
                            {cat.label}
                          </span>
                          <Badge variant="secondary" className="bg-slate-200 text-slate-600">
                            {count}
                          </Badge>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Share Card */}
              <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-slate-50 to-slate-100">
                <CardContent className="p-6 text-center">
                  <Share2 className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">Love this article?</h3>
                  <p className="text-sm text-slate-600 mb-4">Share it with your friends and colleagues!</p>
                  <Button onClick={copyLink} variant="outline" className="w-full">
                    Copy Link
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-slate-100 text-slate-600 border-slate-200">
                You Might Also Like
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Related Articles
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore more posts from the {BLOG_CATEGORIES.find(c => c.id === post.category)?.label} category
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, idx) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-secondary text-white border-0">
                          {BLOG_CATEGORIES.find(c => c.id === relatedPost.category)?.label}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {relatedPost.readTime}
                        </span>
                      </div>

                      <h3 className="font-bold text-xl text-slate-900 mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                        {relatedPost.title}
                      </h3>

                      <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-1">
                        {relatedPost.excerpt}
                      </p>

                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" size="sm" className="gap-2 text-secondary hover:text-secondary hover:bg-secondary/10 w-full">
                          Read More <ArrowRight className="w-3 h-3" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Testimonials />
      <CallToAction />
    </main>
  );
};
