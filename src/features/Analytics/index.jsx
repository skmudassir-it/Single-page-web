import { useState, useEffect } from 'react'
import { PLATFORMS, MOCK_POSTS } from './data/mockData' // Keep static lists
import { api } from '../../services/db_adapter'
import MetricCard from './components/MetricCard'
import ChartWidget from './components/ChartWidget'
import PostList from './components/PostList'
import './styles.css'

function AnalyticsDashboard() {
    const [selectedPlatform, setSelectedPlatform] = useState('all')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Fetch data on mount
        async function loadData() {
            setLoading(true)
            const result = await api.getAnalytics()
            setData(result)
            setLoading(false)
        }
        loadData()
    }, [])

    if (loading) return <div className="analytics-app" style={{ padding: '40px' }}>Loading Insights...</div>

    const { kpi, trends } = data

    // Mock filtering: Shuffle/Slice mock posts to show "change"
    const displayPosts = selectedPlatform === 'all'
        ? MOCK_POSTS
        : MOCK_POSTS.slice().reverse().slice(0, 3)

    // Simple conditional title
    const chartTitle = selectedPlatform === 'all'
        ? "Reach Growth (30 Days)"
        : `${PLATFORMS.find(p => p.id === selectedPlatform)?.name || ''} Growth`

    return (
        <div className="analytics-app">
            <div className="analytics-header">
                <h2>Analytics Dashboard</h2>
                <p>Track your growth and engagement across all platforms.</p>
            </div>

            {/* Platform Filter */}
            <div className="platform-tabs">
                {PLATFORMS.map(p => (
                    <button
                        key={p.id}
                        className={`platform-tab ${selectedPlatform === p.id ? 'active' : ''}`}
                        onClick={() => setSelectedPlatform(p.id)}
                    >
                        <span>{p.icon}</span>
                        <span>{p.name}</span>
                    </button>
                ))}
            </div>

            {/* KPI Overview */}
            <div className="kpi-grid">
                <MetricCard {...kpi.impressions} />
                <MetricCard {...kpi.reach} />
                <MetricCard {...kpi.engagementRate} />
                <MetricCard {...kpi.followers} />
            </div>

            {/* Main Content Grid */}
            <div className="charts-section">
                <ChartWidget
                    title={chartTitle}
                    data={trends}
                    dataKey="reach"
                    color="#8b5cf6"
                />
                <PostList posts={displayPosts} />
            </div>

            {/* Secondary Chart Row */}
            <div className="charts-section" style={{ marginTop: '20px' }}>
                <ChartWidget
                    title="Engagement Trends"
                    data={trends}
                    dataKey="engagement"
                    color="#10b981"
                />
                <div className="connect-overlay" style={{ marginTop: 0, minHeight: '400px' }}>
                    <h3>Connect More Accounts</h3>
                    <p style={{ color: 'var(--text-muted)', margin: '10px 0' }}>
                        Connect your other social profiles to get a complete picture of your audience.
                    </p>
                    <button className="connect-btn">Connect +</button>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsDashboard
