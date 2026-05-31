# Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features a sleek design with particle animations, smooth scrolling sections, and a functional contact form.

## Features

- **Modern Design**: Clean and professional UI with dark theme support
- **Particle Background**: Animated particle effects for visual appeal
- **Responsive Layout**: Fully responsive design that works on all devices
- **Multiple Sections**: Hero, About, Education, Skills, Projects, Experience, and Contact sections
- **Contact Form**: Functional email contact form powered by Resend API
- **Loading Screen**: Smooth loading animation on page initialization
- **Navigation Menu**: Sticky navbar for easy section navigation
- **Performance Optimized**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer-motion.com/) & [tsParticles](https://tsparticles.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/)
- **Email Service**: [Resend](https://resend.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
RESEND_API_KEY=your_resend_api_key_here
```

4. Start the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production bundle
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## Project Structure

```
├── app/
│   ├── api/
│   │   └── send-email/       # Email API endpoint
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── loading-screen.tsx     # Loading animation
│   ├── navbar.tsx             # Navigation bar
│   ├── particle-background.tsx # Particle effects
│   ├── theme-provider.tsx     # Theme configuration
│   ├── sections/              # Page sections
│   │   ├── about-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── education-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── projects-section.tsx
│   │   └── skills-section.tsx
│   └── ui/                    # Reusable UI components
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── public/                    # Static assets
└── styles/                    # Additional stylesheets
```

## Configuration

### Environment Variables

The following environment variables need to be set for full functionality:

- `RESEND_API_KEY` - API key from [Resend](https://resend.com/) for sending emails via the contact form

### Tailwind CSS

Configuration is located in `tailwind.config.ts`. Customize colors, spacing, and other design tokens here.

### Next.js

Configuration is in `next.config.mjs`. Modify build settings and Next.js behavior here.

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/):

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository in Vercel
3. Add your environment variables in Vercel's settings
4. Deploy

### Deploy Elsewhere

For other hosting platforms, build the project:
```bash
pnpm build
pnpm start
```

## Contact

For questions or support regarding this portfolio, please reach out via the contact form on the website or email: swathimodala26@gmail.com

## License

This project is open source and available under the MIT License.
