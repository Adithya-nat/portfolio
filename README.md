# Adithya Natarajan Portfolio

This repository deploys a static, bundled portfolio site to GitHub Pages. The production page is `site/index.html`, generated from the Claude Design export.

## Development

No Node or Astro build is required. To preview locally:

```bash
cd /Users/adithyanatarajan/Documents/dev/resume/portfolio
rm -rf dist
mkdir -p dist
cp site/index.html dist/index.html
python3 -m http.server 4173 --directory dist
```

Then open `http://localhost:4173/`.

If your terminal is in the parent `resume/` directory, use:

```bash
cd /Users/adithyanatarajan/Documents/dev/resume
rm -rf portfolio/dist
mkdir -p portfolio/dist
cp portfolio/site/index.html portfolio/dist/index.html
python3 -m http.server 4173 --directory portfolio/dist
```

You can also run:

```bash
bash /Users/adithyanatarajan/Documents/dev/resume/portfolio/scripts/preview-local.sh
```

## Deployment

GitHub Actions copies `site/index.html` into `dist/index.html` and uploads `dist/` to GitHub Pages. The deployed site is served from the repository Pages URL, including `/portfolio/` when GitHub Pages uses the repository name as the base path.

## Updating The Site

1. Export the updated Claude Design bundle.
2. Replace `site/index.html` with the new bundled HTML.
3. Run the local preview command above.
4. Commit and push to `main`.

The bundled HTML embeds its own UI runtime, styles, fonts, images, and resume assets.
