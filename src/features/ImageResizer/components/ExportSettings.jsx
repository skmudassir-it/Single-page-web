function ExportSettings({ format, quality, onFormatChange, onQualityChange, onExport, isProcessing }) {
    return (
        <div className="export-settings">
            <div className="setting-group">
                <label>Format</label>
                <div className="toggle-group">
                    {['image/jpeg', 'image/png', 'image/webp'].map(fmt => (
                        <button
                            key={fmt}
                            className={`toggle-btn ${format === fmt ? 'active' : ''}`}
                            onClick={() => onFormatChange(fmt)}
                        >
                            {fmt.split('/')[1].toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className="setting-group">
                <label>Quality ({Math.round(quality * 100)}%)</label>
                <input
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.05"
                    value={quality}
                    onChange={(e) => onQualityChange(parseFloat(e.target.value))}
                />
            </div>

            <button
                className="btn-primary btn-block"
                onClick={onExport}
                disabled={isProcessing}
            >
                {isProcessing ? 'Processing...' : 'Download All (ZIP)'}
            </button>
        </div>
    )
}

export default ExportSettings
