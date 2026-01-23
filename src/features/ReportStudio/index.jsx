import { useState } from 'react'
import WidgetPalette from './components/WidgetPalette'
import WidgetCard from './components/WidgetCard'
import ReportToolbar from './components/ReportToolbar'
import { TEMPLATES, WIDGET_TYPES } from './data/reportData'
import './styles.css'

function ReportStudio() {
    // Initial state: Pre-load with "Monthly Overview"
    const [widgets, setWidgets] = useState([
        // Hardcoded initial Mock from Templates for better first impression
        { ...(WIDGET_TYPES.find(w => w.id === 'w_engagement')), uniqueId: 1 },
        { ...(WIDGET_TYPES.find(w => w.id === 'w_revenue')), uniqueId: 2 },
        { ...(WIDGET_TYPES.find(w => w.id === 'w_followers')), uniqueId: 3 },
        { ...(WIDGET_TYPES.find(w => w.id === 'w_top_posts')), uniqueId: 4 }
    ])

    const addWidget = (widgetConfig) => {
        const newWidget = {
            ...widgetConfig,
            uniqueId: Date.now() // Simple ID for react keys
        }
        setWidgets([...widgets, newWidget])
    }

    const removeWidget = (uniqueId) => {
        setWidgets(widgets.filter(w => w.uniqueId !== uniqueId))
    }

    const clearCanvas = () => {
        if (confirm('Are you sure you want to clear all widgets?')) {
            setWidgets([])
        }
    }

    const handleExport = () => {
        alert('Generating PDF Report... (Simulated)')
        // Feature expansion: html2canvas or jspdf logic would go here
    }

    return (
        <div className="rs-app">
            <ReportToolbar
                title="Monthly Report - October"
                onExport={handleExport}
                onClear={clearCanvas}
            />

            <div className="rs-layout">
                <WidgetPalette onAdd={addWidget} />

                <div className="rs-canvas">
                    {widgets.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '50px', color: 'var(--text-muted)' }}>
                            <p>Canvas is empty.</p>
                            <p>Select widgets from the left to build your report.</p>
                        </div>
                    ) : (
                        <div className="dashboard-grid">
                            {widgets.map(widget => (
                                <WidgetCard
                                    key={widget.uniqueId}
                                    widget={widget}
                                    onRemove={() => removeWidget(widget.uniqueId)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReportStudio
