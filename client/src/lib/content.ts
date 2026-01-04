// Content Database
// To add a new Note or Essay, add a new object to the 'content' array below.
// Type: 'note' for raw thinking, 'essay' for structured writing.
// Date: Must be in YYYY.MM.DD format for Notes.
export interface Post {
  slug: string;
  title: string;
  date: string; // YYYY.MM.DD
  type: 'note' | 'essay';
  content: string;
}

export const content: Post[] = [
  /* 
  EXAMPLE OF HOW TO ADD NEW CONTENT:
  {
    slug: "your-url-slug",
    title: "Your Post Title",
    date: "2026.01.01",
    type: "note",
    content: `
# Your Title

Your content here in markdown format.

| Item | Cost | Note |
| :--- | :--- | :--- |
| Concrete | $5k | High durability |
| Lumber | $12k | Sourced locally |
    `
  },
  */
  {
    slug: "where-i-spent-my-attention-2025",
    title: "Where I Spent My Attention in 2025",
    date: "2026.01.01",
    type: "essay",
    content: `
> **“The currency of life isn’t money. It’s not even time. It’s attention.”**  
> — Naval Ravikant

That framing has stuck with me for a long time.

If attention is the real currency of life—more than money, more than time—then how you spend it ultimately shapes what you believe, what you value, and the direction your life takes. Looking back on 2025, that question feels especially relevant.

So instead of asking *What did I do this year?*, I wanted to ask something slightly different:

**Where did my attention actually go?**

What questions did I sit with repeatedly?  
What voices did I keep returning to?  
What ideas did I allow to shape how I think about the world?

This essay is an attempt to answer that—starting with podcasts.

---

## Part I: Where I Spent My Time (and Attention) in 2025 — Podcasts

Before getting into what I listened to, it’s worth mentioning how I was able to listen to this much at all.

The single biggest enabler of my podcast and reading habit isn’t discipline or productivity hacks—it’s my AirPods.

They’re frictionless. I can pop them in while doing housework, wear them on a walk, or put them in and out throughout the day. I can seamlessly switch between work calls, personal calls, music, podcasts, and audiobooks. They’re also how I take notes verbally through dictation—capturing thoughts the moment they arise instead of hoping I remember them later.

On many walks, I’ll pause a podcast, open Notes or ChatGPT, and dictate half-formed ideas. Many of the thoughts that later became essays, product ideas, or conversations would have died if they hadn’t been captured in motion.

They let learning layer into life instead of competing with it. That’s what made this level of listening possible.

---

## Tim Ferriss

Tim Ferriss is the obvious starting point.

He will continue to be one of the most influential people I follow because I have a deep respect for how he learns. I take a lot from his curiosity, his experimentation, and especially the way he asks questions.

When you distill **Ninja Selling**—the system I use to run my real estate business—down to its most basic form, it comes down to this: ask good questions, listen for change, and serve as that change. That model applies to far more than sales. It’s about paying attention, understanding what matters to people, and providing value accordingly.

Tim embodies that approach at a very high level. The way he interviews people, probes their thinking, and stays genuinely curious has shaped how I approach conversations across my life.

---

## Moonshots with Peter Diamandis

Moonshots taps into a different part of me.

It feels like my boyhood curiosity and wonder about the world finally getting space to exist. Peter Diamandis is such a positive force, and *Moonshots* became my go-to podcast in the second half of 2025 when I wanted optimism about where the world is heading and what’s possible with technology.

---

## Founders with David Senra

*Founders*, by David Senra, is another pillar.

I discovered it through Tim Ferriss. David reads biographies of history’s greatest founders and influential people and distills them into thoughtful verbal essays.

---

## a16z and Techno-Optimism

The a16z podcast has become increasingly important as I’ve started building my own products.

Andreessen Horowitz focuses on major technological shifts, and right now almost everything involves AI—not because it’s trendy, but because AI can be applied to nearly everything.

One of the most influential episodes was a repost of the **Techno-Optimist Manifesto**, written by Marc Andreessen. The term *techno-optimist* perfectly captures how I see the world.

---

## Attention Ledger: Podcast Listening in 2025

### Total Listening Time

- **~415 hours** of podcasts listened to  
- **≈ 1.1 hours per day**

### Top Podcasts by Listening Time

| Podcast | Estimated Hours | Why It Mattered |
|:---|:---:|:---|
| The Tim Ferriss Show | ~115 | Learning how to learn, asking better questions |
| Moonshots | ~80 | Optimism, technology, abundance |
| Founders | ~55 | Studying great builders across history |
| Modern Wisdom | ~32 | Long-form conversations and perspective |
| a16z Podcast | ~30 | Technology through an investor lens |

### Listening by Category

| Category | Approx. % of Time | Approx. Hours |
|:---|:---:|:---|
| AI / Technology / Future | ~45% | ~190 |
| Founders / Business / Strategy | ~30% | ~125 |
| Psychology / Meaning / Philosophy | ~15% | ~60 |
| Health / Performance | ~10% | ~40 |

---

## Closing

I still want to identify a top 10 list of episodes and revisit them intentionally. I also plan to write a companion piece on where my attention went in books, then synthesize the themes across both.
    `
  },
  {
    slug: "2025.01.01-starting-the-log",
    title: "Starting the Log",
    date: "2025.01.01",
    type: "note",
    content: `
This is the beginning of a public lab notebook. 

I've spent years building things—houses, software systems, teams—but much of the thinking behind that work has been lost to email threads, Slack messages, and ephemeral social media posts.

The goal here isn't traffic. It's clarity. Writing forces you to structure your thoughts, to test your assumptions, and to create a record that can be referenced later.

This site is static. It's simple. It's designed to last. No databases to maintain, no complex CMS to update. just text files and a build process. 
    `
  },
  {
    slug: "2025.01.15-material-honesty",
    title: "Material Honesty in Software",
    date: "2025.01.15",
    type: "note",
    content: `
In architecture, "truth to materials" is the idea that materials should be used where they are most appropriate, and their nature should not be hidden. Concrete should look like concrete. Wood should look like wood.

We often lack this in software. We wrap everything in layers of abstraction that try to pretend they are something else. We build "desktop-like" apps in browsers that feel uncanny. We build "native-like" apps in webviews that feel sluggish.

Good software, like good building, should respect the medium it is built in. The web is a document-based medium. It excels at linking, referencing, and flowing text. When we fight this, we usually lose.
    `
  },
  {
    slug: "on-durability",
    title: "On Durability",
    date: "2024.12.10",
    type: "essay",
    content: `
# On Durability

We tend to optimize for the immediate. In construction, we see this in "fast fashion" homes—stick frame structures wrapped in vinyl that will look tired in 10 years and fail in 30. In software, we see it in the endless churn of frameworks and dependencies.

But some things are built to last.

## The 100-Year View

What does it mean to build something that lasts 100 years?

In real estate, it means masonry, copper, slate. It means orientation to the sun and wind. It means adaptable floor plans that can evolve as families change.

In software, it's harder to define. Code rots not because the bits degrade, but because the environment around it changes. The OS updates, the browser deprecates an API, the dependencies vanish.

## Simplicity as Preservation

The only strategy for digital durability is radical simplicity. 

HTML is durable. Plain text is durable. Everything else is a liability. 

If you want your work to be readable in 2050, don't lock it in a proprietary database. Don't render it with a complex JavaScript framework that won't build on the computers of the future. Put it in a text file.
    `
  },
  {
    slug: "the-leverage-of-systems",
    title: "The Leverage of Systems",
    date: "2024.11.05",
    type: "essay",
    content: `
# The Leverage of Systems

A system is TESTING a way of doing something that produces a consistent result without requiring consistent heroic effort.

Most people rely on willpower. Willpower is a battery; it drains. Systems are engines; they run as long as you fuel them.

When I look at a real estate deal, I don't look at the house. I look at the system that produced the house. Was it built by a craftsman or a production line? When I look at a company, I don't look at the product launch. I look at the process that enables them to launch products repeatedly.

Building a system is high-leverage work because you do it once and it pays you back forever.
    `
  }
];

export const getNotes = () => content.filter(p => p.type === 'note').sort((a, b) => b.date.localeCompare(a.date));
export const getEssays = () => content.filter(p => p.type === 'essay').sort((a, b) => b.date.localeCompare(a.date));
export const getPost = (slug: string) => content.find(p => p.slug === slug);
