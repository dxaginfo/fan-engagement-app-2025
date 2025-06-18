/**
 * Fan Engagement Idea Generator - Data Module
 * Database of engagement ideas that can be filtered based on user inputs
 */

const engagementIdeas = [
    {
        id: 1,
        title: "AR Scavenger Hunt",
        description: "Create an augmented reality scavenger hunt where fans can discover hidden content and win prizes by visiting specific locations at your venue or around town.",
        category: "digital",
        budgetLevel: "medium",
        difficultyLevel: "moderate",
        audienceAges: ["under-18", "18-24", "25-34"],
        productTypes: ["sports-team", "entertainment", "retail"],
        goals: ["engagement", "brand-awareness", "loyalty"],
        implementationTips: [
            "Partner with an AR developer or use platforms like Snapchat's AR Studio",
            "Create location-specific triggers that unlock content when fans visit",
            "Offer digital collectibles or real-world prizes for completion"
        ]
    },
    {
        id: 2,
        title: "Fan Content Creation Contest",
        description: "Invite fans to create and submit content related to your brand (artwork, videos, memes, etc.) with the best entries featured on your official channels.",
        category: "digital",
        budgetLevel: "low",
        difficultyLevel: "easy",
        audienceAges: ["under-18", "18-24", "25-34", "35-44"],
        productTypes: ["sports-team", "esports", "entertainment", "lifestyle"],
        goals: ["engagement", "content-creation", "community-building"],
        implementationTips: [
            "Create clear submission guidelines and categories",
            "Use a dedicated hashtag to track entries on social media",
            "Feature winners on your official accounts to increase participation"
        ]
    },
    {
        id: 3,
        title: "Behind-the-Scenes Access Series",
        description: "Develop a recurring content series that gives fans exclusive access to behind-the-scenes moments, creating a sense of insider connection.",
        category: "digital",
        budgetLevel: "low",
        difficultyLevel: "easy",
        audienceAges: ["18-24", "25-34", "35-44", "45-54"],
        productTypes: ["sports-team", "esports", "entertainment", "restaurant"],
        goals: ["loyalty", "content-creation", "community-building"],
        implementationTips: [
            "Schedule regular filming days to create a content pipeline",
            "Focus on authentic, unscripted moments that fans don't normally see",
            "Distribute across multiple platforms (Instagram Stories, YouTube, TikTok)"
        ]
    },
    {
        id: 4,
        title: "Community Service Day",
        description: "Organize a day where fans can join team members/staff in community service projects, building goodwill while creating meaningful connections.",
        category: "inperson",
        budgetLevel: "medium",
        difficultyLevel: "moderate",
        audienceAges: ["18-24", "25-34", "35-44", "45-54", "55-plus"],
        productTypes: ["sports-team", "nonprofit", "education", "retail"],
        goals: ["community-building", "brand-awareness"],
        implementationTips: [
            "Partner with established local charitable organizations",
            "Create branded volunteer t-shirts for participants",
            "Document the event for content that showcases your brand values"
        ]
    },
    {
        id: 5,
        title: "Fan Advisory Board",
        description: "Create an exclusive group of dedicated fans who provide regular feedback on initiatives and feel valued as important stakeholders in your brand.",
        category: "community",
        budgetLevel: "low",
        difficultyLevel: "easy",
        audienceAges: ["25-34", "35-44", "45-54", "55-plus"],
        productTypes: ["sports-team", "entertainment", "lifestyle", "restaurant"],
        goals: ["loyalty", "data-collection", "community-building"],
        implementationTips: [
            "Establish an application process to select diverse representatives",
            "Host regular virtual or in-person meetings with key decision-makers",
            "Provide exclusive perks to board members to recognize their contribution"
        ]
    }
];

// Make the data available globally
window.ENGAGEMENT_IDEAS = engagementIdeas;