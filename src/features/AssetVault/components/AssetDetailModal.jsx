function AssetDetailModal({ asset, onClose }) {
    if (!asset) return null

    const handleDownload = (preset) => {
        alert(`Downloading ${asset.name} with preset: ${preset}`)
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="asset-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-preview">
                    {asset.type === 'image' ? (
                        <img src={asset.url} alt={asset.name} />
                    ) : (
                        <div style={{ color: 'white', fontSize: '2rem' }}>[Video Preview Mock]</div>
                    )}
                </div>

                <div className="modal-sidebar">
                    <button className="close-modal" onClick={onClose}>&times;</button>

                    <h3 style={{ marginBottom: '20px', color: 'var(--text-main)' }}>{asset.name}</h3>

                    <div className="detail-section">
                        <h4>Metadata</h4>
                        <div className="data-row">
                            <span className="data-label">Type</span>
                            <span>{asset.type}</span>
                        </div>
                        <div className="data-row">
                            <span className="data-label">Dimensions</span>
                            <span>{asset.dimensions || asset.duration}</span>
                        </div>
                        <div className="data-row">
                            <span className="data-label">Size</span>
                            <span>{asset.size}</span>
                        </div>
                        <div className="data-row">
                            <span className="data-label">License</span>
                            <span>{asset.license}</span>
                        </div>
                    </div>

                    <div className="detail-section">
                        <h4>Tags</h4>
                        <div className="tag-cloud">
                            {asset.tags.map(t => (
                                <span key={t} className="tag">{t}</span>
                            ))}
                            <button style={{ background: 'none', border: '1px dashed var(--border)', borderRadius: '12px', padding: '4px 8px', color: 'var(--text-muted)', cursor: 'pointer' }}>+ Add</button>
                        </div>
                    </div>

                    <div className="action-row">
                        <button className="download-btn" onClick={() => handleDownload('original')}>Download Original</button>
                        <button style={{ ...btnStyle, background: 'var(--bg-dark)', border: '1px solid var(--border)', color: 'var(--text-main)' }} onClick={() => handleDownload('ig-story')}>Export for IG Story</button>
                        <button style={{ ...btnStyle, background: 'var(--bg-dark)', border: '1px solid var(--border)', color: 'var(--text-main)' }} onClick={() => handleDownload('yt-thumb')}>Export for YouTube</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const btnStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500'
}

export default AssetDetailModal
