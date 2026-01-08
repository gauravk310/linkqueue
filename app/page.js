'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Demo data for the preview
  const demoLinks = [
    { id: 1, title: '👑 VIP Portfolio', url: 'portfolio.luxury.com', clicks: 1243, icon: '👑' },
    { id: 2, title: '💼 Business Inquiries', url: 'linkedin.com/in/johndoe', clicks: 892, icon: '💼' },
    { id: 3, title: '🍸  Exclusive Events', url: 'events.com/vip', clicks: 654, icon: '🍸' },
    { id: 4, title: '🏦 My Ventures', url: 'ventures.com', clicks: 423, icon: '🏦' },
    { id: 5, title: '✒️ Monthly Newsletter', url: 'substack.com/luxury', clicks: 1087, icon: '✒️' },
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Premium Performance',
      description: 'Ultra-fast load times designed for high-conversion and seamless experiences.'
    },
    {
      icon: '🏛️',
      title: 'Elegant Themes',
      description: 'Sophisticated designs that convey trust, authority, and professionalism.'
    },
    {
      icon: '📈',
      title: 'Executive Analytics',
      description: 'Detailed insights into your audience demographics and engagement.'
    },
    {
      icon: '💎',
      title: 'QR Integration',
      description: 'Custom branded QR codes for your physical marketing materials.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security ensuring your links are always safe and up.'
    },
    {
      icon: '🌙',
      title: 'Midnight Mode',
      description: 'A stunning dark interface that is easy on the eyes and looks incredible.'
    },
  ];

  const stats = [
    { value: '50K+', label: 'Elite Members' },
    { value: '2M+', label: 'Premium Links' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '5.0★', label: 'Client Satisfaction' },
  ];

  return (
    <div className="gradient-bg min-h-screen text-gray-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0f1420]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-700 flex items-center justify-center font-bold text-[#0f1420] shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              LQ
            </div>
            <span className="text-2xl font-bold tracking-tight text-white/90">LinkQueue</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-gray-400 hover:text-[#fbbf24] transition-colors">Features</a>
            <a href="#demo" className="text-gray-400 hover:text-[#fbbf24] transition-colors">Demo</a>
            <a href="#pricing" className="text-gray-400 hover:text-[#fbbf24] transition-colors">Pricing</a>
            <a href="/login" className="text-gray-400 hover:text-[#fbbf24] transition-colors">Login</a>
            <a href="/login">
              <button className="btn-primary py-2 px-6 !text-xs">Get Started</button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Left Column - Text */}
            <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                The Gold Standard
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                Curate Your <br />
                <span className="gradient-text">Digital Legacy</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                The ultimate platform for professionals to unite their digital presence. Elegant, powerful, and simpler than you can imagine.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="btn-primary text-lg px-10 py-5">
                  Create Your Page
                </button>
                <button className="btn-secondary text-lg px-10 py-5">
                  View Examples
                </button>
              </div>

              <div className="pt-12 flex items-center gap-6 border-t border-white/5">
                <div className="flex -space-x-5">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-[#0f1420] bg-gray-700 overflow-hidden relative shadow-lg">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 13}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-white text-lg">Trusted by Leaders</p>
                  <p className="text-gray-500">Join the elite network</p>
                </div>
              </div>
            </div>

            {/* Right Column - Demo Card */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="glass-card p-10 float max-w-md mx-auto relative border-t border-white/10 shadow-2xl">
                {/* Decorative top shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

                {/* Profile Header */}
                <div className="text-center mb-12 relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-tr from-yellow-600 via-amber-300 to-yellow-700 shadow-xl">
                    <div className="w-full h-full rounded-full bg-[#1a202c] overflow-hidden">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-white">Alexander Pierce</h3>
                  <p className="text-yellow-500/80 text-sm font-medium tracking-widest uppercase">CEO & Founder</p>
                </div>

                {/* Demo Links */}
                <div className="space-y-5 relative z-10">
                  {demoLinks.map((link, index) => (
                    <div
                      key={link.id}
                      className="link-card group py-4"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform duration-300 border border-white/5">
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0 px-2">
                        <div className="font-bold text-gray-100 text-lg group-hover:text-yellow-400 transition-colors">{link.title}</div>
                        <div className="text-xs text-gray-500 truncate mt-1">{link.url}</div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500 -translate-x-2 group-hover:translate-x-0 duration-300">
                        ➔
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24">
            {stats.map((stat, index) => (
              <div key={index} className="text-center reveal">
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-4">{stat.value}</div>
                <div className="text-yellow-500/60 text-sm font-bold tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 reveal">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Excellence in <span className="gradient-text">Every Detail</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafted for those who demand perfection. LinkQueue offers a suite of tools designed to elevate your brand to the next level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-12 reveal hover:bg-white/[0.03] group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-100">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto reveal">
          <div className="relative rounded-[3rem] overflow-hidden p-16 md:p-32 text-center border border-yellow-500/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-black z-0"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-10 text-white tracking-tight">
                Claim Your <span className="text-yellow-500">Access</span>
              </h2>
              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-normal">
                Experience the difference of a premium link-in-bio solution. Join the waitlist for exclusive benefits today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-primary text-xl px-16 py-6 shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)]">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 bg-[#0a0e17]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-yellow-500 to-amber-700 flex items-center justify-center font-bold text-[#0f1420] text-xs">
                  LQ
                </div>
                <span className="text-xl font-bold text-white tracking-tight">LinkQueue</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Defining the future of digital identity management.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-5 text-gray-200">Platform</h4>
              <div className="space-y-3 text-sm text-gray-500">
                <a href="#" className="block hover:text-yellow-500 transition-colors">Features</a>
                <a href="#" className="block hover:text-yellow-500 transition-colors">Integrations</a>
                <a href="#" className="block hover:text-yellow-500 transition-colors">Enterprise</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-5 text-gray-200">Company</h4>
              <div className="space-y-3 text-sm text-gray-500">
                <a href="#" className="block hover:text-yellow-500 transition-colors">About Us</a>
                <a href="#" className="block hover:text-yellow-500 transition-colors">Careers</a>
                <a href="#" className="block hover:text-yellow-500 transition-colors">Press</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-5 text-gray-200">Legal</h4>
              <div className="space-y-3 text-sm text-gray-500">
                <a href="#" className="block hover:text-yellow-500 transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-yellow-500 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <div>© 2024 LinkQueue Inc. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">LinkedIn</a>
              <a href="#" className="hover:text-gray-400">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
