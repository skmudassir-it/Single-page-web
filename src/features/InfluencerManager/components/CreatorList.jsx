function CreatorList({ creators, onInvite }) {
    return (
        <div className="creators-grid">
            {creators.map(creator => (
                <div key={creator.id} className="creator-card">
                    <div className="creator-header">
                        <div className="creator-avatar">{creator.avatar}</div>
                        <div className="creator-info">
                            <h4>{creator.name}</h4>
                            <span className="creator-handle">{creator.handle}</span>
                        </div>
                    </div>

                    <div className="creator-metrics">
                        <div className="metric-item">
                            <label>Reach</label>
                            <span>{creator.reach}</span>
                        </div>
                        <div className="metric-item">
                            <label>Eng.</label>
                            <span>{creator.engagement}</span>
                        </div>
                    </div>

                    <div className="creator-tags">
                        <span className="tag-badge">{creator.platform}</span>
                        <span className="tag-badge">{creator.niche}</span>
                    </div>

                    <button className="invite-btn" onClick={() => onInvite(creator)}>
                        Invite to Campaign
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CreatorList
