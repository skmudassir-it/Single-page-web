import { useState, useMemo } from 'react'
import SearchInput from './components/SearchInput'
import TagGroup from './components/TagGroup'
import SelectedBar from './components/SelectedBar'
import { searchHashtags, groupTags, generateSmartPick } from './utils/engine'
import './styles.css'

function HashtagOptimizer() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState(null)
    const [selected, setSelected] = useState(new Set())
    const [copied, setCopied] = useState(false)

    // Memoize search when query changes or on submit (actually engine search is fast)
    // For now, let's just trigger search explicitly

    const handleSearch = (q) => {
        setQuery(q)
        if (q.trim()) {
            const found = searchHashtags(q)
            setResults(groupTags(found))
        } else {
            setResults(null)
        }
    }

    const toggleTag = (tag) => {
        const next = new Set(selected)
        if (next.has(tag)) {
            next.delete(tag)
        } else {
            next.add(tag)
        }
        setSelected(next)
    }

    const handleSmartPick = () => {
        if (!results) return
        // Flatten current results
        const allTags = [...results.broad, ...results.medium, ...results.niche]
        const pick = generateSmartPick(allTags)
        setSelected(new Set(pick.map(t => t.tag)))
    }

    const handleClear = () => {
        setSelected(new Set())
    }

    const handleCopy = () => {
        const text = Array.from(selected).join(' ')
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="optimizer-app">
            <header className="optimizer-header">
                <h2>Hashtag Optimizer</h2>
                <p>Find the perfect mix of broad and niche tags.</p>
            </header>

            <div className="optimizer-layout">
                <section className="search-section">
                    <SearchInput onSearch={handleSearch} />
                </section>

                {results ? (
                    <section className="results-section">
                        <TagGroup
                            title="🔥 High Reach (Broad)"
                            tags={results.broad}
                            selectedIds={selected}
                            onToggle={toggleTag}
                            variant="group-broad"
                        />

                        <TagGroup
                            title="⚖️ Balanced (Medium)"
                            tags={results.medium}
                            selectedIds={selected}
                            onToggle={toggleTag}
                            variant="group-medium"
                        />

                        <TagGroup
                            title="🎯 Targeted (Niche)"
                            tags={results.niche}
                            selectedIds={selected}
                            onToggle={toggleTag}
                            variant="group-niche"
                        />
                    </section>
                ) : (
                    <div className="empty-state-search">
                        <p>Enter a topic above to discover hashtags.</p>
                        <div className="trend-chips">
                            <span className="chip">Trending: #photography</span>
                            <span className="chip">Trending: #fitnessmotivation</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="bottom-bar-wrapper">
                <SelectedBar
                    selectedTags={Array.from(selected)}
                    onClear={handleClear}
                    onSmartPick={handleSmartPick}
                    onCopy={handleCopy}
                />
                {copied && <div className="toast">Copied to clipboard!</div>}
            </div>
        </div>
    )
}

export default HashtagOptimizer
