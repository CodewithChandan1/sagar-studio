import { useEffect, useRef, useState } from 'react';
import { Youtube, Instagram, Facebook, MessageCircle, User } from 'lucide-react';

const socialPosts = [
  {
    platform: 'youtube',
    type: 'embed',
    embedId: 'lHxDTs7bBsE',
    title: 'Cinematic Film',
    span: 'md:col-span-8 md:row-span-2'
  },
  {
    platform: 'instagram',
    type: 'embed',
    postId: 'DJo2FglPfKu',
    span: 'md:col-span-4 md:row-span-2'
  },
  {
    platform: 'instagram',
    type: 'embed',
    postId: 'DId1eFDPe8w',
    span: 'md:col-span-4 md:row-span-2'
  },
  {
    platform: 'instagram',
    type: 'embed',
    postId: 'C_kGK3cSsfM',
    title: 'Wedding Highlights',
    span: 'md:col-span-4 md:row-span-2'
  },
  {
    platform: 'instagram',
    type: 'embed',
    postId: 'C_iiWuRy1UK',
    span: 'md:col-span-4 md:row-span-2'
  },
  {
    platform: 'profile',
    type: 'person',
    name: 'DP Tony',
    role: 'Creative Director & Lead Cinematographer',
    image: '/assets/images/sagar.jpg',
    bio: 'With over 25 years of experience, DP Tony leads our creative vision with passion and precision.',
    link: 'https://wa.me/919803200121',
    social: {
      instagram: 'https://www.instagram.com/thesagarstudio/',
      facebook: 'https://www.facebook.com/thesagarstudio/',
      youtube: 'https://www.youtube.com/c/TheSagarStudiojalandhar',
      whatsapp: 'https://wa.me/919803200121'
    },
    span: 'md:col-span-12 md:row-span-1'
  }
];

export default function SocialFeed() {
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

  // Instagram Script Loader
  useEffect(() => {
    if (isVisible) {
      const script = document.createElement('script');
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // @ts-ignore
        if (window.instgrm) {
          // @ts-ignore
          window.instgrm.Embeds.process();
        }
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="social"
      className="py-20 md:py-32 bg-dark-secondary relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="absolute top-20 left-0 w-full text-center opacity-[0.02] select-none pointer-events-none flex justify-center">
        <h2 className="text-[15vw] xl:text-[20rem] font-bold leading-none whitespace-nowrap">SOCIAL</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-gold/50" />
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs md:text-sm">Stay Connected</span>
            <div className="h-[1px] w-8 md:w-12 bg-gold/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            The Social <span className="text-gold">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light italic">
            Witness our latest creative journey through the lens of our social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          {socialPosts.map((post, index) => {
            if (post.platform === 'profile') {
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden bg-dark-tertiary  flex flex-col md:flex-row items-center border border-white/5 transition-all duration-1000 ${post.span} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-full md:w-1/3 h-full relative group min-h-[400px]">
                    <img
                      src={post.image}
                      alt={post.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gold/10 opacity-40 group-hover:opacity-0 transition-opacity duration-700" />
                  </div>
                  <div className="flex-1 p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <User className="w-5 h-5 text-gold" />
                      <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em]">Featured Artist</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{post.name}</h3>
                    <p className="text-gold text-sm font-medium mb-6 tracking-wide uppercase">{post.role}</p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 italic">"{post.bio}"</p>

                    <div className="flex flex-wrap items-center gap-6">
                      <a
                        href={post.social?.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-3 bg-gold text-black font-bold text-sm uppercase rounded-full hover:bg-gold-light transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                      >
                        Connect
                        <MessageCircle className="w-4 h-4" />
                      </a>

                      <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                        <a
                          href={post.social?.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 group/icon"
                        >
                          <Instagram className="w-5 h-5 text-gray-400 group-hover/icon:text-gold transition-colors" />
                        </a>
                        <a
                          href={post.social?.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 group/icon"
                        >
                          <Youtube className="w-5 h-5 text-gray-400 group-hover/icon:text-gold transition-colors" />
                        </a>
                        <a
                          href={post.social?.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 group/icon"
                        >
                          <Facebook className="w-5 h-5 text-gray-400 group-hover/icon:text-gold transition-colors" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (post.type === 'embed') {
              return (
                <div
                  key={index}
                  className={`bg-white overflow-hidden border border-white/5 transition-all duration-1000 ${post.span} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {post.platform === 'youtube' ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-white">
                      <div className="w-full aspect-video relative">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                          src={`https://www.youtube.com/embed/${post.embedId}?si=3Xfec2683QD1FA02`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full overflow-y-auto custom-scrollbar bg-white/5 p-2">
                      <blockquote
                        className="instagram-media w-full"
                        data-instgrm-captioned
                        data-instgrm-permalink={`https://www.instagram.com/reel/${post.postId}/`}
                        data-instgrm-version="14"
                        style={{ margin: 0, padding: 0, width: '100%' }}
                      />
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
