import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DynamicHero, CallToAction, Testimonials } from '@/components';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BLOG_POSTS, BLOG_CATEGORIES } from './BlogData';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    let posts = BLOG_POSTS;

    // Filter by category
    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        BLOG_CATEGORIES.find(c => c.id === post.category)?.label.toLowerCase().includes(query)
      );
    }

    return posts;
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-white">
      <DynamicHero
        title="Latest News &"
        subtitle="Updates"
        description="Stay informed with the latest announcements, events, achievements, and stories from Rawalpindi Polytechnic Institute."
        badge="RPI Blog"
        backgroundImage="https://picsum.photos/seed/blog-hero/1920/1080"
      />

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-slate-100 text-slate-600 border-slate-200">
              Institute Updates
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Browse Articles
            </h2>
            <p className="text-slate-600 mb-8">
              Filter articles by topic or search to find what interests you most.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search by title, content, tags, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base rounded-xl border-slate-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-secondary hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          {(searchQuery || selectedCategory !== 'all') && (
            <div className="text-center mb-8">
              <p className="text-slate-600">
                Found <span className="font-bold text-secondary">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>
          )}

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.authorAvatar}
                            alt={post.author}
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-xs font-medium text-slate-600">{post.author}</span>
                        </div>

                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="gap-2 text-secondary hover:text-secondary hover:bg-secondary/10">
                            Read More <ArrowRight className="w-3 h-3" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Testimonials />
      <CallToAction />
    </main>
  );
};
