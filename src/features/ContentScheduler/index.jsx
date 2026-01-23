import { useState, useEffect } from 'react'
import { addMonths, subMonths, format } from 'date-fns'
import CalendarGrid from './components/CalendarGrid'
import DraftModal from './components/DraftModal'
import { getPosts, savePost, deletePost } from './utils/storage'
import './styles.css'

function ContentScheduler() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [posts, setPosts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedPost, setSelectedPost] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)

    // Load initial data
    useEffect(() => {
        setPosts(getPosts())
    }, [isModalOpen]) // Reload when modal closes to reflect saves

    const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1))
    const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1))
    const handleToday = () => setCurrentDate(new Date())

    const handleDayClick = (dateString) => {
        setSelectedDate(dateString)
        setSelectedPost(null)
        setIsModalOpen(true)
    }

    const handlePostClick = (post) => {
        setSelectedPost(post)
        setSelectedDate(null)
        setIsModalOpen(true)
    }

    const handleSave = (postData) => {
        const updated = savePost(postData)
        setPosts(updated)
    }

    const handleDelete = (id) => {
        const updated = deletePost(id)
        setPosts(updated)
    }

    return (
        <div className="scheduler-app">
            <header className="scheduler-header">
                <div className="header-left">
                    <h2>Content Calendar</h2>
                    <div className="date-controls">
                        <button className="icon-btn" onClick={handlePrevMonth}>←</button>
                        <span className="current-month">{format(currentDate, 'MMMM yyyy')}</span>
                        <button className="icon-btn" onClick={handleNextMonth}>→</button>
                        <button className="btn-text" onClick={handleToday}>Today</button>
                    </div>
                </div>
                <button className="btn-primary" onClick={() => handleDayClick(format(new Date(), 'yyyy-MM-dd'))}>
                    + New Post
                </button>
            </header>

            <CalendarGrid
                currentDate={currentDate}
                posts={posts}
                onDayClick={handleDayClick}
                onPostClick={handlePostClick}
            />

            <DraftModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                onDelete={handleDelete}
                post={selectedPost}
                date={selectedDate}
            />
        </div>
    )
}

export default ContentScheduler
