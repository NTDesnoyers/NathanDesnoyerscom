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
    content: `Your content here in markdown format.`
  },
  */
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
