import { useState } from 'react'
import { MOCK_THREADS, SAVED_REPLIES } from './data/mockData'
import InboxSidebar from './components/InboxSidebar'
import ThreadView from './components/ThreadView'
import ReplyBox from './components/ReplyBox'
import './styles.css'

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

        const newMessage = {
            id: Date.now().toString(),
            sender: 'me',
            text: text,
            isMe: true,
            time: 'Just now'
        }

        setThreads(prev => prev.map(t => {
            if (t.id === activeThread.id) {
                return {
                    ...t,
                    messages: [...t.messages, newMessage],
                    preview: `You: ${text}`
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
