import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Mail, Linkedin, Twitter, ArrowLeft, BookOpen, Users } from 'lucide-react';
import { CallToAction, Testimonials, DynamicHero } from '@/components';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BLOG_AUTHORS, BLOG_POSTS, BLOG_CATEGORIES, getPostsByAuthor } from './BlogData';

export const AuthorProfile = () => {
  const { authorId } = useParams();
  const author = BLOG_AUTHORS.find(a => a.id === authorId);

  if (!author) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Author Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const authorPosts = getPostsByAuthor(author.id);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

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
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Author Avatar */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-secondary to-green-400 rounded-full blur-lg opacity-50" />
              <img
                src={author.avatar}
                alt={author.name}
                className="relative w-40 h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>

            {/* Author Info */}
            <div className="text-center md:text-left">
              <Badge className="mb-3 bg-secondary/20 text-secondary border-secondary/30">
                {author.department}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {author.name}
              </h1>
              <p className="text-xl text-slate-300 mb-4">
                {author.designation}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{authorPosts.length} Article{authorPosts.length !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{author.department}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-3 mt-6">
                {author.email && (
                  <a href={`mailto:${author.email}`}>
                    <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10 gap-2">
                      <Mail className="w-4 h-4" /> Email
                    </Button>
                  </a>
                )}
                {author.linkedin && (
                  <a href={author.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10 gap-2">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </Button>
                  </a>
                )}
                {author.twitter && (
                  <a href={author.twitter} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10 gap-2">
                      <Twitter className="w-4 h-4" /> Twitter
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {author.bio}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Author's Posts */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-slate-100 text-slate-600 border-slate-200">
              Published Articles
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Articles by {author.name}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore all the insights and updates shared by this author.
            </p>
          </div>

          {authorPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-secondary text-white border-0">
                          {BLOG_CATEGORIES.find(c => c.id === post.category)?.label}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-bold text-xl text-slate-900 mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="gap-2 text-secondary hover:text-secondary hover:bg-secondary/10 w-full">
                          Read More <ArrowRight className="w-3 h-3" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600">No articles published yet.</p>
            </div>
          )}
        </div>
      </section>

      <Testimonials />
      <CallToAction />
    </main>
  );
};
