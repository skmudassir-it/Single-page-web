import { v4 as uuidv4 } from 'uuid'

const STORAGE_KEY = 'socialflow_scheduler_posts'

// Sample initial data if empty
const INITIAL_POSTS = [
    {
        id: 'sample-1',
        title: 'Launch Announcement',
        date: new Date().toISOString().split('T')[0], // Today
        platform: 'instagram',
        status: 'scheduled',
        caption: 'Excited to announce our new feature!'
    }
]

export const getPosts = () => {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return INITIAL_POSTS
    try {
        return JSON.parse(data)
    } catch {
        return []
    }
}

export const savePost = (post) => {
    const posts = getPosts()
    const index = posts.findIndex(p => p.id === post.id)

    let updatedPosts
    if (index >= 0) {
        updatedPosts = [...posts]
        updatedPosts[index] = post
    } else {
        updatedPosts = [...posts, { ...post, id: post.id || uuidv4() }]
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts))
    return updatedPosts
}

export const deletePost = (id) => {
    const posts = getPosts()
    const updated = posts.filter(p => p.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    return updated
}
