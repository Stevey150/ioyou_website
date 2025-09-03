# IOYou Landing Site

This is a static site ready for Netlify.

## Deploy on Netlify (UI)
1. Log in to Netlify and click "Add new site" → "Import an existing project".
2. Connect your Git repo containing this folder, or drag-and-drop this `website/` folder to Netlify Drop.
3. Build command: (leave empty)
4. Publish directory: `.` (dot)
5. Deploy.

Notes:
- `index.html` at repo root is the site entry.
- Assets, styles, and scripts are under `public/`.
- `netlify.toml` handles redirects, including `/help-center`.

## Alternative: publish `public/` folder
If you prefer `public/` as the publish folder:
- Set Publish directory to `public`.
- Rename `public/index-static.html` to `public/index.html` (and adjust asset paths to be relative to `public/`).
- Remove the root `index.html`.

## Local preview
You can serve locally with any static server (optional):

- VS Code Live Server
- Python (Windows PowerShell):
  ```powershell
  # from the website folder
  python -m http.server 8080
  ```
  Then open http://localhost:8080

## Structure
- `/index.html` – main landing page (uses `public/main.css` and `public/main.js`).
- `/public/` – images, styles, scripts, and `help-center/` page.
- `/netlify.toml` – Netlify config and redirects.

## Known follow-ups
- Navbar can be refined further if you want sticky/fixed behavior.
- Minor CSS cleanups can be made; tell me if you see any styling issues after deploy and I’ll fix them quickly.
