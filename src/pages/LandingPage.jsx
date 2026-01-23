import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Grow your audience on social media</h1>
                    <p className="hero-subtitle">
                        SocialFlow Studio is the all-in-one toolkit for creators to build their brand,
                        engage their community, and save time on repetitive tasks.
                    </p>
                    <div className="hero-cta">
                        <Link to="/resizer" className="btn-primary btn-lg">Get Started for Free</Link>
                        <button className="btn-secondary btn-lg">Watch Video</button>
                    </div>
                    <div className="hero-note">No credit card required. Cancel anytime.</div>
                </div>
                {/* Placeholder for Hero Image if we had one */}
            </section>

            {/* Social Proof */}
            <section className="social-proof">
                <p className="proof-label">TRUSTED BY 140,000+ PEOPLE LIKE YOU</p>
                <div className="logo-grid">
                    {['Huckberry', 'Food52', 'The Sill', 'Burrow', 'HappySocks', 'DressUp'].map(brand => (
                        <div key={brand} className="brand-logo">{brand}</div>
                    ))}
                </div>
            </section>

            {/* Features - Alternating Layout */}
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
                        <Link to="/resizer" className="btn-text">Start Scheduling →</Link>
                    </div>
                    <div className="feature-visual visual-blue">
                        <div className="mock-card">
                            <div className="mock-header"></div>
                            <div className="mock-body"></div>
                            <div className="mock-footer"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-section alt-bg">
                <div className="feature-container reverse">
                    <div className="feature-text">
                        <div className="feature-tag">ANALYTICS</div>
                        <h2>Measure what matters</h2>
                        <p>
                            Get in-depth insights into your social performance. diverse reports that help you
                            understand what works, so you can stop guessing and start growing.
                        </p>
                        <ul className="feature-list">
                            <li>Engagement rate tracking</li>
                            <li>Audience demographics</li>
                            <li>Best time to post</li>
                        </ul>
                        <Link to="/resizer" className="btn-text">View Analytics →</Link>
                    </div>
                    <div className="feature-visual visual-purple">
                        <div className="mock-chart">
                            <div className="bar bar-1"></div>
                            <div className="bar bar-2"></div>
                            <div className="bar bar-3"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-section">
                <div className="feature-container">
                    <div className="feature-text">
                        <div className="feature-tag">ENGAGEMENT</div>
                        <h2>Reply twice as fast</h2>
                        <p>
                            Skip the noise and focus on the comments that matter. Our unified inbox
                            brings all your conversations into one streamlined view.
                        </p>
                        <ul className="feature-list">
                            <li>Unified inbox</li>
                            <li>Hotkeys for speed</li>
                            <li>Team collaboration</li>
                        </ul>
                        <Link to="/resizer" className="btn-text">Engage Fans →</Link>
                    </div>
                    <div className="feature-visual visual-pink">
                        <div className="mock-message">
                            <div className="msg-avatar"></div>
                            <div className="msg-lines">
                                <div className="line long"></div>
                                <div className="line short"></div>
                            </div>
                        </div>
                        <div className="mock-message right">
                            <div className="msg-lines">
                                <div className="line medium"></div>
                            </div>
                        </div>
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

            {/* Bottom CTA */}
            <section className="bottom-cta">
                <h2>140,000+ people like you use SocialFlow to build their brand on social media</h2>
                <Link to="/resizer" className="btn-primary btn-lg">Get Started Now</Link>
            </section>

            <footer className="landing-footer">
                <div className="footer-links">
                    <div className="col">
                        <h4>SocialFlow</h4>
                        <a href="#">About</a>
                        <a href="#">Customers</a>
                        <a href="#">Community</a>
                    </div>
                    <div className="col">
                        <h4>Tools</h4>
                        <Link to="/resizer">Image Resizer</Link>
                        <a href="#">Caption Writer</a>
                        <a href="#">Hashtag Generator</a>
                    </div>
                    <div className="col">
                        <h4>Support</h4>
                        <a href="#">Help Center</a>
                        <a href="#">Status</a>
                        <a href="#">Contact</a>
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
