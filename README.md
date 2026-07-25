<div align="center">

# Huawei Manager Mobile - Landing Page

**The official landing page for the Huawei Manager Mobile Android application.**

[![Astro](https://img.shields.io/badge/Astro-v4.10-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Hosted_on-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

This repository contains the source code for the official landing page of **Huawei Manager Mobile (HM Mobile)**, a modern, fast, and responsive website built with [Astro](https://astro.build) and styled with [Tailwind CSS](https://tailwindcss.com).

The landing page serves as the primary information and download hub for the HM Mobile Android application, providing users with feature overviews, download links, and support channels.

## ✨ Key Features

-   **Blazing Fast Performance**: Built with Astro for a static, server-rendered site with zero client-side JavaScript by default.
-   **Responsive Design**: A mobile-first approach ensures a seamless experience on all devices, from desktops to smartphones.
-   **Dark/Light Mode**: Automatic theme switching based on system preference, with a manual toggle for user control.
-   **i18n Support**: Fully localized in English and Indonesian (`en`/`id`).
-   **Dynamic Downloads**: Fetches the latest and pre-release versions directly from the GitHub Releases API.
-   **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data (JSON-LD) for maximum visibility.
-   **PWA-Ready**: Includes a service worker and manifest for a native-like experience.

## 🛠️ Tech Stack

-   **Framework**: [Astro](https://astro.build)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com)
-   **Hosting**: [Vercel](https://vercel.com)
-   **Package Manager**: [npm](https://www.npmjs.com/)

## 📁 Project Structure

```
/
├── public/              # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/          # Images and other assets processed by Astro
│   ├── components/      # Reusable Astro components (.astro)
│   ├── i18n/            # Internationalization (en.json, id.json)
│   ├── layouts/         # Base layout component
│   ├── pages/           # Astro pages and routes
│   └── styles/          # Global CSS and Tailwind styles
├── astro.config.mjs     # Astro configuration
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please open an issue or submit a pull request.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/alrescha79-cmd/lp-hm/blob/main/LICENSE) file for details.

