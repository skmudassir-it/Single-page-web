export const WIDGET_TYPES = [
    {
        id: 'w_followers',
        name: 'Follower Growth',
        type: 'chart',
        category: 'Audience',
        width: 2, // grid units
        data: [
            { name: 'Jan', value: 1200 },
            { name: 'Feb', value: 1350 },
            { name: 'Mar', value: 1600 },
            { name: 'Apr', value: 1900 },
            { name: 'May', value: 2400 }
        ]
    },
    {
        id: 'w_engagement',
        name: 'Engagement Rate',
        type: 'kpi',
        category: 'Performance',
        width: 1,
        value: '4.8%',
        change: '+0.4%',
        trend: 'up'
    },
    {
        id: 'w_revenue',
        name: 'Ad Revenue',
        type: 'kpi',
        category: 'Business',
        width: 1,
        value: '$1,240',
        change: '-5%',
        trend: 'down'
    },
    {
        id: 'w_top_posts',
        name: 'Top 5 Posts',
        type: 'table',
        category: 'Content',
        width: 3,
        data: [
            { id: 1, title: 'Summer Vlog', views: '45K', likes: '2.1K' },
            { id: 2, title: 'Setup Tour', views: '32K', likes: '1.8K' },
            { id: 3, title: 'Coding Tips', views: '28K', likes: '1.5K' },
            { id: 4, title: 'Day in Life', views: '22K', likes: '1.2K' },
            { id: 5, title: 'Q&A Special', views: '19K', likes: '900' }
        ]
    },
    {
        id: 'w_source',
        name: 'Traffic Sources',
        type: 'pie', // using chart logic
        category: 'Audience',
        width: 2,
        data: [
            { name: 'Search', value: 40 },
            { name: 'Direct', value: 30 },
            { name: 'Social', value: 20 },
            { name: 'Other', value: 10 }
        ]
    }
]

export const TEMPLATES = {
    overview: {
        title: 'Monthly Overview',
        widgets: ['w_engagement', 'w_revenue', 'w_followers', 'w_top_posts']
    },
    social: {
        title: 'Social Growth',
        widgets: ['w_followers', 'w_engagement', 'w_source']
    }
}
