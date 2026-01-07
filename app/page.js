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
    { id: 1, title: '🎨 Design Portfolio', url: 'portfolio.example.com', clicks: 1243, icon: '🎨' },
    { id: 2, title: '📱 Instagram', url: 'instagram.com/johndoe', clicks: 892, icon: '📱' },
    { id: 3, title: '🎵 Spotify Playlist', url: 'spotify.com/playlist', clicks: 654, icon: '🎵' },
    { id: 4, title: '📧 Email Me', url: 'mailto:hello@john.com', clicks: 423, icon: '📧' },
    { id: 5, title: '🛍️ My Store', url: 'shop.example.com', clicks: 1087, icon: '🛍️' },
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance with instant page loads and smooth animations'
    },
    {
      icon: '🎨',
      title: 'Beautiful Themes',
      description: 'Stunning pre-made themes with full customization options'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Track every click with detailed insights and visitor analytics'
    },
    {
      icon: '📱',
      title: 'Auto QR Codes',
      description: 'Every link gets a unique QR code for easy sharing offline'
    },
    {
      icon: '🔗',
      title: 'Smart Links',
      description: 'Schedule links, set expiry dates, and create conditional redirects'
    },
    {
      icon: '🌙',
      title: 'Dark Mode',
      description: 'Beautiful dark mode that adapts to user preferences automatically'
    },
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '2M+', label: 'Links Created' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.9★', label: 'User Rating' },
  ];

  return (
    <div className="gradient-bg min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-white pulse-glow">
              LQ
            </div>
            <span className="text-2xl font-bold gradient-text">LinkQueue</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="/login" className="text-gray-300 hover:text-white transition-colors">Login</a>
            <a href="/login">
              <button className="btn-primary">Get Started Free</button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-block px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-semibold shimmer">
                ✨ The Future of Link Sharing
              </div>
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                One Link For
                <br />
                <span className="gradient-text">Everything</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Share all your content with a single, beautiful link. Get QR codes, analytics, and smart scheduling - all features Linktree wishes it had.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-lg px-8 py-4">
                  🚀 Start For Free
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  📺 Watch Demo
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 border-2 border-gray-900"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-gray-900"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-gray-900"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 border-2 border-gray-900"></div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white">Join 50,000+ creators</div>
                  <div className="text-gray-400">Already sharing smarter</div>
                </div>
              </div>
            </div>

            {/* Right Column - Demo Card */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="glass-card p-8 float">
                {/* Profile Header */}
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl">
                      👨‍🎨
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                  <p className="text-gray-400">Digital Creator & Designer</p>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      4.2K visitors this month
                    </span>
                  </div>
                </div>

                {/* Demo Links */}
                <div className="space-y-3">
                  {demoLinks.map((link, index) => (
                    <div
                      key={link.id}
                      className="link-card"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-white">{link.title}</div>
                        <div className="text-xs text-gray-500">{link.clicks.toLocaleString()} clicks</div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* QR Code Preview - Unique Feature! */}
                <div className="mt-6 pt-6 border-t border-gray-700/50 flex items-center justify-between">
                  <div className="text-sm">
                    <div className="font-semibold text-purple-400">✨ Auto-Generated QR</div>
                    <div className="text-gray-500">Scan to visit profile</div>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg p-1">
                    <div className="w-full h-full bg-black/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center reveal">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-5xl font-black mb-4">
              Why Choose <span className="gradient-text">LinkQueue</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We didn't just copy Linktree - we built something better with features that actually matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features Highlight */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 reveal">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-cyan-600/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
                  🚀 What Makes Us Different
                </div>
                <h2 className="text-4xl font-black mb-6">
                  Features That Actually <span className="gradient-text">Matter</span>
                </h2>
                <div className="space-y-4 text-lg text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <strong>Auto QR Codes:</strong> Every profile and link gets its own scannable QR code - perfect for business cards and posters
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <strong>Live Analytics:</strong> See who's clicking what, from where, and when - all in real-time
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <strong>Smart Scheduling:</strong> Set your links to appear or expire at specific times - perfect for limited offers
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎨</span>
                    <div>
                      <strong>Theme Library:</strong> 50+ professionally designed themes that make you look amazing instantly
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="text-2xl font-bold gradient-text">Real-time</div>
                  <div className="text-sm text-gray-400">Analytics</div>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="text-2xl font-bold gradient-text">Auto QR</div>
                  <div className="text-sm text-gray-400">Generation</div>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl mb-2">⏰</div>
                  <div className="text-2xl font-bold gradient-text">Scheduled</div>
                  <div className="text-sm text-gray-400">Links</div>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="text-2xl font-bold gradient-text">50+ Themes</div>
                  <div className="text-sm text-gray-400">Beautiful</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="glass-card p-12">
            <h2 className="text-5xl font-black mb-6">
              Ready to <span className="gradient-text">Level Up</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who've already upgraded from basic link-in-bio tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-10 py-5">
                🚀 Get Started Free
              </button>
              <button className="btn-secondary text-lg px-10 py-5">
                💬 Talk to Sales
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              No credit card required • Free forever plan available • 14-day pro trial
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-white text-sm">
                  LQ
                </div>
                <span className="text-xl font-bold gradient-text">LinkQueue</span>
              </div>
              <p className="text-gray-400 text-sm">
                The smarter way to share everything you create, sell, or say online.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Features</div>
                <div>Pricing</div>
                <div>Templates</div>
                <div>Analytics</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Privacy</div>
                <div>Terms</div>
                <div>Security</div>
                <div>Cookies</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2024 LinkQueue. Built with ❤️ for creators everywhere.
          </div>
        </div>
      </footer>
    </div>
  );
}
