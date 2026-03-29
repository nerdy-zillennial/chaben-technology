# Chaben Technology Solution Ltd — Website v2.0

**A Chaben Holdings Company**

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS tokens
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Netlify (with @netlify/plugin-nextjs)
- **Fonts**: Cormorant Garamond · Georgia · Montserrat

---

## Project Structure

```
/
├── public/
│   ├── __forms.html        ← CRITICAL: Netlify form detection. DO NOT DELETE.
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── page.tsx           (Home)
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   └── contact/page.tsx
│   └── components/
│       ├── Nav.tsx
│       ├── Footer.tsx
│       └── useReveal.ts
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── netlify.toml
```

---

## Local Development

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

---

## Deploy to Netlify (Step-by-Step)

### 1. Push to GitHub

Make sure all files are committed to your repo root exactly as structured above.

### 2. Connect Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Select **GitHub** → choose your repository
4. Netlify auto-detects `netlify.toml` — **do not change any build settings**
5. Click **Deploy site**

### 3. How the Contact Form Works

The form uses Netlify Forms with the official Next.js App Router pattern:

- `/public/__forms.html` — static HTML Netlify crawls at build time to register the form
- `contact/page.tsx` — POSTs to `/__forms.html` via `fetch()` on submit
- Netlify intercepts the POST at the edge and records the submission

**If the form doesn't appear in your Netlify Forms tab:**
- Confirm `public/__forms.html` exists and is committed
- Redeploy the site

### 4. Enable Email Notifications

After first deploy:

1. Netlify Dashboard → **Forms** → confirm `contact` form is listed
2. **Site settings** → **Forms** → **Form notifications**
3. **Add notification** → **Email notification**
4. Enter: `enquiries@chabentech.com`
5. Select form: `contact` → Save

---

## Customisation Checklist

- [ ] Replace `enquiries@chabentech.com` with your actual email
- [ ] Set up Netlify form email notification (see above)
- [ ] Add your logo variants (`logo-light.png` etc.) to `/public`
- [ ] Replace Unsplash images with proprietary photography
- [ ] Set custom domain in Netlify dashboard
- [ ] Update stats (countries, projects) as you grow

---

## Brand Tokens

| Token | Value | Role |
|-------|-------|------|
| `--navy` | `#0D1E3A` | Primary / backgrounds |
| `--gold` | `#B8892A` | Accent & brand mark |
| `--techblue` | `#1A6B9E` | Technology accent |
| `--slate` | `#3E4E5E` | Body text |

---

*Chaben Technology Solution Ltd — A Chaben Holdings Company*
*Brand Identity Guide v2.0 · 2026*
