export interface SiteConfig {
  name: string;
  /** First name, used in the handwritten headline, loader and footer signature. */
  author: string;
  fullName: string;
  role: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  /**
   * Optional photos. Leave empty to show the built-in illustration / monogram.
   * heroPortrait: transparent cut-out PNG for the hero (e.g. "/images/portrait.png").
   * avatar: square photo for the About section (e.g. "/images/avatar.jpg").
   */
  images: {
    heroPortrait: string;
    avatar: string;
  };
  links: {
    github: string;
    linkedin: string;
    resume: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Akhil Tom Portfolio",
  author: "Akhil",
  fullName: "Akhil Tom",
  role: "Full-Stack AI Engineer",
  description:
    "Portfolio of Akhil Tom, a full-stack AI engineer building Generative AI agents and multi-tenant SaaS platforms with React, TypeScript, Python, Node.js, Java Spring Boot and Azure, with deep healthcare interoperability experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/api/og",
  contact: {
    email: "akhiltom0274@gmail.com",
    phone: "+91 97453 32709",
    location: "Wayanad, Kerala, India",
  },
  images: {
    heroPortrait: "",
    avatar: "",
  },
  links: {
    github: "https://github.com/At0mSsS-Cyber",
    linkedin: "https://www.linkedin.com/in/akhil-tom-088612168",
    resume: "/Akhil_Tom_Resume.pdf",
  },
};
