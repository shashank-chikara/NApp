import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Components
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import StoryPage from './pages/StoryPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story/:id" element={<StoryPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App

