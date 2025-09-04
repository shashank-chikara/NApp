import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight, Sparkles, Search, Filter, X, Star, TrendingUp } from 'lucide-react'
import { useRef, useState, useMemo } from 'react'
import { stories, getCategories, searchStories, getStoriesByCategory } from '../data/stories'

const HomePage = () => {
  const containerRef = useRef(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showFilters, setShowFilters] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  // Get all categories for filtering
  const categories = ['All', ...getCategories()]

  // Filter stories based on search and category
  const filteredStories = useMemo(() => {
    let filtered = stories

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = searchStories(searchQuery)
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(story => story.category === selectedCategory)
    }

    return filtered
  }, [searchQuery, selectedCategory])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All')
  }

  return (
    <motion.div
      ref={containerRef}
      className="pt-12 pb-16 px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/4 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Enhanced Hero Section */}
        <motion.div
          className="text-center mb-40 relative"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Floating Sparkle Elements */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-8 h-8 text-primary/30" />
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Stories Crafted
              <motion.span 
                className="block text-muted-foreground"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                For You
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Discover the most important stories of today, presented with clarity and depth. 
              Each story is carefully curated and analyzed to give you the complete picture.
            </motion.p>

            {/* Animated Scroll Indicator */}
            <motion.div
              className="mt-16 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
                animate={{ 
                  borderColor: ["rgba(156, 163, 175, 0.3)", "rgba(59, 130, 246, 0.6)", "rgba(156, 163, 175, 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          className="mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 bg-card border border-border rounded-xl hover:bg-muted/50 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {(selectedCategory !== 'All') && (
                <div className="w-2 h-2 bg-primary rounded-full" />
              )}
            </motion.button>
          </div>

          {/* Filter Options */}
          <motion.div
            initial={false}
            animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
              
              {(searchQuery || selectedCategory !== 'All') && (
                <motion.button
                  onClick={clearFilters}
                  className="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Clear all filters
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Results Summary */}
        {(searchQuery || selectedCategory !== 'All') && (
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground">
              {filteredStories.length === 0 
                ? 'No stories found matching your criteria'
                : `Found ${filteredStories.length} ${filteredStories.length === 1 ? 'story' : 'stories'}`
              }
            </p>
          </motion.div>
        )}

        {/* Enhanced Stories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredStories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </motion.div>

        {/* No Results State */}
        {filteredStories.length === 0 && (searchQuery || selectedCategory !== 'All') && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No stories found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <motion.button
              onClick={clearFilters}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear filters
            </motion.button>
          </motion.div>
        )}

        {/* Call to Action Section */}
        {filteredStories.length > 0 && (
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "0px" }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore more stories</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

const StoryCard = ({ story, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5,
        delay: 0.3 + (index * 0.1),
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <Link to={`/story/${story.id}`}>
        <motion.article
          className={`group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-border transition-all duration-500 ${
            story.featured ? 'md:col-span-2 lg:col-span-1' : ''
          }`}
          whileHover={{ 
            y: -12,
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Enhanced Image with Parallax Effect */}
          <div className="relative overflow-hidden aspect-[16/10]">
            <motion.img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            
            {/* Enhanced Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating Category Badge */}
            <motion.div 
              className="absolute top-4 left-4"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <motion.span 
                className="px-3 py-1.5 bg-background/95 backdrop-blur-sm text-xs font-semibold rounded-full border border-border/50 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {story.category}
              </motion.span>
            </motion.div>

            {/* Status Badges */}
            <div className="absolute top-4 right-4 flex space-x-2">
              {story.featured && (
                <motion.div
                  className="flex items-center space-x-1 px-2 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.7, type: "spring" }}
                >
                  <Star className="w-3 h-3" />
                  <span>Featured</span>
                </motion.div>
              )}
              {story.trending && (
                <motion.div
                  className="flex items-center space-x-1 px-2 py-1 bg-orange-500/90 text-white text-xs rounded-full"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.8, type: "spring" }}
                >
                  <TrendingUp className="w-3 h-3" />
                  <span>Trending</span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Enhanced Content */}
          <motion.div 
            className="p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.6 }}
          >
            <motion.h2 
              className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300"
              layoutId={`title-${story.id}`}
            >
              {story.title}
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {story.summary}
            </motion.p>
            
            {/* Tags */}
            {story.tags && story.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {story.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Enhanced Meta Information */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center space-x-4">
                <motion.span 
                  className="flex items-center space-x-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <Clock className="w-3 h-3" />
                  <span>{story.readTime}</span>
                </motion.span>
                <span>{story.publishedAt}</span>
                {story.author && (
                  <span>by {story.author}</span>
                )}
              </div>
              
              <motion.div
                className="flex items-center space-x-1 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-medium">Read more</span>
                <ArrowRight className="w-3 h-3" />
              </motion.div>
            </div>
          </motion.div>

          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)",
              filter: "blur(20px)",
              transform: "scale(1.1)"
            }}
          />
        </motion.article>
      </Link>
    </motion.div>
  )
}

export default HomePage

