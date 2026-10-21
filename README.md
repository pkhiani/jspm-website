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

Set these environment variables in Netlify (Site configuration → Environment variables):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (required in production) |
| `ENQUIRY_TO` | Inbox that receives enquiries (defaults to `contact@jspm.uk`) |
| `ENQUIRY_FROM` | Verified sender, e.g. `JSPM Website <website@jspm.uk>` |

In development without a key, submissions are logged to the server console. In production without a key, the form shows an error asking visitors to phone or email, so enquiries are never silently lost.

## Deploying to Netlify

`netlify.toml` holds the build settings, so there is nothing to type into the Netlify UI:

1. In Netlify choose **Add new project → Import an existing project**, pick this GitHub repo and the branch to deploy.
2. Leave the build settings Netlify detects (build command `npm run build`, Node 22). Netlify's Next.js runtime is applied automatically: pages are served from its CDN and the enquiry form endpoint runs as a Netlify Function.
3. Add the form email variables above, then deploy.
4. Under **Domain management**, add `www.jspropertymaintenance.com` and `jspropertymaintenance.com`, and point the DNS at Netlify. The bare domain redirects to `www`.

To test a Netlify build locally: `npx netlify-cli build` (or `npx netlify-cli dev`).
