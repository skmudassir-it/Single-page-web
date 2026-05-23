function MetricCard({ label, value, trend, period = '30d' }) {
    const isPositive = trend >= 0
    const periodLabel = period === '7d' ? 'last 7d' : period === '90d' ? 'last 90d' : 'last 30d'

    return (
        <div className="metric-card">
            <div className="metric-label">{label}</div>
            <div className="metric-value">{value}</div>
            <div className={`metric-trend ${isPositive ? 'trend-up' : 'trend-down'}`}>
                <span>{isPositive ? '↑' : '↓'}</span>
                <span>{Math.abs(trend)}% vs {periodLabel}</span>
            </div>
        </div>
    )
}

export default MetricCard
