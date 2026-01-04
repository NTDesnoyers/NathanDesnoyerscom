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
    title: "Part I: Where I Spent My Attention in 2025",
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

I first got into personal development in **2018**, right after graduating college. I was trying to mature, to be better at life, and to figure out how to function as an adult. I had heard of *The 4-Hour Workweek* for years, but I don’t think I actually read it until **2020 or 2021**.

What I do remember clearly is trying to apply ideas from that book at my job. I tried to convince my boss to let me work remotely. The answer was a firm no. At the time, I essentially told them that I would be working a fully remote job at some point anyway.

When I was fired in **June 2022**, that conversation was referenced as evidence that I had already decided I wouldn’t be there long-term.

So—thank you, Tim, for helping me with that.

I don’t blame them. Why would they have let me do that?

Around that same time, I got my real estate license. In earlier years, real-estate-specific podcasts dominated my listening. Over time, I’ve drifted away from most of that content—not because it isn’t valuable, but because I’ve learned most of what I can from it. At this point, the learning comes from application—from doing the work and learning from the results.

My original plan was to succeed at my job, build real estate on the side, and quit once the income pipeline was clear. That would have been a good plan if I had followed it.

But I’ve also learned that if something isn’t right for you, you don’t have to endure it indefinitely. I had a false sense of obligation—a desire to leave things “the right way” and to be able to point to a résumé of success.

There *is* something admirable about people who can push through discomfort. My best friend Luke is a great example—he succeeded in a job he didn’t like and then started his business. That’s a quality I respect and aspire to.

I do that in my own way—just not day in and day out. I choose which discomforts I’ll push through: hard conversations, administrative work, taxes, operational friction. That’s my version of endurance.

---

## Moonshots with Peter Diamandis

Moonshots taps into a different part of me.

It feels like my boyhood curiosity and wonder about the world finally getting space to exist. Peter Diamandis is such a positive force, and *Moonshots* became my go-to podcast in the second half of 2025 when I wanted optimism about where the world is heading and what’s possible with technology.

Around the same time, I leaned more seriously into defining my **Massive Transformative Purpose**, which I currently think of as something like:

> *Rewiring how opportunity flows by building connective intelligence that helps propel humanity into an abundant future.*

Peter represents a lot of what I aspire to: serial entrepreneur, founder of XPRIZE, someone focused on grand human challenges, longevity, and optimism. I want to spend more time with *Moonshots* content, engage with the community, and eventually attend their events.

It’s also been meaningful relationally. I share *Moonshots* episodes with Luke, my best man, and it gives us a shared language to dream big together.

---

## Founders with David Senra

*Founders*, by David Senra, is another pillar.

I discovered it through Tim Ferriss. David reads biographies of history’s greatest founders and influential people and distills them into thoughtful verbal essays. Because that’s all he does, he goes very deep—identifying patterns, traits, and behaviors across people and time.

If you aspire to change the world in a positive way, one of the best ways to do that is to study the people who already have. Take the good. Discard the rest.

There are people I wouldn’t want to be, but there are still ways they think or operate that are worth learning from. David’s work has been invaluable for that. His newer interviews with living founders have added another dimension and expanded the list of people I admire and want to learn from.

---

## Modern Wisdom

*Modern Wisdom* feels adjacent to Tim Ferriss for me.

Chris Williamson gets great guests and asks thoughtful questions. I’m still forming my full opinion of him, but I appreciate the conversations. Podcasting seems to be his primary focus, whereas Tim has a broader portfolio of projects. Still, there’s a lot of value there.

---

## a16z and Techno-Optimism

The a16z podcast has become increasingly important as I’ve started building my own products.

Andreessen Horowitz focuses on major technological shifts, and right now almost everything involves AI—not because it’s trendy, but because AI can be applied to nearly everything.

Listening to a16z helped me contextualize AI the same way people once contextualized the internet. The shift from pre-internet to post-internet unlocked massive opportunity simply by connecting technology to the internet. AI feels like a similar shift.

That framing maps directly onto what I’m building with Flow OS: using AI to capture conversations and information more easily, then applying AI at every angle to extract more value—for users and for the people they serve.

What I appreciate most about a16z is learning about technology through the lens of an investor. Investors must be historically literate and forward-looking, placing capital, teams, and energy into lanes where growth is likely to occur.

One of the most influential episodes was a repost of the **Techno-Optimist Manifesto**, written by Marc Andreessen. The term *techno-optimist* perfectly captures how I see the world. The manifesto articulated ideas I hadn’t fully put into words yet, especially around markets, incentives, and progress.

I also recognize that if I’m going to speak about these ideas responsibly, I need to continue becoming more literate—especially when discussing them with people who see the world very differently.

---

## Health, Huberman, and Systems

I come in and out of Huberman and health podcasts because I feel like I’ve already built the system I need.

What isn’t reflected in podcasts or books is **The Happy Body**—a lifestyle system I follow that integrates exercise, diet, mindset, stoicism, Buddhism, and mindfulness. I have a scalable daily routine. I can push hard when I feel great or scale down to stretching and movement when I don’t. My diet is dialed in. When I stray, I return without friction.

Because the system is built, I don’t need to consume much more health content. Now it’s just execution.

---

## Additional Voices

I discovered **Patrick O’Shaughnessy** near the end of the year through David Senra. He helped clarify the difference between thinking like an investor and thinking like a business owner—two related but distinct modes that need to be applied intentionally.

**Dwarkesh** has been a strong complement to *Moonshots*, approaching AI and the future from a more philosophical, multi-angle lens. Listening to him puts me in the same mental space as thinkers like David Deutsch and Naval Ravikant.

**Know Thyself** is something I listen to selectively, mainly when he hosts guests I already respect. Bandwidth matters.

**The Network State Podcast**, hosted by Balaji Srinivasan, is something I’ll listen to almost everything from, even when it gets highly technical. Balaji is one of the clearest predictors of where things are heading, and I want to understand how ideas like the network state may apply to my future as a builder.

I only listened to **Joe Rogan** because he hosted Ray Kurzweil. I didn’t enjoy the interview and generally don’t enjoy his format, so that won’t be a regular part of my listening.

---

## Consequences, Misallocations, and Reflection

Looking back, this attention allocation had real consequences.

On the business side, it kept me thinking big and oriented toward truth-seeking. Being consistently exposed to people who are true masters of their crafts raised my internal bar. At times, that came with a downside—having my head in the clouds occasionally interfered with execution—but overall it expanded my sense of what’s possible.

My biggest misallocation of attention in 2025 wasn’t podcasts—it was my calendar. Too many events, too many low-leverage relationships, and not enough protected time for what mattered most.

One belief that changed for me this year is the idea that attention problems can always be solved alone. I learned—through experience—that some patterns require external structure and accountability to change.

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

This exercise wasn’t about optimization or consumption for its own sake. It was about noticing patterns—what consistently earned my attention, and therefore what was quietly shaping my thinking over time.

This isn’t a theory of attention—just a practice of noticing.
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
