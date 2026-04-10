import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Wedding Ceremony',
    span: 'md:col-span-6 md:row-span-2'
  },
  {
    url: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Couple Portrait',
    span: 'md:col-span-3 md:row-span-1'
  },
  {
    url: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Bride & Groom',
    span: 'md:col-span-3 md:row-span-1'
  },
  {
    type: 'feature',
    title: '500+',
    subtitle: 'Weddings Captured',
    span: 'md:col-span-3 md:row-span-1',
    bgColor: 'bg-gold'
  },
  {
    url: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Reception',
    span: 'md:col-span-3 md:row-span-2'
  },
  {
    url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Ring Exchange',
    span: 'md:col-span-6 md:row-span-2'
  },
  {
    url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'First Dance',
    span: 'md:col-span-3 md:row-span-1'
  },
  {
    type: 'feature',
    title: 'Luxury',
    subtitle: 'Experience',
    span: 'md:col-span-3 md:row-span-1',
    bgColor: 'bg-dark-tertiary'
  }
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const nextImage = () => {
    if (selectedImage !== null) {
      // Find next item that has a URL
      let next = (selectedImage + 1) % galleryImages.length;
      while (!galleryImages[next].url) {
        next = (next + 1) % galleryImages.length;
      }
      setSelectedImage(next);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      // Find prev item that has a URL
      let prev = (selectedImage - 1 + galleryImages.length) % galleryImages.length;
      while (!galleryImages[prev].url) {
        prev = (prev - 1 + galleryImages.length) % galleryImages.length;
      }
      setSelectedImage(prev);
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
  }, [selectedImage]);

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
        className="py-20 md:py-32 bg-dark-secondary relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5  blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5  blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Our Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Bento <span className="text-gold">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Experience the art of cinematic storytelling through our curated collection of moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[240px]">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className={`group relative  overflow-hidden cursor-pointer transition-all duration-1000 ${item.span
                  } ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-20 scale-95'
                  } ${item.type === 'feature' ? item.bgColor : 'bg-dark-tertiary'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => item.url && setSelectedImage(index)}
              >
                {item.type === 'feature' ? (
                  <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center">
                    <h3 className={`text-5xl font-bold mb-2 ${item.bgColor === 'bg-gold' ? 'text-black' : 'text-gold'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-lg font-medium ${item.bgColor === 'bg-gold' ? 'text-black/70' : 'text-gray-400'}`}>
                      {item.subtitle}
                    </p>
                  </div>
                ) : (
                  <>
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white font-bold text-2xl mb-1">{item.title}</p>
                        <div className="w-12 h-1 bg-gold " />
                      </div>
                    </div>
                  </>
                )}

                {/* Subtle border overlay */}
                <div className="absolute inset-0 border border-white/10  pointer-events-none group-hover:border-gold/30 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-gold/90 text-white transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-gold/90 text-white transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-xl font-semibold text-center">
                {galleryImages[selectedImage].title}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
