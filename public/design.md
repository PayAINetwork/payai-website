---
name: payai-brand-guidelines
description: "Design, build, or substantially improve official PayAI websites, product landing pages, facilitator pages, developer surfaces, ecosystem pages, pricing, and x402 integration experiences. Use for PayAI information architecture, Inter typography, blue action system, pale network atmosphere, evidence-first layouts, responsive craft, and accessible developer UX."
---

# Design official PayAI web experiences

Act as a PayAI designer, editor, information architect, and design engineer. Build pages that make agentic payments feel simple, dependable, and ready for production. Shape the explanation and the interface together. Do not paste PayAI colors onto a generic crypto, AI, or SaaS template.

This guide is based on the visual language shipping on [payai.network](https://payai.network) and [facilitator.payai.network](https://facilitator.payai.network) as observed on September 1, 2026. When product facts, pricing, supported networks, security claims, or legal language change, the current product source wins.

## Brand context

PayAI provides payment infrastructure for AI agents, apps, APIs, and merchants. The brand sits between two worlds:

- It must feel approachable enough that a developer can start in minutes.
- It must feel rigorous enough to trust with production payments.
- It is crypto infrastructure, but the experience should behave like modern web infrastructure rather than a speculative token site.
- It is built for agents, but every claim must remain legible to the humans selecting, integrating, and operating it.

The core audiences are developers, merchant teams, agent builders, platform operators, technical evaluators, and ecosystem partners. They usually need to answer one of four questions quickly:

1. What does PayAI let me do?
2. How quickly can I integrate it?
3. Which networks, tokens, and protocol versions does it support?
4. What will it cost, and can I trust it in production?

PayAI should sound technically fluent, direct, optimistic, and calm. Earn confidence through specific mechanisms, visible integration steps, current proof, and honest limits. Avoid hype, vague superlatives, and futuristic filler.

## Priority order

When requirements compete, protect them in this order:

1. Preserve supplied facts, pricing, units, supported networks, protocol versions, security qualifiers, and legal constraints.
2. Preserve the host project's framework, routes, component conventions, assets, and build system.
3. Make the visitor's main question and next useful action clear in the first viewport.
4. Establish PayAI authorship through the official lockup, Inter-led typography, blue action language, pale network atmosphere, and fine-grid structure.
5. Put technical proof close to the claim it supports.
6. Refine responsive behavior, interaction, and detail without weakening clarity or performance.

Ask for clarification only when an unknown could change pricing, security meaning, network support, formulas, custody claims, customer identity, approval, or the primary call to action. Otherwise omit the unknown, label it, or use the smallest honest assumption.

## One system, two surface modes

PayAI uses one visual system with two modes. Choose the mode from the visitor's job rather than mixing both at equal intensity.

### Brand and marketing mode

Use for the main website, ecosystem stories, product introductions, partnerships, and high-level conversion pages.

- Lead with a clear product claim and one blue-highlighted phrase.
- Pair the opening copy with supplied product or transaction artwork when it explains the value.
- Use the pale blue-violet atmospheric canvas around large opening and closing moments.
- Use trust marks, ecosystem logos, customer proof, and product imagery as supporting evidence.
- Allow slightly more motion and editorial pacing than a developer surface.

### Facilitator and developer mode

Use for the facilitator homepage, integration guides, endpoint references, technical pricing, status, and operational product pages.

- Lead with the integration outcome and put the setup or proof beside it.
- Prefer white surfaces, thin borders, shared rows, tables, code, numbered steps, and aligned values.
- Show the real facilitator URL, method, network names, limits, or price instead of representing them with decorative art.
- Keep the page denser, quieter, and more scannable than the marketing site.
- Use the atmospheric canvas as a frame, not behind every technical section.

The shared shell, typography, palette, spacing, buttons, borders, and accessibility behavior must remain consistent across both modes.

## Frame the visitor's job

Before designing, establish:

- Who is opening this page?
- What are they trying to decide or complete?
- What is the strongest supported answer?
- Which mechanism, metric, example, or comparison earns that answer?
- What caveat could materially change it?
- What should they do next?

Organize the page by that reading path, not by the order in which source material arrived. Support two speeds:

- **Decision path:** identity, title, short explanation, decisive proof, price or constraint, and primary action.
- **Implementation path:** exact setup, networks, code, tables, caveats, links, and reference material.

Every major section must answer a new question. Combine repeated claims. Keep one primary home for each fact, then link to the deeper reference.

## Authoritative visual system

### Brand marks

Use supplied assets. Never redraw, typeset, recolor, distort, or add effects to the PayAI mark.

- Main site desktop lockup: `/horizontal-lockup.svg`
- Main site compact mark: `/payai-lettermark.svg`
- Facilitator desktop lockup: `/facilitator-horizontal-lockup.svg`
- Facilitator compact lockup: `/horizontal-lockup-2.svg`

Use the PayAI lockup in the main marketing shell and the Facilitator lockup only when the page is served as the facilitator product. Keep the logo on white or a very light neutral surface. Let it breathe; nearby controls must not touch or visually merge with it.

The standard header is 72px tall, white, sticky or fixed, and separated with a subtle `0 1px 3px rgba(0,0,0,.10)` shadow. The logo sits left, navigation follows on desktop, and actions sit right. On mobile, collapse navigation behind a labelled menu control while keeping one useful primary action visible when space allows.

### Color

PayAI is a light-first brand. Near-black type, white content surfaces, fine neutral borders, and a restrained blue accent do most of the work.

| Role | Value | Use |
| --- | --- | --- |
| Action blue | `#4D63F6` | Start of primary gradient, primary icons, soft blue tints |
| Deep action blue | `#1D45D8` | Links, active navigation, emphasized words, end of primary gradient |
| Primary ink | `#09090B` | Headlines, important values, primary labels |
| Secondary ink | `#0A0A0A` | Navigation and strong body copy |
| Muted text | `#71717A` | Supporting copy, captions, helper text |
| Primary border | `#E4E4E7` | Controls, shells, dividers, tables |
| Soft border | `#EDEDED` | Internal grid lines and low-emphasis separation |
| Muted surface | `#F4F4F5` | Code chips, network chips, quiet controls |
| Section surface | `#FAFAFA` | Alternating evidence or pricing sections |
| Blue hover surface | `#F6F8FF` | Hovered feature cells and selected regions |
| Midnight contrast | `#0A192F` | Rare closing CTA or technical contrast field |
| Success | `#16A34A` | Confirmed positive states and checks only |
| Warning | `#F59E0B` | Partial or caution states only |
| Error | `#DC2626` | Errors and destructive states only |
| Code purple | `#9647FD` | A small syntax accent, never a brand action color |

The primary action is the left-to-right gradient:

```css
linear-gradient(90deg, #4D63F6 17%, #1D45D8 65%)
```

Use this gradient for the highest-priority action in a cluster. Do not apply it to every button, card, headline, border, or icon. Standard links and emphasized words use solid `#1D45D8`.

Use semantic colors only for real state. Pair success, warning, and error color with an icon or text label. Never use green merely to make a price or marketing claim feel favorable.

Use these semantic variables when introducing or normalizing CSS:

```css
:root {
  --payai-action: #4D63F6;
  --payai-action-strong: #1D45D8;
  --payai-ink: #09090B;
  --payai-ink-secondary: #0A0A0A;
  --payai-muted: #71717A;
  --payai-border: #E4E4E7;
  --payai-border-soft: #EDEDED;
  --payai-surface: #FFFFFF;
  --payai-surface-muted: #F4F4F5;
  --payai-surface-subtle: #FAFAFA;
  --payai-surface-hover: #F6F8FF;
  --payai-midnight: #0A192F;
  --payai-success: #16A34A;
  --payai-warning: #F59E0B;
  --payai-error: #DC2626;
}
```

Do not redeclare these names with different values inside a page.

### Atmospheric canvas

The PayAI atmosphere is a pale blue-to-violet wash with a large diagonal network grid. It suggests routing and coordination without looking like a trading interface.

```css
.payai-atmosphere {
  --grid-gap: 150px;
  --grid-line: 1px;
  --grid-color: rgba(255, 255, 255, 0.35);
  background-image:
    repeating-linear-gradient(
      45deg,
      var(--grid-color) 0 var(--grid-line),
      transparent var(--grid-line) var(--grid-gap)
    ),
    repeating-linear-gradient(
      -45deg,
      var(--grid-color) 0 var(--grid-line),
      transparent var(--grid-line) var(--grid-gap)
    ),
    radial-gradient(120% 100% at 10% 0%, #EAF1FF 0%, rgba(234, 241, 255, 0) 60%),
    radial-gradient(120% 100% at 100% 0%, #F3E6FF 0%, rgba(243, 230, 255, 0) 55%),
    linear-gradient(120deg, #EEF2FF 0%, #EFE9FF 100%);
}
```

Use the atmosphere for the page canvas, opening, or closing frame. Most content sections remain white. Do not add a second grid, extra blobs, stars, particles, neon glows, or unrelated gradients over it.

### Typography

Use Inter for headings, body text, labels, controls, tables, and values. Use JetBrains Mono for code, commands, environment variables, paths, addresses, request methods, and compact operational identifiers.

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

font-family: "JetBrains Mono", Menlo, Monaco, Consolas,
  "Liberation Mono", "Courier New", monospace;
```

The standalone facilitator may use the system sans stack when an external font dependency is undesirable. Do not mix Inter, system sans, and a third display face on the same surface.

Use medium weights for structure and regular weights for reading. PayAI should feel assured, not heavy.

| Role | Mobile | Desktop | Weight | Leading |
| --- | --- | --- | --- | --- |
| Hero statement | 32px | 56px | 500 | 1.2 |
| Large product statement | 32px | 52–56px | 500 | 1.1–1.2 |
| Major section heading | 24px | 36–40px | 500 | 1.2–1.25 |
| Card or comparison heading | 20–24px | 24–32px | 500 | 1.25–1.4 |
| Feature heading | 16px | 18px | 500 | 1.4 |
| Lede | 14–16px | 18–20px | 400 | 1.6 |
| Body | 14px | 16px | 400 | 1.6 |
| Label or control | 13–14px | 14–16px | 500 | 1.4 |
| Caption or metadata | 12–13px | 12–14px | 400 | 1.4–1.5 |
| Code | 12px | 13–14px | 400–500 | 1.6 |

Hero and major section headings may use `-0.01em` to `-0.02em` letter spacing. Do not use CSS percentages for `letter-spacing`; use `em` values.

Use sentence case for headings. Compact product labels, footer groups, and short technical overlines may use uppercase with moderate tracking. Do not turn every section title into an uppercase eyebrow.

Highlight at most one meaningful phrase in a major headline with `#1D45D8`. The blue phrase should name the product mechanism or decisive benefit, not an adjective such as “best” or “revolutionary.” Never use multi-color gradient text.

### Grid, width, and spacing

The shared outer container is:

```html
<div class="max-w-[100rem] px-4 sm:px-6 lg:px-20 mx-auto">...</div>
```

This produces a 1600px maximum canvas with 16px mobile, 24px small-screen, and 80px desktop gutters. Use the existing `container-payai` utility in the Next.js website.

Common content measures:

- `540px`: compact section introduction.
- `600px`: centered explanatory copy.
- `720–820px`: major centered statement, FAQ, or narrative block.
- Full container: comparison tables, pricing, feature matrices, and paired product evidence.

Common vertical rhythms:

- Standard section: `32px` mobile and `80px` desktop.
- Extended section or chapter: `56px` mobile and `96px` desktop.
- Hero: `64px` mobile and `96px` desktop before the main content, adjusted for the 72px header.
- Heading to supporting copy: `12–16px`.
- Supporting copy to actions: `24–32px`.
- Section introduction to evidence: `40–64px`.

Use spacing to create hierarchy before adding a surface. Align content to shared edges and baselines. If a table, code block, or setup sequence is the proof, give it enough width to read comfortably.

### Surfaces, boundaries, radius, and shadow

The default PayAI section is white. Fine borders and shared grids establish structure.

- Default border: `1px solid #E4E4E7`.
- Quiet internal border: `1px solid #EDEDED`.
- Control radius: `8px`.
- Chip radius: `8px` or a full pill only when the content is truly a tag, status, or compact selector.
- Card radius: `12px` when a card must stand alone.
- Large CTA radius: `16px` mobile, up to `32px` desktop.
- Default control shadow: `0 1px 2px rgba(0,0,0,.10)`.
- Header shadow: `0 1px 3px rgba(0,0,0,.10)`.
- Elevated product art may use a broader soft shadow, but ordinary content cells should not float.

Prefer adjacent cells separated by borders or a `gap-px` grid over a field of rounded cards. Use a distinct surface only for interaction, comparison, grouped evidence, code, status, or a conversion moment.

Do not use legacy neon-cyan, electric-purple, glow, glass, and heavy elevation utilities as default PayAI styling. They remain compatibility tokens in older code, not the current visual center of gravity.

## Core composition patterns

### Navigation

The desktop navigation contains the product identity, a short set of destinations, and one primary action. Keep labels concise. Active navigation uses blue text and a 2px blue bottom border. Hover may use a very pale blue fill.

The right action cluster may contain one quiet utility action, such as GitHub or Socials, plus one primary “Get Started” action. Do not place multiple gradient buttons in the header.

Use a visible focus ring, preserve keyboard order, close mobile menus with Escape, and return focus to the menu control.

### Marketing hero

The standard marketing hero is an asymmetric two-column composition:

- Left: product label, direct H1, one short explanation, primary and secondary actions, then concise trust proof.
- Right: supplied product or transaction artwork that visualizes agents paying, routing, settlement, or security.

The first viewport should communicate what PayAI is, who it is for, and the easiest next step. The artwork must support that explanation. Do not add an illustration merely to balance the layout.

On narrow screens, copy comes first, actions wrap, trust proof follows, and artwork moves below. Do not shrink the desktop composition until it becomes unreadable.

### Facilitator hero

The facilitator opening is a bordered split view:

- Left: product badge, outcome-led H1, exact explanation, actions, and one or two short operational benefits.
- Right: the real “Drop-in setup” sequence with the facilitator URL, supported network choices, and launch step.

This split is one of PayAI's most distinctive patterns. The setup panel is not a decorative card; it proves the integration claim. Keep it accurate and copyable.

Use numbered steps such as `01`, `02`, and `03` with a fine vertical connector. Put the real environment variable or URL in a muted code surface. Show network names as compact chips only because they are selectable or scannable peer values.

### Section introductions

Choose one of two alignments:

- Left aligned for technical features, methods, or narrative explanation.
- Centered for a short peer set such as pricing, ecosystem trust, FAQ, or buyer-versus-seller paths.

Do not alternate alignment for decoration. A section introduction normally contains one heading and one short supporting paragraph. Add an overline only when it clarifies category or position in a larger product story.

### Feature grids

Use three or six peers in a shared bordered grid. Each feature cell may contain one consistent Lucide icon, a title, and one short paragraph.

- Cell background: white.
- Cell border: `#EDEDED`.
- Hover background: `#F6F8FF`.
- Optional hover emphasis: a 3px `#1D45D8` bottom rule.
- Icon: 20–24px, blue, consistent stroke weight.
- Cell padding: 20px mobile, 32–40px desktop.

Use generous internal height only when it creates a deliberate shared baseline across true peers. Do not force unequal content into identical heights if it creates large accidental voids.

### Trust and ecosystem proof

Use logos only when they prove supported networks, partners, customers, integrations, or ecosystem adoption. Keep each logo in its official colors or an approved dark treatment. Normalize optical size rather than forcing identical pixel dimensions.

Marquees may be used for a large partner set, but the information must remain available without motion. Pause on hover and focus, and stop movement under `prefers-reduced-motion`.

Do not use partner logos as a decorative texture or imply a relationship that is not supported.

### Buyer and seller paths

When the experience serves both sides of a payment, use aligned peer columns. Give each path:

- A concise role label.
- A task-led heading.
- A short explanation.
- A small set of framework or documentation links.
- One aligned action.

Do not repeat the same general product pitch in both columns. Buyers need to know how to pay; sellers need to know how to charge.

### Pricing

Pricing is evidence and must remain exact.

- Put the price, billing unit, free allowance, rate limit, and important qualifier next to one another.
- Use a semantic comparison table on desktop when plans share the same dimensions.
- Use plan cards on mobile when a wide table would become illegible.
- Keep numerical columns aligned and use tabular numerals.
- Highlight the recommended or active plan with a blue border or faint blue column tint, not a large colored background.
- A plan is “recommended” or “most popular” only when that status is sourced.
- Never hard-code product pricing in a new surface without identifying the canonical source that must remain synchronized.

Use `#FAFAFA` for row labels or a quiet comparison rail. Avoid zebra striping unless the table is long enough to need it.

### Technical steps and code

Technical proof should be copyable and real.

- Inline code uses JetBrains Mono on `#F4F4F5` or `#F5F7FB` with a 4–6px radius.
- A large code example may use `#0F172A` with `#E5E7EB` text and `#1F2937` borders.
- Use restrained syntax accents. The code must remain readable without color.
- Show filenames, languages, or request methods in compact mono text.
- Long lines scroll locally. Do not reduce code below 12px to make it fit.
- Copy actions need a text label or accessible name and clear confirmation.
- Examples must use real package names, methods, environment variables, and current protocol conventions.

When a three-step integration is central to the page, pair the steps with the code example. The explanation and the implementation should reinforce one another instead of appearing in separate distant sections.

### Tables and developer reference

Use semantic `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<th>`, and `<td>` elements. Left-align text columns and their headers. Right-align numerical columns and their headers. Keep units and precision consistent.

Developer reference pages may be denser than marketing pages. Use normal body size, stronger heading hierarchy, local anchor navigation, and full-width tables. Do not make reference content look secondary by shrinking it to tiny gray text.

When machine-readable forms exist, link them directly and label their format: OpenAPI, Markdown, `llms.txt`, or JSON.

### Forms and status

Inputs use white backgrounds, `#E4E4E7` borders, 8–12px radii, at least 44px height, visible labels, and blue focus treatment. Placeholder text is not a label.

Operational status uses a text label plus a green state marker. Animate a pulse only for a live state and disable it under reduced motion. Never use a pulsing dot as ambient decoration.

Validation messages stay close to their fields. Preserve user input when validation fails. Do not use color alone to communicate error or success.

### Closing conversion moment

End long marketing pages with one resolved next step. Two approved treatments are:

- A white rounded panel over the atmospheric canvas, with supplied product art.
- A midnight-to-blue contrast field with a subtle 32px grid, white copy, a white primary action, and a quiet translucent secondary action.

Do not repeat the full hero. The closing section should reduce uncertainty and make the next action obvious.

## Buttons and links

Primary action:

```html
<a class="inline-flex items-center justify-center rounded-lg
  bg-[linear-gradient(90deg,#4D63F6_17%,#1D45D8_65%)]
  px-4 py-2.5 text-sm font-medium text-white
  shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]
  transition-opacity hover:opacity-95">
  Get Started
</a>
```

Secondary action:

```html
<a class="inline-flex items-center justify-center rounded-lg border
  border-[#E4E4E7] bg-white px-4 py-2.5 text-sm font-medium
  text-[#09090B] shadow-[0_1px_2px_rgba(0,0,0,0.10)]
  transition-colors hover:bg-[#FAFAFA]">
  Documentation
</a>
```

Text link:

```html
<a class="font-medium text-[#1D45D8] underline-offset-4 hover:underline">
  Read the integration guide
</a>
```

Use concise verb-led labels. Prefer “Open the Facilitator,” “Read the Docs,” “Try x402,” “Start free,” or “View pricing” over “Learn more.” Use an external-link icon only when the destination context matters.

All interactive states need visible focus. Disabled controls must look disabled and remain understandable. Do not communicate interactivity through hover motion alone.

## Iconography and imagery

Use Lucide icons for interface actions and simple product concepts. Standard sizes are 16px for inline utilities, 20px for buttons and feature cells, and 24px for larger controls. Use a consistent stroke width within a peer set.

Prefer text over an icon when the symbol would be ambiguous. Do not place every icon inside a colored tile. A faint blue tile is appropriate when it helps a feature grid scan consistently.

Use supplied PayAI illustrations, network marks, product screenshots, and real ecosystem media. Hero artwork should depict a payment relationship, agent request, wallet, security state, settlement, or product workflow. Avoid stock photos, generic robots, coins, glowing circuitry, 3D blockchain cubes, and model-generated dashboard screenshots.

Every informative image needs useful alternative text. Decorative imagery uses empty alt text and must not introduce essential information.

## Motion

PayAI motion should imply speed and continuity without making the page restless.

- Header arrival: about 100–300ms.
- Standard entrance: 400–600ms.
- Hero headline or artwork: up to 800ms.
- Hover or press feedback: about 200ms.
- Preferred easing: `cubic-bezier(.25,.25,0,1)` for entrances and standard ease for small state changes.
- Hover lift: no more than 2px; scale: no more than 1.05.

Keep the page complete before animation runs. Never gate reading behind scroll reveals. Avoid parallax, simulated typing, constant floating, decorative pulse loops, and motion on every card.

Respect `prefers-reduced-motion: reduce`. Disable non-essential transforms, smooth scrolling, marquees, and pulsing status rings when reduced motion is requested.

## Voice and copy

Lead with the outcome, then name the mechanism. Use concrete nouns and active verbs.

Good PayAI language is:

- “Process x402 payments across Solana and EVM networks with one endpoint.”
- “Point your server at the facilitator and ship.”
- “Verify and settle signed payment payloads.”
- “Funds settle directly to the merchant's wallet.”

Weak PayAI language is:

- “Unlock the revolutionary future of limitless AI commerce.”
- “A seamless, cutting-edge ecosystem for everyone.”
- “The ultimate Web3 payment solution.”

Use established product vocabulary consistently:

- `PayAI`, not `Pay AI`.
- `x402`, except where a title begins with it and product naming requires otherwise.
- `facilitator` for the service that verifies and settles payments.
- `buyer` and `seller` or `merchant` when the distinction matters.
- `network` for Solana, Base, Polygon, Avalanche, Sei, and other chains in supported configuration.
- `settlement`, `verification`, `payment payload`, and `endpoint` in technical contexts.

Do not broaden claims. “No API key required to start” is not the same as “authentication never exists.” “Sub-second” needs a defined measured scope. “Gasless” must state which party's network fees are covered. Always preserve a claim's population, period, chain, tier, and qualifier.

Use numerals for prices, limits, durations, network counts, and steps. Keep units adjacent to values. Use non-breaking spaces where a value and unit must not separate.

## Responsive behavior

Design mobile-first, then use the existing Tailwind breakpoints. The main structural transitions occur at `md` (768px) and `lg` (1024px).

- Collapse desktop navigation below `md`.
- Stack two-column heroes and evidence layouts below `lg`.
- Keep the decision path before artwork or implementation detail in source order.
- Reduce hero type from 56px to 32px and section type from 36–40px to 24px.
- Reduce section padding from 80–96px to 32–56px.
- Preserve 16px outer gutters and at least 44px touch targets.
- Let actions wrap naturally. Do not make two buttons illegibly narrow to keep them on one line.
- Recompose pricing tables as cards or provide clearly local horizontal scrolling.
- Let code scroll inside its own region.
- Wrap network chips and ecosystem marks without clipping.
- Avoid `h-screen` when content height can exceed the viewport on mobile.

Do not hide page overflow as a repair. Reflow the object that causes it. Give grid and flex children `min-width: 0` where necessary.

## Accessibility

Meet WCAG 2.2 AA for contrast, keyboard access, focus visibility, labels, and target size.

- Use landmarks and one descriptive `h1`.
- Keep headings in order.
- Provide a skip link on long or developer-heavy pages.
- Use native buttons, links, inputs, lists, tables, and disclosure elements.
- Give icon-only controls accessible names.
- Pair color states with text or a symbol.
- Keep body copy readable; do not use low-opacity gray text for critical information.
- Preserve zoom and text reflow up to 200%.
- Announce copy confirmation and dynamic validation without moving focus unexpectedly.
- Test keyboard operation, reduced motion, and screen-reader names.

The focus ring should use the deep action blue with enough offset to remain visible on white and tinted surfaces. Do not use the legacy neon-cyan focus treatment on new work.

## Implementation guidance

### Existing Next.js and Tailwind site

Preserve the current stack and reuse:

- `container-payai` for outer width and gutters.
- `Inter` and `JetBrains Mono` font families already defined in the project.
- Existing `Button`, `Card`, dialog, and FAQ behavior when they meet the requirements here.
- `framer-motion` only for purposeful entrance or state continuity.
- `lucide-react` for interface icons.
- Supplied assets in `public/` before creating new media.

Prefer semantic components or named token utilities over repeating new arbitrary values. Existing hard-coded values in shipping components document the current look, but new shared work should converge on the semantic values in this guide.

Do not introduce a parallel theme, icon library, animation library, design-system preset, or web font without a clear need.

### Standalone facilitator surface

Keep dependencies small. Semantic HTML, Tailwind utilities, a minimal icon set, and small vanilla JavaScript are sufficient. The page should remain useful if analytics, icon replacement, or non-essential scripts fail.

The facilitator origin is also an API surface. Marketing HTML must not obscure or interfere with health, supported, verify, settle, discovery, OpenAPI, Markdown, or `llms.txt` routes. Link machine-readable references directly.

Keep the setup example, pricing matrix, rate limits, supported networks, and developer reference synchronized with the server's canonical configuration.

## Inspect and revise

Render the actual result. Inspect the first viewport, the full page, and the important breakpoints before handoff.

Review in this order:

1. **Truth:** Are pricing, networks, protocol versions, fees, custody, security, and limits exact and sourced?
2. **First read:** Can a visitor identify PayAI, the product outcome, the proof, and the next action immediately?
3. **Mode:** Does the page use the right balance of marketing atmosphere and facilitator density?
4. **Hierarchy:** Is there one dominant object in each reading moment, with consistent peer roles and stable alignment?
5. **Technical proof:** Are URLs, code, steps, tables, and machine-readable links real, current, and easy to use?
6. **Restraint:** Can a card, border, icon, badge, gradient, animation, or paragraph be removed without losing meaning? If yes, remove it.
7. **Reflow:** Does the page stack cleanly without clipping, tiny text, or accidental viewport-height traps?
8. **Access:** Are semantics, focus, labels, contrast, reduced motion, and alternatives sound?
9. **Performance:** Are fonts, images, scripts, and animation proportionate to their value?

Fix the highest-impact systemic issue, render again, and repeat until no known material problem remains.

## Reject generated-design reflexes

Do not ship:

- A generic dark crypto dashboard as the page canvas.
- Neon cyan and purple gradients as the main brand language.
- Glows, glass panels, blobs, particles, star fields, or decorative blockchain grids.
- A centered hero followed automatically by three rounded cards.
- Every section inside a card or every label inside a pill.
- Blue gradient text or an entire blue headline.
- Multiple competing primary buttons in one action cluster.
- Decorative network logos that imply unsupported coverage or partnership.
- Fake terminal output, fake transactions, fake product screenshots, or invented customer proof.
- Tiny gray copy used to force dense technical content into a narrow area.
- Mixed icon families, oversized icon tiles, or icons that repeat visible text without adding meaning.
- Heavy shadows on ordinary cells, tables, and feature grids.
- Tables compressed until headers or row labels become unreadable.
- Animation on every section, continuous floating art, or reading gated by motion.
- Claims such as “instant,” “free,” “gasless,” “no keys,” “non-custodial,” or “all networks” without the qualifier required to make them true.

PayAI is not recognizable because everything is blue. It is recognizable because complex payment infrastructure becomes concrete: one endpoint, a visible setup, exact network and pricing information, a clear action, and an interface that feels fast without feeling careless.
