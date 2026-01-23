import { useState, useEffect } from 'react'
import { generateSlug } from '../utils/slugUtils'

function SingleGenerator({ options }) {
    const [input, setInput] = useState('')
    const [slug, setSlug] = useState('')
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        setSlug(generateSlug(input, options))
    }, [input, options])

    const handleCopy = () => {
        navigator.clipboard.writeText(slug)
        setCopied(true)
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
                    <button className="copy-btn" onClick={handleCopy} disabled={!slug}>
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleGenerator
