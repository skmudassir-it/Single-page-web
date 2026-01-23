function AssetGrid({ assets, onSelect }) {
    if (assets.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '50px', color: 'var(--text-muted)' }}>
                No assets found matching filters.
            </div>
        )
    }

    return (
        <div className="asset-grid">
            {assets.map(asset => (
                <div key={asset.id} className="asset-card" onClick={() => onSelect(asset)}>
                    <div className="thumbnail-area">
                        {asset.type === 'image' ? (
                            <img src={asset.url} alt={asset.name} />
                        ) : (
                            // Placeholder for video
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#333', color: '#fff' }}>
                                ▶️ Video
                            </div>
                        )}
                        <span className="file-type-badge">{asset.type}</span>
                    </div>
                    <div className="asset-info">
                        <div className="asset-name" title={asset.name}>{asset.name}</div>
                        <div className="asset-meta">{asset.dimensions || asset.duration} • {asset.size}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AssetGrid
