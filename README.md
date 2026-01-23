# Adithya Natarajan - Portfolio Website

A modern, minimalistic portfolio website built with Astro, featuring an Anthropic-inspired design with smooth animations and responsive layouts.

## Features

- **Modern Design**: Anthropic-inspired warm cream aesthetic with clean typography
- **Animated Timelines**: Scroll-triggered animations for work experience and education
- **Responsive**: Mobile-first design that looks great on all devices
- **Fast**: Built with Astro for lightning-fast page loads
- **SEO Ready**: Proper meta tags and semantic HTML

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- TypeScript - Type safety
- CSS3 - Custom animations and styling
- Inter Font - Google Fonts

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The site runs at `http://localhost:4321/portfolio/` in development mode.

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── styles/         # Global CSS
├── public/
│   ├── images/         # Logo and badge images
│   └── resume.pdf      # Downloadable resume
└── .github/workflows/  # GitHub Actions deployment
```

## Customization

### Adding Your Images

Replace placeholder logos in `public/images/`:
- `intuit-logo.svg`
- `freshworks-logo.svg`
- `asu-logo.svg`
- `sastra-logo.svg`
- `aws-badge.svg`

### Adding Your Resume

Place your resume PDF in `public/resume.pdf`

### Updating Content

Edit the data in respective component files:
- `src/components/Experience.astro` - Work experience
- `src/components/Education.astro` - Education details
- `src/components/Skills.astro` - Technical skills
- `src/components/Projects.astro` - Personal projects

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to GitHub Pages.

### Quick Deploy

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Then enable GitHub Pages in repository settings with "GitHub Actions" as the source.

## License

MIT License - Feel free to use this template for your own portfolio!

---

Built with ❤️ using [Astro](https://astro.build/)
