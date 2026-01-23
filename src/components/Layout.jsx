import { Link, Outlet, useLocation } from 'react-router-dom'
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
                    {/* Future apps placeholders */}
                    <li>
                        <div className="nav-item disabled" title="Coming Soon">
                            <span className="icon">📝</span>
                            <span>Captions</span>
                        </div>
                    </li>
                    <li>
                        <div className="nav-item disabled" title="Coming Soon">
                            <span className="icon">#️⃣</span>
                            <span>Hashtags</span>
                        </div>
                    </li>
                </ul>

                <div className="sidebar-footer">
                    <div className="user-profile">
                        <div className="avatar">U</div>
                        <div className="user-info">
                            <span className="name">Creator</span>
                            <span className="plan">Free Plan</span>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
