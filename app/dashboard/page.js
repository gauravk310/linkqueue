'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [session] = useState({
    user: {
      name: 'John Doe',
      email: 'john@example.com'
    }
  });

  const handleSignOut = () => {
    alert('Signing out...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-900 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform">
              LQ
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              LinkQueue
            </span>
          </a>
          <div className="flex items-center gap-4">
            <div className="text-sm text-purple-200">
              Welcome, <span className="text-white font-semibold">{session.user.name || session.user.email}</span>
            </div>
            <button
              onClick={handleSignOut}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all hover:scale-105 active:scale-95"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-white">
            Your <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Dashboard</span>
          </h1>
          <p className="text-xl text-purple-200">
            Manage your links, track analytics, and grow your audience
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Total Links */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/30 flex items-center justify-center text-3xl backdrop-blur-sm border border-purple-400/30">
                🔗
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                  0
                </div>
            </nav>

           
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12">
                    <h1 className="text-5xl font-black mb-4">
                        Your <span className="gradient-text">Dashboard</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Manage your links, track analytics, and grow your audience
                    </p>
                </div>

              
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="glass-card p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl">
                                🔗
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text">0</div>
                                <div className="text-gray-400">Total Links</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-2xl">
                                👁️
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text">0</div>
                                <div className="text-gray-400">Total Views</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-2xl">
                                📊
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text">0%</div>
                                <div className="text-gray-400">Click Rate</div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div className="glass-card p-8">
                    <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <button className="glass-card p-6 text-left hover:scale-105 transition-transform">
                            <div className="text-3xl mb-3">➕</div>
                            <h3 className="text-xl font-bold mb-2">Create New Link</h3>
                            <p className="text-gray-400">Add a new link to your profile</p>
                        </button>

                        <button className="glass-card p-6 text-left hover:scale-105 transition-transform">
                            <div className="text-3xl mb-3">🎨</div>
                            <h3 className="text-xl font-bold mb-2">Customize Theme</h3>
                            <p className="text-gray-400">Choose from 50+ beautiful themes</p>
                        </button>

                        <button className="glass-card p-6 text-left hover:scale-105 transition-transform">
                            <div className="text-3xl mb-3">📱</div>
                            <h3 className="text-xl font-bold mb-2">Get QR Code</h3>
                            <p className="text-gray-400">Download your profile QR code</p>
                        </button>

                        <button className="glass-card p-6 text-left hover:scale-105 transition-transform">
                            <div className="text-3xl mb-3">📊</div>
                            <h3 className="text-xl font-bold mb-2">View Analytics</h3>
                            <p className="text-gray-400">Check your detailed statistics</p>
                        </button>
                    </div>
                </div>

              
                <div className="mt-12 glass-card p-12 text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
                    <p className="text-gray-400 mb-6 max-w-md mx-auto">
                        Create your first link and start sharing your content with the world!
                    </p>
                    <button className="btn-primary px-8 py-4">
                        Create Your First Link
                    </button>
                </div>
            </div>
        </div>
    );
}
