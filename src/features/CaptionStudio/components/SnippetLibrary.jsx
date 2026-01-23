import { useState, useEffect } from 'react'
import { getSnippets, saveSnippet, deleteSnippet } from '../utils/snippetsStore'

function SnippetLibrary({ onInsert }) {
    const [snippets, setSnippets] = useState([])
    const [newText, setNewText] = useState('')
    const [isAdding, setIsAdding] = useState(false)

    useEffect(() => {
        setSnippets(getSnippets())
    }, [])

    const handleSave = () => {
        if (!newText.trim()) return
        const updated = saveSnippet(newText)
        setSnippets(updated)
        setNewText('')
        setIsAdding(false)
    }

    const handleDelete = (id, e) => {
        e.stopPropagation()
        const updated = deleteSnippet(id)
        setSnippets(updated)
    }

    return (
        <div className="snippet-library">
            <div className="library-header">
                <h3>Snippets</h3>
                <button className="btn-sm" onClick={() => setIsAdding(!isAdding)}>
                    {isAdding ? 'Cancel' : '+ New'}
                </button>
            </div>

            {isAdding && (
                <div className="add-snippet-box">
                    <input
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        placeholder="New snippet text..."
                    />
                    <button className="btn-primary btn-sm" onClick={handleSave}>Save</button>
                </div>
            )}

            <div className="snippet-list">
                {snippets.map(s => (
                    <div key={s.id} className="snippet-item" onClick={() => onInsert(s.text)}>
                        <span className="snippet-text">{s.text}</span>
                        <button className="delete-snippet" onClick={(e) => handleDelete(s.id, e)}>×</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SnippetLibrary
