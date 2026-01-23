function BatchQueue({ items, activeId, onSelect, onRemove, onAdd }) {
    return (
        <div className="batch-queue">
            <div className="queue-list">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`queue-item ${activeId === item.id ? 'active' : ''}`}
                        onClick={() => onSelect(item.id)}
                    >
                        <img src={item.preview} alt="Thumb" className="queue-thumb" />
                        <button
                            className="queue-remove"
                            onClick={(e) => { e.stopPropagation(); onRemove(item.id); }}
                        >
                            ×
                        </button>
                        {item.status === 'done' && <div className="status-badge success">✓</div>}
                    </div>
                ))}
                {/* Helper to add more */}
                <div className="queue-add">
                    <label htmlFor="addMoreInput" className="add-btn">+</label>
                    <input
                        id="addMoreInput"
                        type="file"
                        multiple
                        accept="image/*"
                        hidden
                        onChange={(e) => onAdd(e.target.files)}
                    />
                </div>
            </div>
        </div>
    )
}

export default BatchQueue
