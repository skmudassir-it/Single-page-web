import { subDays, format } from 'date-fns'

export const PLATFORMS = [
    { id: 'all', name: 'Overview', icon: '📊' },
    { id: 'instagram', name: 'Instagram', icon: '📸' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'twitter', name: 'X / Twitter', icon: '🐦' },
    { id: 'youtube', name: 'YouTube', icon: '▶️' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼' }
]

// Generate trend data for N days (uses a seed so same platform always gets same data)
const generateTrendData = (days = 30, seed = 0) => {
    const data = []
    // Simple pseudo-random seeded by platform index so data is stable
    let rng = seed
    const nextRand = () => { rng = (rng * 16807 + 0) % 2147483647; return (rng - 1) / 2147483646 }

    for (let i = days - 1; i >= 0; i--) {
        const date = subDays(new Date(), i)
        const baseReach = 3000 + nextRand() * 4000
        const baseEng = baseReach * (0.04 + nextRand() * 0.06)

        data.push({
            date: format(date, 'MMM dd'),
            fullDate: format(date, 'yyyy-MM-dd'),
            reach: Math.round(baseReach),
            engagement: Math.round(baseEng),
            followers: 800 + (days - 1 - i) * (4 + nextRand() * 6),
            impressions: Math.round(baseReach * 1.5)
        })
    }
    return data
}

// Pre-generate platform-specific trends (seeded for consistency)
const MOCK_TRENDS_ALL = generateTrendData(30, 1)
const MOCK_TRENDS_INSTAGRAM = generateTrendData(30, 42)
const MOCK_TRENDS_TIKTOK = generateTrendData(30, 99)
const MOCK_TRENDS_TWITTER = generateTrendData(30, 7)
const MOCK_TRENDS_YOUTUBE = generateTrendData(30, 55)
const MOCK_TRENDS_LINKEDIN = generateTrendData(30, 33)

export const MOCK_TRENDS = MOCK_TRENDS_ALL

export const MOCK_TRENDS_BY_PLATFORM = {
    all: MOCK_TRENDS_ALL,
    instagram: MOCK_TRENDS_INSTAGRAM,
    tiktok: MOCK_TRENDS_TIKTOK,
    twitter: MOCK_TRENDS_TWITTER,
    youtube: MOCK_TRENDS_YOUTUBE,
    linkedin: MOCK_TRENDS_LINKEDIN
}

export const MOCK_KPI = {
    impressions: { value: '45.2K', trend: 12, label: 'Impressions' },
    reach: { value: '32.1K', trend: 8, label: 'Reach' },
    engagementRate: { value: '6.4%', trend: -2, label: 'Eng. Rate' },
    followers: { value: '1,250', trend: 24, label: 'Followers' }
}

export const MOCK_KPI_BY_PLATFORM = {
    all: { ...MOCK_KPI },
    instagram: {
        impressions: { value: '18.3K', trend: 15, label: 'Impressions' },
        reach: { value: '12.5K', trend: 10, label: 'Reach' },
        engagementRate: { value: '5.8%', trend: -3, label: 'Eng. Rate' },
        followers: { value: '820', trend: 18, label: 'Followers' }
    },
    tiktok: {
        impressions: { value: '22.1K', trend: 28, label: 'Impressions' },
        reach: { value: '16.8K', trend: 22, label: 'Reach' },
        engagementRate: { value: '8.2%', trend: 5, label: 'Eng. Rate' },
        followers: { value: '340', trend: 35, label: 'Followers' }
    },
    twitter: {
        impressions: { value: '1.2K', trend: -5, label: 'Impressions' },
        reach: { value: '890', trend: -2, label: 'Reach' },
        engagementRate: { value: '3.1%', trend: -8, label: 'Eng. Rate' },
        followers: { value: '150', trend: 4, label: 'Followers' }
    },
    youtube: {
        impressions: { value: '8.4K', trend: 6, label: 'Impressions' },
        reach: { value: '5.6K', trend: 3, label: 'Reach' },
        engagementRate: { value: '7.2%', trend: 1, label: 'Eng. Rate' },
        followers: { value: '210', trend: 12, label: 'Followers' }
    },
    linkedin: {
        impressions: { value: '3.2K', trend: 9, label: 'Impressions' },
        reach: { value: '2.2K', trend: 7, label: 'Reach' },
        engagementRate: { value: '4.8%', trend: 2, label: 'Eng. Rate' },
        followers: { value: '95', trend: 14, label: 'Followers' }
    }
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
