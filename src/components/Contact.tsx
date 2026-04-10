import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitMessage('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-32 bg-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss your photography needs and create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="space-y-4 mb-4">
              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-gold/10 group-hover:bg-gold transition-all duration-300 rounded-full">
                  <Phone className="w-6 h-6 text-gold group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-400">+91 9803200121</p>
                  {/* <p className="text-gray-400">+91 98765 43211</p> */}
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-gold/10 group-hover:bg-gold transition-all duration-300 rounded-full">
                  <Mail className="w-6 h-6 text-gold group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">sagarstudio@mail.com</p>
                  {/* <p className="text-gray-400">bookings@sagarstudio.com</p> */}
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-gold/10 group-hover:bg-gold transition-all duration-300 rounded-full">
                  <MapPin className="w-6 h-6 text-gold group-hover:text-black transition-colors duration-300 " />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-gray-400">
                    Main Road, Kot Ram Dass, Rail Vihar, Jalandhar, Punjab 144001
                  </p>
                </div>
              </div>
            </div>

            <div className="aspect-video bg-dark-secondary overflow-hidden  border border-white/10 p-6 m-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.1866945121783!2d75.61395767581706!3d31.326216774303425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a26427adc13%3A0x16121d49ed5df5c5!2sSagar%20Studio!5e0!3m2!1sen!2sin!4v1775811213436!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sagar Studio Location"
              />
            </div>


          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-all duration-300"
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-all duration-300"
                />
              </div>

              <div className="group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone"
                  className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-all duration-300"
                />
              </div>

              <div className="group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gold text-black font-semibold hover:bg-[#F4E5C2] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

              {submitMessage && (
                <div className="p-4 bg-green-600/20 border border-green-600 text-green-400 text-center animate-fadeIn">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
