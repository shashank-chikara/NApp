import { motion, useScroll, useTransform } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, TrendingUp, Users, Eye, Share2, Bookmark } from 'lucide-react'
import { useRef } from 'react'
import AnalysisLenses from '../components/AnalysisLenses'
import SocialShare from '../components/SocialShare'
import { getStoryById } from '../data/stories'

// Enhanced sample data with timeline information
const sampleStories = {
  1: {
    id: 1,
    title: "Revolutionary AI Breakthrough Changes Everything",
    summary: "Scientists achieve unprecedented milestone in artificial intelligence that could reshape how we interact with technology forever.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    category: "Technology",
    readTime: "5 min read",
    publishedAt: "2 hours ago",
    author: "Dr. Sarah Chen",
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
  2: {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    summary: "World leaders unite on ambitious climate action plan with binding commitments for carbon neutrality by 2040.",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=1200&h=800&fit=crop",
    category: "Environment",
    readTime: "7 min read",
    publishedAt: "4 hours ago",
    author: "Maria Rodriguez",
    overview: {
      whatHappened: "Representatives from 195 countries reached a landmark agreement at the Global Climate Summit, committing to achieve carbon neutrality by 2040 - a decade earlier than previous targets. The agreement includes binding emissions reduction targets, a $500 billion climate fund, and unprecedented cooperation on clean energy technology sharing.",
      whyItMatters: "This agreement represents the most ambitious and comprehensive climate action plan in history. With legally binding commitments and substantial financial backing, it provides a realistic pathway to limit global warming to 1.5°C and avoid the most catastrophic effects of climate change. The accelerated timeline and international cooperation could trigger a global green energy revolution."
    },
    timeline: [
      {
        date: "Pre-Summit (August 2024)",
        title: "Preparatory Negotiations",
        description: "Intensive diplomatic negotiations establish framework for binding commitments.",
        type: "process"
      },
      {
        date: "Day 1 (September 1)",
        title: "Summit Opens",
        description: "195 world leaders gather for the most important climate summit in history.",
        type: "milestone"
      },
      {
        date: "Day 3 (September 3)",
        title: "Breakthrough Moment",
        description: "Major economies agree to accelerated timeline and binding targets.",
        type: "breakthrough"
      },
      {
        date: "Day 5 (September 5)",
        title: "Historic Agreement",
        description: "Unanimous approval of the Global Climate Accord with 2040 carbon neutrality target.",
        type: "impact"
      }
    ],
    content: "World leaders unite on ambitious climate action plan with binding commitments for carbon neutrality by 2040. This historic agreement represents unprecedented global cooperation in the fight against climate change."
  },
  // Add more stories as needed...
}

const StoryPage = () => {
  const { id } = useParams()
  const story = getStoryById(id)
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  if (!story) {
    return (
      <div className="pt-24 pb-16 px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Story not found</h1>
        <Link to="/" className="text-primary hover:underline">
          Return to homepage
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section with Parallax */}
      <motion.div
        className="relative h-[56vh] overflow-hidden"
        style={{ y: heroY }}
      >
        <motion.img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover"
          style={{ opacity: heroOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Hero Content */}
        <motion.div
          className="absolute inset-0 flex items-end"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <motion.div
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Stories</span>
              </Link>
              
              <div className="flex items-center space-x-4 text-white/70 text-sm mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  {story.category}
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{story.readTime}</span>
                </span>
                <span>{story.publishedAt}</span>
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {story.title}
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/90 max-w-3xl leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {story.summary}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Story Overview Section */}
        <motion.section
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Story Overview</h2>
          
          <motion.div
            className="bg-card rounded-2xl p-8 border border-border/50 max-w-4xl mx-auto"
            whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What Happened</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.overview.whatHappened}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Why It Matters</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.overview.whyItMatters}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>



        {/* Social Sharing Section */}
        <motion.section
          className="mb-16 text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-center space-x-4">
            <span className="text-muted-foreground">Share this story:</span>
            <SocialShare story={story} />
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          className="mb-24"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-16 text-center">Story Timeline</h2>
          
          <div className="relative">
            {/* Horizontal Timeline Line - Positioned to go through center of icons */}
            <div className="absolute top-[204px] lg:top-[224px] left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-blue-500 to-purple-500" />
            
            {/* Horizontal Timeline Container */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:space-x-4 space-y-8 lg:space-y-0">
              {story.timeline.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center lg:flex-1"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Title and Date - Above Timeline */}
                  <div className="text-center mb-6 h-40 lg:h-44 flex flex-col justify-end">
                    <h4 className="text-sm lg:text-base font-semibold leading-tight px-2 mb-4">{event.title}</h4>
                    <span className="text-xs lg:text-sm font-medium text-primary">{event.date}</span>
                  </div>
                  
                  {/* Timeline Dot - Perfectly centered on line */}
                  <motion.div
                    className={`relative z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mb-6 ${
                      event.type === 'breakthrough' ? 'bg-yellow-500' :
                      event.type === 'milestone' ? 'bg-blue-500' :
                      event.type === 'impact' ? 'bg-green-500' :
                      'bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </motion.div>
                  
                  {/* Description - Below Timeline */}
                  <div className="w-full text-center h-40 lg:h-44 flex items-center justify-center">
                    <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Article Content */}
        <motion.section
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="prose prose-lg max-w-none">
            {story.content.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-muted-foreground leading-relaxed mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.section>

        {/* Interactive Analysis Lenses */}
        <AnalysisLenses storyId={story.id} />
      </div>
    </motion.div>
  )
}

export default StoryPage

