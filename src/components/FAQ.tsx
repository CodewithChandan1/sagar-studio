import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do you travel for weddings outside of Jalandhar?",
    answer: "Absolutely! While we are based in Jalandhar, we love destination weddings and travel all over India and abroad to capture love stories. Travel and accommodation are typically handled by the client."
  },
  {
    question: "What is your photography style?",
    answer: "We specialize in high-end cinematic storytelling—a perfect blend of candid emotional moments (candid) and artistic, grand-scale cinematography that feels like a movie."
  },
  {
    question: "How long does it take to receive our wedding photos?",
    answer: "We believe in quality. You'll receive your highlights within 2 weeks to share with family, and the full high-resolution edited gallery and cinematic films within 4-6 weeks."
  },
  {
    question: "Do you offer cinematic videography/films?",
    answer: "Yes, we are known for our cinematic films. Our team includes specialist cinematographers who use the latest gear, including drones and 4K cameras, to create stunning movie-like highlights."
  },
  {
    question: "How do we book our wedding date with Sagar Studio?",
    answer: "Simply reach out through our contact form or WhatsApp."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gold/5 blur-[100px] -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-gold mb-4">
            <HelpCircle className="w-5 h-5" />
            <span className="uppercase tracking-[0.3em] text-sm font-bold">Inquiry</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Common <span className="text-gold">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need to know about our process, delivery, and how we capture your most precious moments.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 border ${activeIndex === index ? 'border-gold/50 bg-white/5' : 'border-white/5 hover:border-gold/20'
                }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${activeIndex === index ? 'text-gold' : 'text-white group-hover:text-gold/80'
                  }`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-gold text-black rotate-180' : 'bg-white/5 text-gold'
                  }`}>
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out px-6 overflow-hidden ${activeIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="h-px w-full bg-white/10 mb-6" />
                <p className="text-gray-300 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6 italic">Still have more questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black font-black uppercase tracking-widest hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
