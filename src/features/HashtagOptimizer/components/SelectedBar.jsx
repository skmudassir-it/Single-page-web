function SelectedBar({ selectedTags, onClear, onSmartPick, onCopy }) {
    return (
        <div className="selected-bar">
            <div className="selection-info">
                <span className="count">{selectedTags.length}</span>
                <span className="label">Selected</span>
            </div>

            <div className="selection-actions">
                {selectedTags.length === 0 ? (
                    <button className="btn-secondary btn-sm" onClick={onSmartPick}>
                        ✨ Smart Pick
                    </button>
                ) : (
                    <>
                        <button className="btn-text btn-sm" onClick={onClear}>Clear</button>
                        <button className="btn-primary btn-sm" onClick={onCopy}>Copy to Clipboard</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default SelectedBar
