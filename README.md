## Frameworks being used:
- Next.js
- [Shadcn UI](https://ui.shadcn.com/docs/components/accordion) (Click on me for the docs)
## Getting Started

First, install the required libraries:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

The dev server will be running at http://localhost:3000

The available pages are `/dashboard` and `/settings`. In other words, you can access the dashboard page at `http://localhost:3000/dashboard` and the settings page in a similar way.

If you need to add more pages, go to `/src/app` and create a directory with a suitable name which will be the route for the page too.

Each page should have its own `layout.js` file which should be very similar to the `layout.js` file of the other pages. Just copy it.

Any additional components that you need to create on your own, add them to the `/src/components` directory with the `header.js` file
