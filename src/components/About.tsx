import { useEffect, useRef, useState } from 'react';
import { Award, Camera, Users } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      id="about"
      className="py-20 md:py-32 bg-dark-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-gold">Sagar Studio</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gold/20 transform group-hover:scale-105 transition-transform duration-500" />
              <img
                src="https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sagar Studio Creative Photography Team - Lead by DP Tony"
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Since <span className="text-gold font-semibold">1996</span>, Sagar Studio has been redefining wedding photography with passion, precision, and artistic excellence. Officially established in <span className="text-gold font-semibold">1998</span>, the studio has grown into a trusted name in professional photography and cinematic filmmaking under the creative leadership of <span className="text-gold font-semibold">DP Tony</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              We specialize in grand Indian weddings, cinematic wedding films, candid photography, pre-wedding shoots, newborn and baby photography, elegant studio portraits, family portraits, event coverage, and premium album designing.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Our approach combines timeless traditions with modern storytelling, ensuring that every frame reflects emotion, beauty, and authenticity. Backed by a skilled and dedicated team, we are committed to delivering an unforgettable visual experience, transforming once-in-a-lifetime moments into timeless memories that can be cherished forever.
            </p>
          </div>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { icon: Award, title: '28+ Years', subtitle: 'Excellence in Photography' },
            { icon: Camera, title: '5000+', subtitle: 'Captured Moments' },
            { icon: Users, title: '1000+', subtitle: 'Happy Clients' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-dark-tertiary p-8 text-center group hover:bg-gold/10 transition-all duration-500 border border-transparent hover:border-gold"
            >
              <stat.icon className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-3xl font-bold text-white mb-2">{stat.title}</h3>
              <p className="text-gray-400">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
