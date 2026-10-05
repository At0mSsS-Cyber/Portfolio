export interface SeoDefaults {
  title: string;
  description: string;
  ogImage: string;
  /** Optional, e.g. '@handle'. Leave empty when there is no Twitter / X account. */
  twitterHandle: string;
  siteName: string;
  locale: string;
  type: string;
}

export const SEO_DEFAULTS: SeoDefaults = {
  title: 'Akhil Tom | Full-Stack Software Engineer',
  description:
    'Full-stack software engineer with 4 years of experience building multi-tenant SaaS platforms for healthcare interoperability (HL7 v2, FHIR, X12 EDI) and Generative AI with React, TypeScript, Python and Azure.',
  ogImage: '/api/og',
  twitterHandle: '',
  siteName: 'Akhil Tom',
  locale: 'en_US',
  type: 'website',
};

export default SEO_DEFAULTS;
