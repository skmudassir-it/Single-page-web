function MetricCard({ label, value, trend }) {
    const isPositive = trend >= 0

    return (
        <div className="metric-card">
            <div className="metric-label">{label}</div>
            <div className="metric-value">{value}</div>
            <div className={`metric-trend ${isPositive ? 'trend-up' : 'trend-down'}`}>
                <span>{isPositive ? '↑' : '↓'}</span>
                <span>{Math.abs(trend)}% vs last 30d</span>
            </div>
        </div>
    )
}

export default MetricCard
