import { motion } from 'framer-motion'
import { Share2, Twitter, Facebook, Linkedin, Link as LinkIcon, Copy } from 'lucide-react'
import { useState } from 'react'

const SocialShare = ({ story, url }) => {
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = url || window.location.href
  const shareText = `${story.title} - ${story.summary}`

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const shareOptions = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: shareLinks.twitter,
      color: 'hover:bg-blue-500 hover:text-white'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: shareLinks.facebook,
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: shareLinks.linkedin,
      color: 'hover:bg-blue-700 hover:text-white'
    },
    {
      name: 'Copy Link',
      icon: copied ? Copy : LinkIcon,
      action: copyToClipboard,
      color: copied ? 'bg-green-500 text-white' : 'hover:bg-gray-500 hover:text-white'
    }
  ]

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted/50 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Share2 className="w-4 h-4" />
        <span className="text-sm font-medium">Share</span>
      </motion.button>

      {/* Share Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: showShareMenu ? 1 : 0,
          scale: showShareMenu ? 1 : 0.95,
          y: showShareMenu ? 0 : -10
        }}
        transition={{ duration: 0.2 }}
        className={`absolute top-full mt-2 right-0 bg-card border border-border rounded-lg shadow-lg p-2 z-50 ${
          showShareMenu ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{ minWidth: '200px' }}
      >
        <div className="space-y-1">
          {shareOptions.map((option) => (
            <motion.button
              key={option.name}
              onClick={() => {
                if (option.action) {
                  option.action()
                } else {
                  window.open(option.url, '_blank', 'noopener,noreferrer')
                }
                setShowShareMenu(false)
              }}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-all duration-200 ${option.color}`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <option.icon className="w-4 h-4" />
              <span className="text-sm font-medium">
                {option.name === 'Copy Link' && copied ? 'Copied!' : option.name}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Backdrop */}
      {showShareMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowShareMenu(false)}
        />
      )}
    </div>
  )
}

export default SocialShare

