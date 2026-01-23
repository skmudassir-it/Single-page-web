import { WIDGET_TYPES } from '../data/reportData'

function WidgetPalette({ onAdd }) {
    return (
        <div className="rs-palette">
            <div className="palette-header">
                <span>Widgets</span>
            </div>
            <div className="palette-list">
                {WIDGET_TYPES.map(widget => (
                    <div
                        key={widget.id}
                        className="widget-preview"
                        onClick={() => onAdd(widget)}
                    >
                        <div className="widget-preview-title">+ {widget.name}</div>
                        <div className="widget-preview-type">{widget.category} • {widget.type}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WidgetPalette
