import { Link } from 'react-router-dom'
import { useAuth, PLANS } from '../context/AuthContext'
import './LandingPage.css'

function LandingPage() {
    const { user, usage } = useAuth()

    if (user) {
        const limit = PLANS[user.plan.toUpperCase()].limit
        const percent = Math.min(100, (usage / limit) * 100)

        return (
            <div className="landing-page dashboard-view" style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                <header style={{ marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Welcome back, {user.name} 👋</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Here's what's happening with your account today.</p>
                </header>

                <div className="dashboard-stats" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginBottom: '40px'
                }}>
                    <div className="stat-card" style={{
                        background: 'var(--bg-card)',
                        padding: '20px',
                        borderRadius: '12px',
                        border: '1px solid var(--border)'
                    }}>
                        <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '15px' }}>Monthly Usage</h3>
                        <div style={{ height: '8px', background: 'var(--bg-dark)', borderRadius: '4px', marginBottom: '10px', overflow: 'hidden' }}>
                            <div style={{ width: `${percent}%`, height: '100%', background: percent > 90 ? '#ef4444' : 'var(--primary)' }}></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                            <span>{usage} / {limit} requests</span>
                            <Link to="/account" style={{ color: 'var(--primary)' }}>Manage Plan</Link>
                        </div>
                    </div>

                    <div className="stat-card" style={{
                        background: 'var(--bg-card)',
                        padding: '20px',
                        borderRadius: '12px',
                        border: '1px solid var(--border)'
                    }}>
                        <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '15px' }}>Quick Actions</h3>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Link to="/slugs" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>New Slug</Link>
                            <Link to="/scheduler" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Schedule Post</Link>
                        </div>
                    </div>
                </div>

                <h2 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Your Apps</h2>
                <div className="apps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                    {[
                        { to: '/resizer', icon: '🖼️', name: 'Resizer', desc: 'Optimize images' },
                        { to: '/slugs', icon: '🔗', name: 'Slugs', desc: 'SEO link generator' },
                        { to: '/hashtags', icon: '#️⃣', name: 'Hashtags', desc: 'Find trending tags' },
                        { to: '/scheduler', icon: '📅', name: 'Scheduler', desc: 'Plan content' },
                        { to: '/analytics', icon: '📊', name: 'Analytics', desc: 'Track growth' },
                        { to: '/community', icon: '💬', name: 'Community', desc: 'Manage inbox' },
                    ].map(app => (
                        <Link key={app.name} to={app.to} style={{
                            background: 'var(--bg-card)',
                            padding: '20px',
                            borderRadius: '12px',
                            border: '1px solid var(--border)',
                            textDecoration: 'none',
                            transition: 'transform 0.2s'
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{app.icon}</div>
                            <h3 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '5px' }}>{app.name}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{app.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="landing-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Grow your audience on social media</h1>
                    <p className="hero-subtitle">
                        SocialFlow Studio is the all-in-one toolkit for creators to build their brand,
                        engage their community, and save time on repetitive tasks.
                    </p>
                    <div className="hero-cta">
                        <Link to="/auth/register" className="btn-primary btn-lg">Get Started for Free</Link>
                    </div>
                    <div className="hero-note">No credit card required. Cancel anytime.</div>
                </div>
            </section>

            {/* Same sections as before, just updating Links to Register instead of Resizer logic implies */}
            {/* Social Proof */}
            <section className="social-proof">
                <p className="proof-label">TRUSTED BY 140,000+ CREATORS</p>
                <div className="logo-grid">
                    {['Huckberry', 'Food52', 'The Sill', 'Burrow', 'HappySocks', 'DressUp'].map(brand => (
                        <div key={brand} className="brand-logo">{brand}</div>
                    ))}
                </div>
            </section>

            {/* Features - Publishing */}
            <section className="feature-section">
                <div className="feature-container">
                    <div className="feature-text">
                        <div className="feature-tag">PUBLISHING</div>
                        <h2>Plan your perfect post</h2>
                        <p>
                            Plan, collaborate, and publish thumb-stopping content that drives meaningful engagement
                            and growth for your brand. Our visual calendar makes it easy to see the big picture.
                        </p>
                        <ul className="feature-list">
                            <li>Drag-and-drop scheduling</li>
                            <li>Multi-platform support (IG, TikTok, X)</li>
                            <li>Visual post preview</li>
                        </ul>
                        <Link to="/auth/register" className="btn-text">Start Scheduling →</Link>
                    </div>
                    <div className="feature-visual visual-blue">
                        <div style={{ width: '100%', height: '100%', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px' }}></div>
                    </div>
                </div>
            </section>

            {/* Features - Analytics */}
            <section className="feature-section alt-bg">
                <div className="feature-container reverse">
                    <div className="feature-text">
                        <div className="feature-tag">ANALYTICS</div>
                        <h2>Track your growth</h2>
                        <p>
                            Monitor follower growth, engagement rates, and post performance across all your
                            social platforms in one unified dashboard.
                        </p>
                        <ul className="feature-list">
                            <li>Real-time KPI dashboards</li>
                            <li>Cross-platform comparison</li>
                            <li>Content performance ranking</li>
                        </ul>
                        <Link to="/auth/register" className="btn-text">View Analytics →</Link>
                    </div>
                    <div className="feature-visual visual-purple">
                        <div style={{ width: '100%', height: '100%', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px' }}></div>
                    </div>
                </div>
            </section>

            {/* Features - Community */}
            <section className="feature-section">
                <div className="feature-container">
                    <div className="feature-text">
                        <div className="feature-tag">COMMUNITY</div>
                        <h2>Engage your audience</h2>
                        <p>
                            Manage comments, DMs, and conversations from all platforms in one place.
                            Never miss an opportunity to connect.
                        </p>
                        <ul className="feature-list">
                            <li>Unified inbox for all platforms</li>
                            <li>Saved replies for quick responses</li>
                            <li>Sentiment tracking</li>
                        </ul>
                        <Link to="/auth/register" className="btn-text">Build Community →</Link>
                    </div>
                    <div className="feature-visual visual-pink">
                        <div style={{ width: '100%', height: '100%', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '12px' }}></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-grid">
                    <div className="stat-item">
                        <h3>10 Years</h3>
                        <p>in business</p>
                    </div>
                    <div className="stat-item">
                        <h3>140k+</h3>
                        <p>users</p>
                    </div>
                    <div className="stat-item">
                        <h3>100k+</h3>
                        <p>monthly posts</p>
                    </div>
                    <div className="stat-item">
                        <h3>24/7</h3>
                        <p>customer support</p>
                    </div>
                </div>
            </section>

            <footer className="landing-footer">
                <div className="footer-links">
                    <div className="col">
                        <h4>SocialFlow</h4>
                        <Link to="/about">About</Link>
                        <Link to="/customers">Customers</Link>
                    </div>
                    <div className="col">
                        <h4>Tools</h4>
                        <Link to="/resizer">Image Resizer</Link>
                        <Link to="/slugs">Slug Generator</Link>
                    </div>
                    <div className="col">
                        <h4>Support</h4>
                        <Link to="/help">Help Center</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2026 SocialFlow Studio. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default LandingPage
