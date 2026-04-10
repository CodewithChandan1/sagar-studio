import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerImages = [
  'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden touch-pan-y" 
      id="home"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[7000ms] ease-out scale-105"
            style={{
              backgroundImage: `url(${image})`,
              animation: index === currentSlide ? 'kenBurns 7s ease-out forwards' : 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <div className="max-w-5xl space-y-10 md:space-y-12 animate-fadeInUp">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              Capturing Moments,<br />
              <span className="text-gold">Creating Timeless Stories</span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed px-4">
              Luxury Wedding & Cinematic Photography
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8 w-full max-w-sm mx-auto sm:max-w-none">
            <a
              href="#gallery"
              className="w-full sm:w-auto px-8 py-4 bg-gold text-black font-bold rounded-none hover:bg-[#F4E5C2] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 border-2 border-gold text-gold font-bold rounded-none hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-gold/90 text-white transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-gold/90 text-white transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 1000);
              }
            }}
            className={`h-1.5 transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-gold'
                : 'w-8 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes kenBurns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </section>
  );
}
