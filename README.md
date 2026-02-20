# KR Law, APC

Website for KR Law, APC — a personal injury law firm based in Los Angeles, California.

Live at: https://www.krinjurylawfirm.com

## Tech

- Next.js 15 (App Router)
- React 19
- TypeScript
- Styled Components
- Deployed on Vercel

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run linter

## Project Structure

- `src/app/` — all the pages
- `src/components/` — reusable components
- `src/lib/` — helper functions (markdown parsing etc.)
- `content/blog/` — blog posts in markdown
- `public/images/` — all images

## Contact Form

The contact form sends emails using Nodemailer. You need these env variables:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=where-to-receive@email.com
```
