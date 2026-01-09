'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status, router]);

    if (status === 'loading') {
        return (
            <div className="gradient-bg min-h-screen flex items-center justify-center">
                <div className="glass-card p-8">
                    <div className="flex items-center gap-3">
                        <svg className="animate-spin h-8 w-8 text-purple-500" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span className="text-xl font-semibold">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (!session) {
        return null;
    }

    return (
        <div className="gradient-bg min-h-screen">
           
            <nav className="backdrop-blur-md bg-opacity-80 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-white pulse-glow">
                            LQ
                        </div>
                        <span className="text-2xl font-bold gradient-text">LinkQueue</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-gray-400">
                            Welcome, <span className="text-white font-semibold">{session.user.name || session.user.email}</span>
                        </div>
                        <button
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className="btn-secondary px-6 py-2"
                        >
                            Sign Out
                        </button>
                    </div>
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
