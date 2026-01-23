function InboxSidebar({ threads, selectedId, onSelect, filter, setFilter }) {
    const filteredThreads = threads.filter(t => {
        if (filter === 'unread') return t.isUnread;
        if (filter === 'mention') return t.sentiment === 'negative'; // Mock logic for demo
        return true;
    })

    return (
        <div className="cm-sidebar">
            <div className="cm-header">
                <h2>Inbox</h2>
                <div className="thread-filters">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >All</button>
                    <button
                        className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
                        onClick={() => setFilter('unread')}
                    >Unread</button>
                    <button
                        className={`filter-btn ${filter === 'mention' ? 'active' : ''}`}
                        onClick={() => setFilter('mention')}
                    >Mentions</button>
                </div>
            </div>

            <div className="thread-list">
                {filteredThreads.map(thread => (
                    <div
                        key={thread.id}
                        className={`thread-item ${selectedId === thread.id ? 'active' : ''} ${thread.isUnread ? 'unread' : ''}`}
                        onClick={() => onSelect(thread)}
                    >
                        <div className="thread-header">
                            <div className="user-meta">
                                <div className="platform-icon">
                                    {thread.platform === 'instagram' && '📸'}
                                    {thread.platform === 'twitter' && '🐦'}
                                    {thread.platform === 'youtube' && '▶️'}
                                    {thread.platform === 'tiktok' && '🎵'}
                                </div>
                                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{thread.user.name}</span>
                            </div>
                            <span className="thread-time">{thread.timestamp}</span>
                        </div>
                        <div className="thread-preview">
                            {thread.preview}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InboxSidebar
