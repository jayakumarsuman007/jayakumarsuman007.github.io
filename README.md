# MedSynk.health — Static Website (Free)

This package is a simple static website you can host for free (GitHub Pages or Netlify).
Files included:
- index.html
- about.html
- solutions.html
- pilot-proposals.html
- resources.html
- request-demo.html
- styles.css
- script.js
- assets/ (logo + placeholder images)

## Hosting (free)
### GitHub Pages (recommended)
1. Create a public GitHub repo named `yourusername.github.io` or any repo and use Pages settings.
2. Upload all files to the repo root.
3. In the repo settings → Pages, enable the site. For a custom domain:
   - Add `CNAME` file with your domain (e.g., `medsynk.health`)
   - Update DNS: point `www` CNAME to `yourusername.github.io` and use Cloudflare or registrar forwarding for the apex domain.
4. GitHub will provide HTTPS (Let's Encrypt).

### Netlify (drag-and-drop)
1. Sign up at netlify.com (free).
2. Drag-and-drop the website folder to deploy.
3. Add custom domain in Netlify dashboard and follow DNS instructions.
4. Netlify provides free HTTPS.

## Forms
The demo request form uses a `mailto:` fallback so it works without server backends. If you prefer server-handled forms:
- Use Netlify Forms (free tier) or Google Forms (free) and replace the form action.

## Customize
- Replace `assets/logo.svg` and images in `assets/` with your own.
- Update email `drprao63@medsynk.health` in files if needed.

-- End of README
