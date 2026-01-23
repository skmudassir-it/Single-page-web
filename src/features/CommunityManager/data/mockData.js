export const SAVED_REPLIES = [
    { id: '1', title: 'Thanks', text: "Thanks so much for the love! ❤️ We really appreciate it." },
    { id: '2', title: 'Support', text: "Hi there! Please email us at support@example.com and we'll help you out." },
    { id: '3', title: 'Collab', text: "Hey! We'd love to collaborate. DM us your info!" },
    { id: '4', title: 'Hours', text: "We are open Mon-Fri from 9am to 6pm!" }
]

export const MOCK_THREADS = [
    {
        id: 't1',
        platform: 'instagram',
        user: { name: 'jess_pess', avatar: 'J' },
        preview: 'Love this new feature! When is it live?',
        isUnread: true,
        sentiment: 'positive',
        timestamp: '2m ago',
        messages: [
            { id: 'm1', sender: 'jess_pess', text: 'Love this new feature! When is it live?', isMe: false, time: '10:30 AM' }
        ]
    },
    {
        id: 't2',
        platform: 'twitter',
        user: { name: 'dev_guru', avatar: 'D' },
        preview: 'My account is looked. Help pls.',
        isUnread: true,
        sentiment: 'negative',
        timestamp: '15m ago',
        messages: [
            { id: 'm1', sender: 'dev_guru', text: 'My account is locked. Help pls.', isMe: false, time: '10:15 AM' },
            { id: 'm2', sender: 'support_bot', text: 'Checking on this...', isMe: true, time: '10:16 AM' },
            { id: 'm3', sender: 'dev_guru', text: 'Still waiting', isMe: false, time: '10:20 AM' }
        ]
    },
    {
        id: 't3',
        platform: 'youtube',
        user: { name: 'VideoFan99', avatar: 'V' },
        preview: 'Great tutorial, subbed!',
        isUnread: false,
        sentiment: 'positive',
        timestamp: '1h ago',
        messages: [
            { id: 'm1', sender: 'VideoFan99', text: 'Great tutorial, subbed!', isMe: false, time: '9:30 AM' },
            { id: 'm2', sender: 'me', text: 'Thanks for subbing! 🤘', isMe: true, time: '9:45 AM' }
        ]
    },
    {
        id: 't4',
        platform: 'tiktok',
        user: { name: 'dance_queen', avatar: 'Q' },
        preview: 'Can you do the griddy?',
        isUnread: true,
        sentiment: 'neutral',
        timestamp: '3h ago',
        messages: [
            { id: 'm1', sender: 'dance_queen', text: 'Can you do the griddy?', isMe: false, time: '7:30 AM' }
        ]
    }
]
