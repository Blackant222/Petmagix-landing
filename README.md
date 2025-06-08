# Petmagix-Landing

> **Specification & Instructions to build a simple, minimal 3D UI landing page (in Persian) as a gateway for the Petmagix Telegram bot**

---

## 1. Project Overview

* **Goal**: Create a responsive single-page landing site in Persian that acts as a gateway to the Petmagix Telegram bot. It must be minimal yet feature an eye-catching 3D UI element.
* **Deliverable**: Fully functional static site with clear build instructions.

## 2. Design Requirements

1. **Layout**: Single scrollable page with the following sections:

   * Hero (3D UI centerpiece + tagline)
   * Features showcase (icons/text)
   * Call‑to‑Action (Telegram launch button)
   * Footer (social links, legal)
2. **3D UI**: Integrate a lightweight WebGL or CSS 3D animation (e.g., rotating pet avatar or abstract shape).
3. **Typography**: Persian font with good readability (e.g., Vazir, Sahel).
4. **Colors & Style**: Minimal palette (2–3 colors max), high contrast for CTA.
5. **Responsive**: Mobile-first; must adapt to all viewports.

## 3. Technical Stack

* **Framework**: React or Vue (choose one).
* **Bundler**: Vite or Next.js (static export).
* **3D Library**: Three.js or CSS 3D transforms.
* **Styling**: Tailwind CSS (with RTL support plugin).
* **Deployment**: GitHub Pages or Netlify.

## 4. Development Steps

1. **Setup**

   * Initialize project (`npm init vite@latest` or `create-next-app`).
   * Configure RTL support for Tailwind.
2. **Hero Section**

   * Design and import 3D asset or use procedural geometry.
   * Place Persian tagline: "دروازه هوشمند مراقبت حیوانات Petmagix"
   * Add Telegram CTA: `شروع در تلگرام` linking to bot deep link.
3. **Features Section**

   * Four cards with icon and Persian label:

     * پیگیری سلامت
     * یادآوری خودکار
     * چت هوشمند
     * بینش هوش مصنوعی
4. **Footer**

   * Include minimal legal text in Persian.
   * Add social icons with links.
5. **Testing**

   * Validate responsiveness on mobile breakpoints.
   * Ensure Persian text renders correctly (RTL).
6. **Build & Deploy**

   * Run `npm run build` and deploy to chosen platform.

## 5. Folder Structure

```
Petmagix-landing/
├─ public/
│  └─ assets/          # 3D models, images, fonts
├─ src/
│  ├─ components/      # Hero, Features, Footer
│  ├─ styles/          # Tailwind config, RTL plugin
│  └─ main.jsx         # Entry point
├─ .env.example        # Environment variables if needed
├─ package.json
├─ tailwind.config.js
└─ README.md           # This specification
```

## 6. Environment & Prerequisites

* Node.js v14+
* npm or Yarn
* Access to Telegram bot deep link (provided by product team)

---

**End of specification**
