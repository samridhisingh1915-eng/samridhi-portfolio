# Samridhi Singh — MBA Portfolio

A static, single-page portfolio site. No build step, no dependencies — plain HTML/CSS/JS.

```
index.html
assets/
  css/style.css
  js/script.js
  img/            certificate images + headshot
  docs/           résumé PDF, Letter of Recommendation PDF
```

## Deploy on GitHub Pages (2 minutes)

1. Create a new repository on GitHub, e.g. `samridhi-portfolio`.
2. Upload every file in this folder to the repository, keeping the folder
   structure exactly as-is (the `assets/` folder must sit next to `index.html`).
   - Easiest way: on the repo page, click **Add file → Upload files**, drag
     the whole contents of this folder in, and commit.
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
6. Wait 1–2 minutes. Your site will be live at:
   `https://<your-github-username>.github.io/<repository-name>/`

## Updating content later

- All text lives directly in `index.html` — search for the section you want
  to change (`<!-- ============ EXPERIENCE ============ -->` etc.).
- To swap the résumé PDF, replace `assets/docs/Samridhi_Singh_Resume.pdf`
  and keep the same filename (or update the link in `index.html`).
- To add a new certificate, drop the image into `assets/img/` and copy one
  of the existing `<a class="cert-card">` blocks in the Certifications
  section.

## Notes on content accuracy

Two entries in the Certifications section — **Certificate of Leadership**
(Zyntiq) and **Human Resource Management** (FundsAudit) — are listed from
the résumé text only, since no certificate file for either was provided.
Their date ranges as written on the résumé (Jun 2025–Aug 2025, and
Dec 2025–Jan 2025) look like possible typos against the rest of the
timeline — worth double-checking against the original certificates before
sharing this site publicly.
