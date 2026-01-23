import { Link, Outlet, useLocation } from 'react-router-dom'
import AdUnit from './AdUnit'
import { useAuth } from '../context/AuthContext'
import './Layout.css'

function Layout() {
    const location = useLocation()
    const { user } = useAuth()

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
                    <li>
                        <Link to="/analytics" className={`nav-item ${location.pathname === '/analytics' ? 'active' : ''}`}>
                            <span className="icon">📊</span>
                            <span>Analytics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collabs" className={`nav-item ${location.pathname === '/collabs' ? 'active' : ''}`}>
                            <span className="icon">🤝</span>
                            <span>Collabs</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/community" className={`nav-item ${location.pathname === '/community' ? 'active' : ''}`}>
                            <span className="icon">💬</span>
                            <span>Community</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/assets" className={`nav-item ${location.pathname === '/assets' ? 'active' : ''}`}>
                            <span className="icon">🗄️</span>
                            <span>Assets</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/reports" className={`nav-item ${location.pathname === '/reports' ? 'active' : ''}`}>
                            <span className="icon">📈</span>
                            <span>Reports</span>
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
                    {user ? (
                        <Link to="/account" className="user-profile" style={{ textDecoration: 'none' }}>
                            <div className="avatar">{user.name[0].toUpperCase()}</div>
                            <div className="user-info">
                                <span className="name">{user.name}</span>
                                <span className="plan">{user.plan.toUpperCase()}</span>
                            </div>
                        </Link>
                    ) : (
                        <Link to="/auth/login" className="user-profile" style={{ textDecoration: 'none' }}>
                            <div className="avatar">?</div>
                            <div className="user-info">
                                <span className="name">Guest</span>
                                <span className="plan">Login</span>
                            </div>
                        </Link>
                    )}
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
                <Link to="/analytics" className={`nav-item ${location.pathname === '/analytics' ? 'active' : ''}`}>
                    <span className="icon">📊</span>
                    <span>Stats</span>
                </Link>
                <Link to="/collabs" className={`nav-item ${location.pathname === '/collabs' ? 'active' : ''}`}>
                    <span className="icon">🤝</span>
                    <span>Collabs</span>
                </Link>
                <Link to="/community" className={`nav-item ${location.pathname === '/community' ? 'active' : ''}`}>
                    <span className="icon">💬</span>
                    <span>Inbox</span>
                </Link>
                <Link to="/assets" className={`nav-item ${location.pathname === '/assets' ? 'active' : ''}`}>
                    <span className="icon">🗄️</span>
                    <span>Vault</span>
                </Link>
            </nav>

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
