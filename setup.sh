#!/bin/bash

# Diorama - Automated Setup Script
# This script will set up and deploy your Diorama application

echo "🚀 Diorama - Automated Setup"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ required. Current version: $(node -v)"
    echo "   Please update Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Build the project
echo "🔨 Building production version..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Production build completed"
echo ""

# Ask user for deployment preference
echo "🌐 Choose deployment option:"
echo "1) Start local development server"
echo "2) Preview production build locally"
echo "3) Deploy to Vercel (requires Vercel CLI)"
echo "4) Deploy to Netlify (requires Netlify CLI)"
echo "5) Just build (manual deployment)"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo "🚀 Starting development server..."
        echo "   Access your site at: http://localhost:5173"
        npm run dev
        ;;
    2)
        echo "🚀 Starting production preview..."
        echo "   Access your site at: http://localhost:4173"
        npm run preview
        ;;
    3)
        if command -v vercel &> /dev/null; then
            echo "🚀 Deploying to Vercel..."
            vercel --prod
        else
            echo "❌ Vercel CLI not found. Install with: npm install -g vercel"
            echo "   Then run: vercel --prod"
        fi
        ;;
    4)
        if command -v netlify &> /dev/null; then
            echo "🚀 Deploying to Netlify..."
            netlify deploy --prod --dir=dist
        else
            echo "❌ Netlify CLI not found. Install with: npm install -g netlify-cli"
            echo "   Then run: netlify deploy --prod --dir=dist"
        fi
        ;;
    5)
        echo "✅ Build completed! Your files are in the 'dist' folder."
        echo "   Upload the contents of 'dist' to your web server."
        ;;
    *)
        echo "❌ Invalid choice. Run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📚 Additional resources:"
echo "   - README.md: Complete documentation"
echo "   - DEPLOYMENT.md: Detailed deployment guide"
echo "   - Source code: All files in src/ directory"
echo ""
echo "🔧 Available commands:"
echo "   npm run dev     - Start development server"
echo "   npm run build   - Create production build"
echo "   npm run preview - Preview production build"
echo ""
echo "🌟 Your Diorama application is ready!"

