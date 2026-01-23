import { useState } from 'react'
import { generateDrafts } from '../utils/mockAI'

function GeneratorPanel({ onSelect }) {
    const [topic, setTopic] = useState('')
    const [tone, setTone] = useState('casual')
    const [drafts, setDrafts] = useState([])
    const [loading, setLoading] = useState(false)

    const handleGenerate = (e) => {
        e.preventDefault()
        if (!topic) return

        setLoading(true)
        // Simulate network delay
        setTimeout(() => {
            const results = generateDrafts(topic, tone)
            setDrafts(results)
            setLoading(false)
        }, 800)
    }

    return (
        <div className="generator-panel">
            <h3>Magic Draft 🪄</h3>
            <form onSubmit={handleGenerate}>
                <div className="form-group">
                    <label>Topic / Keywords</label>
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., Summer Sale"
                    />
                </div>
                <div className="form-group">
                    <label>Tone</label>
                    <select value={tone} onChange={(e) => setTone(e.target.value)}>
                        <option value="professional">Professional</option>
                        <option value="casual">Casual</option>
                        <option value="witty">Witty</option>
                        <option value="inspirational">Inspirational</option>
                    </select>
                </div>
                <button type="submit" className="btn-primary btn-block" disabled={loading || !topic}>
                    {loading ? 'Generating...' : 'Generate drafts'}
                </button>
            </form>

            <div className="draft-results">
                {drafts.map((draft, i) => (
                    <div key={i} className="draft-card" onClick={() => onSelect(draft)}>
                        <p>{draft}</p>
                        <span className="use-hint">Click to use</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GeneratorPanel
