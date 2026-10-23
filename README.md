# Divine Adventure Holidays Tour & Travels — Website

A complete, static, single-page website. No build step. No server required.

---

## How to open

Double-click **`index.html`**.

That's it. The site opens in your default browser without a server or any installation.

> **Note about Google Fonts:** The Inter font loads from Google Fonts. If you open the file without an internet connection, the browser falls back to `system-ui` (your OS's default sans-serif), which still looks clean.

---

## File structure

```
divine-adventure-site/
├── index.html             ← The entire website (one page)
├── styles.css             ← Glacier design system
├── main.js                ← All interactivity
├── config.js              ← ★ Edit this first — all settings live here
├── README.md              ← This file
└── assets/
    ├── images/
    │   ├── hero-1.jpg … hero-5.jpg       ← Hero slideshow (replace)
    │   ├── dest-*.jpg                    ← Destination cards (replace)
    │   └── gallery-1.jpg … gallery-3.jpg ← Gallery (replace)
    └── videos/
        └── trip-highlights.mp4           ← Add your video here
```

---

## Three things to do before going live

### 1. Set your WhatsApp number

Open **`config.js`** and replace the placeholder:

```js
whatsapp: "91XXXXXXXXXX",   // ← change this
```

Format: country code + number, no `+`, no spaces.  
Example for India mobile 98765-43210: `"919876543210"`

### 2. Fill in your bank details

Still in `config.js`, fill in the `bank` object. These appear in the **Terms & Cancellation** section for guests to read before signing a booking agreement.

```js
bank: {
  accountName: "Divine Adventure Holidays Tour & Travels",
  bankName:    "Your Bank Name",
  accountNo:   "XXXXXXXXXXXX",
  ifsc:        "XXXX0000000",
  swift:       "XXXXXXXXXX",   // for international guests
  upi:         "yourupi@bank"
}
```

> **Security:** Bank details are shown only in the Terms section for reference. The site never processes payments.

### 3. Replace the placeholder photos

The `assets/images/` folder contains coloured SVG placeholders. Replace them with real photographs:

| File | Where it appears | Recommended size |
|------|-----------------|-----------------|
| `hero-1.jpg` | Slideshow slide 1 (Ladakh) | 1440 × 900 px |
| `hero-2.jpg` | Slideshow slide 2 (Rajasthan) | 1440 × 900 px |
| `hero-3.jpg` | Slideshow slide 3 (Kerala) | 1440 × 900 px |
| `hero-4.jpg` | Slideshow slide 4 (Himalayas) | 1440 × 900 px |
| `hero-5.jpg` | Slideshow slide 5 (Thailand) | 1440 × 900 px |
| `dest-golden-triangle.jpg` | Destination card | 480 × 280 px |
| `dest-himalayas.jpg` | Destination card | 480 × 280 px |
| `dest-kerala.jpg` | Destination card | 480 × 280 px |
| `dest-rajasthan.jpg` | Destination card | 480 × 280 px |
| `dest-varanasi.jpg` | Destination card | 480 × 280 px |
| `dest-thailand.jpg` | Destination card | 480 × 280 px |
| `dest-europe.jpg` | Destination card | 480 × 280 px |
| `dest-dubai-oman.jpg` | Destination card | 480 × 280 px |
| `dest-newzealand.jpg` | Destination card | 480 × 280 px |
| `gallery-1.jpg` | Gallery (large, left) | 720 × 520 px |
| `gallery-2.jpg` | Gallery (top right) | 480 × 280 px |
| `gallery-3.jpg` | Gallery (bottom right) | 480 × 280 px |

Keep the same filenames. Use JPG for photos (90 quality); the browser loads them by name.

---

## How to add a trip-highlights video

1. Export your video as **MP4** (H.264, AAC audio).  
2. Name the file exactly `trip-highlights.mp4`.  
3. Drop it into `assets/videos/`.  
4. Reload the page — the video player appears automatically.

If the file is absent, the site shows "Video coming soon" with a helpful note instead of a broken player.

---

## How to change site settings

Everything is controlled from **`config.js`**:

| Setting | Key | Notes |
|---------|-----|-------|
| Business name | `businessName` | Appears in the footer copyright and WhatsApp message |
| WhatsApp number | `whatsapp` | Used for the float button, form submit, and all WA links |
| Email | `email` | Appears in the contact section and footer |
| Office address | `address` | Contact section |
| Office hours | `hours` | Contact section |
| Bank details | `bank.*` | Shown in Terms & Cancellation for guest reference |
| Legal placeholders | `legal.*` | Percentages, days, city for Terms |

---

## How to update text

All content is plain HTML in **`index.html`**. Find the section by its `id`:

| Section | `id` attribute |
|---------|---------------|
| Hero headline / subtitle | `#hero` |
| Trust strip stats | `#trust` |
| How it works steps | `#how-it-works` |
| Destination cards | `#destinations` |
| Services | `#services` |
| Gallery captions | `#gallery` |
| Reviews | `#reviews` — look for `<!-- SAMPLE: replace with real reviews -->` |
| Travel information | `#travel-info` |
| About / owner story | `#about` — look for `[Owner's story goes here]` |
| FAQ answers | `#faq-accordion` |
| Terms & Cancellation | `#terms` |
| Privacy Notice | `#privacy` |

---

## How to replace reviews

In `index.html` find the comment:

```html
<!-- SAMPLE: replace with real reviews -->
```

Each review card looks like this — duplicate or edit:

```html
<article class="review-card glass" aria-label="Review from Name, Country">
  <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
  <p class="review-quote">Your guest's words go here.</p>
  <div class="review-author">
    <div class="review-avatar" aria-hidden="true">A</div>  <!-- First letter of name -->
    <div>
      <div class="review-name">Name</div>
      <div class="review-country">Country</div>
    </div>
  </div>
</article>
```

---

## How to add a destination

1. Copy one of the existing `<article class="dest-card glass" ...>` blocks in `index.html`.
2. Update: `data-region` (must be one of: `india`, `asia`, `europe`, `middle-east`, `oceania`), the image `src`, `alt`, `data-dest` on the quote button, and the text content.
3. Add the destination name as a chip in the form's `#dest-chips` group.
4. Add a matching placeholder image in `assets/images/`.

---

## Legal pages

The Terms & Cancellation and Privacy Notice sections are **drafts**. Before going live:

- Fill in every `[placeholder]` value.
- Have a qualified lawyer in your jurisdiction review both documents.
- Set the `legal.privacyLastUpdated` date in `config.js` (then copy into the Privacy section).

---

## Deploying online

The site is 100% static — upload the whole `divine-adventure-site/` folder to any web host.

### Option A — GitHub Pages (free)

1. Create a GitHub account and a new repository named `divine-adventure-site`.
2. Upload all files.
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**.
4. Your site is live at `https://yourusername.github.io/divine-adventure-site/`.

### Option B — Netlify (free, custom domain easy)

1. Go to [netlify.com](https://netlify.com) and sign up.
2. Drag and drop the `divine-adventure-site/` folder onto the Netlify dashboard.
3. Done. Add your custom domain in site settings.

### Option C — cPanel shared hosting

1. Log into your host's cPanel → **File Manager**.
2. Upload all files from `divine-adventure-site/` into `public_html/` (or a subdirectory).
3. Your site is live at your domain.

### Custom domain tip

After adding your domain, update any absolute URLs you may have added (e.g. in `og:url`). WhatsApp and email links will work unchanged since they read from `config.js`.

---

## Browser support

Chrome 90+, Firefox 90+, Safari 15+, Edge 90+. Graceful degradation in older browsers (glass blur falls back to a semi-opaque background).

---

*Built with the Glacier design system. No frameworks. No dependencies. Just HTML, CSS, and JavaScript.*
