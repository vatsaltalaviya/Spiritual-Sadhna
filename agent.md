# Agent Directives & Rules

## Project Architecture & Assets
- **Static Site:** This project is a static site built with standard HTML, vanilla CSS (alongside Tailwind), and vanilla JavaScript. Do not introduce server-side logic, build steps for single-page applications (like React or Vue), or complex unrequested tooling.
- **Image Assets:** All image assets (`.png`, `.jpg`, `.svg`, etc.) are located in the `images/` directory. Always reference images relative to this folder (e.g., `<img src="images/logo.png" />`).

When building, updating, or analyzing the project, any agent MUST adhere to the following guidelines:

## 1. SEO & Content Structure
- **Semantic HTML:** Use semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) properly to structure the layout. Ensure proper document outlines and hierarchy (using `<h1>` properly, followed by `<h2>`, `<h3>`, etc.).
- **Meta Tags:** Ensure that standard SEO `<meta>` tags are included inside the `<head>` of all HTML files. This includes:
  - `<meta name="description" content="...">`
  - `<meta name="keywords" content="...">`
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - Open Graph (OG) tags for social media link sharing if needed.
- **Images:** Always include descriptive `alt` tags on `<img>` elements for accessibility and image search indexing.

## 2. Styling with Tailwind CSS
- **Framework:** STRICTLY use **Tailwind CSS** for handling layouts, responsiveness, padding, and UI styles.
- **Utility-First:** Avoid custom class names when a Tailwind utility class can achieve the desired effect.
- **Responsiveness:** Maintain mobile-first responsive designs using Tailwind's breakpoint prefixes (`md:`, `lg:`, `xl:`).

## 3. Global CSS Architecture (Colors & Fonts)
While Tailwind is the primary way of rendering styles, we must keep design elements strictly organized globally for reusability without making a mess of inline styles:
- **Global Typography:** Set up primary and secondary fonts (e.g., using Google Fonts) globally on the `<body>` element.
- **Global Variables / Tailwind Config:** Extract commonly used thematic values (Main theme colors, font families, branding assets) to make them universally reusable. 
  - If using a compiled Tailwind setup, place these in `tailwind.config.js`.
  - If using a CDN or vanilla setup with `style.css`, put them in CSS variables (`:root { --primary-color: #xxx; }`) and reference them consistently.

## 4. Strict Theme Guidelines
**CRITICAL INSTRUCTION FOR AGENTS:** When creating or updating any page, you MUST strictly follow the theme described below.

### Colors
- **primary**: `#F07D3E` (Orange accent, mapped to `--primary-orange`)
- **darkBlue**: `#0B1B36` (Sections and footer dark bg, mapped to `--dark-blue`)
- **lightBeige**: `#FDFCF8`
- **textDark**: `#1A202C`
- **textMuted**: `#64748B`
- **Backgrounds**: Body default background is `#FAFAFA`.

### Typography
- **sans**: `'Inter', sans-serif` (Used for body text)
- **serif**: `'Playfair Display', serif` (Used for headings `h1` through `h6`)

### Styles
- Include the Tailwind configuration script within the `<head>` of any new HTML file to define these custom colors and fonts in Tailwind classes (e.g., `text-primary`, `bg-darkBlue`, `font-serif`).
- Define the custom CSS variables in a `<style>` block (e.g., `:root { --primary-orange: #F07D3E; --dark-blue: #0B1B36; }`).
- Use reusable custom classes like `.pill-tag` where applicable.
