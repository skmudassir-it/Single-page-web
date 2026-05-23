function FilterSidebar({ collections, activeFilter, setFilter }) {
    return (
        <div className="av-sidebar">
            <div className="filter-group">
                <h3>Library</h3>
                <div className="filter-list">
                    <div
                        className={`filter-item ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        <span>All Assets</span>
                    </div>
                    <div
                        className={`filter-item ${activeFilter === 'image' ? 'active' : ''}`}
                        onClick={() => setFilter('image')}
                    >
                        <span>Images</span>
                    </div>
                    <div
                        className={`filter-item ${activeFilter === 'video' ? 'active' : ''}`}
                        onClick={() => setFilter('video')}
                    >
                        <span>Videos</span>
                    </div>
                </div>
            </div>

            <div className="filter-group">
                <h3>Collections</h3>
                <div className="filter-list">
                    {collections.map(col => (
                        <div
                            key={col.id}
                            className={`filter-item ${activeFilter === col.id ? 'active' : ''}`}
                            onClick={() => setFilter(col.id)}
                        >
                            <span>{col.name}</span>
                            <span className="count">{col.count}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar
