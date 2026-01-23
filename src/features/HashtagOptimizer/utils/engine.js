import { HASHTAG_DATA, GENERIC_TAGS } from '../data/hashtags'

export const searchHashtags = (inputText) => {
    if (!inputText) return []

    // 1. Tokenize input (simple space split)
    const tokens = inputText.toLowerCase().split(/\s+/)

    // 2. Find matching categories
    const results = []
    const seenTags = new Set()

    tokens.forEach(token => {
        // Direct category match?
        if (HASHTAG_DATA[token]) {
            HASHTAG_DATA[token].forEach(item => {
                if (!seenTags.has(item.tag)) {
                    results.push(item)
                    seenTags.add(item.tag)
                }
            })
        }

        // Match specific keywords in tag text? (Simple heuristic to broaden search)
        // In a real app, we'd use an inverted index or search all arrays
        Object.keys(HASHTAG_DATA).forEach(key => {
            if (key.includes(token) || token.includes(key)) {
                HASHTAG_DATA[key].forEach(item => {
                    if (!seenTags.has(item.tag)) {
                        results.push(item)
                        seenTags.add(item.tag)
                    }
                })
            }
        })
    })

    // 3. Fallback if empty (or maybe just return empty to prompt user?)
    if (results.length === 0) {
        // Return generic tags if the input was extremely short, or maybe just return empty
        return GENERIC_TAGS.filter(t => !seenTags.has(t.tag))
    }

    return results
}

export const groupTags = (tags) => {
    return {
        broad: tags.filter(t => t.difficulty === 'hard'),
        medium: tags.filter(t => t.difficulty === 'medium'),
        niche: tags.filter(t => t.difficulty === 'easy')
    }
}

export const generateSmartPick = (tags) => {
    // Logic: 3 Broad, 5 Medium, 5 Niche (approx 13 tags)
    const groups = groupTags(tags)

    const pick = [
        ...groups.broad.slice(0, 3),
        ...groups.medium.slice(0, 5),
        ...groups.niche.slice(0, 5)
    ]

    return pick
}
