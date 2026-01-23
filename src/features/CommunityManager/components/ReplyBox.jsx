import { useState } from 'react'

function ReplyBox({ onSend, savedReplies }) {
    const [text, setText] = useState('')

    const handleSend = () => {
        if (!text.trim()) return
        onSend(text)
        setText('')
    }

    const insertReply = (replyText) => {
        setText(replyText)
    }

    return (
        <div className="reply-area">
            <div className="saved-replies">
                {savedReplies.map(reply => (
                    <button
                        key={reply.id}
                        className="reply-pill"
                        onClick={() => insertReply(reply.text)}
                        title={reply.text}
                    >
                        {reply.title}
                    </button>
                ))}
            </div>

            <div className="input-container">
                <textarea
                    className="reply-input"
                    placeholder="Type a reply..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            handleSend()
                        }
                    }}
                />
                <button className="send-btn" onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default ReplyBox
