# Samridhi Singh — Portfolio

A single-page portfolio site for Samridhi Singh (HR & Digital Marketing, MBA candidate at Mittal School of
Business, LPU). Plain HTML/CSS/JS — no build step, no dependencies beyond Google Fonts.

```
portfolio/
├── index.html      → all content lives here
├── style.css        → design system + layout
├── script.js         → mobile nav + scroll animations
└── assets/
    └── (add Samridhi-Singh-Resume.pdf here)
```

## 1. Add your résumé PDF (optional but recommended)

The "Download résumé" button in the hero links to `assets/Samridhi-Singh-Resume.pdf`. Drop your résumé PDF
into the `assets/` folder with that exact filename, or edit the `href` in `index.html` (search for
`download` in the hero section) to point wherever you'd like.

## 2. Put it on GitHub

If you don't already have a GitHub account, create one at [github.com](https://github.com) — it's free.

1. Create a new repository on GitHub. Name it whatever you like — if you want the site at
   `https://<your-username>.github.io` directly (no sub-path), name the repo exactly
   `<your-username>.github.io`. Any other name works too, it'll just live at
   `https://<your-username>.github.io/<repo-name>`.
2. On your computer, open a terminal in this `portfolio` folder and run:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

   (Replace `<your-username>` and `<repo-name>` with your actual GitHub username and repo name.)

## 3. Turn on GitHub Pages

1. On GitHub, open your repository → **Settings** → **Pages** (left sidebar, under "Code and automation").
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
4. Wait about a minute, then refresh the page — GitHub will show you the live URL
   (`https://<your-username>.github.io/<repo-name>/`).

That's it — the site is live. Any time you edit a file and push to `main`, GitHub Pages redeploys
automatically within a minute or two.

## Editing content

Everything is in `index.html`, in plain readable sections (`<!-- HERO -->`, `<!-- EXPERIENCE -->`, etc.).
To update text, dates, or links, edit that file directly — no build tools required. Colors, fonts, and
spacing live in `style.css` under the `:root` custom properties at the top if you want to adjust the
palette.

## Local preview

Before pushing, you can preview the site locally. From this folder, run:

```bash
python3 -m http.server 8000
```

then open `http://localhost:8000` in your browser.
