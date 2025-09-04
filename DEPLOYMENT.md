# Diorama - Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy from project directory**
   ```bash
   cd nextgen-news
   vercel
   ```

3. **Follow the prompts**
   - Login to your Vercel account
   - Choose project settings
   - Deploy automatically

**Result**: Your site will be live at a vercel.app URL within minutes!

### Option 2: Netlify (Free & Simple)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

3. **Or drag & drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deploy area

### Option 3: GitHub Pages

1. **Push to GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to Pages section
   - Select source: GitHub Actions
   - Use the provided workflow

### Option 4: Traditional Web Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload dist folder**
   - Upload contents of `dist/` folder to your web server
   - Point your domain to the uploaded files
   - Ensure your server serves `index.html` for all routes

## 🔧 Environment Configuration

### Development Environment
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:5173
```

### Production Environment
```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview

# Access at http://localhost:4173
```

## 📋 Pre-Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Project builds successfully (`npm run build`)
- [ ] No console errors in browser
- [ ] All images loading correctly
- [ ] Search functionality working
- [ ] Story navigation working
- [ ] Analysis lenses expanding properly
- [ ] Social sharing buttons functional
- [ ] Responsive design tested on mobile

## 🌐 Domain Configuration

### Custom Domain Setup

1. **Build and deploy your site**
2. **Configure DNS records**
   - Add CNAME record pointing to your hosting provider
   - Or A record pointing to hosting IP address

3. **Update hosting settings**
   - Add your custom domain in hosting provider settings
   - Enable HTTPS/SSL certificate

### SSL Certificate
Most modern hosting providers (Vercel, Netlify, etc.) provide automatic SSL certificates. For traditional hosting:
- Use Let's Encrypt for free SSL
- Configure your web server to redirect HTTP to HTTPS

## 🔍 Troubleshooting

### Common Issues

**Build Fails**
- Check Node.js version (requires 18+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for any TypeScript errors

**Images Not Loading**
- Verify image URLs in `src/data/stories.js`
- Ensure images are accessible from your domain
- Check browser console for 404 errors

**Routing Issues**
- Configure your hosting provider for SPA routing
- Ensure all routes redirect to `index.html`

**Performance Issues**
- Run `npm run build` for optimized production build
- Enable gzip compression on your server
- Use a CDN for better global performance

### Server Configuration

**Apache (.htaccess)**
```apache
RewriteEngine On
RewriteRule ^(?!.*\.).*$ /index.html [L]
```

**Nginx**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## 📊 Performance Optimization

### Build Optimization
- Vite automatically optimizes your build
- Images are compressed and optimized
- CSS and JavaScript are minified
- Code splitting for faster loading

### Runtime Performance
- Lazy loading for images and components
- Efficient React rendering
- Optimized animations with Framer Motion
- Minimal bundle size

## 🔐 Security Considerations

### Content Security Policy
Add to your hosting provider or server configuration:
```
Content-Security-Policy: default-src 'self'; img-src 'self' https://images.unsplash.com; style-src 'self' 'unsafe-inline';
```

### HTTPS
- Always use HTTPS in production
- Most hosting providers provide automatic SSL
- Redirect all HTTP traffic to HTTPS

## 📈 Analytics & Monitoring

### Adding Analytics
To add Google Analytics or other tracking:

1. **Install analytics package**
   ```bash
   npm install @vercel/analytics
   ```

2. **Add to main.jsx**
   ```javascript
   import { Analytics } from '@vercel/analytics/react'
   
   // Add <Analytics /> to your app
   ```

### Performance Monitoring
- Use browser DevTools for performance analysis
- Monitor Core Web Vitals
- Set up error tracking (Sentry, LogRocket, etc.)

## 🔄 Updates & Maintenance

### Updating Content
- Edit `src/data/stories.js` for new stories
- Rebuild and redeploy: `npm run build`

### Updating Dependencies
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Test after updates
npm run build && npm run preview
```

### Version Control
- Use Git for version control
- Tag releases for easy rollbacks
- Keep deployment history

---

**Need help?** Check the main README.md for additional information and troubleshooting tips.

