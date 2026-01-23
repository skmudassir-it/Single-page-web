import { useAuth, PLANS } from '../../context/AuthContext'
import './Account.css'

function Account() {
    const { user, usage, updatePlan, logout } = useAuth()

    if (!user) return <div>Please login</div>

    const currentLimit = PLANS[user.plan.toUpperCase()].limit
    const usagePercent = Math.min(100, (usage / currentLimit) * 100)

    const handleUpgrade = (planId) => {
        if (confirm(`Confirm upgrade to ${PLANS[planId.toUpperCase()].name}?`)) {
            updatePlan(planId)
        }
    }

    return (
        <div className="account-container">
            <header className="account-header">
                <h1>My Account</h1>
                <button className="logout-btn" onClick={logout}>Sign Out</button>
            </header>

            <div className="usage-card">
                <h3>Current Usage</h3>
                <div className="usage-bar-container">
                    <div className="usage-bar-fill" style={{ width: `${usagePercent}%` }}></div>
                </div>
                <div className="usage-stats">
                    <span>{usage} / {currentLimit} requests used</span>
                    <span>{user.plan === 'free' ? 'Refresh on 1st of month' : 'Auto-scaling'}</span>
                </div>
            </div>

            <h3 style={{ marginTop: '40px', marginBottom: '20px', color: 'var(--text-main)' }}>Your Plan</h3>
            <div className="pricing-grid">
                {Object.values(PLANS).map(plan => (
                    <div key={plan.id} className={`plan-card ${user.plan === plan.id ? 'current' : ''}`}>
                        <div className="plan-name">{plan.name}</div>
                        <div className="plan-price">{plan.price === 0 ? 'Free' : `$${plan.price}/mo`}</div>
                        <div className="plan-limit">{plan.limit.toLocaleString()} requests</div>

                        {user.plan === plan.id ? (
                            <button disabled className="plan-btn current">Current Plan</button>
                        ) : (
                            <button
                                className="plan-btn upgrade"
                                onClick={() => handleUpgrade(plan.id)}
                            >
                                {plan.price > PLANS[user.plan.toUpperCase()].price ? 'Upgrade' : 'Downgrade'}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Account
