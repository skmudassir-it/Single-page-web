import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format, isSameMonth, isSameDay } from 'date-fns'
import PostCard from './PostCard'

function CalendarGrid({ currentDate, posts, onDayClick, onPostClick }) {
    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const dayList = eachDayOfInterval({ start: startDate, end: endDate })
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return (
        <div className="calendar-grid">
            <div className="week-header">
                {daysOfWeek.map(d => <div key={d} className="week-day">{d}</div>)}
            </div>

            <div className="days-grid">
                {dayList.map(day => {
                    const dayString = format(day, 'yyyy-MM-dd')
                    const dayPosts = posts.filter(p => p.date === dayString)
                    const isCurrentMonth = isSameMonth(day, monthStart)

                    return (
                        <div
                            key={dayString}
                            className={`day-cell ${!isCurrentMonth ? 'other-month' : ''}`}
                            onClick={() => onDayClick(dayString)}
                            data-day-name={format(day, 'EEEE')}
                        >
                            <span className="day-number">{format(day, 'd')}</span>
                            <div className="day-content">
                                {dayPosts.map(post => (
                                    <PostCard key={post.id} post={post} onClick={onPostClick} />
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CalendarGrid
