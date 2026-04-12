import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Video, Camera, Heart, Baby, User, Calendar, BookOpen, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Cinematic Wedding Films',
    externalUrl: 'https://www.youtube.com/c/TheSagarStudiojalandhar',
    description: 'Capture your love story with cinematic excellence and artistic storytelling.',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Camera,
    title: 'Candid Photography',
    externalUrl: 'https://www.instagram.com/thesagarstudio/',
    description: 'Natural, unposed moments that capture genuine emotions and authentic expressions.',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Heart,
    title: 'Pre-Wedding Shoots',
    slug: 'pre-wedding',
    description: 'Romantic and creative pre-wedding photography at stunning locations.',
    image: '/assets/images/couple/couple1.jpeg'
  },
  {
    icon: Baby,
    title: 'Newborn & Baby Photography',
    slug: 'baby',
    description: 'Tender and adorable moments of your little one\'s early days.',
    image: 'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: User,
    title: 'Studio Portraits',
    slug: 'portraits',
    description: 'Professional studio portraits with elegant lighting and premium quality.',
    image: '/assets/images/studio/studio5.jpeg'
  },
  {
    icon: Calendar,
    title: 'Event Coverage',
    externalUrl: 'https://www.facebook.com/thesagarstudio/',
    description: 'Complete coverage of corporate events, celebrations, and special occasions.',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 md:py-32 bg-dark relative overflow-hidden"
    >
      <div className="absolute top-20 -left-20 opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[20rem] font-bold leading-none">SERVICES</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">What We Offer</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-gold">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting visual masterpieces through expert lenses and creative vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/5">
          {services.map((service, index) => {
            const isExternal = !!service.externalUrl;

            const cardContent = (
              <>
                <div className="absolute top-4 right-4 z-0">
                  <span className="service-number font-bold select-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-all duration-700 transform scale-110 group-hover:scale-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-dark/60" />
                </div>

                <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                  <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500 icon-glow">
                      <service.icon className="w-8 h-8 text-gold group-hover:text-black transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed max-w-sm group-hover:text-gray-200 transition-colors duration-500">
                      {service.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-sm font-bold uppercase tracking-widest">
                        {isExternal ? 'View Channel' : 'View Gallery'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="h-1 w-0 bg-gold group-hover:w-full transition-all duration-700 absolute bottom-0 left-0" />
                </div>
              </>
            );

            const commonClasses = `group relative min-h-[450px] border-r border-b border-white/5 overflow-hidden transition-all duration-1000 block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`;

            if (isExternal) {
              return (
                <a
                  key={index}
                  href={service.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClasses}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link
                key={index}
                to={`/service/${service.slug}`}
                className={commonClasses}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
