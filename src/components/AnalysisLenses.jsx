import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Search, 
  Target, 
  ChevronDown, 
  ChevronUp,
  Clock,
  Building,
  Lightbulb,
  AlertTriangle,
  Zap,
  BarChart3,
  Globe,
  Brain,
  Shield,
  Coins,
  Factory
} from 'lucide-react'
import { stories } from '../data/stories'

const AnalysisLenses = ({ storyId }) => {
  const [expandedLens, setExpandedLens] = useState(null)
  const lensRefs = useRef({})
  const containerRef = useRef(null)

  // Get the actual story from the imported data
  const story = stories.find(s => s.id === parseInt(storyId))



  // Generate analysis data based on the actual story
  const analysisData = {
    todaysShift: {
      title: "Today's Shift",
      icon: Clock,
      color: "blue",
      summary: "Latest developments and real-time updates",
      content: {
        overview: story?.todaysShift ? "Here are the latest developments and shifts in this story:" : "No recent developments available for this story.",
        keyChanges: story?.todaysShift || [],
        timeline: "These developments represent the current state of the story as of today.",
        implications: "These shifts indicate the direction and momentum of the story's development."
      }
    },
    stakeholderLens: {
      title: "Stakeholder Lens",
      icon: Users,
      color: "green",
      summary: "Key players and their perspectives",
      content: {
        overview: story?.stakeholderLens ? "Analysis of key stakeholders and their positions:" : "Stakeholder analysis not available for this story.",
        stakeholders: story?.stakeholderLens?.stakeholders ? 
          story.stakeholderLens.stakeholders.map((stakeholder, index) => ({
            group: stakeholder.name || `Stakeholder ${index + 1}`,
            position: stakeholder.position || stakeholder
          })) : [],
        powerDynamics: story?.stakeholderLens?.tensionsAndAlignments ? 
          story.stakeholderLens.tensionsAndAlignments : []
      }
    },
    framingLens: {
      title: "Framing Distribution",
      icon: Eye,
      color: "purple",
      summary: "How different sources present this story",
      content: {
        overview: story?.id === 2 ? "Media coverage analysis for the Gaza ceasefire proposal shows distinct framing patterns across different outlets." : "Media framing analysis for this story",
        framingAnalysis: story?.id === 2 ? [
          {
            source: "Reuters and AP",
            frame: "Neutral, fact-driven coverage",
            focus: "Negotiation details and humanitarian costs",
            tone: "Neutral"
          },
          {
            source: "The Guardian",
            frame: "Internal Israeli political divisions",
            focus: "Pressure of protests on Netanyahu",
            tone: "Analytical"
          },
          {
            source: "The Wall Street Journal",
            frame: "Broader choreography of diplomacy",
            focus: "Strategic dilemmas facing Israel",
            tone: "Strategic"
          },
          {
            source: "El País and International Outlets",
            frame: "Surprising Hamas shift",
            focus: "Scale of Israeli demonstrations",
            tone: "International perspective"
          }
        ] : [
          {
            source: "Mainstream Media",
            frame: "Primary narrative focus",
            focus: "Key story elements and public interest",
            tone: "Balanced reporting"
          },
          {
            source: "Specialized Press",
            frame: "Expert analysis and technical details",
            focus: "Depth and accuracy of coverage",
            tone: "Technical and analytical"
          }
        ],
        narrativeGaps: story?.id === 2 ? "Coverage oscillates between viewing the moment as a humanitarian opening, a political crisis for Israel, or a cautious diplomatic experiment." : "Analysis of coverage gaps and missing perspectives.",
        globalPerspectives: story?.id === 2 ? "International outlets provide diverse perspectives, from neutral fact-reporting to strategic analysis and political commentary." : "International coverage variations and perspectives."
      }
    },
    missingPieces: {
      title: "Missing Pieces",
      icon: Search,
      color: "orange",
      summary: "What's not being discussed in coverage",
      content: {
        overview: story?.id === 2 ? "Critical aspects of the Gaza ceasefire proposal remain underexplored in current coverage, creating important gaps in public understanding." : "Critical aspects that may be underexplored in current coverage.",
        underreportedAspects: story?.id === 2 ? [
          {
            topic: "Long-term reconstruction",
            details: "Little discussion of who would fund or lead rebuilding Gaza if the ceasefire holds.",
            whyMissing: "Focus on immediate ceasefire rather than long-term implications"
          },
          {
            topic: "Security guarantees",
            details: "Unclear whether international actors would monitor or enforce the truce.",
            whyMissing: "Complexity of international monitoring arrangements"
          },
          {
            topic: "Regional dynamics",
            details: "Egypt and Qatar's influence is noted but underexplored, and Iran's role remains largely absent from coverage.",
            whyMissing: "Geopolitical complexity and diplomatic sensitivities"
          },
          {
            topic: "Future political status of Hamas",
            details: "The deal addresses immediate violence but not broader questions of governance in Gaza.",
            whyMissing: "Focus on immediate humanitarian needs over long-term political questions"
          }
        ] : [
          {
            topic: "Context and Background",
            details: "Historical context and deeper background information",
            whyMissing: "Space and time constraints in news coverage"
          },
          {
            topic: "Alternative Perspectives",
            details: "Diverse viewpoints and counter-narratives",
            whyMissing: "Editorial focus on primary storylines"
          }
        ],
        investigativeOpportunities: story?.id === 2 ? "Deep dives into reconstruction funding mechanisms, international monitoring frameworks, regional power dynamics, and long-term governance scenarios in Gaza remain largely unexplored." : "Areas that could benefit from deeper investigation and analysis.",
        expertGaps: story?.id === 2 ? "Lack of expertise combining reconstruction economics, international security frameworks, Middle East geopolitics, and post-conflict governance." : "Missing expertise and interdisciplinary perspectives."
      }
    },
    impactLens: {
      title: "Impact",
      icon: Target,
      color: "red",
      summary: "Long-term implications and effects",
      content: {
        overview: "Analysis of the story's broader impact and implications.",
        sectoralImpacts: [
          {
            sector: "Primary Impact Area",
            shortTerm: "Immediate effects and changes",
            longTerm: "Long-term consequences and transformations",
            timeline: "Expected timeline for impact",
            disruption: "High"
          }
        ],
        societalTransformations: "How this story affects broader societal structures and systems.",
        geopoliticalShifts: "International and political implications of the story.",
        riskFactors: "Potential risks and challenges associated with the story's development."
      }
    }
  }

  const lenses = [
    { key: 'todaysShift', data: analysisData.todaysShift },
    { key: 'stakeholderLens', data: analysisData.stakeholderLens },
    { key: 'framingLens', data: analysisData.framingLens },
    { key: 'missingPieces', data: analysisData.missingPieces },
    { key: 'impactLens', data: analysisData.impactLens }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-500/20',
        accent: 'bg-blue-500'
      },
      green: {
        bg: 'bg-green-500/10',
        text: 'text-green-600',
        border: 'border-green-200',
        hover: 'hover:bg-green-500/20',
        accent: 'bg-green-500'
      },
      purple: {
        bg: 'bg-purple-500/10',
        text: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-500/20',
        accent: 'bg-purple-500'
      },
      orange: {
        bg: 'bg-orange-500/10',
        text: 'text-orange-600',
        border: 'border-orange-200',
        hover: 'hover:bg-orange-500/20',
        accent: 'bg-orange-500'
      },
      red: {
        bg: 'bg-red-500/10',
        text: 'text-red-600',
        border: 'border-red-200',
        hover: 'hover:bg-red-500/20',
        accent: 'bg-red-500'
      }
    }
    return colors[color] || colors.blue
  }

  const toggleLens = (lensKey) => {
    setExpandedLens(expandedLens === lensKey ? null : lensKey)
  }

  const renderExpandedContent = (data, colorClasses) => {
    const content = data.content

    return (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          exit={{ y: -20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="pt-6 border-t border-border/50"
        >
          {/* Overview */}
          <div className="mb-6">
            <p className="text-muted-foreground leading-relaxed text-base">
              {content.overview}
            </p>
          </div>

          {/* Dynamic content based on lens type */}
          {content.keyChanges && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Key Changes
              </h4>
              <ul className="space-y-2">
                {content.keyChanges.map((change, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mt-2 mr-3 flex-shrink-0`} />
                    <span className="text-muted-foreground">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {content.stakeholders && (
            <div className="mb-6">
              <h4 className="font-semibold mb-4 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Stakeholder Analysis
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.stakeholders.map((stakeholder, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${colorClasses.border}`}>
                    <h5 className="font-medium mb-2">{stakeholder.group}</h5>
                    <p className="text-sm text-muted-foreground">{stakeholder.position}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {content.framingAnalysis && (
            <div className="mb-6">
              <h4 className="font-semibold mb-4 flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Media Framing Analysis
              </h4>
              <div className="space-y-4">
                {content.framingAnalysis.map((frame, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${colorClasses.border}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">{frame.source}</h5>
                      <span className={`px-2 py-1 text-xs rounded-full ${colorClasses.bg} ${colorClasses.text}`}>
                        {frame.tone}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{frame.frame}</p>
                    <p className="text-xs text-muted-foreground">Focus: {frame.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {content.underreportedAspects && (
            <div className="mb-6">
              <h4 className="font-semibold mb-4 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Underreported Aspects
              </h4>
              <div className="space-y-4">
                {content.underreportedAspects.map((aspect, index) => (
                  <div key={index} className={`p-4 ${colorClasses.bg} rounded-lg border ${colorClasses.border}`}>
                    <h5 className="font-medium mb-2">{aspect.topic}</h5>
                    <p className="text-sm text-muted-foreground mb-2">{aspect.details}</p>
                    <p className="text-xs text-muted-foreground italic">Why missing: {aspect.whyMissing}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {content.sectoralImpacts && (
            <div className="mb-6">
              <h4 className="font-semibold mb-4 flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Sectoral Impact Analysis
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {content.sectoralImpacts.map((impact, index) => (
                  <div key={index} className={`p-4 ${colorClasses.bg} rounded-lg border ${colorClasses.border}`}>
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="font-medium">{impact.sector}</h5>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        impact.disruption === 'Very High' ? 'bg-red-100 text-red-600' :
                        impact.disruption === 'High' ? 'bg-orange-100 text-orange-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {impact.disruption} Disruption
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div><strong>Short-term:</strong> {impact.shortTerm}</div>
                      <div><strong>Long-term:</strong> {impact.longTerm}</div>
                      <div><strong>Timeline:</strong> {impact.timeline}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional insights */}
          {(content.timeline || content.implications || content.powerDynamics || content.narrativeGaps || content.investigativeOpportunities || content.societalTransformations) && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3 flex items-center">
                <Lightbulb className="w-4 h-4 mr-2" />
                Additional Insights
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {content.timeline && (
                  <li className="flex items-start">
                    <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mt-2 mr-3 flex-shrink-0`} />
                    <div>
                      <strong>Timeline:</strong> {content.timeline}
                    </div>
                  </li>
                )}
                {content.implications && (
                  <li className="flex items-start">
                    <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mt-2 mr-3 flex-shrink-0`} />
                    <div>
                      <strong>Implications:</strong> {content.implications}
                    </div>
                  </li>
                )}
                {content.powerDynamics && Array.isArray(content.powerDynamics) && content.powerDynamics.length > 0 && (
                  <>
                    {content.powerDynamics.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mt-2 mr-3 flex-shrink-0`} />
                        <div>
                          {item}
                        </div>
                      </li>
                    ))}
                  </>
                )}
                {content.narrativeGaps && (
                  <li className="flex items-start">
                    <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mt-2 mr-3 flex-shrink-0`} />
                    <div>
                      <strong>Narrative Gaps:</strong> {content.narrativeGaps}
                    </div>
                  </li>
                )}
                {content.investigativeOpportunities && (
                  <li className="flex items-start">
                    <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mt-2 mr-3 flex-shrink-0`} />
                    <div>
                      <strong>Investigation Opportunities:</strong> {content.investigativeOpportunities}
                    </div>
                  </li>
                )}
                {content.societalTransformations && (
                  <li className="flex items-start">
                    <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mt-2 mr-3 flex-shrink-0`} />
                    <div>
                      <strong>Societal Transformations:</strong> {content.societalTransformations}
                    </div>
                  </li>
                )}
                {content.geopoliticalShifts && (
                  <li className="flex items-start">
                    <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mt-2 mr-3 flex-shrink-0`} />
                    <div>
                      <strong>Geopolitical Shifts:</strong> {content.geopoliticalShifts}
                    </div>
                  </li>
                )}
                {content.riskFactors && (
                  <li className="flex items-start">
                    <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mt-2 mr-3 flex-shrink-0`} />
                    <div>
                      <strong>Risk Factors:</strong> {content.riskFactors}
                    </div>
                  </li>
                )}
              </ul>
            </div>
          )}

          <motion.button
            className={`
              mt-4 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200
              ${colorClasses.bg} ${colorClasses.text} ${colorClasses.hover}
              flex items-center space-x-2
            `}
            onClick={(e) => {
              e.stopPropagation()
              setExpandedLens(null)
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ChevronUp className="w-4 h-4" />
            <span>Collapse Analysis</span>
          </motion.button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.section
      className="py-16"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Analysis Lenses
        </motion.h2>
        <motion.p 
          className="text-muted-foreground max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore different perspectives and deeper insights into this story through our comprehensive analysis framework.
        </motion.p>
      </div>

      {/* Fully Horizontal Layout */}
      <div className="space-y-4" ref={containerRef}>
        {lenses.map((lens, index) => {
          const { data } = lens
          const colorClasses = getColorClasses(data.color)
          const IconComponent = data.icon
          const isExpanded = expandedLens === lens.key

          return (
            <motion.div
              key={lens.key}
              className="w-full"
              ref={(el) => (lensRefs.current[lens.key] = el)}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <motion.div
                className={`
                  border-2 rounded-xl transition-all duration-300 cursor-pointer
                  ${colorClasses.border} ${colorClasses.hover}
                  ${isExpanded ? 'shadow-lg' : 'hover:shadow-md'}
                `}
                onClick={() => {
                  if (expandedLens === lens.key) {
                    setExpandedLens(null)
                  } else {
                    setExpandedLens(lens.key)
                  }
                }}

                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                layout
              >
                {/* Horizontal Lens Header */}
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`w-14 h-14 ${colorClasses.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-7 h-7 ${colorClasses.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-1">{data.title}</h3>
                      <p className="text-muted-foreground">{data.summary}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      className="px-6 pb-6 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.6, ease: "easeInOut" },
                        opacity: { duration: 0.4, ease: "easeOut" }
                      }}
                    >
                      {renderExpandedContent(data, colorClasses)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Quick Access Hint */}
      {!expandedLens && (
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-muted-foreground">
            Click any lens above to explore comprehensive analysis with rich data and insights
          </p>
        </motion.div>
      )}
    </motion.section>
  )
}

export default AnalysisLenses

