/* EDIT THIS FILE to change the carousel. No HTML knowledge needed.
   Keep the quotation marks, commas, and brackets. Text is plain text, not HTML.
   Copy an entire { ... } item to add a slide; remove one to delete it.
   The order below is the display order. Filters are generated automatically.
   Optional fields can be empty strings. See README.md for a complete guide. */
window.CAROUSEL_CONTENT = {
  eyebrow: "Sustainability Fellowship",
  title: "A community of possibility.",
  intro: "People, ideas, and next steps toward a more sustainable world.",
  showFilters: true,
  note: "CONCEPT PREVIEW · All features shown are placeholders.",
  items: [
    {
      type: "Student", // Any category name works; e.g. Student, Alumni, Faculty, Announcement.
      label: "Student spotlight",
      title: "Small actions. Shared impact.",
      subtitle: "[Student name] · [Major or program]",
      body: "Every pathway has a place in sustainability. Introduce a student and the question, project, or campus initiative they care about.",
      quote: "Add a short quote in the student’s own words here.",
      detail: "[Project or area of interest]",
      image: "", // Example: "images/student.jpg". Empty = original abstract artwork.
      imageAlt: "", // Describe the photo when you add one. Empty = decorative image.
      imagePosition: "50% 50%", // Optional crop focus, e.g. "50% 30%".
      theme: "forest", // forest, clay, lake, or gold
      linkText: "", // Example: "Meet [name]". Leave empty to hide the link.
      linkUrl: "" // Full https:// address; opens a new tab from the Notion embed.
    },
    {
      type: "Alumni",
      label: "Alumni pathways",
      title: "A degree. Many directions.",
      subtitle: "[Alum name] · Class of [year]",
      body: "Show how an alum connects their studies to meaningful work. Add their role, organization, and one useful insight for students exploring what comes next.",
      quote: "Add a short piece of career advice here.",
      detail: "[Role] at [Organization]",
      image: "", imageAlt: "", imagePosition: "50% 50%", theme: "clay",
      linkText: "", linkUrl: ""
    },
    {
      type: "Faculty",
      label: "Faculty in focus",
      title: "Big questions start here.",
      subtitle: "[Faculty name] · [Department]",
      body: "Introduce a faculty member whose teaching or research opens a door into sustainability. Highlight a topic students can explore across disciplines.",
      quote: "Add a short perspective on teaching or research here.",
      detail: "[Research or teaching focus]",
      image: "", imageAlt: "", imagePosition: "50% 50%", theme: "lake",
      linkText: "", linkUrl: ""
    },
    {
      type: "Announcement",
      label: "On the horizon",
      title: "Make room for what’s next.",
      subtitle: "[Event or opportunity name]",
      body: "Use this space for a workshop, funding opportunity, campus event, or fellowship update. Explain who it’s for and how to take part.",
      quote: "", // Announcements do not need a quotation.
      detail: "[Date] · [Time] · [Location or online]",
      image: "", imageAlt: "", imagePosition: "50% 50%", theme: "gold",
      linkText: "", linkUrl: ""
    }
  ]
};
