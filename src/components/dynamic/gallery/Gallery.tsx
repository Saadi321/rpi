import { Video, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GALLERY_IMAGES } from './GalleryData';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Campus Gallery</h2>
            <p className="text-slate-600">A glimpse into life at Rawalpindi Polytechnic Institute.</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Video className="w-4 h-4" /> Watch Campus Tour
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">
            <img 
              src={GALLERY_IMAGES[0]} 
              alt="Campus Main" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 group-hover:scale-110 transition-transform">
                <PlayCircle className="w-10 h-10 text-white" />
              </div>
              <span className="absolute bottom-6 left-6 text-white font-bold text-xl">360° Virtual Tour</span>
            </div>
          </div>

          {GALLERY_IMAGES.slice(1).map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-2xl">
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
