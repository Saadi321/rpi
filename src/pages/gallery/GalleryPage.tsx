import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { DynamicHero, CallToAction, Testimonials } from '@/components';
import { Badge } from '@/components/ui/badge';

interface GalleryImage {
  id: string;
  src: string;
  category: string;
  title: string;
}

const CATEGORIES = [
  { id: 'all', label: 'All Images' },
  { id: 'labs', label: 'Labs & Workshops' },
  { id: 'campus', label: 'Campus Life' },
  { id: 'events', label: 'Events & Activities' },
  { id: 'facilities', label: 'Facilities' },
];

const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', src: 'https://picsum.photos/seed/gallery1/800/600', category: 'labs', title: 'Electronics Lab' },
  { id: '2', src: 'https://picsum.photos/seed/gallery2/800/600', category: 'campus', title: 'Main Campus Building' },
  { id: '3', src: 'https://picsum.photos/seed/gallery3/800/600', category: 'events', title: 'Annual Sports Day' },
  { id: '4', src: 'https://picsum.photos/seed/gallery4/800/600', category: 'facilities', title: 'Digital Library' },
  { id: '5', src: 'https://picsum.photos/seed/gallery5/800/600', category: 'labs', title: 'Civil Engineering Workshop' },
  { id: '6', src: 'https://picsum.photos/seed/gallery6/800/600', category: 'campus', title: 'Students Common Area' },
  { id: '7', src: 'https://picsum.photos/seed/gallery7/800/600', category: 'events', title: 'Technical Exhibition' },
  { id: '8', src: 'https://picsum.photos/seed/gallery8/800/600', category: 'facilities', title: 'Computer Lab' },
  { id: '9', src: 'https://picsum.photos/seed/gallery9/800/600', category: 'labs', title: 'Electrical Lab' },
  { id: '10', src: 'https://picsum.photos/seed/gallery10/800/600', category: 'campus', title: 'Campus Green Area' },
  { id: '11', src: 'https://picsum.photos/seed/gallery11/800/600', category: 'events', title: 'Convocation Ceremony' },
  { id: '12', src: 'https://picsum.photos/seed/gallery12/800/600', category: 'facilities', title: 'Auditorium' },
];

export const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    const index = filteredImages.findIndex(img => img.id === image.id);
    setCurrentIndex(index);
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIdx = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIdx);
    setLightboxImage(filteredImages[nextIdx]);
  };

  const prevImage = () => {
    const prevIdx = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIdx);
    setLightboxImage(filteredImages[prevIdx]);
  };

  return (
    <main className="min-h-screen bg-white">
      <DynamicHero
        title="Campus"
        subtitle="Gallery"
        description="Explore our state-of-the-art facilities, vibrant campus life, and memorable moments captured through photos."
        badge="Visual Tour"
        backgroundImage="https://picsum.photos/seed/gallery-hero/1920/1080"
      />

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-slate-100 text-slate-600 border-slate-200">
              Photo Gallery
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-slate-600">
              Filter images to explore different aspects of RPI campus.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
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

          {/* Gallery Grid */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-white text-lg">{image.title}</h3>
                    <p className="text-xs text-slate-200 uppercase tracking-wide">{CATEGORIES.find(c => c.id === image.category)?.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white hover:text-secondary transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white hover:text-secondary transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-2xl font-bold">{lightboxImage.title}</h3>
                <p className="text-slate-300 text-sm mt-1">
                  {currentIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Testimonials />
      <CallToAction />
    </main>
  );
};
