# Portfolio Site Structure Proposal
## AI Developer Portfolio - "Warm Elegant Minimal" + Retro JRPG Theme

---

## 1. Reference Sites & Key Takeaways

### Reference 1: Hisami Kurita Portfolio (hsmkrt1996.com)
- **Take:** Full-screen scrollable narrative design with fixed UI elements
- **Design pattern:** Dark/light section alternation, pink accent (#ffabb7), animated transitions
- **Adopt:** Section transition animations, progressive content reveal on scroll, accent color usage (pink tones close to our dusty pink)

### Reference 2: Keita Yamada / p5aholic (p5aholic.me)
- **Take:** Extreme minimalism with generous whitespace
- **Design pattern:** Text-driven, chronological project listing, light/dark theme toggle
- **Adopt:** Restraint and breathing room between sections, content-first approach, Japanese minimalist sensibility

### Reference 3: Gamefolio (Astro template - astro.build/themes/details/gamefolio)
- **Take:** Retro game-inspired portfolio with pixel-perfect UI elements
- **Design pattern:** Interactive character, horizontal scroll sections, retro fonts + vibrant colors
- **Adopt:** Pixel art integration for hero section only (not entire site), game-inspired micro-interactions

### Reference 4: Studio Null (madebynull.com)
- **Take:** Clean aesthetic blending utility with delight
- **Design pattern:** Interactive web spaces, refined visual choices, minimal layouts
- **Adopt:** Elegant grid layouts for project showcase, smooth transitions between sections

### Reference 5: Cappen (cappen.com)
- **Take:** Bold scroll effects and layer animation
- **Design pattern:** Smooth transitions that turn portfolios into ambient experiences
- **Adopt:** Scroll-triggered animations for screenshot reveals, ambient feel matching "warm" design direction

---

## 2. Recommended Section Structure

### Section 1: Hero - "Game Start" (100vh)
**Purpose:** First impression. Retro JRPG world that invites exploration.
**Content:**
- Pixel art unicorn character (center or slightly off-center)
- "GAME START" text in pixel font (Press Start 2P)
- Subtitle: developer name / tagline in elegant serif
- Starfield or particle background (pixel-style sparkles)
- Click/tap "GAME START" triggers transition animation to main content

**Design notes:**
- Dark background (#1a1a2e or similar deep navy)
- Pixel art rendered at native resolution, scaled with `image-rendering: pixelated`
- Dusty pink (#e8a4b8) used for highlights/sparkles in pixel art
- Transition: Pixel dissolve or screen wipe effect into elegant main content

### Section 2: Introduction / About (auto height)
**Purpose:** Bridge from game world to professional identity. Sets the warm, elegant tone.
**Content:**
- Brief self-introduction (2-3 sentences)
- Role/title: "AI Developer & Creative Technologist" (or similar)
- Small avatar or icon
- Key skills/technologies as subtle tags

**Design notes:**
- Transition moment: from pixel art dark theme to warm light theme
- Background: warm white (#faf8f6) or soft cream
- Typography shifts to serif (Playfair Display for headings, Noto Serif JP for Japanese body)
- Generous vertical padding (120px+)

### Section 3: Works / Portfolio Gallery (main content)
**Purpose:** Showcase 6 AI development screenshots as the core portfolio.
**Content:**
- Section title: "Works" or "Projects"
- 6 project cards, each containing:
  - Screenshot image (primary visual)
  - Project title
  - Brief description (1-2 lines)
  - Technology tags
  - Optional: link to live demo or detail

**Layout:** 2-column grid on desktop, 1-column on mobile
- Cards use subtle shadow and rounded corners
- Screenshots displayed in browser/device mockup frames for polish
- Hover: gentle scale (1.02) + shadow elevation
- Scroll-triggered fade-in animation (staggered, 100ms delay between cards)

**Design notes:**
- Background: warm white (#faf8f6)
- Card background: pure white (#ffffff) with soft shadow
- Dusty pink accent on hover states and active indicators
- Image aspect ratio: 16:9 for consistency

### Section 4: Skills & Tech Stack (auto height)
**Purpose:** Show technical competency at a glance.
**Content:**
- Skill categories: AI/ML, Frontend, Backend, Tools
- Icon + label for each technology
- Optional: experience level or years

**Design notes:**
- Minimal grid or flex layout
- Icons in monochrome or dusty pink tint
- Background: slightly different warm tone (#f5f0ed) for section distinction
- Keep it concise - this is supporting content, not the star

### Section 5: About / Philosophy (auto height)
**Purpose:** Personal story and development philosophy.
**Content:**
- Longer self-introduction or development philosophy
- What drives you in AI development
- Optional: timeline or career highlights
- Optional: small pixel art decorative element as callback to hero

**Design notes:**
- Single column, centered text (max-width: 680px)
- Large serif typography for quotes or key phrases
- Dusty pink pull-quote styling
- Generous line height (1.8-2.0)

### Section 6: Contact / CTA (auto height)
**Purpose:** Enable connection.
**Content:**
- "Let's Connect" or similar warm CTA
- GitHub, X/Twitter, email links
- Optional: contact form
- Optional: small pixel art unicorn farewell animation

**Design notes:**
- Background: dark (#1a1a2e) echoing hero section, creating bookend effect
- Text in white/cream
- Links in dusty pink
- Pixel art callback ties beginning and end together

### Footer
**Purpose:** Legal and navigation.
**Content:**
- Copyright notice
- Social links (repeated)
- "Built with [tech]" credit
- Back to top button

---

## 3. Layout Proposal

### Grid System
```
Desktop (1200px+):
+------------------------------------------+
|           HERO (full screen)             |  100vh, centered content
+------------------------------------------+
|     INTRO      |                         |  max-width: 960px, centered
+------------------------------------------+
|  WORK CARD  |  WORK CARD  |             |  2-column grid
|  WORK CARD  |  WORK CARD  |             |  gap: 32px
|  WORK CARD  |  WORK CARD  |             |  max-width: 1080px
+------------------------------------------+
|         SKILLS (icon grid)               |  4-column icon grid
+------------------------------------------+
|     ABOUT (centered text)                |  max-width: 680px
+------------------------------------------+
|         CONTACT (full width)             |  dark background, centered
+------------------------------------------+

Tablet (768px-1199px):
- Works: 2-column grid maintained
- Skills: 3-column icon grid
- Padding reduced to 80px vertical

Mobile (< 768px):
- Works: 1-column stack
- Skills: 2-column icon grid
- Padding reduced to 48px vertical
- Hero text scales down, pixel art maintains aspect ratio
```

### Image Display Strategy
- **Browser mockup frames:** Each screenshot wrapped in a minimal browser chrome (light gray title bar, 3 dots)
- **Consistent sizing:** All images cropped/scaled to 16:9 within cards
- **Lazy loading:** Images load as user scrolls into viewport
- **WebP format:** Optimized for performance
- **Hover effect:** Subtle lift + shadow expansion

---

## 4. User Flow

```
[Landing / Hero]
    |
    | Click "GAME START" or scroll down
    | (Pixel dissolve transition)
    v
[Introduction]
    |
    | Natural scroll
    v
[Works Gallery]  <--- Primary destination (6 project cards)
    |
    | Each card clickable for detail/demo
    v
[Skills]
    |
    v
[About / Philosophy]
    |
    v
[Contact / CTA]  --- Links to GitHub, social, email
```

**Key flow principles:**
1. **Intrigue first:** Hero creates curiosity and memorable first impression
2. **Deliver fast:** Works section is only 1 scroll away - visitors see portfolio quickly
3. **Build credibility:** Skills and About sections support the work showcase
4. **Enable action:** Contact section provides clear next steps
5. **Bookend design:** Dark hero + dark contact create visual frame around warm content

**Average time on site target:** 60-90 seconds for complete scroll-through

---

## 5. Retro JRPG + Warm Elegant Minimal Fusion Strategy

### The Core Concept: "Two Worlds"
The site tells a story of duality - the playful, creative spirit (JRPG hero) and the refined, professional output (elegant portfolio). This mirrors an AI developer's work: imaginative problem-solving delivered with polished execution.

### Fusion Techniques

#### A. Hero Section (100% Retro JRPG)
- Full pixel art environment
- 16-bit color palette with dusty pink highlights
- Pixel font (Press Start 2P) for "GAME START"
- Optional: simple idle animation on unicorn character
- Sound effect on interaction (optional, muted by default)

#### B. Transition Zone (the bridge)
- "Screen wipe" or "pixel dissolve" animation
- Gradual shift: pixel grid dissolves into smooth gradients
- Font transition: pixel font morphs concept into serif elegance
- Color shift: dark game world -> warm cream/white

#### C. Main Content (95% Warm Elegant Minimal)
- Clean serif typography (Playfair Display + Noto Serif JP)
- Dusty pink (#e8a4b8) accent color throughout
- Generous whitespace (120px+ section padding)
- Soft shadows, rounded corners (8-12px)
- Subtle micro-interactions (hover, scroll reveal)

#### D. Pixel Art Callbacks (5% retro touches in main content)
- Small pixel art decorative elements at section dividers
- Pixel art icons for skill/tech items (optional)
- Footer unicorn farewell animation
- Loading states could use pixel art spinner
- Cursor could become pixel pointer on interactive elements

### Color Palette

| Role | Color | Usage |
|------|-------|-------|
| Background (hero) | #1a1a2e | Hero section, contact section |
| Background (main) | #faf8f6 | Main content warm white |
| Background (alt) | #f5f0ed | Alternate sections |
| Card surface | #ffffff | Card backgrounds |
| Accent primary | #e8a4b8 | Dusty pink - links, highlights, hover |
| Accent dark | #c4849e | Darker pink for active states |
| Text primary | #2d2d2d | Main body text |
| Text secondary | #6b6b6b | Supporting text, descriptions |
| Text on dark | #f0e6ea | Light pink-white for dark sections |
| Pixel highlight | #e8a4b8 | Pixel art sparkle/highlight color |
| Pixel secondary | #7eb8da | Pixel art cool accent |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Hero title (pixel) | Press Start 2P | 400 | 24-32px |
| Hero subtitle | Playfair Display | 400 italic | 18-24px |
| Section headings | Playfair Display | 700 | 36-48px |
| Section headings (JP) | Noto Serif JP | 700 | 32-40px |
| Body text | Noto Sans JP | 400 | 16px, line-height: 1.8 |
| Card titles | Playfair Display | 600 | 20-24px |
| Tags/labels | Noto Sans JP | 500 | 12-14px |
| Footer | Noto Sans JP | 400 | 14px |

### Animation Strategy
1. **Hero:** Pixel art idle animations (CSS sprite or simple CSS keyframes)
2. **Transition:** CSS clip-path or canvas-based pixel dissolve
3. **Scroll reveals:** IntersectionObserver with `opacity: 0 -> 1` + `translateY(20px -> 0)`
4. **Hover effects:** `transform: scale(1.02)` + `box-shadow` elevation
5. **Page load:** Minimal - content should be visible quickly

---

## 6. Technical Recommendations

- **Framework:** Vanilla HTML/CSS/JS (keeping it lightweight for GitHub Pages)
- **Fonts:** Google Fonts (Playfair Display, Noto Sans JP, Noto Serif JP, Press Start 2P)
- **Images:** WebP format, lazy loaded, responsive sizes
- **Animations:** CSS transitions + IntersectionObserver (no heavy JS libraries needed)
- **Hosting:** GitHub Pages (static, fast, free)
- **Performance target:** < 3s full load, 90+ Lighthouse score
