import { useState } from 'react'
import CaptionEditor from './components/CaptionEditor'
import GeneratorPanel from './components/GeneratorPanel'
import SnippetLibrary from './components/SnippetLibrary'
import './styles.css'

function CaptionStudio() {
    const [text, setText] = useState('')
    const [platform, setPlatform] = useState('instagram')

    const handleInsert = (snippet) => {
        setText(prev => prev + (prev ? ' ' : '') + snippet)
    }

    return (
        <div className="studio-app">
            <header className="studio-header">
                <h2>Caption Studio</h2>
                <div className="platform-toggle">
                    {['instagram', 'twitter', 'tiktok', 'linkedin'].map(p => (
                        <button
                            key={p}
                            className={`platform-btn ${platform === p ? 'active' : ''}`}
                            onClick={() => setPlatform(p)}
                        >
                            {p.charAt(0).toUpperCase() + p.slice(1)}
                        </button>
                    ))}
                </div>
            </header>

            <div className="studio-layout">
                <main className="studio-main">
                    <CaptionEditor
                        text={text}
                        onChange={setText}
                        platform={platform}
                    />
                </main>

                <aside className="studio-sidebar">
                    <GeneratorPanel onSelect={handleInsert} />
                    <SnippetLibrary onInsert={handleInsert} />
                </aside>
            </div>
        </div>
    )
}

export default CaptionStudio
