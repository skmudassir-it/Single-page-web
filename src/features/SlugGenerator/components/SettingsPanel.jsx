import { PRESETS } from '../utils/slugUtils'

function SettingsPanel({ options, onOptionsChange, preset, onPresetChange }) {
    const handleToggle = (key) => {
        onOptionsChange({ ...options, [key]: !options[key] })
    }

    const handleSeparatorChange = (char) => {
        onOptionsChange({ ...options, separator: char })
    }

    return (
        <div className="slug-settings">
            <div className="setting-group">
                <label>Presets</label>
                <div className="preset-options">
                    {PRESETS.map(p => (
                        <button
                            key={p.id}
                            className={`preset-chip ${preset === p.id ? 'active' : ''}`}
                            onClick={() => {
                                onPresetChange(p.id)
                                onOptionsChange(p.options)
                            }}
                        >
                            {p.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="setting-group">
                <label>Format Rules</label>
                <div className="toggles">
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={options.lower}
                            onChange={() => handleToggle('lower')}
                        />
                        Lowercase
                    </label>
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={options.removeStopWords}
                            onChange={() => handleToggle('removeStopWords')}
                        />
                        Remove Stop Words
                    </label>
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={options.strict}
                            onChange={() => handleToggle('strict')}
                        />
                        Strict (Remove Special Chars)
                    </label>
                </div>
            </div>

            <div className="setting-group">
                <label>Separator</label>
                <div className="separator-options">
                    {['-', '_', '.'].map(sep => (
                        <button
                            key={sep}
                            className={`sep-btn ${options.separator === sep ? 'active' : ''}`}
                            onClick={() => handleSeparatorChange(sep)}
                        >
                            {sep === ' ' ? 'Space' : sep}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SettingsPanel
