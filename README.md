# hb-jw.github.io

Personal academic homepage.

## How to Deploy

1. Create a repository on GitHub named `hb-jw.github.io`
2. Push this code to the repository:

```bash
cd person-page
git init
git add .
git commit -m "Initial commit: academic homepage"
git branch -M main
git remote add origin https://github.com/hb-jw/hb-jw.github.io.git
git push -u origin main
```

3. Go to **Settings → Pages** in the repository, ensure the source is set to `main` branch, root `/`.
4. Your site will be live at `https://hb-jw.github.io` within a few minutes.

## Customization

- **Personal info**: Edit `index.html`, replace all placeholder text (`Your Name`, `University Name`, etc.)
- **Photo**: Place your photo at `assets/photo.jpg` (recommended: ~280×350px)
- **CV**: Place your CV PDF at `assets/cv.pdf`
- **Publication thumbnails**: Add images to `assets/pub1.png`, `assets/pub2.png`, etc.
- **Colors**: Edit CSS variables in `css/style.css` under `:root`
- **Sections**: Add/remove sections directly in `index.html`
