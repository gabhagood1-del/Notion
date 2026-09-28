# Sustainability Fellowship carousel

An original, portable concept for student spotlights, alumni, faculty, and announcements. All displayed content is explicitly placeholder content. No actual people, quotations, dates, or opportunities are represented.

## Start here

Open **index.html** in a browser. No installation, account, build step, API key, or internet connection is needed for the included concept. Keep the files together:

- `index.html` — page structure
- `content.js` — **all content and labels; edit this one file**
- `styles.css` — colors, spacing, and responsive layout
- `script.js` — carousel behavior
- `images/` — your optional photos
- `.nojekyll` — tells GitHub Pages to serve static files directly

## Edit the content

Open `content.js` in a plain-text editor or use GitHub's file editor. Replace text inside quotes; keep commas and brackets. If text contains a double quotation mark, escape it as `\"`. Use `\n` inside a string rather than a literal line break. Text is rendered as plain text, so HTML is unnecessary.

1. Change `eyebrow`, `title`, and `intro` for the program heading.
2. Each `{ ... }` object in `items` is a slide. Copy a complete object to add a slide; delete it to remove a slide. Reorder objects to reorder the carousel.
3. `type` creates the filter category automatically. You can mix types or use only one. Set `showFilters: false` to hide filters.
4. `label` is the small heading; `title` is the large headline. `subtitle`, `body`, `quote`, and `detail` can be used for any content type. Leave optional text as `""` to omit it.
5. Add photos to `images/`. Set `image: "images/your-photo.jpg"` and describe the photo in `imageAlt`. Leave alt text empty only for decorative images. Use `imagePosition: "50% 30%"` to adjust the crop. Empty or failed images show abstract artwork.
6. Choose `theme`: `forest`, `clay`, `lake`, or `gold` for the artwork background.
7. Set both `linkText` and `linkUrl` to add a link. Use a full `https://` URL, including for a Notion destination. Links open in a new tab and announce that behavior. Empty links are hidden.
8. Remove or replace the `note` once real content is ready; an empty string hides it.

Aim for a short headline, a 30–50 word description, and a one-sentence quote. Longer text remains readable but increases the frame height. Color variables at the top of `styles.css` let the next owner adapt the design. Check text contrast after changing colors.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `sustainability-carousel`. A public repository is the simplest option with GitHub Free. Published content will be public.
2. Upload **the contents of this folder** to the repository root, with `index.html` at the top level. Preserve the `images/` directory. The hidden `.nojekyll` file is included in the ZIP; if the upload picker hides it, this simple project also works without it.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/(root)**, then save.
4. Wait for deployment. Use the published URL shown in Pages, typically `https://YOUR-USERNAME.github.io/sustainability-carousel/`.
5. Open that URL and test the buttons before embedding it. Committing edits to `content.js` republishes the page; allow the deployment to finish and refresh your browser.

No workflow file or package installation is required. If you place the files inside an existing Pages repository subfolder, append that folder to its published URL. All assets use relative paths.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Embed in Notion

1. Publish the page first. A local file or a GitHub repository/code URL cannot serve as the live carousel.
2. On the main Notion page, type `/embed`, paste the **published HTTPS Pages URL**, and choose **Embed link**.
3. Widen the block and drag its bottom edge until the arrows and concept note are visible. Start around 720 px high on desktop and 920 px for a narrow layout; adjust for your actual copy and each slide.
4. Test the block in the Notion browser, desktop, and mobile views you use. Once the new embed works, replace the old widget.

The layout responds to the embed's width. Notion controls the outer frame height; this page cannot automatically resize that frame. If you see an inner scrollbar, increase the embed height. If an embed fails, first verify the published URL opens without signing in, then recreate the embed using that URL. Keeping a normal link below the embed gives readers another way to open it.

Official guide: https://www.notion.com/help/embed-and-connect-other-apps

## Transfer or hand off

Copy this entire folder into another repository; no source code URL changes are necessary. Publish from its root (or `/docs` if you place the files there). Update the Notion embed to the new published URL. Give the next editor this README and point them to `content.js`. No dependencies, external font services, analytics, cookies, or credentials are included.

## Accessibility and controls

- Native buttons, visible keyboard focus, named carousel and slides, and a polite status announcement after navigation.
- Tab/Shift+Tab to controls; Enter/Space to activate buttons. Left/Right changes slides while focus is within the carousel; Home/End goes to first/last. Focus never moves automatically into slide text.
- Inactive slides are hidden from both keyboard navigation and assistive technology.
- Previous/next wraps around. Horizontal touch/pen swipes change slides; vertical scroll and pinch zoom remain available.
- No autoplay or animated movement. Empty and single-slide collections have appropriate control states.
- Print displays every slide in the current filter. With JavaScript disabled, a clear message appears.

Before publishing real content, check your final image descriptions, links, mobile layout, keyboard navigation, and screen-reader experience. This concept has not been tested inside your actual Notion page.

## Design reference

The image-and-story carousel pattern was inspired by the GSU Geosciences careers page: https://collegetocareer.gsu.edu/geosciences/
This implementation, typography, palette, artwork, and placeholder copy were created for this concept; no GSU code, photos, or alumni quotations are included.
