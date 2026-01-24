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



  const stats = [
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-in {
          animation: fadeIn 1s ease forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
              LQ
            </div>
            <span className="text-xl font-bold text-gray-900">LinkQueue</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="/login" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">Login</a>
            <a href="/login">
              <button className="text-sm px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className={`space-y-10 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm border border-blue-200">
                ✨ Trusted by 50,000+ creators
              </div>

              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-gray-900">
                One link for<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">everything</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Share all your content with one simple link. Beautiful, fast, and ridiculously easy to set up.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="text-lg px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all">
                  Get Started Free
                </button>
                <button className="text-lg px-10 py-5 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:scale-105 active:scale-95 transition-all shadow-lg">
                  See Examples
                </button>
              </div>

              <div className="flex items-center gap-6 pt-10 border-t border-gray-200">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-500 overflow-hidden shadow-lg">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 11}`} alt="" className="w-full h-full" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">50,000+ creators</p>
                  <p className="text-gray-600 text-sm">Already sharing smarter</p>
                </div>
              </div>
            </div>

            {/* Right Demo Card */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-10 max-w-xl mx-auto lg:mx-0 hover:shadow-3xl transition-shadow">
                {/* Profile Header */}
                <div className="text-center mb-12 pb-10 border-b border-gray-100">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-2 shadow-xl">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden p-2">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Profile" className="w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">Alex Johnson</h3>
                  <p className="text-gray-600 font-semibold text-lg">Designer & Developer</p>
                </div>

                {/* Links */}
                <div className="space-y-4">
                  {demoLinks.map((link) => (
                    <div key={link.id} className="flex items-center gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 hover:shadow-lg hover:scale-105 transition-all cursor-pointer group">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl border border-gray-200 group-hover:border-blue-300 transition-all shadow-sm">
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">{link.title}</div>
                        <div className="text-sm text-gray-500 truncate mt-0.5">{link.url}</div>
                      </div>
                      <div className="text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all text-xl transform group-hover:translate-x-1">
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

      {/* Stats Section */}
      <section className="py-24 px-6 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center reveal">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">{stat.value}</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 reveal max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
              Everything you need
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed">
              Simple tools to share your content, understand your audience, and grow your presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10 hover:shadow-2xl hover:scale-105 transition-all reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-500/30">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto reveal">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl text-center py-24 px-10 border border-blue-500">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight max-w-4xl mx-auto">
              Ready to start?
            </h2>
            <p className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of creators. Free forever, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-2xl mx-auto">
              <button className="text-xl px-14 py-6 w-full sm:w-auto bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
                Create Your Page
              </button>
              <button className="text-xl px-14 py-6 w-full sm:w-auto bg-blue-500 text-white font-bold rounded-xl border-2 border-blue-400 hover:bg-blue-400 hover:scale-105 active:scale-95 transition-all">
                View Demo
              </button>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm font-semibold text-blue-100 mt-10">
              <span className="flex items-center gap-2">✓ Free forever</span>
              <span className="flex items-center gap-2">✓ No credit card</span>
              <span className="flex items-center gap-2">✓ 2 min setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
                  LQ
                </div>
                <span className="text-xl font-bold text-gray-900">LinkQueue</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Simple link sharing for creators.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-5 text-gray-900 text-lg">Product</h4>
              <div className="space-y-3 text-base text-gray-600">
                <a href="#" className="block hover:text-blue-600 transition-colors">Features</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Pricing</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Templates</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-5 text-gray-900 text-lg">Company</h4>
              <div className="space-y-3 text-base text-gray-600">
                <a href="#" className="block hover:text-blue-600 transition-colors">About</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Blog</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-5 text-gray-900 text-lg">Legal</h4>
              <div className="space-y-3 text-base text-gray-600">
                <a href="#" className="block hover:text-blue-600 transition-colors">Privacy</a>
                <a href="#" className="block hover:text-blue-600 transition-colors">Terms</a>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-base text-gray-600">
            <div>© 2024 LinkQueue. All rights reserved.</div>
            <div className="flex gap-8 font-semibold">
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