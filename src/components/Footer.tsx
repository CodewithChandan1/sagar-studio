import { Camera, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-6">
              <Camera className="w-8 h-8 text-gold" />
              <span>
                Sagar <span className="text-gold">Studio</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Capturing timeless moments with passion, precision, and artistic excellence since 1996.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/thesagarstudio/"
                className="p-3 bg-white/5 hover:bg-gold text-white hover:text-black transition-all duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/thesagarstudio/"
                className="p-3 bg-white/5 hover:bg-gold text-white hover:text-black transition-all duration-300"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/c/TheSagarStudiojalandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-gold text-white hover:text-black transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Team', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gold group-hover:w-4 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Services</h3>
            <ul className="space-y-3">
              {[
                'Wedding Photography',
                'Cinematic Films',
                'Pre-Wedding Shoots',
                'Baby Photography',
                'Event Coverage',
                'Album Designing'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gold group-hover:w-4 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span>Main Road, Kot Ram Dass, Rail Vihar, Jalandhar, Punjab 144001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span>+91 9803200121</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span>sagarstudio@mail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <p className="text-gray-500 text-sm order-3 lg:order-1">
              &copy; {currentYear} Sagar Studio. All rights reserved.
            </p>
            
            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-gold/50 transition-all duration-500 group shadow-xl order-1 lg:order-2">
              <span className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold">Crafted By</span>
              <div className="w-px h-4 bg-white/10" />
              <a 
                href="https://chandan-me.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold font-black text-sm tracking-wider flex items-center gap-2 hover:text-gold-light transition-all duration-300 transform hover:scale-105"
              >
                CHANDAN KUMAR
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
              </a>
            </div>

            <div className="flex gap-8 text-sm order-2 lg:order-3">
              <a href="#" className="text-gray-500 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
