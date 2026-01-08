'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

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
    { id: 1, title: 'Portfolio', url: 'behance.net/alex', icon: '💼' },
    { id: 2, title: 'Instagram', url: 'instagram.com/alex', icon: '📸' },
    { id: 3, title: 'GitHub', url: 'github.com/alex', icon: '⚡' },
    { id: 4, title: 'Shop', url: 'shop.alex.com', icon: '🛍️' },
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Fast & Simple',
      description: 'Get your page up and running in minutes. Clean interface, zero complexity.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Professional themes that make you look good. Minimalist and modern.'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Track your clicks and engagement with simple, clear insights.'
    },
    {
      icon: '📱',
      title: 'QR Codes',
      description: 'Auto-generated QR codes for every link. Perfect for offline sharing.'
    },
    {
      icon: '🔒',
      title: 'Reliable',
      description: 'Your links work 24/7. We handle the tech so you can focus on content.'
    },
    {
      icon: '✨',
      title: 'Fresh Updates',
      description: 'Regular improvements and new features based on user feedback.'
    },
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '2M+', label: 'Links Shared' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.9★', label: 'Rating' },
  ];

  return (
    <div className="gradient-bg min-h-screen">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white">
              LQ
            </div>
            <span className="text-xl font-bold text-gray-900">LinkQueue</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Login</a>
            <a href="/login">
              <button className="btn-primary text-sm">Get Started</button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div className={`space-y-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <div className="badge">
                Used by 50,000+ creators
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                One link for<br />
                <span className="accent-text">everything you do</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Share all your content with one simple link. Beautiful, fast, and easy to set up.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="btn-primary text-base">
                  Get Started Free
                </button>
                <button className="btn-secondary text-base">
                  See Examples
                </button>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 11}`} alt="" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Join thousands of creators</p>
                  <p className="text-gray-600">Already using LinkQueue</p>
                </div>
              </div>
            </div>

            {/* Right - Demo */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="modern-card max-w-md mx-auto">

                {/* Profile */}
                <div className="text-center mb-8 pb-6 border-b border-gray-100">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-1 shadow-lg">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Profile" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">Alex Johnson</h3>
                  <p className="text-gray-600">Designer & Developer</p>
                </div>

                {/* Links */}
                <div className="space-y-3">
                  {demoLinks.map((link) => (
                    <div key={link.id} className="link-item group">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-xl border border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{link.title}</div>
                        <div className="text-sm text-gray-500 truncate">{link.url}</div>
                      </div>
                      <div className="text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all">
                        →
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center reveal">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Everything you need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple tools to share your content, track your audience, and grow your presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="modern-card reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="icon-box">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto reveal">
          <div className="modern-card text-center bg-gradient-to-br from-blue-50 via-white to-blue-50/30 border-blue-100 py-20 px-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight max-w-3xl mx-auto">
              Ready to get started?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of creators. Free to start, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary text-lg px-12 py-5 w-full sm:w-auto">
                Create Your Page
              </button>
              <button className="btn-secondary text-lg px-12 py-5 w-full sm:w-auto">
                View Demo
              </button>
            </div>
            <p className="text-sm font-medium text-gray-500 mt-8">
              ✓ Free forever  •  ✓ Instant setup  •  ✓ No credit card
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                  LQ
                </div>
                <span className="text-lg font-bold text-gray-900">LinkQueue</span>
              </div>
              <p className="text-gray-600 text-sm">
                Simple link sharing for creators.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Product</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <a href="#" className="block hover:text-blue-600 transition-colors">Features</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Pricing</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Templates</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Company</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <a href="#" className="block hover:text-blue-600 transition-colors">About</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Blog</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Legal</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <a href="#" className="block hover:text-blue-600 transition-colors">Privacy</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Terms</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>© 2024 LinkQueue. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
              <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
