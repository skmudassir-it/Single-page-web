function PostList({ posts }) {
    const getPlatformIcon = (pid) => {
        switch (pid) {
            case 'instagram': return '📸';
            case 'tiktok': return '🎵';
            case 'twitter': return '🐦';
            case 'youtube': return '▶️';
            case 'linkedin': return '💼';
            default: return '📄';
        }
    }

    return (
        <div className="posts-card">
            <div className="chart-header">
                <h3>Top Performing Posts</h3>
                <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.9rem' }}>See All</button>
            </div>

            <div className="posts-list">
                {posts.map(post => (
                    <div key={post.id} className="post-item">
                        <div className="post-icon">
                            {getPlatformIcon(post.platform)}
                        </div>
                        <div className="post-content">
                            <div className="post-caption">{post.caption}</div>
                            <div className="post-meta">
                                <span>📅 {post.date}</span>
                                <span>👁️ {post.reach >= 1000 ? (post.reach / 1000).toFixed(1) + 'k' : post.reach}</span>
                                <span>❤️ {post.likes}</span>
                            </div>
                        </div>
                        {post.insight && (
                            <div className="insight-badge">{post.insight}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostList
