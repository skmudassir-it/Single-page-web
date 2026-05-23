import { useState } from 'react'
import { MOCK_THREADS, SAVED_REPLIES } from './data/mockData'
import InboxSidebar from './components/InboxSidebar'
import ThreadView from './components/ThreadView'
import ReplyBox from './components/ReplyBox'
import './styles.css'

/**
 * Simple utility to show relative time from a Date object.
 * Returns strings like "Just now", "1m ago", "5m ago", "1h ago", etc.
 */
function getRelativeTime(date) {
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

function CommunityManager() {
    const [threads, setThreads] = useState(MOCK_THREADS)
    const [selectedId, setSelectedId] = useState(MOCK_THREADS[0].id)
    const [filter, setFilter] = useState('all')

    const activeThread = threads.find(t => t.id === selectedId)

    const handleSelect = (thread) => {
        setSelectedId(thread.id)
        // Mark as read mock
        if (thread.isUnread) {
            setThreads(prev => prev.map(t =>
                t.id === thread.id ? { ...t, isUnread: false } : t
            ))
        }
    }

    const handleSend = (text) => {
        if (!activeThread) return

        const now = new Date()
        const newMessage = {
            id: Date.now().toString(),
            sender: 'me',
            text: text,
            isMe: true,
            time: getRelativeTime(now),
            createdAt: now
        }

        setThreads(prev => prev.map(t => {
            if (t.id === activeThread.id) {
                return {
                    ...t,
                    messages: [...t.messages, newMessage],
                    preview: `You: ${text}`,
                    timestamp: getRelativeTime(now)
                }
            }
            return t
        }))
    }

    return (
        <div className="cm-app">
            <InboxSidebar
                threads={threads}
                selectedId={selectedId}
                onSelect={handleSelect}
                filter={filter}
                setFilter={setFilter}
            />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <ThreadView thread={activeThread} />
                {activeThread && (
                    <ReplyBox onSend={handleSend} savedReplies={SAVED_REPLIES} />
                )}
            </div>
        </div>
    )
}

export default CommunityManager
