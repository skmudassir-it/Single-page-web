import { useState } from 'react'
import { CREATORS, CAMPAIGNS } from './data/mockData'
import CreatorList from './components/CreatorList'
import CampaignBoard from './components/CampaignBoard'
import './styles.css'

function InfluencerManager() {
    const [activeTab, setActiveTab] = useState('roster')

    const handleInvite = (creator) => {
        alert(`Invited ${creator.name} to the active campaign! (Simulated)`)
    }

    return (
        <div className="im-app">
            <div className="im-header">
                <h2>Influencer Manager</h2>
                <button
                    onClick={() => alert('New Campaign Wizard would open here')}
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
                    <CampaignBoard campaigns={CAMPAIGNS} creators={CREATORS} />
                )}
            </div>
        </div>
    )
}

export default InfluencerManager
