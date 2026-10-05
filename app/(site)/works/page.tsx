import { Metadata } from 'next';
import Link from 'next/link';
import { getProjects } from '@/actions/project.actions';
import { ProjectGrid } from '@/features/works/ProjectGrid';

import { PageHero } from '@/components/ui/PageHero';

import { siteConfig } from '@/config/site.config';
import { SEO_DEFAULTS } from '@/constants/seo-defaults';

export const metadata: Metadata = {
  title: 'Works & Case Studies',
  description:
    'Healthcare integration platforms, Generative AI agents and multi-tenant SaaS products built with React, TypeScript, Python and Azure.',
  openGraph: {
    title: 'Works & Case Studies',
    description:
      'Healthcare integration platforms, Generative AI agents and multi-tenant SaaS products built with React, TypeScript, Python and Azure.',
    url: `${siteConfig.url}/works`,
    images: [`${siteConfig.url}/api/og?title=${encodeURIComponent('Works & Case Studies')}&type=Portfolio`],
  },
};

/**
 * Works Page Server Component route at /works.
 * Fetches all published projects server-side and passes serialized data to the interactive ProjectGrid.
 */
export default async function WorksPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen pb-24 px-2 sm:px-4 lg:px-6 max-w-[1440px] mx-auto flex flex-col gap-12 select-none">
      {/* Page Hero Section */}
      <PageHero
        title="My"
        highlight="Works"
        subtitle="Platforms and products I've built across healthcare interoperability, Generative AI and proptech."
      />

      {/* Interactive Filterable Projects Grid */}
      <ProjectGrid initialProjects={projects} />
    </main>
  );
}

