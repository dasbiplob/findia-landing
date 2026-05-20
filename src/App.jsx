import React, { useState, useEffect } from 'react';
import { 
  Check,
  Search,
  MoreHorizontal,
  ExternalLink,
  Plus,
  Minus,
  ArrowUpRight,
  Zap,
  TrendingUp,
  Cpu
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const CAL_LINK = "https://cal.com/findia-consulting-tlkuij/30min";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const greenBtn = "bg-[#4ade80] hover:bg-[#3be276] text-black font-bold transition-all rounded-full active:scale-95";

  const openBooking = () => {
    window.open(CAL_LINK, '_blank');
  };

  const faqs = [
    {
      question: "What is Agentic Process Automation?",
      answer: "Unlike traditional automation that follows rigid rules, Agentic Automation uses AI agents that can think, adapt, and make decisions. This allows us to automate complex workflows like lead research, personalized outreach, and customer support that previously required human intervention."
    },
    {
      question: "How long does a typical project take?",
      answer: "A high-converting landing page usually takes 1-2 weeks. Full system integrations involving AI agents and automation typically span 3-5 weeks depending on complexity. We prioritize quality and conversion over rushing."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes. After the initial build, we offer optimization and maintenance packages to ensure your AI agents stay updated with the latest models and your conversion rates continue to grow."
    },
    {
      question: "I already have a website. Can you help?",
      answer: "Absolutely. We often work with businesses to layer automation and AI onto existing platforms, or we can perform a full redesign if your current site isn't converting traffic into revenue effectively."
    }
  ];

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' }
  ];

  // Verified Instagram Rosette Badge SVG
  const InstagramVerifiedBadge = ({ className = "w-5 h-5" }) => (
    <svg className={`${className} inline-block select-none shrink-0 align-middle`} viewBox="0 0 24 24" fill="none">
      <path d="M22.23 11.23l-1.92-1.93.3-2.7a1.64 1.64 0 0 0-1.46-1.81l-2.7-.3-1.93-1.92a1.64 1.64 0 0 0-2.3 0l-1.93 1.92-2.7.3A1.64 1.64 0 0 0 5.7 6.6l.3 2.7-1.92 1.93a1.64 1.64 0 0 0 0 2.3l1.92 1.93-.3 2.7a1.64 1.64 0 0 0 1.46 1.81l2.7.3 1.93 1.92a1.64 1.64 0 0 0 2.3 0l1.93-1.92 2.7-.3a1.64 1.64 0 0 0 1.46-1.81l-.3-2.7 1.92-1.93a1.64 1.64 0 0 0 0-2.3z" fill="#0095F6" />
      <path d="M9.83 15.73l-3.3-3.3 1.4-1.4 1.9 1.9 4.9-4.9 1.4 1.4-6.3 6.3z" fill="white" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#4ade80]/30 selection:text-[#4ade80] font-sans antialiased scroll-smooth">
      <style>{`
        @keyframes aurora {
          0% { transform: translate(-10%, -10%) rotate(0deg); }
          50% { transform: translate(10%, 5%) rotate(180deg); }
          100% { transform: translate(-10%, -10%) rotate(360deg); }
        }
        .aurora-bg {
          filter: blur(100px);
          opacity: 0.4;
          animation: aurora 20s infinite linear;
        }
      `}</style>
      
      {/* HEADER */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-4xl px-6 py-3 rounded-full border border-white/10 flex justify-between items-center ${isScrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-black/40'}`}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#4ade80] rounded-lg flex items-center justify-center">
            <Search className="w-4 h-4 text-black stroke-[3px]" />
          </div>
          <span className="font-bold tracking-tighter text-xl">Findia<span className="text-[#4ade80]">.</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-white transition-colors">{item.name}</a>
          ))}
        </div>

        <button 
          onClick={openBooking}
          className={`${greenBtn} px-5 py-2 text-xs`}
        >
          Book an Intro Call
        </button>
      </nav>

      {/* HERO SECTION WITH AURORA ANIMATION */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Aurora Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="aurora-bg absolute -top-1/2 -left-1/2 w-full h-full bg-[#4ade80]/20 rounded-full"></div>
          <div className="aurora-bg absolute -bottom-1/2 -right-1/2 w-full h-full bg-emerald-900/30 rounded-full" style={{ animationDelay: '-5s', animationDirection: 'reverse' }}></div>
          <div className="aurora-bg absolute top-1/4 left-1/4 w-[60%] h-[60%] bg-[#4ade80]/10 rounded-full" style={{ animationDelay: '-10s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-left relative z-10">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.05] max-w-5xl">
            We help businesses make more <br /> revenue with <span className="text-[#4ade80] relative">
              Findia-led AI Automation strategy
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4ade80]/30 blur-sm"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            We design and build websites, landing pages, and marketing assets that drive sales. Now powered by Agentic Process Automation for maximum efficiency.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-20">
            <button onClick={openBooking} className={`${greenBtn} px-8 py-4 text-sm flex items-center gap-2 shadow-[0_0_30px_rgba(74,222,128,0.2)]`}>
              Book an Intro Call
            </button>
          </div>

          {/* WORK IMPACT HIGHLIGHTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-[#4ade80]" />
                <span className="text-white font-bold tracking-tight">Revenue-Focused Design</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                Every pixel is optimized to convert cold traffic into high-intent leads and paid customers.
              </p>
            </div>
            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="w-5 h-5 text-[#4ade80]" />
                <span className="text-white font-bold tracking-tight">Agentic AI Systems</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                Autonomous agents that handle your research, outreach, and ops while you sleep.
              </p>
            </div>
            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-[#4ade80]" />
                <span className="text-white font-bold tracking-tight">Operational Speed</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                Eliminate bottlenecks and manual labor with custom-built Findia-led automation workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-20">Services</h2>
          
          <div className="space-y-0">
            {[
              { 
                label: "Website & Landing Page", 
                title: "Turn your website into a 24/7 sales machine", 
                desc: "Stop bleeding money on ads that lead nowhere. We design sites that convert cold traffic into booked calls without you lifting a finger." 
              },
              { 
                label: "Agentic Automation", 
                title: "Scale your operations with autonomous AI agents", 
                desc: "Remove the human bottleneck. We build agentic systems that handle lead research, outreach, and customer support with zero manual oversight." 
              },
              { 
                label: "Branding", 
                title: "Look like you charge what you're worth", 
                desc: "Generic brand = commodity pricing. We create visual identities that let you charge 2x-3x more than competitors." 
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className="group relative border-b border-white/5 py-16 grid md:grid-cols-[1fr_2fr] gap-12 transition-all duration-500 px-4 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4ade80]/5 to-transparent"></div>
                </div>

                <div className="text-xl font-bold text-white/50 group-hover:text-[#4ade80] transition-colors duration-300 relative z-10 flex items-center gap-4">
                  <span className="w-0 group-hover:w-4 h-[2px] bg-[#4ade80] transition-all duration-300 overflow-hidden"></span>
                  {service.label}
                </div>
                <div className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-white/40 group-hover:text-white/70 leading-relaxed max-w-xl transition-colors duration-300">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS SECTION */}
      <section id="plans" className="py-32 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-20">Plans</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative group p-[1px] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-[#4ade80]/40 transition-all duration-500"></div>
              <div className="relative bg-[#0a0a0a] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="p-10 bg-white/5 rounded-t-[1.5rem] mb-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4ade80] transition-colors duration-300">High-Converting Landing Page</h3>
                  <p className="text-white/40 text-sm">For businesses launching products or testing offers fast.</p>
                </div>
                <div className="px-10 pb-10 space-y-4 relative z-10 mt-auto">
                  {["Strategy session", "Conversion copywriting", "Mobile-optimized", "Unlimited revisions", "Analytics setup"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium">
                      <Check className="w-4 h-4 text-[#4ade80]" />
                      <span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group p-[1px] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-[#4ade80]/40 transition-all duration-500"></div>
              <div className="relative bg-[#0a0a0a] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="p-10 bg-white/5 rounded-t-[1.5rem] mb-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4ade80] transition-colors duration-300">Automation & Full Systems</h3>
                  <p className="text-white/40 text-sm">For businesses that need full systems integrated with AI agents.</p>
                </div>
                <div className="px-10 pb-10 space-y-4 relative z-10 mt-auto">
                  {["Strategy session", "5-8 pages design", "Agentic Automation setup", "Custom AI Agent", "Workflow optimization"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium">
                      <Check className="w-4 h-4 text-[#4ade80]" />
                      <span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUESTIONS? (FAQ) SECTION */}
      <section id="faq" className="py-32 px-6 border-t border-white/5 bg-black scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-20 text-center md:text-left">Questions?</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`group border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-white/5 border-[#4ade80]/30' : 'bg-[#0a0a0a] hover:bg-white/[0.02]'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-8 flex justify-between items-center text-left transition-colors"
                >
                  <span className={`text-xl font-bold tracking-tight transition-colors ${openFaq === index ? 'text-[#4ade80]' : 'text-white/80'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-300 ${openFaq === index ? 'bg-[#4ade80] text-black rotate-0' : 'bg-white/5 text-white/40 rotate-90'}`}>
                    {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 pb-8' : 'max-h-0'}`}
                >
                  <p className="text-white/50 text-lg leading-relaxed border-t border-white/5 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section id="about" className="py-32 px-6 border-t border-white/5 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Who's behind Findia?</h2>
          
          <div className="relative group p-[1px] rounded-[40px] overflow-hidden transition-all duration-500">
            {/* Emerald animated stroke outline wrapper */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover:from-[#4ade80]/30 transition-all duration-500"></div>
            
            <div className="relative bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 md:p-12 overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#4ade80]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
                
                {/* Profile Picture Frame with uploaded image and overlapping Instagram badge */}
                <div className="relative transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white/10 group-hover:border-[#4ade80] p-1 overflow-hidden transition-colors duration-500 bg-[#111]">
                    <img 
                      src="Profile.png" 
                      alt="Biplob Das" 
                      className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  {/* Overlapping Instagram Badge at Avatar bottom-right corner */}
                  <div className="absolute bottom-2 right-2 bg-black rounded-full p-0.5 border-2 border-black shadow-lg">
                    <InstagramVerifiedBadge className="w-6 h-6" />
                  </div>
                </div>

                {/* Profile Info & Verification Line */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2 justify-center md:justify-start">
                    <h3 className="text-3xl font-bold tracking-tight group-hover:text-[#4ade80] transition-colors inline-flex items-center gap-2">
                      Biplob Das
                      <InstagramVerifiedBadge className="w-6 h-6" />
                    </h3>
                  </div>


                  <p className="text-xl font-medium text-white/90 mb-6">AI & Automation Expert</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-8 text-sm uppercase tracking-widest font-bold text-white/40">
                    <div><span className="text-white group-hover:text-[#4ade80] transition-colors">940</span> followers</div>
                    <div><span className="text-white group-hover:text-[#4ade80] transition-colors">500+</span> connections</div>
                  </div>

                  <div className="space-y-4 text-white/60 leading-relaxed text-lg transition-colors group-hover:text-white/80">
                    <p>Turning complex processes into scalable RPA, Agentic AI, & Intelligent Automation solutions.</p>
                    <p className="text-[#4ade80] font-medium flex items-center justify-center md:justify-start gap-2 cursor-pointer hover:underline" onClick={() => window.open('https://biplobdas.com', '_blank')}>
                      @biplobdas <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-lg text-white/60 leading-relaxed max-w-3xl mx-auto md:mx-0">
            <p>
              Biplob built Findia to turn operational inefficiencies into autonomous growth engines. 
              Findia helps businesses scale without adding headcount through intelligent automation 
              that actually delivers ROI.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[40px] p-16 md:p-32 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#4ade80]/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Giant Centered Brand Name */}
              <div className="mb-12">
                <span className="text-[60px] md:text-[120px] font-black tracking-tighter leading-none text-white selection:bg-[#4ade80]">
                  Findia<span className="text-[#4ade80]">.</span>
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight max-w-3xl leading-tight">Ready to stop leaving money on the table?</h2>
              <p className="text-white/40 text-lg mb-12 max-w-2xl font-medium">
                Let's see how we can fix the issues that are holding you back from driving more revenue today!
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <p className="text-[#4ade80] font-bold text-sm uppercase tracking-widest animate-pulse">
                  Be quick! The spots are almost gone
                </p>
                <button 
                  onClick={openBooking}
                  className="relative overflow-hidden bg-[#4ade80] hover:bg-[#3be276] text-black font-black transition-all rounded-full active:scale-95 px-16 py-6 text-lg shadow-[0_0_40px_rgba(74,222,128,0.3)] hover:shadow-[0_0_60px_rgba(74,222,128,0.5)]"
                >
                  Book an Intro Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] pt-32 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-24">
            {/* Branding Column */}
            <div className="flex flex-col items-start gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#4ade80] rounded-xl flex items-center justify-center">
                  <Search className="w-5 h-5 text-black stroke-[3px]" />
                </div>
                <span className="font-bold tracking-tight text-3xl">Findia<span className="text-[#4ade80]">.</span></span>
              </div>
              <p className="text-white/30 text-lg max-w-sm leading-relaxed">
                Premium growth-led websites & autonomous AI systems for modern businesses.
              </p>
            </div>

            {/* Links Column 1 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white/40 text-xs font-black uppercase tracking-widest">Menu</h4>
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a key={item.name} href={item.href} className="text-white/60 hover:text-[#4ade80] transition-colors font-medium flex items-center gap-2 group">
                    {item.name} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Links Column 2 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white/40 text-xs font-black uppercase tracking-widest">Connect</h4>
              <nav className="flex flex-col gap-4">
                {['LinkedIn', 'Twitter', 'Instagram', 'Email'].map((link) => (
                  <a key={link} href="#" className="text-white/60 hover:text-[#4ade80] transition-colors font-medium flex items-center gap-2 group">
                    {link} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
              © 2026 FINDIA STRATEGY. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-12 text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
