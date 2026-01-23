import { useState } from 'react'
import SingleGenerator from './components/SingleGenerator'
import BulkGenerator from './components/BulkGenerator'
import SettingsPanel from './components/SettingsPanel'
import { PRESETS } from './utils/slugUtils'
import './styles.css'

function SlugGenerator() {
    const [activeTab, setActiveTab] = useState('single')
    const [activePreset, setActivePreset] = useState('standard')
    const [options, setOptions] = useState(PRESETS.find(p => p.id === 'standard').options)

    return (
        <div className="slug-app">
            <header className="slug-header">
                <h2>Slug Generator</h2>
                <p>Create clean, SEO-friendly URLs instantly.</p>
            </header>

            <div className="slug-layout">
                <div className="slug-main">
                    <div className="slug-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'single' ? 'active' : ''}`}
                            onClick={() => setActiveTab('single')}
                        >
                            Single
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'bulk' ? 'active' : ''}`}
                            onClick={() => setActiveTab('bulk')}
                        >
                            Bulk (CSV)
                        </button>
                    </div>

                    <div className="slug-content">
                        {activeTab === 'single' ? (
                            <SingleGenerator options={options} />
                        ) : (
                            <BulkGenerator options={options} />
                        )}
                    </div>
                </div>

                <aside className="slug-sidebar">
                    <h3>Settings</h3>
                    <SettingsPanel
                        options={options}
                        onOptionsChange={setOptions}
                        preset={activePreset}
                        onPresetChange={setActivePreset}
                    />
                </aside>
            </div>
        </div>
    )
}

export default SlugGenerator
