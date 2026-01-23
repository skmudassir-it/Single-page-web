import { Link, Outlet, useLocation } from 'react-router-dom'
import AdUnit from './AdUnit'
import './Layout.css'

function Layout() {
    const location = useLocation()

    return (
        <div className="layout-container">
            <nav className="sidebar">
                <div className="sidebar-header">
                    <div className="logo-icon">S</div>
                    <span className="logo-text">SocialFlow</span>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                            <span className="icon">🏠</span>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resizer" className={`nav-item ${location.pathname === '/resizer' ? 'active' : ''}`}>
                            <span className="icon">🖼️</span>
                            <span>Resizer</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/slugs" className={`nav-item ${location.pathname === '/slugs' ? 'active' : ''}`}>
                            <span className="icon">🔗</span>
                            <span>Slug Generator</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/hashtags" className={`nav-item ${location.pathname === '/hashtags' ? 'active' : ''}`}>
                            <span className="icon">#️⃣</span>
                            <span>Hashtag Optimizer</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/scheduler" className={`nav-item ${location.pathname === '/scheduler' ? 'active' : ''}`}>
                            <span className="icon">📅</span>
                            <span>Content Scheduler</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/captions" className={`nav-item ${location.pathname === '/captions' ? 'active' : ''}`}>
                            <span className="icon">📝</span>
                            <span>Caption Studio</span>
                        </Link>
                    </li>
                </ul>

                {/* Ad in Sidebar */}
                <div style={{ padding: '0 10px' }}>
                    <AdUnit slotId="sidebar-slot" />
                </div>

                <div className="sidebar-footer">
                    <div className="legal-links">
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                    </div>
                    <div className="user-profile">
                        <div className="avatar">U</div>
                        <div className="user-info">
                            <span className="name">Creator</span>
                            <span className="plan">Free Plan</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Nav */}
            <nav className="bottom-nav">
                <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <span className="icon">🏠</span>
                    <span>Home</span>
                </Link>
                <Link to="/resizer" className={`nav-item ${location.pathname === '/resizer' ? 'active' : ''}`}>
                    <span className="icon">🖼️</span>
                    <span>Resizer</span>
                </Link>
                <Link to="/slugs" className={`nav-item ${location.pathname === '/slugs' ? 'active' : ''}`}>
                    <span className="icon">🔗</span>
                    <span>Slugs</span>
                </Link>
                <Link to="/hashtags" className={`nav-item ${location.pathname === '/hashtags' ? 'active' : ''}`}>
                    <span className="icon">#️⃣</span>
                    <span>Tags</span>
                </Link>
                <Link to="/scheduler" className={`nav-item ${location.pathname === '/scheduler' ? 'active' : ''}`}>
                    <span className="icon">📅</span>
                    <span>Plan</span>
                </Link>
                <Link to="/captions" className={`nav-item ${location.pathname === '/captions' ? 'active' : ''}`}>
                    <span className="icon">📝</span>
                    <span>Studio</span>
                </Link>
            </nav>

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
