# Akhil Tom — Portfolio

Personal portfolio of Akhil Tom, full-stack AI engineer (Generative AI agents with LLMs and LangGraph; React, TypeScript, Python, Node.js, Java Spring Boot and Azure; healthcare interoperability). Built with Next.js 15, React 19, and Tailwind CSS v4, with rich animations and an optional backend for dynamic content management.

## Editing Content

| What | Where |
|---|---|
| Name, role, contact details, social and résumé links, optional photos | `config/site.config.ts` |
| Experience, technologies and projects | `lib/offline/content.ts` |
| "What I do" cards | `features/capabilities/capabilities.data.ts` |
| About text and education | `features/about/AboutMe.tsx`, `features/about/Education.tsx` |
| Hero headline and tagline | `features/hero/Hero.tsx` |
| Page titles and descriptions | `constants/seo-defaults.ts` |
| Résumé file, project covers and other artwork | `public/`, `public/images/` |

To show a photo instead of the hero illustration and the About monogram, add the files under `public/images/` and set `images.heroPortrait` (transparent cut-out PNG) and `images.avatar` (square photo) in `config/site.config.ts`.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/), [Base UI](https://base-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/), [Lenis](https://lenis.darkroom.engineering/) (Smooth Scrolling)
- **Database**: [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Authentication**: [NextAuth.js (v5 beta)](https://authjs.dev/)
- **Content**: [Next MDX Remote](https://github.com/hashicorp/next-mdx-remote)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Media**: [Cloudinary](https://cloudinary.com/)

## Getting Started

### Prerequisites

- Node.js
- MongoDB instance (local or Atlas)
- Cloudinary account (for media storage)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy the `.env.example` file to `.env` and fill in the required values.
   ```bash
   cp .env.example .env
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Offline Mode (no database)

Step 3 is optional. When `DATABASE_URL` is not set, the app runs in offline mode: the public pages read their experience, technology and project entries from `lib/offline/content.ts` instead of MongoDB, so `npm install` and `npm run dev` are enough to see the full site.

- Edit `lib/offline/content.ts` to change the content shown in offline mode.
- **GitHub Activity**: set `GITHUB_TOKEN` and `GITHUB_USERNAME` to show real contribution data. Without them the dev server renders a generated sample calendar, and a deployed site shows an "unavailable" notice.
- **Contact form**: set `RESEND_API_KEY` to have submissions emailed to the address in `config/site.config.ts` (or `ADMIN_EMAIL`). Without it the dev server logs submissions to the terminal, and a deployed site asks the visitor to email directly.
- The admin panel (`/admin`) is not available in offline mode. It needs `DATABASE_URL` and the authentication variables.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to catch errors.
- `npm run seed`: Loads the content from `lib/offline/content.ts` into the database (replaces existing entries).

## Project Structure

- `/app`: Next.js App Router pages and layouts.
- `/components`: Reusable React components (UI elements, layout components, etc.).
- `/lib`: Utility functions and configuration files.
- `/models`: Mongoose database schemas.
- `/actions`: Next.js Server Actions for handling form submissions and data mutations.
- `/features`: Domain-specific components and logic.
- `/public`: Static assets like images and fonts.

## License

This project is licensed under the MIT License.

Built on the open-source [Portfolio_New](https://github.com/Rohitmehta395/Portfolio_New) template by Rohit Mehta (MIT).
