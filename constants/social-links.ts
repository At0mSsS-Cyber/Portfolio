import { siteConfig } from "@/config/site.config";

export interface SocialLink {
  platform: string;
  url: string;
  handle?: string;
  icon?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: siteConfig.links.github,
    handle: "@At0mSsS-Cyber",
  },
  {
    platform: "LinkedIn",
    url: siteConfig.links.linkedin,
    handle: "in/akhil-tom-088612168",
  },
  {
    platform: "Email",
    url: `mailto:${siteConfig.contact.email}`,
    handle: siteConfig.contact.email,
  },
];

export default SOCIAL_LINKS;
