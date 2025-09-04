# Diorama - Ultra-Modern News Consumption Platform

A sleek, Apple-inspired news consumption website built with React, featuring next-generation animations, interactive analysis lenses, and comprehensive story timelines.

## 🌟 Features

### Core Features
- **Apple-Inspired Design**: Minimalistic, clean interface with smooth animations
- **10 Curated Stories**: Comprehensive news stories across multiple categories
- **Interactive Timelines**: Color-coded story progression with smooth animations
- **Analysis Lenses**: 5 interactive analysis perspectives for each story
- **Advanced Search**: Real-time search with category filtering
- **Social Sharing**: Twitter, Facebook, LinkedIn integration
- **Responsive Design**: Perfect experience on all devices

### Technical Features
- **Next.js 14**: Modern React framework with TypeScript support
- **Framer Motion**: Smooth animations and micro-interactions
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Vite**: Lightning-fast build tool and development server
- **Production Ready**: Optimized builds with gzipped assets

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Extract the project files**
   ```bash
   unzip nextgen-news.zip
   cd nextgen-news
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
nextgen-news/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── AnalysisLenses.jsx
│   │   ├── Navbar.jsx
│   │   └── SocialShare.jsx
│   ├── data/             # Story data and content
│   │   └── stories.js
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   └── StoryPage.jsx
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles and design tokens
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Background**: White/Dark mode support
- **Text**: Carefully chosen contrast ratios
- **Accents**: Color-coded categories and status indicators

### Typography
- **Font Family**: System fonts for optimal performance
- **Hierarchy**: Clear heading and body text scales
- **Responsive**: Fluid typography across devices

### Animations
- **Framer Motion**: Smooth page transitions and micro-interactions
- **Scroll Triggers**: Content animates as you scroll
- **Hover Effects**: Subtle feedback on interactive elements

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect experience on tablets
- **Desktop Enhanced**: Rich interactions on larger screens
- **Touch Friendly**: Optimized for touch interactions

## 🔧 Customization

### Adding New Stories
Edit `src/data/stories.js` to add new stories with:
- Title, summary, and content
- Category and tags
- Timeline events
- Analysis lens content
- High-quality images

### Modifying Design
- Update `tailwind.config.js` for design tokens
- Modify `src/App.css` for global styles
- Customize components in `src/components/`

### Adding Features
- Create new components in `src/components/`
- Add new pages in `src/pages/`
- Update routing in `src/App.jsx`

## 🚀 Deployment Options

### Option 1: Static Hosting (Recommended)
1. Build the project: `npm run build`
2. Upload `dist/` folder to any static hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3
   - Cloudflare Pages

### Option 2: Node.js Hosting
1. Build the project: `npm run build`
2. Use a static file server to serve the `dist/` folder
3. Configure your hosting provider to serve the built files

### Option 3: Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🔍 SEO & Performance

- **Optimized Images**: Compressed and properly sized
- **Fast Loading**: Vite optimization and code splitting
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant design patterns

## 🛠️ Development

### Code Quality
- ESLint configuration for consistent code style
- TypeScript support for type safety
- Component-based architecture for maintainability

### Performance
- Lazy loading for optimal performance
- Optimized bundle sizes
- Efficient re-rendering with React best practices

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Support

For questions or issues:
1. Check the console for any error messages
2. Ensure all dependencies are properly installed
3. Verify Node.js version compatibility (18+)

## 🎯 Key Features Breakdown

### Homepage
- Hero section with animated elements
- Search and filtering functionality
- Story grid with hover effects
- Category-based filtering

### Story Pages
- Parallax hero images
- Story overview sections
- Interactive timelines
- Analysis lenses with expandable content
- Social sharing integration

### Interactive Elements
- Smooth scroll animations
- Hover effects and micro-interactions
- Responsive navigation
- Touch-friendly mobile interface

---

**Built with ❤️ using modern web technologies for an exceptional user experience.**

