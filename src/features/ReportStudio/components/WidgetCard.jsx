import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

function WidgetCard({ widget, onRemove }) {
    const renderContent = () => {
        if (widget.type === 'kpi') {
            return (
                <div style={{ marginTop: '10px' }}>
                    <div className="kpi-value">{widget.value}</div>
                    <div className={`kpi-change ${widget.trend}`}>
                        {widget.trend === 'up' ? '▲' : '▼'} {widget.change} vs last month
                    </div>
                </div>
            )
        }

        if (widget.type === 'chart') {
            // Simplified chart rendering based on name for mock variety
            if (widget.name === 'Follower Growth') {
                return (
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart data={widget.data}>
                            <XAxis dataKey="name" hide />
                            <Tooltip contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px' }} />
                            <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                        </AreaChart>
                    </ResponsiveContainer>
                )
            }
        }

        if (widget.type === 'pie') {
            return (
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={widget.data}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {widget.data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px' }} />
                    </PieChart>
                </ResponsiveContainer>
            )
        }

        if (widget.type === 'table') {
            return (
                <div style={{ marginTop: '10px', overflowX: 'auto' }}>
                    <table className="simple-table">
                        <thead>
                            <tr>
                                <th>Post</th>
                                <th>Views</th>
                                <th>Likes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {widget.data.map(row => (
                                <tr key={row.id}>
                                    <td>{row.title}</td>
                                    <td>{row.views}</td>
                                    <td>{row.likes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }

        return <div>Unknown Widget Type</div>
    }

    return (
        <div className={`dashboard-widget w-${widget.width}`}>
            <div className="widget-header">
                <span className="widget-title">{widget.name}</span>
                <div className="widget-controls">
                    <button onClick={onRemove} title="Remove Widget">&times;</button>
                </div>
            </div>
            {renderContent()}
        </div>
    )
}

export default WidgetCard
