import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="text-2xl font-bold tracking-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Diorama
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={location.pathname === '/'}>
              Stories
            </NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>
              About
            </NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

const NavLink = ({ to, children, active }) => {
  return (
    <Link to={to}>
      <motion.span
        className={`relative text-sm font-medium transition-colors ${
          active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
        {active && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
            layoutId="activeTab"
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        )}
      </motion.span>
    </Link>
  )
}

export default Navbar

