function PostCard({ post, onClick }) {
    const platformIcons = {
        instagram: '📸',
        tiktok: '🎵',
        twitter: '🐦',
        linkedin: '💼'
    }

    const statusColors = {
        draft: 'var(--border)',
        scheduled: 'var(--primary)',
        published: '#10b981'
    }

    return (
        <div
            className="post-card"
            onClick={(e) => { e.stopPropagation(); onClick(post) }}
            style={{ borderLeft: `3px solid ${statusColors[post.status] || 'gray'}` }}
        >
            <span className="post-icon">{platformIcons[post.platform] || '📄'}</span>
            <span className="post-title">{post.title}</span>
        </div>
    )
}

export default PostCard
