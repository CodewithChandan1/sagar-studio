import { useState, useEffect } from 'react';
import { Menu, X, Camera, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Team', href: '#team' },
  // { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="flex items-center gap-2 text-2xl font-bold text-white group"
            >
              <Camera className="w-8 h-8 text-gold group-hover:rotate-12 transition-transform duration-300" />
              <span>
                Sagar <span className="text-gold">Studio</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gold transition-colors duration-300 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <a
                href="tel:+919803200121"
                className="flex items-center gap-2 px-6 py-2.5 bg-gold text-black font-bold rounded-full hover:bg-gold-light transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                +91 9803200121
              </a>
            </div>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className="relative h-full flex flex-col items-center justify-center gap-6 md:gap-8 p-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-3xl font-bold text-white hover:text-gold transition-all duration-300 ${isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+919803200121"
            className={`mt-6 flex items-center gap-2 px-8 py-4 bg-gold text-black font-bold rounded-full transition-all duration-300 ${isMobileMenuOpen
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-90'
              }`}
            style={{ transitionDelay: `${navLinks.length * 50}ms` }}
          >
            <Phone className="w-5 h-5" />
            +91 9803200121
          </a>
        </div>
      </div>
    </>
  );
}
