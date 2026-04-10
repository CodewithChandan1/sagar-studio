import { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';

const teamMembers = [
  {
    name: 'DP Tony',
    role: 'Creative Director & Lead Cinematographer',
    image: '/assets/images/sagar.jpg',
    bio: 'With over 25 years of experience, DP Tony leads our creative vision with passion and precision.',
    social: {
      instagram: 'https://www.instagram.com/thesagarstudio/',
      facebook: 'https://www.facebook.com/thesagarstudio/',
      whatsapp: 'https://wa.me/919803200121'
    }
  },
  {
    name: 'Rajesh Kumar',
    role: 'Senior Photographer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Specializes in candid photography and capturing authentic moments with artistic excellence.',
    social: {
      instagram: '#',
      facebook: '#',
      whatsapp: 'https://wa.me/919803200121'
    }
  },
  {
    name: 'Sneha Reddy',
    role: 'Wedding Photographer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Expert in bridal portraits and emotion-driven photography that tells beautiful stories.',
    social: {
      instagram: '#',
      facebook: '#',
      whatsapp: 'https://wa.me/919803200121'
    }
  },
];

export default function Team() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-20 md:py-32 bg-dark-secondary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-gold">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the talented professionals behind Sagar Studio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-dark-tertiary transition-all duration-700 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700"
                />
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 transform transition-transform duration-500">
                  <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-gold font-medium text-sm md:text-base mb-4 tracking-wider uppercase">
                      {member.role}
                    </p>

                    <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                        {member.bio}
                      </p>

                      <div className="flex gap-4">
                        <a
                          href={member.social.instagram}
                          className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-black text-white flex items-center justify-center transition-all duration-300 rounded-lg backdrop-blur-sm"
                          aria-label={`${member.name} Instagram`}
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.facebook}
                          className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-black text-white flex items-center justify-center transition-all duration-300 rounded-lg backdrop-blur-sm"
                          aria-label={`${member.name} Facebook`}
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.whatsapp}
                          className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-black text-white flex items-center justify-center transition-all duration-300 rounded-lg backdrop-blur-sm"
                          aria-label={`${member.name} WhatsApp`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72 1.233 3.4 1.8 4.7 1.8.001 0 .002 0 .003 0 6.551 0 11.888-5.337 11.891-11.893a11.77 11.77 0 00-3.483-8.412" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
