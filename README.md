# ARIA Construction Group, Website

Static, multi-page site. No build step required.

## Pages
- `index.html`: Home
- `insurance.html`: Insurance Sector
- `commercial-sector.html`: Commercial Sector
- `residential-sector.html`: Residential Sector
- `how-we-work.html`: How We Work (JSPER)
- `projects.html`: Projects listing
- `project-flat-roof-renewal.html`: Insurance case study
- `project-kitchen-renovation.html`: Residential case study
- `about.html`: About
- `team.html`: Team
- `accreditations.html`: Accreditations
- `contact.html`: Contact (Netlify Forms enabled)

The header and footer are injected from `assets/main.js` so navigation
stays consistent. Edit them in one place there, not per page.

## Deploy to Netlify (fastest method)
1. Go to https://app.netlify.com/drop
2. Drag the entire `aria-site` folder onto the page.
3. Done. You'll get a live URL instantly.

To use a custom domain (e.g. ariacontractors.co.uk): Site settings, then Domain management, then Add custom domain.

## Contact form
The form on `contact.html` uses **Netlify Forms** (`data-netlify="true"`). Submissions
appear automatically under your site's **Forms** tab in the Netlify dashboard once deployed.
No backend needed. Set up email notifications under Forms, Settings & notifications.

## Editing content
All copy is plain text inside the HTML files. Search for the text you want to change.
Brand colours and fonts live in `assets/style.css` (`:root` variables at the top).

## Brand
- Navy `#000025`, Teal `#00859a` (from brand guidelines)
- Font: Montserrat (brand's specified online typeface)
- Logos in `/assets` (positive for light backgrounds, negative for dark)

## Notes
- Replace remaining placeholder tiles and copy with real content as you build out projects.
- Contact details (phone 0208 191 0961, email info@ariacontractors.co.uk) live in `assets/main.js` (footer template) and `contact.html`. Update both files together if details change.
