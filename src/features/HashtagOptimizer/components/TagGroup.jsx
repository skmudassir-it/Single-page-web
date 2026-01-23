function TagGroup({ title, tags, selectedIds, onToggle, variant }) {
    if (tags.length === 0) return null

    return (
        <div className={`tag-group ${variant}`}>
            <div className="group-header">
                <h4>{title}</h4>
                <span className="count-badge">{tags.length}</span>
            </div>
            <div className="tags-grid">
                {tags.map(tag => (
                    <button
                        key={tag.tag}
                        className={`tag-chip ${selectedIds.has(tag.tag) ? 'selected' : ''}`}
                        onClick={() => onToggle(tag.tag)}
                    >
                        <span className="tag-text">{tag.tag}</span>
                        <span className="tag-meta">
                            {tag.trend === 'up' && '🔥'}
                            {tag.trend === 'down' && '📉'}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TagGroup
