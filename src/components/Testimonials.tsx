import { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya & Rahul Sharma',
    role: 'Wedding Couple',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: 'Sagar Studio made our wedding day truly unforgettable! The team captured every precious moment with such artistry.'
  },
  {
    name: 'Anjali & Vikram Patel',
    role: 'Pre-Wedding Shoot',
    image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: 'Our pre-wedding shoot was absolutely magical! The photos are breathtaking and captured our love story perfectly.'
  },
  {
    name: 'Meera & Arjun Reddy',
    role: 'Wedding Photography',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: 'The professionalism and creativity of Sagar Studio is unmatched. Our wedding album is a masterpiece.'
  },
  {
    name: 'Ravi & Kavya Iyer',
    role: 'Engagement & Wedding',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: 'From our engagement to our wedding day, Sagar Studio has been exceptional. Outstanding work!'
  },
  {
    name: 'Sonia & Deepak',
    role: 'Couple Portrait',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: 'The team is incredibly talented and professional. They captured the true essence of our relationship.'
  }
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [isReverse, setIsReverse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsReverse(false); // Scrolling down -> Right to Left
      } else {
        setIsReverse(true); // Scrolling up -> Left to Right
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="flex-shrink-0 w-[320px] md:w-[450px] mx-4">
      <div className="glass-card p-6 md:p-10 rounded-3xl relative h-full flex flex-col whitespace-normal">
        <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/10" />
        
        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gold fill-gold" />
          ))}
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
          "{testimonial.text}"
        </p>

        <div className="flex items-center gap-4 mt-auto">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border border-gold/30"
          />
          <div>
            <h4 className="text-white font-semibold">{testimonial.name}</h4>
            <p className="text-gold/70 text-sm italic">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 md:py-32 bg-dark-secondary relative overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-full text-center opacity-[0.02] select-none pointer-events-none flex justify-center">
        <h2 className="text-[15vw] xl:text-[18rem] font-bold leading-none whitespace-nowrap">REVIEWS</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Client <span className="text-gold">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8" />
        </div>
      </div>

      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Row 1 */}
        <div className="flex overflow-hidden py-4">
          <div 
            className={`flex whitespace-nowrap transition-all duration-300 ${
              isReverse ? 'animate-marquee-reverse' : 'animate-marquee'
            }`}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <TestimonialCard key={i} testimonial={item} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden py-4">
          <div 
            className={`flex whitespace-nowrap transition-all duration-300 ${
              isReverse ? 'animate-marquee' : 'animate-marquee-reverse'
            }`}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <TestimonialCard key={i} testimonial={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
