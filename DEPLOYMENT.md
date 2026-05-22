# Deployment

This portfolio is deployed as a static HTML bundle through GitHub Pages.

## Source

- Production source: `site/index.html`
- Build artifact: `dist/index.html`
- Workflow: `.github/workflows/deploy.yml`

## Local Build

```bash
cd /Users/adithyanatarajan/Documents/dev/resume/portfolio
rm -rf dist
mkdir -p dist
cp site/index.html dist/index.html
```

## Local Preview

```bash
cd /Users/adithyanatarajan/Documents/dev/resume/portfolio
python3 -m http.server 4173 --directory dist
```

Open `http://localhost:4173/`.

From the parent `resume/` directory, serve `portfolio/dist` instead:

```bash
cd /Users/adithyanatarajan/Documents/dev/resume
python3 -m http.server 4173 --directory portfolio/dist
```

The helper script rebuilds and serves from the correct path:

```bash
bash /Users/adithyanatarajan/Documents/dev/resume/portfolio/scripts/preview-local.sh
```

## GitHub Pages Flow

On pushes to `main`, the workflow:

1. Checks out the repository.
2. Recreates `dist/`.
3. Copies `site/index.html` to `dist/index.html`.
4. Uploads `dist/` using `actions/upload-pages-artifact`.
5. Deploys with `actions/deploy-pages`.

No package manager install, Astro build, or generated assets are required.
