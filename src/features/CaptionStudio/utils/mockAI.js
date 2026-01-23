// Simulates an AI response based on topic and tone
export const generateDrafts = (topic, tone) => {
    const templates = {
        professional: [
            `Excited to share insights on ${topic}. Ideally suited for those looking to improve efficiency. #business #growth`,
            `Key takeaways regarding ${topic}: It's time to rethink our strategy. Read more in the link below. 💼`,
            `The future of ${topic} is here. Are you ready to adapt? #innovation`
        ],
        casual: [
            `Just thinking about ${topic} today! What do you guys think? 🤔`,
            `Loving this new vibe with ${topic}. Can't wait to show you more! ✨`,
            `${topic} = Life because why not? 😂 #vibes`
        ],
        witty: [
            `They said ${topic} was impossible. Hold my coffee. ☕️`,
            `If ${topic} was a movie, I'd be the main character. 🎬`,
            `Trying to master ${topic} like... send help! 🏳️`
        ],
        inspirational: [
            `"The journey of ${topic} begins with a single step." ✨ Keep going.`,
            `Transform your mindset with ${topic}. You are capable of amazing things. 💪`,
            `Believe in the power of ${topic}. Dream big. #motivation`
        ]
    }

    const set = templates[tone] || templates.casual
    // Return a random subset or all, slightly varied
    return set.map(t => t.replace('${topic}', topic))
}
