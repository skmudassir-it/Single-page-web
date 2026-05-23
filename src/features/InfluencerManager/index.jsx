import { useState, useEffect } from 'react'
import { CREATORS, CAMPAIGNS } from './data/mockData'
import CreatorList from './components/CreatorList'
import CampaignBoard from './components/CampaignBoard'
import './styles.css'

function InfluencerManager() {
    const [activeTab, setActiveTab] = useState('roster')
    const [campaigns, setCampaigns] = useState(CAMPAIGNS)
    const [showCampaignModal, setShowCampaignModal] = useState(false)
    const [campaignName, setCampaignName] = useState('')
    const [campaignBudget, setCampaignBudget] = useState('')
    const [campaignPlatform, setCampaignPlatform] = useState('instagram')
    const [toast, setToast] = useState({ message: '', visible: false })

    // Auto-hide toast after 3 seconds
    useEffect(() => {
        if (toast.visible) {
            const timer = setTimeout(() => setToast({ message: '', visible: false }), 3000)
            return () => clearTimeout(timer)
        }
    }, [toast.visible])

    const showToast = (message) => {
        setToast({ message, visible: true })
    }

    const handleInvite = (creator) => {
        showToast(`Invitation sent to ${creator.name}!`)
    }

    const handleCreateCampaign = (e) => {
        e.preventDefault()
        if (!campaignName.trim() || !campaignBudget.trim()) return

        const newCampaign = {
            id: `camp${Date.now()}`,
            title: campaignName.trim(),
            status: 'Planning',
            budget: campaignBudget.trim(),
            collaborations: []
        }

        setCampaigns(prev => [...prev, newCampaign])
        setCampaignName('')
        setCampaignBudget('')
        setCampaignPlatform('instagram')
        setShowCampaignModal(false)
        showToast(`Campaign "${newCampaign.title}" created!`)
    }

    return (
        <div className="im-app">
            {/* Toast notification */}
            {toast.visible && (
                <div style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    background: 'var(--primary, #3b82f6)',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    zIndex: 1000,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    animation: 'slideIn 0.3s ease'
                }}>
                    ✅ {toast.message}
                </div>
            )}

            {/* Campaign Creation Modal */}
            {showCampaignModal && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 999
                }} onClick={() => setShowCampaignModal(false)}>
                    <div style={{
                        background: 'var(--bg-primary, white)',
                        borderRadius: '12px',
                        padding: '28px',
                        width: '90%',
                        maxWidth: '440px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                    }} onClick={e => e.stopPropagation()}>
                        <h3 style={{ margin: '0 0 20px 0', fontSize: '1.2rem' }}>New Campaign</h3>
                        <form onSubmit={handleCreateCampaign}>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.85rem' }}>
                                    Campaign Name
                                </label>
                                <input
                                    type="text"
                                    value={campaignName}
                                    onChange={e => setCampaignName(e.target.value)}
                                    placeholder="e.g., Summer Launch 2026"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px',
                                        borderRadius: '6px',
                                        border: '1px solid var(--border-color, #ddd)',
                                        fontSize: '0.9rem',
                                        boxSizing: 'border-box',
                                        background: 'var(--bg-secondary, #f9f9f9)',
                                        color: 'var(--text-primary, #333)'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.85rem' }}>
                                    Budget
                                </label>
                                <input
                                    type="text"
                                    value={campaignBudget}
                                    onChange={e => setCampaignBudget(e.target.value)}
                                    placeholder="e.g., $5,000"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px',
                                        borderRadius: '6px',
                                        border: '1px solid var(--border-color, #ddd)',
                                        fontSize: '0.9rem',
                                        boxSizing: 'border-box',
                                        background: 'var(--bg-secondary, #f9f9f9)',
                                        color: 'var(--text-primary, #333)'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.85rem' }}>
                                    Platform
                                </label>
                                <select
                                    value={campaignPlatform}
                                    onChange={e => setCampaignPlatform(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px',
                                        borderRadius: '6px',
                                        border: '1px solid var(--border-color, #ddd)',
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',
                                        background: 'var(--bg-secondary, #f9f9f9)',
                                        color: 'var(--text-primary, #333)'
                                    }}
                                >
                                    <option value="instagram">Instagram</option>
                                    <option value="youtube">YouTube</option>
                                    <option value="tiktok">TikTok</option>
                                    <option value="twitter">Twitter</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                <button
                                    type="button"
                                    onClick={() => setShowCampaignModal(false)}
                                    style={{
                                        padding: '10px 20px',
                                        borderRadius: '6px',
                                        border: '1px solid var(--border-color, #ddd)',
                                        background: 'var(--bg-secondary, #f0f0f0)',
                                        color: 'var(--text-primary, #333)',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    style={{
                                        padding: '10px 20px',
                                        borderRadius: '6px',
                                        border: 'none',
                                        background: 'var(--primary, #3b82f6)',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem',
                                        fontWeight: 600
                                    }}
                                >
                                    Create Campaign
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="im-header">
                <h2>Influencer Manager</h2>
                <button
                    onClick={() => setShowCampaignModal(true)}
                    style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer' }}
                >
                    + New Campaign
                </button>
            </div>

            <div className="im-tabs">
                <button
                    className={`im-tab ${activeTab === 'roster' ? 'active' : ''}`}
                    onClick={() => setActiveTab('roster')}
                >
                    Creator Roster
                </button>
                <button
                    className={`im-tab ${activeTab === 'campaigns' ? 'active' : ''}`}
                    onClick={() => setActiveTab('campaigns')}
                >
                    Campaigns
                </button>
            </div>

            <div className="view-container">
                {activeTab === 'roster' ? (
                    <CreatorList creators={CREATORS} onInvite={handleInvite} />
                ) : (
                    <CampaignBoard campaigns={campaigns} creators={CREATORS} />
                )}
            </div>
        </div>
    )
}

export default InfluencerManager
