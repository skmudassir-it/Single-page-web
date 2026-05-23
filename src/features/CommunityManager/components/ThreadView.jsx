const ThreadView = ({ thread }) => {
    if (!thread) {
        return (
            <div className="cm-main" style={{ alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                Select a conversation
            </div>
        )
    }

    /** Simple relative-time utility (duplicated here for component self-sufficiency) */
    const getRelativeTime = (date) => {
        if (!date) return ''
        const now = new Date()
        const diffMs = now - date
        const diffSeconds = Math.floor(diffMs / 1000)
        const diffMinutes = Math.floor(diffSeconds / 60)
        const diffHours = Math.floor(diffMinutes / 60)
        const diffDays = Math.floor(diffHours / 24)

        if (diffSeconds < 10) return 'Just now'
        if (diffSeconds < 60) return `${diffSeconds}s ago`
        if (diffMinutes < 60) return `${diffMinutes}m ago`
        if (diffHours < 24) return `${diffHours}h ago`
        if (diffDays < 7) return `${diffDays}d ago`
        return date.toLocaleDateString()
    }

    return (
        <div className="cm-main">
            <div className="chat-header">
                <div className="chat-user">
                    <h3>{thread.user.name}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>via {thread.platform}</span>
                </div>
                <button style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>⋮</button>
            </div>

            <div className="messages-area">
                {thread.messages.map(msg => (
                    <div key={msg.id} className={`message-bubble ${msg.isMe ? 'sent' : 'received'}`}>
                        {msg.text}
                        <span className="msg-time">
                            {msg.createdAt ? getRelativeTime(new Date(msg.createdAt)) : msg.time}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ThreadView
