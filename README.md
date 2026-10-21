# JS Property Maintenance website

The marketing site for [JS Property Maintenance](https://www.jspropertymaintenance.com), rebuilt from scratch with Next.js (App Router), React and Tailwind CSS 4.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Structure

- `src/lib/site.ts`: all business content (phone, hours, services, areas, reviews…). Edit copy here.
- `src/lib/forms.ts`: field definitions for the quote, contact, trade-application and referral forms.
- `src/app/api/enquiry/route.ts`: one endpoint that validates every form and emails it via [Resend](https://resend.com).
- `src/components/`: header, footer, shared sections, form, icons.
- `src/app/<page>/page.tsx`: one folder per route (`/about`, `/process`, `/services`, `/reviews`, `/referrals`, `/work-with-us`, `/contact`, `/request-a-quote`, `/privacy`, `/terms`, `/cookies`).

## Form email setup

Set these environment variables in your host (e.g. Vercel → Project → Settings → Environment Variables):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (required in production) |
| `ENQUIRY_TO` | Inbox that receives enquiries (defaults to `contact@jspm.uk`) |
| `ENQUIRY_FROM` | Verified sender, e.g. `JSPM Website <website@jspm.uk>` |

In development without a key, submissions are logged to the server console. In production without a key, the form shows an error asking visitors to phone or email, so enquiries are never silently lost.
