import { v4 as uuidv4 } from 'uuid'

const STORAGE_KEY = 'socialflow_caption_snippets'

const INITIAL_SNIPPETS = [
    { id: '1', text: 'Link in bio! 🔗' },
    { id: '2', text: 'Follow for more tips! ✨' },
    { id: '3', text: 'DM "READY" to get started.' }
]

export const getSnippets = () => {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return INITIAL_SNIPPETS
    try {
        return JSON.parse(data)
    } catch {
        return []
    }
}

export const saveSnippet = (text) => {
    if (!text.trim()) return getSnippets()

    const snippets = getSnippets()
    const newSnippet = { id: uuidv4(), text }
    const updated = [newSnippet, ...snippets]

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    return updated
}

export const deleteSnippet = (id) => {
    const snippets = getSnippets()
    const updated = snippets.filter(s => s.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    return updated
}
