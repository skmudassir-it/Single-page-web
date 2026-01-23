function CampaignBoard({ campaigns, creators }) {
    const getCreatorName = (id) => {
        const c = creators.find(x => x.id === id)
        return c ? c.name : 'Unknown'
    }

    const getStatusClass = (status) => {
        if (status === 'Invited') return 'status-invited'
        if (status === 'In Progress') return 'status-progress'
        if (status === 'Delivered') return 'status-delivered'
        if (status === 'Paid') return 'status-paid'
        return ''
    }

    return (
        <div className="campaign-list">
            {campaigns.map(camp => (
                <div key={camp.id} className="campaign-card">
                    <div className="campaign-header">
                        <div className="campaign-title">
                            <h3>{camp.title}</h3>
                            <div className="campaign-meta">Status: {camp.status} • Budget: {camp.budget}</div>
                        </div>
                        <button className="action-btn-sm" style={{ padding: '8px 16px' }}>+ Manual Add</button>
                    </div>

                    {camp.collaborations.length > 0 ? (
                        <table className="collab-table">
                            <tbody>
                                {camp.collaborations.map((collab, idx) => (
                                    <tr key={idx}>
                                        <td>{getCreatorName(collab.creatorId)}</td>
                                        <td>{collab.deliverable}</td>
                                        <td>{collab.fee}</td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(collab.status)}`}>
                                                {collab.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button className="action-btn-sm">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)' }}>
                            No active collaborations. Invite creators from the Roster!
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default CampaignBoard
