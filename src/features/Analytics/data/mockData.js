import { subDays, format } from 'date-fns'

export const PLATFORMS = [
    { id: 'all', name: 'Overview', icon: '📊' },
    { id: 'instagram', name: 'Instagram', icon: '📸' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'twitter', name: 'X / Twitter', icon: '🐦' },
    { id: 'youtube', name: 'YouTube', icon: '▶️' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼' }
]

// Generate 30 days of trend data
const generateTrendData = () => {
    const data = []
    for (let i = 29; i >= 0; i--) {
        const date = subDays(new Date(), i)
        // Randomish coherent data
        const baseReach = 5000 + Math.random() * 2000
        const baseEng = baseReach * (0.05 + Math.random() * 0.05)

        data.push({
            date: format(date, 'MMM dd'),
            fullDate: format(date, 'yyyy-MM-dd'),
            reach: Math.round(baseReach),
            engagement: Math.round(baseEng),
            followers: 1200 + i * (5 + Math.random() * 5), // slow growth
            impressions: Math.round(baseReach * 1.5)
        })
    }
    return data
}

export const MOCK_TRENDS = generateTrendData()

export const MOCK_KPI = {
    impressions: { value: '45.2K', trend: 12, label: 'Impressions' },
    reach: { value: '32.1K', trend: 8, label: 'Reach' },
    engagementRate: { value: '6.4%', trend: -2, label: 'Eng. Rate' },
    followers: { value: '1,250', trend: 24, label: 'Followers' }
}

export const MOCK_POSTS = [
    {
        id: 1,
        platform: 'instagram',
        type: 'reel',
        thumbnail: null, // UI will show icon placeholder
        caption: "5 tips for better coffee ☕️ #barista",
        date: format(subDays(new Date(), 2), 'MMM dd'),
        reach: 4500,
        likes: 340,
        comments: 45,
        saves: 120,
        engagementRate: 8.2,
        insight: 'High Saves 🔥'
    },
    {
        id: 2,
        platform: 'tiktok',
        type: 'video',
        caption: "Day in the life of a dev 💻",
        date: format(subDays(new Date(), 4), 'MMM dd'),
        reach: 12500,
        likes: 2100,
        comments: 156,
        saves: 890,
        engagementRate: 15.4,
        insight: 'Viral Trend 🚀'
    },
    {
        id: 3,
        platform: 'twitter',
        type: 'text',
        caption: "Hot take: CSS is actually fun.",
        date: format(subDays(new Date(), 1), 'MMM dd'),
        reach: 890,
        likes: 45,
        comments: 12,
        saves: 2,
        engagementRate: 5.1,
        insight: 'Good Discussion 💬'
    },
    {
        id: 4,
        platform: 'linkedin',
        type: 'image',
        caption: "Excited to launch my new project!",
        date: format(subDays(new Date(), 5), 'MMM dd'),
        reach: 2200,
        likes: 120,
        comments: 24,
        saves: 5,
        engagementRate: 4.8,
        insight: 'Steady Growth 📈'
    },
    {
        id: 5,
        platform: 'youtube',
        type: 'video',
        caption: "Full React Tutorial (2025)",
        date: format(subDays(new Date(), 10), 'MMM dd'),
        reach: 5600,
        likes: 450,
        comments: 89,
        saves: 340,
        engagementRate: 7.2,
        insight: 'High Retention 👁️'
    }
]
