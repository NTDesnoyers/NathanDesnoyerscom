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
    slug: "credentials-are-the-wrong-unit-of-analysis",
    title: "Credentials Are the Wrong Unit of Analysis",
    date: "2026.02.20",
    type: "essay",
    content: `
Here's what I keep coming back to: the thing that determines whether you build something is not your degree, not your job title, not whether you've ever written production code. It's whether you have a tight enough feedback loop to keep learning. That's it. Everything else is noise. The loop is the thing. Credentials are a signal of past loops, not a guarantee of future ones.

I know this because I'm a Realtor with a mechanical engineering degree who spent the last two months building a personal memory operating system in Replit. Prior to this, I wasn't a developer. But I'm building something, and it's getting better every week, and I can point to the exact moment I understood that the credentials story was a lie.

There was a moment — I remember it clearly — sitting at my desk, watching an AI summarize a conversation I'd had, pull out the action items, and drop them into a clean format. And I thought: *I should be able to do this for all of my data and all of my life.* Not just meeting notes. Relationships. Patterns. The stuff that slips through the cracks of a busy day. The follow-up I meant to send. The insight from a conversation three months ago that's relevant right now.

That thought didn't come out of nowhere. I've been using ChatGPT almost daily for years — long before it became the thing everyone talks about at dinner. Not because I'm a technologist. My job is fundamentally about relationships and trust. But I've always used AI the same way I use everything else: as a self-learning loop. Ask it something. Push back. Go deeper. Ask it to explain what I don't understand. Repeat. It's the best intellectual sparring partner I've ever had, and it costs less than a gym membership.

What changed in December 2024 wasn't the idea. It was the velocity.

I started a project in Replit — supposed to be simple. A weekly meeting agenda tracker. A form to help me stay organized with clients. I finished the first draft that same day. And that's when the first realization landed: this was easy. I'd started half-finished projects before, but something had shifted — the models had gotten good enough that the friction was almost gone. Opus had taken vibe coding to another level. If I could build this in a day, what else could I build? And then I opened up what I'd made, looked at the empty fields, and realized the whole thing was wrong.

Not technically wrong. Functionally wrong. The form asked me to *input* things. Date. Client name. Topics discussed. Action items. And I sat there thinking: I don't want to fill this out. I want to ask it something. I want to type *"What did Sarah mention about wanting to downsize, and when did that come up?"* and have it answer me. I want to ask *"Which of my clients haven't I followed up with in the last 60 days?"* and get a real answer, not a spreadsheet I have to sort myself. The form could capture data. It could not have a conversation. That gap — between a container for information and something that actually thinks with you — is where the entire project changed shape.

What started as an agenda tracker became memryOS: a personal memory and relationship operating system for my entire life. Every conversation, every connection, every pattern — queryable, searchable, alive. The scope didn't just expand. It inverted. I wasn't building a form anymore. I was building a mind.

Here's what I didn't expect: the act of building fast and testing fast became its own reward. That feedback loop — ship something, break it, fix it, learn, ship again — is genuinely addictive. Not because I'm becoming a developer. I'm not. But because I can now see the shape of what I'm trying to build, and every iteration gets me closer. OpenClaw — an agentic AI that runs 24/7 on a Mac Mini in my office — gave me enough confidence to keep going. Watching it work, watching it do real things, made the gap between "person with an idea" and "person building the thing" feel smaller than I ever thought it was.

My learning curve since December has been a hockey stick. I look back at what I didn't know two months ago and I almost don't recognize it. And I don't think that's just my story — I think it's what's happening everywhere, quietly, to people who aren't supposed to be builders.

Here's the thing I think is worth saying out loud: this shouldn't be surprising, and the fact that it still feels surprising says something important about where we are. A person with a mechanical engineering background and a sales practice has no business building memory infrastructure — by the old model. By the old model, you needed a team, a CS degree, years of credentialed experience, institutional access to compute. What's changed is that the tools have gotten good enough that the feedback loop is now accessible to anyone willing to sit in it long enough. The bottleneck isn't technical skill. It's curiosity and iteration tolerance. That's a different kind of democratization than "anyone can learn to code." It's closer to: anyone with a genuine problem and the stubbornness to keep pushing on it can now build their way to a solution. That's not nothing — though it still requires the freedom to experiment, which isn't equally distributed. But it matters. Not just for me — for what it suggests about who gets to participate in what gets built next.

The economic engine of all of this is still real estate. I'm not pivoting away from it — it's what funds the curiosity. But AI is the multiplier. The vision is a life where the things I know, the relationships I care about, and the work I do are all connected — where nothing slips, where follow-through is a system property, not a personal virtue I have to force.

I'm writing this publicly because I think there are people — investors, collaborators, future partners — who look for breadcrumbs. Not polished press releases. Not LinkedIn announcements. The actual thinking. Gavin Baker isn't going to find me through a pitch deck. He might find me through something like this.

So this is me thinking in public. Building in public. And if I'm honest, I'm writing for someone I haven't met yet — someone who also isn't a "real" builder, who keeps building anyway, who needs to see that the credential gap is smaller than they think. This is for them.
    `
  },
  {
    slug: "nova-40-under-40-nomination",
    title: "Northern Virginia 40 Under 40 Nomination",
    date: "2026.02.03",
    type: "essay",
    content: `
I was recently nominated for the Northern Virginia 40 Under 40 awards, which recognizes young professionals making an impact in our region. As part of the application process, I was asked to reflect on my leadership, civic engagement, and personal journey. Below are my responses to the three questions posed by the selection committee.

## Please describe the leadership impact you have had in the community through your professional and personal achievements.

My leadership philosophy is simple: show up, listen deeply, and create value beyond the transaction. Whether in real estate, Rotary, BNI, or the Chamber of Commerce, I've built my practice around being a trusted connector and creating sustainable systems that amplify impact.

In real estate, I've embraced a relationship-based approach inspired by Ninja Selling's training. I'm not just helping people buy and sell homes; I'm a connector, educator, and resource in their lives. My clients come to me for referrals to estate planners, investment advice, community connections, and personal support during major life transitions. I collaborate with other business owners to host estate planning seminars and real estate investing workshops because I believe an informed client is an empowered client. I've closed over $10 million in volume while maintaining a referral-based business, but the metric I'm most proud of is how often someone reaches out not about real estate, but because they remembered I "knew someone" who could help with their specific challenge.

My commitment to community leadership is equally intentional. Since joining Rotary in fall 2022, I've rapidly advanced from Public Image Chair to Vice President to my current role as President. As VP, I coordinated weekly speakers, turning every networking opportunity into a chance to discover compelling stories. As President, I'm implementing transformational changes: shifting from exhausting one-time fundraising events to a year-round corporate sponsorship model that's already matched last year's $25,000 golf tournament revenue with minimal overhead. I'm overhauling our meeting experience with hybrid options, video marketing, and agentic AI to automate administrative tasks. I'm rewriting our bylaws to streamline leadership paths because sustainable impact requires succession planning. These partnerships directly support our literacy and food scarcity initiatives, including distributing dictionaries to every third grader and Constitution booklets to every eighth grader in Fairfax.

In BNI, I helped launch a new chapter in January 2024 and later merged it with a struggling chapter to create something stronger. I consistently lead in referrals given, qualified visitor recruitment, and closed business celebrations. I've directly recruited five members and mentor several others. I serve on the membership committee, where my focus is helping members understand that networking is about creating value, not just collecting leads.

As a Central Fairfax Chamber of Commerce Ambassador, I act as an official community representative, promoting chamber events and connecting businesses across the region. This role has given me frequent access to Mayor Catherine Read and other community leaders like Hakan Atasever, Executive Director of the American Turkish Friendship Association. Through these connections, I'm facilitating joint events between Rotary and community organizations, creating partnerships that extend beyond any single group's reach.

My approach is relationship-oriented, education-first, and community-centered. I'm not the highest-volume agent or the longest-serving member of any organization, but I've built something meaningful: a networked ecosystem where every interaction creates opportunities for others, where technology amplifies human connection, and where young professionals feel empowered to lead and innovate.

## Please describe the civic engagement impact you have had in the community.

My civic engagement is rooted in a simple belief: everyone has something to offer, and my role is connecting people to opportunities where they can make the biggest difference. Through Rotary, BNI, and the Chamber of Commerce, I've built a network that turns individual goodwill into collective impact.

As Rotary Club President, I oversee initiatives that directly touch hundreds of lives each year. Our annual Christmas party, in partnership with the Salvation Army, serves roughly 30 families in need. Children write letters to Santa, and we buy and wrap every gift. Sponsored by Chick-fil-A, Nothing Bundt Cakes, American Legion, and Ace Hardware, the event features hot dogs, carols, and the joy of watching each child sit on Santa's lap to receive their presents. The Girl Scouts run a book drive, bringing hundreds of books for children to choose from under a Christmas tree. It's a reminder that civic engagement isn't just about writing checks, it's about showing up and creating moments of dignity and joy for families facing hard times.

We also distribute dictionaries to every third grader in Fairfax and Constitution booklets to every eighth grader. The Constitution project is particularly meaningful. Eighth graders gather in an auditorium with a panel of Rotary leaders, the mayor, and local delegates to discuss constitutional literacy. Students don't just receive booklets, they engage in real dialogue about what they'd change, why it matters, and how civic participation shapes their futures. It's not a lecture, it's a conversation that treats young people as the engaged citizens they're capable of becoming.

Beyond these flagship initiatives, we run essay, speech, and music contests where winners advance through the district. We award over $20,000 in scholarships annually. We participate in Read Across America, going directly into classrooms for story time. These aren't one-off events, they're sustained investments in the next generation.

As a Central Fairfax Chamber of Commerce Ambassador, I amplify these efforts by connecting businesses, nonprofits, and government leaders. My work with Mayor Catherine Read and Hakan Atasever of the American Turkish Friendship Association has led to joint events like our upcoming Ramadan dinner. The ATFA routinely hosts interfaith and community events, bringing together people who would otherwise remain siloed by culture and community. In the most ethnically diverse part of the United States, there's no better way to build understanding than by breaking bread together. These partnerships aren't just feel-good gestures, they're essential bridge-building in a region where diversity is our greatest strength.

My most valuable contribution isn't any single project, it's the multiplier effect of being a connector. I know contractors, financial advisors, investors, volunteers, and skilled professionals across every sector. When someone needs help, whether it's an introduction to a contractor, advice on finances, opportunities to invest or donate, or ways to volunteer their time and skills, I make it happen. My civic engagement isn't just what I do personally, it's what I enable others to do by putting them in the right room with the right people at the right time.

## Please share your personal story, including any information you'd like the selection committee to know that hasn't been shared above.

I didn't plan to become a real estate agent. I planned to be an engineer. I went to school for mechanical engineering because I was good at math and people told me I'd make good money. I wasn't passionate about it, I just checked the box. I did internships that I hated but pushed through anyway. C's get degrees, right? After graduation, I pivoted into technical sales. I loved the sales part, helping clients, solving problems, but I hated the product: high-voltage test equipment. I needed to find something I could be genuinely excited about.

That something was real estate, but not in the way you'd expect. My best friend bought a house hack and couldn't stop talking about it. I became obsessed, self-taught everything I could, and bought my first property. My realtor seemed to be living an incredible life: successful, financially free, traveling. I realized that if I wanted to invest at the level I dreamed of, I needed to unlock my highest dollar-per-hour activity. Real estate wasn't just a career opportunity, it was the platform for everything I wanted to build. This was my "adjacent possibilities" moment. I followed curiosity, and it led somewhere I never anticipated.

The transition wasn't easy. Going from salary to commission was a shock. I couldn't hide behind a paycheck; if I didn't provide value, I didn't get paid. For over a year, I worked full-time and hosted two to three open houses every weekend. I kept grinding because it laid the bedrock for my business. I built my database from scratch, person by person, through open houses and networking.

When I discovered Ninja Selling, everything clicked. Larry Kendall's story about joining Rotary and the Chamber, embedding himself in his community, resonated deeply. I realized real estate wasn't just about transactions; it was about becoming a resource, connector, and leader. So I followed his example. I joined Rotary, BNI, and the Chamber, committed to being the professional who shows up, listens, and serves.

What drives me is the desire to be in flow, a search for meaning and impact. I'm motivated by helping people. Money is a metric to track value, not motivation. I want financial freedom as an unlock to leverage myself more to help people. My wife Cintia is my soulmate and emotional support, my sounding board and graphic designer for all my marketing. We bought a house in fall 2025 where we can start a family and host dinner parties. These events are filled with clients, not to get business, but because I do business with friends, and my clients become my friends.

I walk the line between being eternally grateful and striving for more. I'm philosophical, consuming podcasts and audiobooks, meditating and exercising daily. I didn't start as an engineer to end up here, but I'm grateful for the winding path. It taught me resilience, adaptability, and the importance of following what genuinely excites you. That's my story: curiosity, community, and the belief that when you serve others well, success follows.
    `
  },
  {
    slug: "where-i-spent-my-attention-2025",
    title: "Where I Spent My Attention in 2025: Podcasts",
    date: "2026.01.04",
    type: "essay",
    content: `
---
Part 1 of a multi-part series on attention allocation.
---

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

He has been one of the most consistently influential people in my life—not because I agree with everything he says, but because of how he thinks and how he learns. His curiosity, willingness to experiment, and the way he asks questions have shaped how I approach conversations, decisions, and learning across my life.

When you distill **Ninja Selling**—the system I use to run my real estate business—down to its most basic form, it comes down to this: ask good questions, listen for change, and serve as that change. At its core, it’s about attention—about noticing what matters to people and responding accordingly.

That’s why Tim resonates so deeply with me. His interviews feel less like interrogations and more like extended listening sessions. He stays genuinely curious, lets ideas unfold in real time, and isn’t afraid to sit with uncertainty. That approach has influenced how I show up not just in business, but in relationships and day-to-day life.

I first got into personal development around 2018, right after graduating college. I was trying to mature—to be better at life, to figure out how to function as an adult. I had heard about *The 4-Hour Workweek* for years, but I don’t think I actually read it until 2020 or 2021.

What I remember most clearly isn’t the book itself, but what it gave me permission to question.

I tried to apply some of those ideas at my job. I asked whether remote work was possible. The answer was a firm no. At the time, I more or less said that I would be working a fully remote job eventually anyway.

When I was fired in June 2022, that conversation came back up—as evidence that I had already mentally moved on.

So—thank you, Tim, for helping me name that truth early.

I don’t blame them. From their perspective, why would they have let me do that?

Around that same period, I got my real estate license. In the early years, real-estate-specific podcasts dominated my listening. Over time, that shifted—not because the material stopped being useful, but because I had absorbed most of what I could. The learning moved from consumption to application.

My original plan was straightforward: succeed at my job, build real estate on the side, and quit once the income pipeline was clear. That would have been a good plan if I had followed it.

But I’ve learned that sometimes the right move isn’t waiting for the perfect transition—it’s recognizing when something simply isn’t aligned anymore.

There is something admirable about people who can push through discomfort. My best friend Luke is a great example—he succeeded in a job he didn’t enjoy and then started his business. That’s a quality I respect and aspire to.

I do that in my own way—just not endlessly. I’m selective about the discomforts I choose to endure: hard conversations, administrative work, taxes, operational friction. Those are the tracks I’ll replay. Others I’ve learned to skip.

In that sense, Tim’s influence isn’t a single lesson or book—it’s the through-line. A recurring motif that keeps pulling me back to the same questions: What am I paying attention to? What assumptions am I carrying forward out of habit? Where am I being honest with myself—and where am I not? More than tactics or tools, that pattern of attention has shaped how I make decisions, even when the transition between chapters isn't clean.

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

What I appreciate most about a16z is learning about technology through the lens of an investor. Investors must be historically literate and forward-looking, placing capital, teams, and energy into lanes where growth likely occurs.

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

---

## Epistemology, Meaning, and Spirituality

Some of the most influential listening I did this year doesn’t fit neatly into business or technology.

David Deutsch has been especially impactful. I’ve read *The Beginning of Infinity* and listened multiple times to his conversations with Tim Ferriss and Naval Ravikant. What resonates most isn’t just the science, but the philosophy—epistemology, what makes a good explanation, and how knowledge actually progresses. Understanding how we know things, and what makes an explanation good or bad, has shaped my decision-making more deeply than simply absorbing information ever could.

Naval Ravikant appears here less as a content source and more as a philosophical reference point. When Tim speaks highly of someone, I pay attention. Naval’s clarity around leverage, truth-seeking, and attention has quietly influenced how I think about work, learning, and life—even when I’m not actively listening to him.

I also loved *The Random Show* with Tim Ferriss and Kevin Rose. Their conversations remind me of long, meandering discussions with close friends—sharing ideas, habits, philosophies, and life updates without an agenda. Listening to them often makes me want to pick up the phone and reconnect with people I care about.

Despite how much of my attention goes toward technology, I’m also a daily meditator. I meditate using *The Way* app with Henry Shukman, and I’ll expand more on this when I write about his book *One Blade of Grass*. Exploring spirituality and consciousness intellectually is interesting, but experiencing it directly through daily practice has been grounding in a way that thinking alone isn’t.

I also spent time with *The Bible in a Year* podcast. I’m a confirmed Roman Catholic and was raised in the Church. I don’t currently attend regularly and have drifted from some of its explicit teachings, but I feel called to revisit the life of Jesus through an adult lens. I’m starting a book on his life now, and I want to engage with that tradition more thoughtfully moving forward.

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

This exercise wasn’t about optimization or consumption for its own sake. It was about noticing patterns—what consistently earned my attention, and therefore what was quietly shaping my thinking over time.

This isn’t a theory of attention—just a practice of noticing.
    `
  },
  {
    slug: "2026.01.04-starting-the-log",
    title: "Starting the Log",
    date: "2026.01.04",
    type: "note",
    content: `
This is the beginning of a public lab notebook.

I’m obsessed with learning and absorbing information. That obsession leads to a lot of thoughts. Many of them bounce around my head and go nowhere. Some of them turn into conversations. All of them, in one way or another, leak into how I approach the world—how I build, how I decide, how I show up.

Until now, most of that thinking has been ephemeral. It lives in my head, in passing conversations, in email threads, Slack messages, or short social posts that disappear as quickly as they’re written.

The goal here isn’t traffic. It’s clarity.

Writing forces me to slow down and make my thinking explicit—to see what I actually believe, to test assumptions, and to notice patterns I’d otherwise miss. Right now, the primary objective is simple: capture what’s already happening internally and get into the habit of writing regularly.

Over time, I want this to become a breadcrumb trail for my future self—a record of when certain ideas first appeared, how they influenced decisions, and which heuristics proved useful or flawed. If that trail is helpful to anyone else along the way, that’s a bonus.

This site is intentionally simple. It’s static. It’s designed to last. No databases to maintain, no complex CMS to update—just text files, versioned over time, and a build process. The constraint is the point.

This is where the log starts.
    `
  }
];

export const getNotes = () => content.filter(p => p.type === 'note').sort((a, b) => b.date.localeCompare(a.date));
export const getEssays = () => content.filter(p => p.type === 'essay').sort((a, b) => b.date.localeCompare(a.date));
export const getPost = (slug: string) => content.find(p => p.slug === slug);
