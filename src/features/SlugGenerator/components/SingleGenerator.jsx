import { useState, useEffect } from 'react'
import { generateSlug } from '../utils/slugUtils'

function SingleGenerator({ options }) {
    const [input, setInput] = useState('')
    const [slug, setSlug] = useState('')
    const [copied, setCopied] = useState(false)
    const [history, setHistory] = useState([])

    useEffect(() => {
        const generated = generateSlug(input, options)
        setSlug(generated)
    }, [input, options])

    const handleCopy = () => {
        if (!slug) return
        navigator.clipboard.writeText(slug)
        setCopied(true)
        setHistory(prev => [slug, ...prev.filter(h => h !== slug)].slice(0, 5))
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="single-generator">
            <div className="input-group">
                <label>Input Text</label>
                <textarea
                    placeholder="Enter title or phrase here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    rows={3}
                />
            </div>

            <div className="result-group">
                <label>Generated Slug</label>
                <div className="slug-display">
                    <span className="domain-hint">your-site.com/</span>
                    <span className="slug-value">{slug || 'your-slug-here'}</span>
                    {slug && <span className="slug-length">({slug.length} chars)</span>}
                    <button className="copy-btn" onClick={handleCopy} disabled={!slug}>
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>

            {history.length > 0 && (
                <div className="slug-history">
                    <label>Recent Slugs</label>
                    <div className="history-list">
                        {history.map((h, i) => (
                            <span key={i} className="history-chip" onClick={() => setInput(h)}>{h}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SingleGenerator
