import { useState, useMemo, useCallback } from 'react'
import { PLATFORMS, MOCK_POSTS, MOCK_KPI_BY_PLATFORM, MOCK_TRENDS_BY_PLATFORM } from './data/mockData'
import MetricCard from './components/MetricCard'
import ChartWidget from './components/ChartWidget'
import PostList from './components/PostList'
import './styles.css'

const DATE_RANGE_OPTIONS = [
    { id: '7d', label: 'Last 7 days' },
    { id: '30d', label: 'Last 30 days' },
    { id: '90d', label: 'Last 90 days' }
]

const RANGE_DAYS = { '7d': 7, '30d': 30, '90d': 90 }

function AnalyticsDashboard() {
    const [selectedPlatform, setSelectedPlatform] = useState('all')
    const [dateRange, setDateRange] = useState('30d')

    // ── Platform-aware KPI ──────────────────────────────────────────
    const kpi = useMemo(
        () => MOCK_KPI_BY_PLATFORM[selectedPlatform] || MOCK_KPI_BY_PLATFORM.all,
        [selectedPlatform]
    )

    // ── Platform + date-range-aware trends ──────────────────────────
    const trends = useMemo(() => {
        const full = MOCK_TRENDS_BY_PLATFORM[selectedPlatform] || MOCK_TRENDS_BY_PLATFORM.all
        const days = RANGE_DAYS[dateRange] || 30
        // If we only have 30-days of mock data, slice last N for shorter ranges,
        // keep all 30 for longer ranges since we can't invent more data.
        return full.slice(Math.max(0, full.length - days))
    }, [selectedPlatform, dateRange])

    // ── Platform-filtered posts ─────────────────────────────────────
    const displayPosts = useMemo(() => {
        if (selectedPlatform === 'all') return MOCK_POSTS
        return MOCK_POSTS.filter(p => p.platform === selectedPlatform)
    }, [selectedPlatform])

    // ── Chart title ─────────────────────────────────────────────────
    const platformName = PLATFORMS.find(p => p.id === selectedPlatform)?.name || ''
    const chartTitle = selectedPlatform === 'all'
        ? `Reach Growth (${dateRange === '7d' ? '7 Days' : dateRange === '90d' ? '90 Days' : '30 Days'})`
        : `${platformName} Growth`

    // ── CSV Export ──────────────────────────────────────────────────
    const exportCSV = useCallback(() => {
        const platformLabel = PLATFORMS.find(p => p.id === selectedPlatform)?.name || 'All Platforms'
        const rangeLabel = DATE_RANGE_OPTIONS.find(o => o.id === dateRange)?.label || 'Last 30 days'
        const kpiData = kpi

        const rows = [
            ['Analytics Report'],
            [`Platform: ${platformLabel}`],
            [`Date Range: ${rangeLabel}`],
            [`Generated: ${new Date().toLocaleDateString()}`],
            [],
            ['KPIs'],
            ['Metric', 'Value', 'Trend (%)'],
            ['Impressions', kpiData.impressions.value, kpiData.impressions.trend],
            ['Reach', kpiData.reach.value, kpiData.reach.trend],
            ['Engagement Rate', kpiData.engagementRate.value, kpiData.engagementRate.trend],
            ['Followers', kpiData.followers.value, kpiData.followers.trend],
            [],
            ['Trend Data'],
            ['Date', 'Reach', 'Engagement', 'Followers', 'Impressions'],
            ...trends.map(t => [t.fullDate, t.reach, t.engagement, Math.round(t.followers), t.impressions]),
            [],
            ['Top Posts'],
            ['Caption', 'Platform', 'Date', 'Reach', 'Likes', 'Comments', 'Saves', 'Engagement Rate'],
            ...displayPosts.map(p => [
                p.caption, p.platform, p.date, p.reach,
                p.likes, p.comments, p.saves, p.engagementRate
            ])
        ]

        const csvContent = rows.map(row =>
            row.map(cell => {
                const str = String(cell ?? '')
                return str.includes(',') || str.includes('"') || str.includes('\n')
                    ? `"${str.replace(/"/g, '""')}"`
                    : str
            }).join(',')
        ).join('\n')

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `analytics-report-${selectedPlatform}-${dateRange}.csv`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }, [selectedPlatform, dateRange, kpi, trends, displayPosts])

    // ── Render ──────────────────────────────────────────────────────
    return (
        <div className="analytics-app">
            <div className="analytics-header">
                <h2>Analytics Dashboard</h2>
                <p>Track your growth and engagement across all platforms.</p>
            </div>

            {/* ── Platform Filter ── */}
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

            {/* ── Date Range Selector ── */}
            <div className="date-range-row">
                <div className="date-range-tabs">
                    {DATE_RANGE_OPTIONS.map(opt => (
                        <button
                            key={opt.id}
                            className={`date-range-tab ${dateRange === opt.id ? 'active' : ''}`}
                            onClick={() => setDateRange(opt.id)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
                <button className="export-btn" onClick={exportCSV} title="Download CSV report">
                    📥 Export Report
                </button>
            </div>

            {/* ── KPI Overview ── */}
            <div className="kpi-grid">
                <MetricCard {...kpi.impressions} period={dateRange} />
                <MetricCard {...kpi.reach} period={dateRange} />
                <MetricCard {...kpi.engagementRate} period={dateRange} />
                <MetricCard {...kpi.followers} period={dateRange} />
            </div>

            {/* ── Main Content Grid ── */}
            <div className="charts-section">
                <ChartWidget
                    title={chartTitle}
                    data={trends}
                    dataKey="reach"
                    color="#8b5cf6"
                />
                <PostList posts={displayPosts} />
            </div>

            {/* ── Secondary Chart Row ── */}
            <div className="charts-section" style={{ marginTop: '20px' }}>
                <ChartWidget
                    title="Engagement Trends"
                    data={trends}
                    dataKey="engagement"
                    color="#10b981"
                />
                <div className="export-card">
                    <h3>Export Report</h3>
                    <p style={{ color: 'var(--text-muted)', margin: '10px 0' }}>
                        Download a CSV report of your analytics data for {platformName || 'all platforms'}.
                        Includes KPIs, daily trends, and top-performing posts.
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '15px' }}>
                        Current range: {DATE_RANGE_OPTIONS.find(o => o.id === dateRange)?.label}
                    </p>
                    <button className="export-btn-large" onClick={exportCSV}>
                        📥 Download CSV Report
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsDashboard
