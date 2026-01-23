const ThreadView = ({ thread }) => {
    if (!thread) {
        return (
            <div className="cm-main" style={{ alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                Select a conversation
            </div>
        )
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
                        <span className="msg-time">{msg.time}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ThreadView
