import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Instagram, Camera, Heart, Youtube, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface GalleryData {
  title: string;
  description: string;
  images: string[];
}

const galleries: Record<string, GalleryData> = {
  baby: {
    title: 'Newborn & Baby Photography',
    description: 'Tender and adorable moments of your little one\'s early days, captured with artistic precision and cinematic warmth.',
    images: [
      '/assets/images/baby/baby.jpeg',
      '/assets/images/baby/baby1.jpeg',
      '/assets/images/baby/baby2.jpeg',
      '/assets/images/baby/baby3.jpeg',
      '/assets/images/baby/baby4.jpeg',
      '/assets/images/baby/baby5.jpeg',
    ]
  },
  portraits: {
    title: 'Studio Portraits',
    description: 'Professional studio session crafted with elegant lighting, timeless poses, and premium cinematic quality.',
    images: [
      '/assets/images/studio/studio1.jpeg',
      '/assets/images/studio/studio2.jpeg',
      '/assets/images/studio/studio3.jpeg',
      '/assets/images/studio/studio4.jpeg',
      '/assets/images/studio/studio5.jpeg',
    ]
  },
  'pre-wedding': {
    title: 'Pre-Wedding Shoots',
    description: 'Romantic and creative pre-wedding photography at stunning locations, capturing the unique bond between couples.',
    images: [
      '/assets/images/couple/couple1.jpeg',
      '/assets/images/couple/couple2.jpeg',
      '/assets/images/couple/couple3.jpeg',
      '/assets/images/couple/couple4.jpeg',
      '/assets/images/couple/couple5.jpeg',
    ]
  }
};

export default function ServiceGallery() {
  const { slug } = useParams<{ slug: string }>();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const gallery = slug ? galleries[slug] : null;

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const nextImage = () => {
    if (selectedImage !== null && gallery) {
      setSelectedImage((selectedImage + 1) % gallery.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && gallery) {
      setSelectedImage((selectedImage - 1 + gallery.images.length) % gallery.images.length);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') setSelectedImage(null);
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, gallery]);

  if (!gallery) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-4xl font-bold mb-4 text-gold">Gallery Not Found</h2>
        <Link to="/" className="text-gray-400 hover:text-gold flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark pt-24 md:pt-32 pb-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light mb-8 group transition-all"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Studio</span>
        </Link>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
            {gallery.title.split(' & ').map((part, i) => (
              <span key={i} className={i % 2 !== 0 ? 'text-gold' : ''}>
                {part}{i === 0 && gallery.title.includes('&') ? ' & ' : ''}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light italic">
            "{gallery.description}"
          </p>
        </div>
      </div>

      {/* Cinematic Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`group relative overflow-hidden rounded-2xl bg-dark-tertiary break-inside-avoid shadow-2xl transition-all duration-1000 hover:shadow-gold/10 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={img}
                alt={`${gallery.title} ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <div className="flex items-center gap-4 text-white/50 text-xs font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Camera className="w-3 h-3 text-gold" /> View Full</span>
                  <span className="flex items-center gap-2"><Heart className="w-3 h-3 text-gold" /> Experience</span>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none group-hover:border-gold/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-gold transition-colors z-[60]"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-gold/90 text-white transition-all duration-300 rounded-2xl backdrop-blur-md border border-white/10 z-[60]"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-gold/90 text-white transition-all duration-300 rounded-2xl backdrop-blur-md border border-white/10 z-[60]"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="max-w-7xl max-h-[85vh] relative group p-2 md:p-4 rotate-0 transition-transform duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery.images[selectedImage]}
              alt={`${gallery.title} Full`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_50px_rgba(212,175,55,0.1)]"
            />
            <div className="absolute top-6 left-6 text-white text-[10px] font-bold uppercase tracking-[0.3em] bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              {selectedImage + 1} / {gallery.images.length}
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center">
        <div className="p-12 md:p-20 rounded-[2.5rem] bg-dark-tertiary border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Capture Your Story</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
              Let's create timeless memories that you and your family will cherish forever.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/#contact"
                className="px-10 py-5 bg-gold text-black font-bold uppercase rounded-full hover:bg-gold-light transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                Book Your Session
              </Link>
              <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                <a href="https://www.instagram.com/thesagarstudio/" aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-gold/30 transition-all group/icon">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover/icon:text-gold" />
                </a>
                <a href="https://www.youtube.com/c/TheSagarStudiojalandhar" target="_blank"
                  rel="noopener noreferrer" aria-label="YouTube" className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-gold/30 transition-all group/icon">
                  <Youtube className="w-5 h-5 text-gray-400 group-hover/icon:text-gold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(4px); }
        }
      `}</style>
    </div>
  );
}
