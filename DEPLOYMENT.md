# Deployment Guide: GitHub Pages

This guide will walk you through deploying your portfolio website to GitHub Pages for free hosting.

## Prerequisites

- A GitHub account
- Git installed on your machine
- Node.js 18+ installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right and select **New repository**
3. Name your repository `portfolio` (or any name you prefer)
4. Keep it **Public** (required for free GitHub Pages hosting)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 2: Update Configuration (If Using Different Repository Name)

If you named your repository something other than `portfolio`, update the `astro.config.mjs` file:

```javascript
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/YOUR_REPOSITORY_NAME',
});
```

**Example:**
- If your GitHub username is `adithya-nat` and repository is `portfolio`:
  ```javascript
  site: 'https://adithya-nat.github.io',
  base: '/portfolio',
  ```

## Step 3: Initialize Git and Push to GitHub

Open your terminal in the `portfolio` directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (tab at the top)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

## Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Once successful, you'll see a green checkmark

## Step 6: Access Your Website

Your website will be available at:

```
https://YOUR_USERNAME.github.io/portfolio/
```

**Example:** `https://adithya-nat.github.io/portfolio/`

## Adding Your Resume PDF

To enable the "Download Resume" button:

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the `public/` folder
4. Commit and push the changes:

```bash
git add public/resume.pdf
git commit -m "Add resume PDF"
git push
```

## Adding Real Company/Institution Logos

Replace the placeholder SVG logos with real images:

1. Download the official logos (PNG or SVG format recommended)
2. Place them in `public/images/` folder
3. Make sure filenames match what's in the code:
   - `intuit-logo.svg` or `intuit-logo.png`
   - `freshworks-logo.svg` or `freshworks-logo.png`
   - `asu-logo.svg` or `asu-logo.png`
   - `sastra-logo.svg` or `sastra-logo.png`
   - `aws-badge.svg` or `aws-badge.png`

4. If using PNG files, update the file extensions in:
   - `src/components/Experience.astro`
   - `src/components/Education.astro`
   - `src/components/Certifications.astro`

5. Commit and push:

```bash
git add public/images/
git commit -m "Add company and institution logos"
git push
```

## Custom Domain (Optional)

To use a custom domain like `adithyanatarajan.com`:

### Step 1: Purchase a Domain
Buy a domain from a registrar like:
- Namecheap
- Google Domains
- Cloudflare
- GoDaddy

### Step 2: Configure DNS
Add these DNS records at your domain registrar:

**For apex domain (example.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### Step 3: Configure GitHub Pages
1. Go to repository **Settings** > **Pages**
2. Under **Custom domain**, enter your domain (e.g., `adithyanatarajan.com`)
3. Click **Save**
4. Check **Enforce HTTPS** after DNS propagates (can take up to 24 hours)

### Step 4: Update Astro Config
```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  base: '/', // Change to root since you have a custom domain
});
```

## Troubleshooting

### Build Fails
- Check the **Actions** tab for error logs
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### 404 Errors on Pages
- Verify `base` in `astro.config.mjs` matches your repository name
- Check that paths to assets include the base path

### Images Not Loading
- Ensure images are in the `public/` folder
- Check file names match exactly (case-sensitive)
- Verify image paths use `${baseUrl}` prefix

### CSS Not Loading
- Clear browser cache
- Check for build errors in Actions logs

## Making Updates

To update your website:

1. Make changes to your code locally
2. Test locally with `npm run dev`
3. Commit and push:

```bash
git add .
git commit -m "Description of changes"
git push
```

4. GitHub Actions will automatically rebuild and deploy

## Local Development

To run the website locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321/portfolio/`

## Build Locally

To test the production build:

```bash
# Build the site
npm run build

# Preview the build
npm run preview
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Install dependencies | `npm install` |
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Preview production build | `npm run preview` |

## Your Website URL

After deployment, share this URL in your job applications:

```
https://YOUR_USERNAME.github.io/portfolio/
```

Good luck with your job search! 🚀
