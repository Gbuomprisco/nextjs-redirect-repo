This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Reproduce Issue

1. Navigate to sign in page
2. Enter any email + password
3. Navigate from the URL to /auth
4. /auth will redirect to /dashboard
5. Content flashes

Use "permanentRedirect" instead of "redirect" to see it go away
