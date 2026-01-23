// Simplified static dataset for demo purposes
// In a real app, this might be huge or fetched from an API
export const HASHTAG_DATA = {
    // Categories based on keywords
    'travel': [
        { tag: '#travel', difficulty: 'hard', volume: '680M', trend: 'steady' },
        { tag: '#travelgram', difficulty: 'hard', volume: '160M', trend: 'steady' },
        { tag: '#wanderlust', difficulty: 'hard', volume: '140M', trend: 'down' },
        { tag: '#travelphotography', difficulty: 'medium', volume: '100M', trend: 'up' },
        { tag: '#solotravel', difficulty: 'medium', volume: '10M', trend: 'up' },
        { tag: '#travelblogger', difficulty: 'medium', volume: '60M', trend: 'steady' },
        { tag: '#digitalnomad', difficulty: 'medium', volume: '15M', trend: 'up' },
        { tag: '#girlswhotravel', difficulty: 'easy', volume: '5M', trend: 'steady' },
        { tag: '#traveldiaries', difficulty: 'easy', volume: '2M', trend: 'up' },
        { tag: '#hiddengems', difficulty: 'easy', volume: '1M', trend: 'up' }
    ],
    'fitness': [
        { tag: '#fitness', difficulty: 'hard', volume: '500M', trend: 'steady' },
        { tag: '#gym', difficulty: 'hard', volume: '250M', trend: 'steady' },
        { tag: '#workout', difficulty: 'hard', volume: '200M', trend: 'steady' },
        { tag: '#fitfam', difficulty: 'medium', volume: '110M', trend: 'down' },
        { tag: '#healthylifestyle', difficulty: 'medium', volume: '90M', trend: 'up' },
        { tag: '#personaltrainer', difficulty: 'medium', volume: '40M', trend: 'steady' },
        { tag: '#gymlife', difficulty: 'medium', volume: '70M', trend: 'steady' },
        { tag: '#homegym', difficulty: 'easy', volume: '8M', trend: 'up' },
        { tag: '#fitmom', difficulty: 'easy', volume: '20M', trend: 'steady' },
        { tag: '#beginnerworkout', difficulty: 'easy', volume: '500k', trend: 'up' }
    ],
    'food': [
        { tag: '#food', difficulty: 'hard', volume: '490M', trend: 'steady' },
        { tag: '#foodporn', difficulty: 'hard', volume: '290M', trend: 'steady' },
        { tag: '#foodie', difficulty: 'hard', volume: '220M', trend: 'up' },
        { tag: '#instafood', difficulty: 'medium', volume: '100M', trend: 'down' },
        { tag: '#healthyfood', difficulty: 'medium', volume: '90M', trend: 'up' },
        { tag: '#recipes', difficulty: 'medium', volume: '15M', trend: 'up' },
        { tag: '#veganrecipes', difficulty: 'medium', volume: '25M', trend: 'up' },
        { tag: '#comfortfood', difficulty: 'easy', volume: '8M', trend: 'steady' },
        { tag: '#easyrecipes', difficulty: 'easy', volume: '2M', trend: 'up' },
        { tag: '#cheflife', difficulty: 'easy', volume: '15M', trend: 'steady' }
    ]
}

// Fallback generic tags if no keyword matches
export const GENERIC_TAGS = [
    { tag: '#instagood', difficulty: 'hard', volume: '1.5B', trend: 'steady' },
    { tag: '#photooftheday', difficulty: 'hard', volume: '1B', trend: 'steady' },
    { tag: '#picoftheday', difficulty: 'hard', volume: '700M', trend: 'steady' },
    { tag: '#like4like', difficulty: 'medium', volume: '500M', trend: 'down' },
    { tag: '#followme', difficulty: 'medium', volume: '400M', trend: 'down' },
    { tag: '#aesthetics', difficulty: 'easy', volume: '5M', trend: 'up' }
]
