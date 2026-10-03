# nidhi — the anatomy of a curious developer

**Live:** [somehowliving.tech](https://www.somehowliving.tech)

My personal portfolio: a story told along a single hand-drawn thread.

It starts as a tangled scribble ("an almost accurate map of everything on my mind"). As you scroll, the thread wanders through the things I tinker with, the few that have my heart, the years so far, and the loop I keep repeating, then hands you over to the work. "More rabbit holes" drops you through a black hole into everything else I've built, and at the very end the thread lands in my raised hand.

- **Laptop:** the story scrolls sideways. The thread draws itself as you go, objects talk when you hover them, the climber follows your cursor along the thread, and the cutout at the end stretches when you drag it.
- **Mobile:** the same story told vertically, with the thread weaving down the page, objects that talk when tapped, and a climber you can drag along the thread.

Designed and built from scratch. Inspired by [coolestdesigner.com](https://coolestdesigner.com/).

---

## A note from me

A lot of people have asked how I built this, so here's the honest answer: **the code was the easy part.**

These days it doesn't really matter whether you know how to code. What matters is knowing *what* you're building and *why*: the purpose behind it, the value you're trying to give, and how people will feel when they meet it. Human psychology, how people think, what makes them stay — that's one of the most important things to understand right now.

So before you open an editor, I'd highly suggest you **first think through what you want to be perceived as**, and how. Nobody is going to count your stars. Everyone is an "AI engineer" or a "developer" now, so that alone isn't what sets you apart. What does is knowing what you're doing, building it with intent, and presenting it in a way that fits who you are. That does the job.

One more thing I keep noticing: people jump straight to prompting. I get it, AI is really, really powerful (maybe I'm just old). But we've reached the point where people take a prompt from GPT and paste it into Claude. That's still effort, and that's wonderful, but where's the effort from *your* end? Sketch it. Scribble it. Put some of your own creativity in before you hand it over. You'll see wonderful results.

This site is my whole personality, thread and all. If it sparks something in you, I'd genuinely love to see yours: your story, your quirks, your weird little details. Send it my way at [nidhiyp05@gmail.com](mailto:nidhiyp05@gmail.com) or tag me on [X](https://x.com/pnyk05).

---

## How it came together

1. **Started with the feeling, not the layout.** I wanted the site to feel like my head: messy, curious, and connected by one thread.
2. **Wrote the story before the page.** Brain → rabbit holes → the few things that have my heart → the years → "apparently, I don't know how to leave things alone" → the work → oh, hi. Each part answers one question about me, in my own voice.
3. **Made the thread the system.** Everything hangs off it: objects sit along it, the timeline grows from it, the loop is tied in it, it ends at the work button and later in my hand. One idea, used everywhere, is what makes it feel designed.
4. **Sketched, storyboarded, then built.** I made mockups and storyboards (the rabbit-hole fall had a 12-frame storyboard), built it with AI as a pair, and threw away a lot. Doodles, swirls, black holes, more doodles. Most attempts didn't make it. That's the process.
5. **Sweated the small things.** Objects that talk back when you hover them. A climber you can drag along the thread. A cutout of me you can stretch, who gets annoyed. A cursor that only speaks when it has something to say. None of it is necessary; all of it is the point.
6. **Then made it real.** A phone version told vertically, not shrunk. Performance work (the page once froze for 11 seconds on load). SEO, structured data and `llms.txt` so search and AI engines understand it.

## What it's built with

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router), TypeScript
- Vite, Tailwind CSS 4
- Animation is hand-written: SVG paths for the threads, `requestAnimationFrame` for the scroll story, CSS for reveals. No animation libraries.
- Deployed on [Vercel](https://vercel.com)

## Where things live

- `src/routes/index.tsx`: the home page (story, work, ending)
- `src/routes/work.tsx`: all the work, reached by falling down the rabbit hole
- `src/components/rabbit-hole.tsx`: the fall and the climb back out
- `src/styles.css`: theme tokens and animations
- `src/assets/`: the 3D objects, project screenshots and the cutout

## Run it locally

```sh
bun install   # or npm install
bun run dev   # or npm run dev
```

## Contact

[nidhiyp05@gmail.com](mailto:nidhiyp05@gmail.com) · [LinkedIn](https://www.linkedin.com/in/nidhi-prajapati-5b4483248/) · [GitHub](https://github.com/SomehowLiving) · [X](https://x.com/pnyk05)
