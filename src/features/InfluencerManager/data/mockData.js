export const CREATORS = [
    {
        id: 'c1',
        name: 'Sarah Jenkins',
        handle: '@sarah.styles',
        platform: 'instagram',
        avatar: 'S',
        niche: 'Fashion',
        reach: '45k',
        engagement: '3.2%',
        location: 'New York, USA',
        rate: '$500'
    },
    {
        id: 'c2',
        name: 'Tech Daily',
        handle: '@techdaily',
        platform: 'youtube',
        avatar: 'T',
        niche: 'Technology',
        reach: '120k',
        engagement: '5.5%',
        location: 'London, UK',
        rate: '$1200'
    },
    {
        id: 'c3',
        name: 'Foodie Matt',
        handle: '@matt_eats',
        platform: 'tiktok',
        avatar: 'M',
        niche: 'Food',
        reach: '850k',
        engagement: '8.1%',
        location: 'Chicago, USA',
        rate: '$2500'
    },
    {
        id: 'c4',
        name: 'Yoga with Jen',
        handle: '@jen_yoga',
        platform: 'instagram',
        avatar: 'J',
        niche: 'Wellness',
        reach: '22k',
        engagement: '4.8%',
        location: 'Austin, USA',
        rate: '$300'
    },
    {
        id: 'c5',
        name: 'Crypto King',
        handle: '@crypto_king',
        platform: 'twitter',
        avatar: 'C',
        niche: 'Finance',
        reach: '55k',
        engagement: '2.1%',
        location: 'Remote',
        rate: '$800'
    }
]

export const CAMPAIGNS = [
    {
        id: 'camp1',
        title: 'Summer Launch 2026',
        status: 'Active',
        budget: '$5,000',
        collaborations: [
            { creatorId: 'c1', status: 'In Progress', fee: '$500', deliverable: '1 Reel + 1 Story' },
            { creatorId: 'c3', status: 'Invited', fee: '$2500', deliverable: '2 TikToks' }
        ]
    },
    {
        id: 'camp2',
        title: 'App Beta Testing',
        status: 'Planning',
        budget: '$2,000',
        collaborations: []
    }
]
