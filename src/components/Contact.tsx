import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Updated form state to match user requirement
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // Vite configuration for environment variables
  const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const showToast = (message: string, type: string) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 4000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!service_id || !template_id || !public_key) {
      console.error("Missing EmailJS env variables. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.");
      showToast("Configuration error. Please contact support.", "error");
      return;
    }
    
    setIsLoading(true);
    const time = new Date().toLocaleString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      message: formData.message,
      title: `New Contact from ${formData.name}`,
      time,
    };

    emailjs.send(service_id, template_id, templateParams, public_key)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        showToast("Message sent successfully! 🎉", "success");
        setFormData({ name: "", email: "", contact: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        showToast("Failed to send message. Please try again.", "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if(e.isIntersecting) {
            e.target.classList.add("visible");
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-32 bg-dark relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 reveal transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
          {/* Contact Information */}
          <div className="reveal space-y-8 transition-all duration-1000 delay-200">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group reveal">
                <div className="p-4 bg-gold/10 group-hover:bg-gold transition-all duration-300 rounded-full">
                  <Phone className="w-6 h-6 text-gold group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-400">+91 9803200121</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group reveal">
                <div className="p-4 bg-gold/10 group-hover:bg-gold transition-all duration-300 rounded-full">
                  <Mail className="w-6 h-6 text-gold group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">sagarstudio@mail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group reveal">
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

            <div className="aspect-video bg-dark-secondary overflow-hidden border border-white/10 p-2 reveal rounded-xl shadow-2xl">
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

          {/* Contact Form */}
          <div className="reveal transition-all duration-1000 delay-400">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="reveal">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-all duration-300 rounded-lg hover:border-gray-600"
                />
              </div>

              <div className="reveal">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-all duration-300 rounded-lg hover:border-gray-600"
                />
              </div>

              <div className="reveal">
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone Number"
                  className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-all duration-300 rounded-lg hover:border-gray-600"
                />
              </div>

              <div className="reveal">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-6 py-4 bg-dark-secondary border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-all duration-300 resize-none rounded-lg hover:border-gray-600"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-5 bg-gold text-black font-bold uppercase tracking-widest rounded-lg hover:bg-[#F4E5C2] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl hover:shadow-gold/20"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div 
        className={`fixed top-8 right-8 z-[100] transition-all duration-500 transform ${
          toast.show ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[120%] opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border ${
          toast.type === 'success' 
            ? 'bg-green-500/10 border-green-500/50 text-green-400' 
            : 'bg-red-500/10 border-red-500/50 text-red-400'
        }`}>
          {toast.type === 'success' ? (
            <CheckCircle className="w-6 h-6 animate-bounce" />
          ) : (
            <AlertCircle className="w-6 h-6 animate-pulse" />
          )}
          <span className="font-medium whitespace-nowrap">{toast.message}</span>
          <button 
            onClick={() => setToast({ ...toast, show: false })}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
