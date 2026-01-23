import { useState } from 'react'

function SearchInput({ onSearch }) {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(input)
    }

    return (
        <form className="search-box-wrapper" onSubmit={handleSubmit}>
            <div className="search-input-group">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="Enter topic (e.g., travel, fitness) or caption..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="main-search-input"
                />
                <button type="submit" className="btn-primary search-btn">Find Tags</button>
            </div>
            <p className="search-hint">Tip: Try broad topics like "food" or "digital nomad"</p>
        </form>
    )
}

export default SearchInput
