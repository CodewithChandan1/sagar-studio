import { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'DP Tony',
    role: 'Creative Director & Lead Cinematographer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'With over 25 years of experience, DP Tony leads our creative vision with passion and precision.',
    social: {
      instagram: '#',
      facebook: '#',
      linkedin: '#'
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
      linkedin: '#'
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
      linkedin: '#'
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm mb-3">{member.role}</p>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {member.bio}
                  </p>

                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <a
                      href={member.social.instagram}
                      className="p-2 bg-white/10 hover:bg-gold hover:text-black text-white transition-all duration-300"
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.facebook}
                      className="p-2 bg-white/10 hover:bg-gold hover:text-black text-white transition-all duration-300"
                      aria-label={`${member.name} Facebook`}
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-white/10 hover:bg-gold hover:text-black text-white transition-all duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
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
