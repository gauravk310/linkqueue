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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const demoLinks = [
    { id: 1, title: '🎨 My Portfolio', url: 'behance.net/sarah', clicks: 432, icon: '🎨' },
    { id: 2, title: '📸 Instagram', url: 'instagram.com/sarahdesigns', clicks: 892, icon: '📸' },
    { id: 3, title: '🎵 Playlist', url: 'spotify.com/sarahvibes', clicks: 234, icon: '🎵' },
    { id: 4, title: '🌟 Shop', url: 'shop.sarahdesigns.com', clicks: 567, icon: '🌟' },
    { id: 5, title: '💌 Newsletter', url: 'sarahdesigns.substack.com', clicks: 189, icon: '💌' },
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
    <div className="gradient-bg min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0f1420]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center font-black text-white shadow-lg shadow-purple-200">
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
              <button className="btn-primary">Start Free ✨</button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
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

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="btn-primary text-lg">
                  Get Started Free
                </button>
                <button className="btn-secondary text-lg">
                  See How It Works
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
                  <p className="font-bold text-gray-800">Join the crew!</p>
                  <p className="text-gray-600">50,000+ creators already here</p>
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
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors">{link.title}</div>
                        <div className="text-xs text-gray-500 truncate">{link.clicks} clicks this month</div>
                      </div>
                      <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                        →
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-purple-100 text-center">
                  <p className="text-sm text-gray-500">✨ linkqueue.com/sarah</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="soft-card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center reveal">
                  <div className="text-5xl mb-3">{stat.emoji}</div>
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20 reveal">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Everything you need,<br />
              <span className="gradient-text">nothing you don't</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We packed all the good stuff into one simple tool. No bloat, no confusion, just pure awesome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="soft-card reveal group" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className={`feature-icon bg-gradient-to-br ${feature.color} shadow-lg`}>
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <p className="text-sm text-gray-500 mt-8">
              No credit card • Free forever • Upgrade anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-purple-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center font-black text-white">
                  LQ
                </div>
                <span className="text-xl font-bold gradient-text">LinkQueue</span>
              </div>
              <p className="text-gray-600 text-sm">
                Making link sharing fun again, one link at a time ✨
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-800">Product</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <a href="#" className="block hover:text-purple-600 transition-colors">Features</a>
                <a href="#" className="block hover:text-purple-600 transition-colors">Pricing</a>
                <a href="#" className="block hover:text-purple-600 transition-colors">Templates</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-800">Company</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <a href="#" className="block hover:text-purple-600 transition-colors">About</a>
                <a href="#" className="block hover:text-purple-600 transition-colors">Blog</a>
                <a href="#" className="block hover:text-purple-600 transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-800">Legal</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <a href="#" className="block hover:text-purple-600 transition-colors">Privacy</a>
                <a href="#" className="block hover:text-purple-600 transition-colors">Terms</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-purple-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>© 2024 LinkQueue. Made with 💜 by creators, for creators.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Instagram</a>
              <a href="#" className="hover:text-purple-600 transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
