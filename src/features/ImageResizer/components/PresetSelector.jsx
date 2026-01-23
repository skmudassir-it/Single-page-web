import { SOCIAL_PRESETS } from '../utils/presets'

function PresetSelector({ currentPresetId, onSelect }) {
    return (
        <div className="preset-grid">
            {SOCIAL_PRESETS.map(preset => (
                <button
                    key={preset.id}
                    className={`preset-card ${currentPresetId === preset.id ? 'active' : ''}`}
                    onClick={() => onSelect(preset)}
                >
                    <span className="preset-icon">{preset.icon}</span>
                    <div className="preset-info">
                        <span className="preset-name">{preset.platform}</span>
                        <span className="preset-dims">{preset.width} x {preset.height}</span>
                    </div>
                </button>
            ))}
            <button
                className={`preset-card ${currentPresetId === 'custom' ? 'active' : ''}`}
                onClick={() => onSelect({ id: 'custom', platform: 'Custom', aspect: null })}
            >
                <span className="preset-icon">⚙️</span>
                <div className="preset-info">
                    <span className="preset-name">Custom</span>
                    <span className="preset-dims">Freeform</span>
                </div>
            </button>
        </div>
    )
}

export default PresetSelector
