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
  title: 'Akhil Tom | Full-Stack AI Engineer',
  description:
    'Full-stack AI engineer building Generative AI agents (LLMs, LangGraph, RAG) and multi-tenant SaaS platforms with React, Python, Node.js, Java Spring Boot and Azure. Healthcare interoperability specialist (HL7 v2, FHIR, X12 EDI).',
  ogImage: '/api/og',
  twitterHandle: '',
  siteName: 'Akhil Tom',
  locale: 'en_US',
  type: 'website',
};

export default SEO_DEFAULTS;
