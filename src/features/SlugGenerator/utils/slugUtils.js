import slugify from 'slugify'

export const STOP_WORDS = [
    'a', 'an', 'the', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'to', 'for', 'of', 'with'
]

export const PRESETS = [
    {
        id: 'standard',
        name: 'Standard',
        options: { lower: true, strict: true, removeStopWords: false, separator: '-' }
    },
    {
        id: 'blog',
        name: 'Blog Post',
        options: { lower: true, strict: true, removeStopWords: true, separator: '-' }
    },
    {
        id: 'file',
        name: 'File Name',
        options: { lower: true, strict: false, removeStopWords: false, separator: '_' }
    },
    {
        id: 'strict',
        name: 'Strict / SEO',
        options: { lower: true, strict: true, removeStopWords: true, separator: '-' }
    }
]

export const generateSlug = (text, options = {}) => {
    let cleanText = text

    if (options.removeStopWords) {
        // Simple regex to remove stop words. 
        // Note: This is a basic implementation. For production, a more robust tokenization might be needed.
        const regex = new RegExp(`\\b(${STOP_WORDS.join('|')})\\b`, 'gi')
        cleanText = cleanText.replace(regex, ' ').replace(/\s+/g, ' ').trim()
    }

    return slugify(cleanText, {
        lower: options.lower ?? true,
        strict: options.strict ?? true,
        replacement: options.separator || '-',
        trim: true
    })
}
