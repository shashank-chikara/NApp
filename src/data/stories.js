// Comprehensive story data for Diorama
export const stories = [
  {
    id: 1,
    title: "Revolutionary AI Breakthrough Changes Everything",
    summary: "Scientists achieve unprecedented milestone in artificial intelligence that could reshape how we interact with technology forever.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Research", "Innovation"],
    readTime: "5 min read",
    publishedAt: "2 hours ago",
    author: "Dr. Sarah Chen",
    featured: true,
    trending: true,
    overview: {
      whatHappened: "A team of researchers at MIT and Stanford have successfully created an AI system that demonstrates unprecedented capabilities in reasoning, creativity, and problem-solving. The breakthrough involves a new neural architecture that can understand context, make logical inferences, and generate creative solutions across multiple domains simultaneously.",
      whyItMatters: "This development represents a paradigm shift in artificial intelligence that could revolutionize industries from healthcare to finance. Unlike previous AI systems that excel in narrow domains, this breakthrough enables machines to think more like humans, potentially accelerating scientific discovery, automating complex decision-making, and democratizing access to advanced problem-solving capabilities."
    },
    timeline: [
      {
        date: "January 2024",
        title: "Research Initiative Launched",
        description: "MIT and Stanford announce joint research project to develop next-generation AI reasoning capabilities.",
        type: "milestone"
      },
      {
        date: "March 2024",
        title: "Initial Breakthrough",
        description: "First successful demonstration of cross-domain reasoning in controlled laboratory environment.",
        type: "breakthrough"
      },
      {
        date: "June 2024",
        title: "Peer Review Process",
        description: "Research findings submitted to Nature and undergo rigorous peer review by leading AI experts.",
        type: "process"
      },
      {
        date: "August 2024",
        title: "Public Demonstration",
        description: "Live demonstration at AI Conference showcases real-time problem-solving across multiple domains.",
        type: "milestone"
      },
      {
        date: "September 2024",
        title: "Publication & Industry Response",
        description: "Research published in Nature. Major tech companies announce plans to integrate the technology.",
        type: "impact"
      }
    ],
    content: "This groundbreaking development in artificial intelligence represents a paradigm shift in how we understand machine learning and its potential applications. The research team has successfully created an AI system that demonstrates unprecedented capabilities in reasoning, creativity, and problem-solving.\n\nThe implications of this breakthrough extend far beyond the laboratory. Industries ranging from healthcare to finance are already exploring how this technology could revolutionize their operations and improve outcomes for millions of people worldwide.\n\nWhat makes this development particularly significant is its potential to democratize access to advanced AI capabilities, making sophisticated tools available to smaller organizations and individual researchers who previously couldn't afford such technology."
  },
  {
    id: 2,
    title: "Gaza Ceasefire Proposal",
    summary: "New ceasefire proposal aims to end hostilities and establish lasting peace in the region.",
    image: "/src/assets/gaza.jpg",
    category: "Politics",
    tags: ["Middle East", "Peace", "Diplomacy", "International"],
    readTime: "7 min read",
    publishedAt: "4 hours ago",
    author: "Maria Rodriguez",
    featured: true,
    trending: false,
    overview: {
      whatHappened: "On August 18, 2025, Hamas announced that it had accepted a U.S.-backed ceasefire proposal mediated by Egypt and Qatar. The plan calls for a 60-day pause in fighting, the exchange of hostages and Palestinian prisoners, partial Israeli troop withdrawal, and expanded humanitarian access. Israel has not yet agreed to the deal; Prime Minister Benjamin Netanyahu has said the government is still deliberating while political factions remain deeply divided.",
      whyItMatters: "The current conflict traces back to October 7, 2023, when Hamas launched an unprecedented attack on Israel, killing roughly 1,200 people and taking over 200 hostages. Israel's response evolved into a large-scale military campaign in Gaza. A brief ceasefire in November 2023 facilitated limited exchanges of hostages and prisoners but collapsed after a week. Since then, repeated negotiation attempts have faltered, leaving both humanitarian conditions and political pressures to escalate. By August 2025, Gaza has endured nearly two years of bombardment, with over 60,000 Palestinians reported killed, widespread displacement, and the UN warning of famine. In Israel, public anger has grown: families of hostages and tens of thousands of demonstrators press the government to accept a deal, while Netanyahu's coalition partners—especially far-right ministers—oppose any truce that leaves Hamas intact. This proposal sits at the intersection of humanitarian urgency, domestic political turmoil, and renewed diplomatic mediation. While it offers a possible pause in violence, the obstacles to lasting resolution remain entrenched."
    },
    todaysShift: [
      "Israeli cabinet deliberations continued late into the night, with Netanyahu signaling that a formal response to the ceasefire proposal will be issued within days.",
      "Protest activity in Tel Aviv swelled again, with organizers estimating over 50,000 participants demanding hostage release and immediate acceptance of the truce.",
      "Hamas representatives in Doha reiterated their acceptance of the plan, describing it as \"the only viable path forward\" while warning that further Israeli delays put hostages at risk.",
      "U.S. officials confirmed ongoing pressure on both sides, with Secretary of State Blinken framing the moment as \"an opportunity that cannot be missed.\""
    ],
    stakeholderLens: {
      stakeholders: [
        {
          name: "Hamas Leadership",
          position: "Hamas has signaled compromise by agreeing to the truce, a notable shift after months of resistance. The move reflects both internal pressure and recognition of the humanitarian crisis in Gaza."
        },
        {
          name: "Israeli Government",
          position: "Israel's government, led by Prime Minister Netanyahu, remains cautious. Officials insist that any deal must include the full release of hostages and significant weakening of Hamas. Coalition divisions—between moderates, the far-right, and opposition parties—make consensus difficult."
        },
        {
          name: "Hostage Families & Protesters",
          position: "Families of hostages and Israeli protesters have become powerful voices in favor of the deal. Demonstrations across Israel underscore a growing demand to prioritize saving lives over extending military operations."
        },
        {
          name: "Regional Mediators",
          position: "Regional mediators (Egypt, Qatar, and the U.S.) emphasize the proposal as nearly identical to earlier American-backed plans and portray it as the most viable path to halting violence and enabling aid."
        },
        {
          name: "International Observers",
          position: "International observers and media analysts describe the development as momentous but fragile—an alignment of humanitarian urgency and diplomatic opportunity tempered by unresolved political and security divisions."
        }
      ],
      tensionsAndAlignments: [
        "Alignment: Hamas's acceptance and mediator support converge with mounting public pressure in Israel.",
        "Tension: Netanyahu's government is torn between domestic demands for a deal and far-right opposition to concessions.",
        "Underlying collision: Humanitarian urgency and political survival clash with hardline security demands."
      ]
    },
    timeline: [
      {
        date: "October 7, 2023",
        title: "Hamas launches its largest-ever attack on Israel",
        description: "Hamas kills ~1,200 people and takes over 200 hostages. Israel responds with a full-scale campaign in Gaza.",
        type: "milestone"
      },
      {
        date: "November 24–30, 2023",
        title: "Brief ceasefire enables limited hostage-prisoner exchanges",
        description: "A brief ceasefire enables limited hostage-prisoner exchanges. Talks collapse after a week.",
        type: "process"
      },
      {
        date: "2024",
        title: "Multiple mediation efforts stall",
        description: "Multiple mediation efforts stall, with heavy fighting continuing and international concern mounting.",
        type: "process"
      },
      {
        date: "Early 2025",
        title: "Conditions in Gaza reach catastrophic levels",
        description: "UN agencies warn of famine and mass civilian deaths.",
        type: "milestone"
      },
      {
        date: "August 18, 2025",
        title: "Hamas accepts the Egypt-Qatar mediated U.S.-backed ceasefire proposal",
        description: "Hamas accepts the Egypt-Qatar mediated U.S.-backed ceasefire proposal.",
        type: "breakthrough"
      },
      {
        date: "August 18–20, 2025",
        title: "Protests swell in Israel",
        description: "Protests swell in Israel as families of hostages and the broader public push for the government to accept the deal.",
        type: "process"
      },
      {
        date: "August 22, 2025 (expected)",
        title: "Israel signals formal response",
        description: "Israel signals that it will formally respond to the proposal.",
        type: "milestone"
      }
    ],
    content: "New ceasefire proposal aims to end hostilities and establish lasting peace in the region."
  },
  {
    id: 3,
    title: "Quantum Computing Achieves Commercial Viability",
    summary: "First commercially viable quantum computer promises to solve complex problems in minutes that would take classical computers years.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop",
    category: "Technology",
    tags: ["Quantum Computing", "Innovation", "Computing", "Science"],
    readTime: "6 min read",
    publishedAt: "6 hours ago",
    author: "Dr. James Liu",
    featured: false,
    trending: true,
    overview: {
      whatHappened: "IBM and Google have jointly announced the first commercially viable quantum computer capable of solving real-world problems faster than classical supercomputers. The system uses 1000+ stable qubits and can maintain quantum coherence for extended periods, making it practical for commercial applications.",
      whyItMatters: "This breakthrough marks the beginning of the quantum computing era, with potential applications in drug discovery, financial modeling, cryptography, and artificial intelligence. Industries that rely on complex optimization problems could see revolutionary improvements in efficiency and capability."
    },
    timeline: [
      {
        date: "2019",
        title: "Quantum Supremacy Achieved",
        description: "Google demonstrates quantum supremacy with 53-qubit processor.",
        type: "milestone"
      },
      {
        date: "2022",
        title: "Error Correction Breakthrough",
        description: "Major advances in quantum error correction make stable computation possible.",
        type: "breakthrough"
      },
      {
        date: "2024",
        title: "Commercial Viability",
        description: "First quantum computer capable of solving real commercial problems is announced.",
        type: "impact"
      }
    ],
    content: "The quantum computing revolution has finally arrived with the announcement of the first commercially viable quantum computer. This breakthrough represents decades of research and development coming to fruition."
  },
  {
    id: 4,
    title: "Medical Breakthrough: Gene Therapy Cures Rare Disease",
    summary: "Groundbreaking gene therapy treatment shows 100% success rate in clinical trials for previously incurable genetic disorder.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
    category: "Health",
    tags: ["Gene Therapy", "Medicine", "Healthcare", "Research"],
    readTime: "8 min read",
    publishedAt: "8 hours ago",
    author: "Dr. Emily Watson",
    featured: false,
    trending: false,
    overview: {
      whatHappened: "Researchers at Johns Hopkins have successfully treated 50 patients with a rare genetic disorder using CRISPR-based gene therapy, achieving a 100% success rate with no adverse effects. The treatment corrects the genetic mutation at its source, providing a permanent cure.",
      whyItMatters: "This success opens the door for treating thousands of rare genetic diseases that currently have no cure. The technique could be adapted for more common conditions and represents a major step toward personalized medicine based on individual genetic profiles."
    },
    timeline: [
      {
        date: "2020",
        title: "Research Begins",
        description: "Initial research into CRISPR applications for rare genetic disorders.",
        type: "milestone"
      },
      {
        date: "2022",
        title: "Animal Trials Success",
        description: "Successful treatment demonstrated in animal models.",
        type: "breakthrough"
      },
      {
        date: "2024",
        title: "Human Trial Success",
        description: "100% success rate achieved in human clinical trials.",
        type: "impact"
      }
    ],
    content: "A groundbreaking gene therapy treatment has achieved unprecedented success in clinical trials, offering hope for millions of patients with rare genetic disorders."
  },
  {
    id: 5,
    title: "Space Mission Discovers Signs of Ancient Life",
    summary: "Mars rover uncovers compelling evidence of microbial life that existed billions of years ago on the red planet.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=800&fit=crop",
    category: "Science",
    tags: ["Space", "Mars", "Astrobiology", "Discovery"],
    readTime: "9 min read",
    publishedAt: "10 hours ago",
    author: "Dr. Michael Torres",
    featured: false,
    trending: true,
    overview: {
      whatHappened: "NASA's Perseverance rover has discovered fossilized microbial structures in Martian rock samples, providing the strongest evidence yet that life once existed on Mars. The fossils date back 3.5 billion years and show clear signs of biological origin.",
      whyItMatters: "This discovery fundamentally changes our understanding of life in the universe and suggests that life may be more common than previously thought. It has profound implications for astrobiology and the search for life on other planets."
    },
    timeline: [
      {
        date: "2021",
        title: "Perseverance Landing",
        description: "NASA's Perseverance rover successfully lands on Mars.",
        type: "milestone"
      },
      {
        date: "2023",
        title: "Sample Collection",
        description: "Rover collects rock samples from ancient river delta.",
        type: "process"
      },
      {
        date: "2024",
        title: "Life Discovery",
        description: "Analysis reveals fossilized microbial structures in samples.",
        type: "impact"
      }
    ],
    content: "The discovery of ancient microbial life on Mars represents one of the most significant scientific breakthroughs in human history, fundamentally changing our understanding of life in the universe."
  },
  {
    id: 6,
    title: "Economic Revolution: Universal Basic Income Trial Success",
    summary: "Five-year UBI pilot program shows remarkable results in reducing poverty and increasing innovation across participating cities.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop",
    category: "Economics",
    tags: ["UBI", "Economics", "Social Policy", "Innovation"],
    readTime: "10 min read",
    publishedAt: "12 hours ago",
    author: "Prof. Lisa Chang",
    featured: false,
    trending: false,
    overview: {
      whatHappened: "A comprehensive five-year Universal Basic Income trial across 12 cities has concluded with remarkable results: 40% reduction in poverty, 25% increase in entrepreneurship, and improved mental health outcomes. The program provided $1,000 monthly to all adult residents regardless of employment status.",
      whyItMatters: "These results provide compelling evidence for UBI as a viable economic policy, especially as automation threatens traditional employment. The success could influence national policy discussions and reshape how societies approach economic security in the 21st century."
    },
    timeline: [
      {
        date: "2019",
        title: "Trial Launch",
        description: "UBI pilot program begins in 12 diverse cities worldwide.",
        type: "milestone"
      },
      {
        date: "2022",
        title: "Midterm Results",
        description: "Preliminary data shows positive trends in poverty reduction.",
        type: "process"
      },
      {
        date: "2024",
        title: "Final Results",
        description: "Comprehensive analysis reveals significant positive outcomes.",
        type: "impact"
      }
    ],
    content: "The successful completion of the world's largest Universal Basic Income trial provides compelling evidence for this revolutionary economic policy approach."
  },
  {
    id: 7,
    title: "Renewable Energy Milestone: 100% Clean Grid Achieved",
    summary: "First major nation successfully transitions to 100% renewable energy grid, proving large-scale clean energy is possible.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop",
    category: "Environment",
    tags: ["Renewable Energy", "Sustainability", "Grid", "Clean Energy"],
    readTime: "6 min read",
    publishedAt: "14 hours ago",
    author: "Elena Kowalski",
    featured: false,
    trending: false,
    overview: {
      whatHappened: "Denmark has become the first major industrialized nation to achieve 100% renewable energy for its electrical grid, powered entirely by wind, solar, and hydroelectric sources. The transition was completed ahead of schedule and under budget.",
      whyItMatters: "This achievement proves that large-scale renewable energy grids are not only possible but economically viable. It provides a roadmap for other nations and demonstrates that the transition to clean energy can be both rapid and cost-effective."
    },
    timeline: [
      {
        date: "2015",
        title: "Renewable Commitment",
        description: "Denmark commits to 100% renewable energy by 2030.",
        type: "milestone"
      },
      {
        date: "2020",
        title: "50% Milestone",
        description: "Renewable sources reach 50% of total energy production.",
        type: "process"
      },
      {
        date: "2024",
        title: "100% Achievement",
        description: "Complete transition to renewable energy grid accomplished.",
        type: "impact"
      }
    ],
    content: "Denmark's achievement of a 100% renewable energy grid demonstrates that the transition to clean energy is not only possible but can be accomplished faster and more cost-effectively than previously thought."
  },
  {
    id: 8,
    title: "Social Media Giants Face Unprecedented Regulation",
    summary: "New international framework for social media regulation promises to reshape how platforms operate and protect user privacy.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
    category: "Politics",
    tags: ["Social Media", "Regulation", "Privacy", "Technology Policy"],
    readTime: "7 min read",
    publishedAt: "16 hours ago",
    author: "Robert Kim",
    featured: false,
    trending: false,
    overview: {
      whatHappened: "The G20 nations have agreed on a comprehensive international framework for regulating social media platforms, including mandatory data protection, content moderation standards, and algorithmic transparency requirements. The regulations will take effect globally within 18 months.",
      whyItMatters: "This represents the most significant regulatory challenge to big tech companies since their inception. The framework could fundamentally change how social media platforms operate, potentially improving user privacy and reducing harmful content while raising questions about free speech and innovation."
    },
    timeline: [
      {
        date: "2022",
        title: "Regulatory Discussions Begin",
        description: "G20 nations begin coordinated discussions on social media regulation.",
        type: "milestone"
      },
      {
        date: "2023",
        title: "Framework Development",
        description: "International working group develops comprehensive regulatory framework.",
        type: "process"
      },
      {
        date: "2024",
        title: "Agreement Reached",
        description: "G20 nations unanimously approve international social media regulations.",
        type: "impact"
      }
    ],
    content: "The new international framework for social media regulation represents a watershed moment in the relationship between governments and big tech companies."
  },
  {
    id: 9,
    title: "Educational Revolution: AI Tutors Transform Learning",
    summary: "Personalized AI tutoring systems show dramatic improvements in student outcomes across diverse educational settings.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
    category: "Education",
    tags: ["AI", "Education", "Learning", "Technology"],
    readTime: "5 min read",
    publishedAt: "18 hours ago",
    author: "Dr. Amanda Foster",
    featured: false,
    trending: false,
    overview: {
      whatHappened: "A comprehensive study across 500 schools worldwide shows that AI-powered personalized tutoring systems improve student performance by an average of 40% compared to traditional teaching methods. The AI adapts to each student's learning style, pace, and knowledge gaps in real-time.",
      whyItMatters: "This breakthrough could democratize access to high-quality education globally, providing personalized instruction to students regardless of their location or economic circumstances. It represents a fundamental shift toward individualized learning that could reshape education systems worldwide."
    },
    timeline: [
      {
        date: "2021",
        title: "AI Tutor Development",
        description: "Advanced AI tutoring systems enter development phase.",
        type: "milestone"
      },
      {
        date: "2023",
        title: "Pilot Programs",
        description: "Initial pilot programs launched in select schools.",
        type: "process"
      },
      {
        date: "2024",
        title: "Global Study Results",
        description: "Comprehensive study shows dramatic improvement in learning outcomes.",
        type: "impact"
      }
    ],
    content: "The success of AI-powered personalized tutoring represents a revolutionary advancement in education technology with the potential to transform learning worldwide."
  },
  {
    id: 10,
    title: "Cultural Shift: Remote Work Becomes Permanent Standard",
    summary: "Major corporations announce permanent remote work policies, fundamentally changing the future of work and urban planning.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop",
    category: "Society",
    tags: ["Remote Work", "Future of Work", "Corporate Culture", "Urban Planning"],
    readTime: "8 min read",
    publishedAt: "20 hours ago",
    author: "Sarah Johnson",
    featured: false,
    trending: false,
    overview: {
      whatHappened: "Over 200 Fortune 500 companies have announced permanent remote work policies, with many reducing office space by 60-80%. This shift affects over 50 million workers globally and is driving major changes in urban planning, real estate markets, and corporate culture.",
      whyItMatters: "This permanent shift to remote work is reshaping society in fundamental ways, from reducing urban congestion and pollution to enabling people to live anywhere while maintaining career opportunities. It represents one of the most significant changes to work culture since the industrial revolution."
    },
    timeline: [
      {
        date: "2020",
        title: "Pandemic Remote Shift",
        description: "COVID-19 forces massive shift to remote work globally.",
        type: "milestone"
      },
      {
        date: "2022",
        title: "Productivity Studies",
        description: "Studies show remote work maintains or improves productivity.",
        type: "process"
      },
      {
        date: "2024",
        title: "Permanent Policies",
        description: "Major corporations announce permanent remote work policies.",
        type: "impact"
      }
    ],
    content: "The permanent shift to remote work represents one of the most significant changes to work culture and society since the industrial revolution."
  }
]

// Helper functions for data manipulation
export const getStoryById = (id) => {
  return stories.find(story => story.id === parseInt(id))
}

export const getStoriesByCategory = (category) => {
  return stories.filter(story => story.category === category)
}

export const getFeaturedStories = () => {
  return stories.filter(story => story.featured)
}

export const getTrendingStories = () => {
  return stories.filter(story => story.trending)
}

export const searchStories = (query) => {
  const lowercaseQuery = query.toLowerCase()
  return stories.filter(story => 
    story.title.toLowerCase().includes(lowercaseQuery) ||
    story.summary.toLowerCase().includes(lowercaseQuery) ||
    story.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    story.category.toLowerCase().includes(lowercaseQuery)
  )
}

export const getCategories = () => {
  return [...new Set(stories.map(story => story.category))]
}

export const getAllTags = () => {
  const allTags = stories.flatMap(story => story.tags)
  return [...new Set(allTags)]
}

