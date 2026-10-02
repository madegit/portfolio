# nidhi — the anatomy of a curious developer

**Live:** [somehowliving.tech](https://www.somehowliving.tech)

My personal portfolio: a scroll-led story told along a single hand-drawn thread.

It starts as a tangled scribble ("an almost accurate map of everything on my mind"), then the thread wanders through the things I tinker with, the few that have my heart, the years so far, and the loop i keep repeating, before handing off to the work and ending in my raised hand.

- **Laptop:** the story scrolls sideways. The thread draws itself as you go, objects talk when you hover them, the climber follows your cursor along the thread, and the cutout at the end stretches when you drag it.
- **Mobile:** the same story told vertically, with the thread weaving down the page, objects that talk when tapped, and a climber you can drag along the thread.

Design inspired by [coolestdesigner.com](https://coolestdesigner.com/).

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router), TypeScript
- Vite, Tailwind CSS 4
- Animation is hand-written: SVG paths for the threads, `requestAnimationFrame` for the scroll story, CSS for reveals. No animation libraries.
- Cloudflare Web Analytics (cookie-free; enabled by adding a token in `src/routes/__root.tsx`)

## Where things live

- `src/routes/index.tsx`: the home page (story, work, ending)
- `src/routes/work.tsx`: all the work, reached by falling down the rabbit hole
- `src/components/rabbit-hole.tsx`: the fall and the climb back out
- `src/styles.css`: theme tokens and animations
- `src/assets/`: the 3D objects and the cutout

## Run it locally

```sh
bun install   # or npm install
bun run dev   # or npm run dev
```

Deployed on [Vercel](https://vercel.com).

## Contact

[nidhiyp05@gmail.com](mailto:nidhiyp05@gmail.com) · [LinkedIn](https://www.linkedin.com/in/nidhi-prajapati-5b4483248/) · [GitHub](https://github.com/SomehowLiving) · [X](https://x.com/pnyk05)
