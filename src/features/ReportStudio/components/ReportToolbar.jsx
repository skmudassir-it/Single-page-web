function ReportToolbar({ title, onExport, onClear, onSave }) {
    return (
        <div className="rs-header">
            <h2>{title}</h2>
            <div className="toolbar">
                <select className="secondary-btn" style={{ height: '35px' }}>
                    <option>Last 30 Days</option>
                    <option>Last 7 Days</option>
                    <option>This Year</option>
                </select>
                <button className="secondary-btn" onClick={onClear}>Clear Canvas</button>
                <button className="secondary-btn" onClick={onSave}>Save Report</button>
                <button
                    className="primary-btn"
                    onClick={onExport}
                    style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: '500' }}
                >
                    Export HTML
                </button>
            </div>
        </div>
    )
}

export default ReportToolbar
