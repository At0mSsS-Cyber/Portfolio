import type { SerializedExperience } from '@/lib/validations/experience.schema';
import type { SerializedProject } from '@/lib/validations/project.schema';
import type { SerializedTechnology } from '@/lib/validations/technology.schema';

/**
 * Site Content
 *
 * The experience, technology and project entries shown on the public pages whenever
 * DATABASE_URL is not configured (see ./offlineMode.ts). Edit these arrays to change
 * what the site shows. `npm run seed` loads the same entries into MongoDB.
 *
 * Role dates use mid-month timestamps so the rendered month is the same in every time zone.
 */

const TIMESTAMP = '2026-01-01T00:00:00.000Z';

export const offlineExperiences: SerializedExperience[] = [
  {
    _id: 'offline-experience-1',
    company: 'Keleno Labs',
    companyUrl: 'https://keleno.com',
    roles: [
      {
        title: 'Software Engineer',
        startDate: '2022-04-15T00:00:00.000Z',
        endDate: null,
        description:
          'Full-stack engineer building Generative AI features and multi-tenant SaaS platforms. Built a Generative AI agent pipeline with LangGraph and LLMs that turns chat conversations into validated, deployable integration flows, cutting build time by 90%, along with OCR + LLM document processing. Core engineer on MedSyncAI, a no-code healthcare integration platform (HL7 v2, FHIR, X12 EDI) on Azure, across React, Python/FastAPI microservices, Kafka and PostgreSQL. Also built an AI-driven dynamic pricing platform for property managers, a Java Spring Boot analytics tool, and 100+ accessible React components for the company design system.',
      },
    ],
    tags: [
      'LLMs',
      'LangGraph',
      'AI Agents',
      'React',
      'TypeScript',
      'Python',
      'FastAPI',
      'Java',
      'Spring Boot',
      'Microsoft Azure',
      'PostgreSQL',
      'Kafka',
      'Kubernetes',
      'HL7 v2',
      'FHIR R4',
      'X12 EDI',
    ],
    order: 0,
    createdAt: TIMESTAMP,
    updatedAt: TIMESTAMP,
  },
  {
    _id: 'offline-experience-2',
    company: 'NuVeda Learning',
    roles: [
      {
        title: 'Software Engineering Intern',
        startDate: '2021-09-15T00:00:00.000Z',
        endDate: '2021-10-15T00:00:00.000Z',
        description:
          'Added multilingual (i18n) support to a learning management system (LMS), enabling rollout to non-English markets.',
      },
    ],
    tags: ['Internationalization (i18n)', 'Localization', 'LMS'],
    order: 1,
    createdAt: TIMESTAMP,
    updatedAt: TIMESTAMP,
  },
];

// The grid shows the first four large, the next six in a second row, and the rest below.
export const offlineTechnologies: SerializedTechnology[] = (
  [
    ['Python', 'backend'],
    ['React', 'frontend'],
    ['TypeScript', 'frontend'],
    ['LangGraph', 'backend'],
    ['FastAPI', 'backend'],
    ['Node.js', 'backend'],
    ['Java', 'backend'],
    ['Spring Boot', 'backend'],
    ['PostgreSQL', 'database'],
    ['Apache Kafka', 'backend'],
    ['Microsoft Azure', 'devops'],
    ['Docker', 'devops'],
    ['Kubernetes', 'devops'],
    ['Apache NiFi', 'backend'],
    ['Redis', 'database'],
    ['Tailwind CSS', 'frontend'],
    ['Redux', 'frontend'],
    ['Git', 'devops'],
  ] satisfies [string, SerializedTechnology['category']][]
).map(([name, category], index) => ({
  _id: `offline-technology-${index + 1}`,
  name,
  icon: '',
  category,
  order: index + 1,
  createdAt: TIMESTAMP,
  updatedAt: TIMESTAMP,
}));

export const offlineProjects: SerializedProject[] = [
  {
    _id: 'offline-project-1',
    title: 'Generative AI Interface Builder',
    category: 'saas',
    shortDescription:
      'Generative AI agent pipeline that turns chat conversations into validated, deployable NiFi flows, with deterministic HL7/X12 generators that cut LLM cost per interface to zero.',
    coverImage: '/images/projects/ai-interface-builder.svg',
    gallery: [],
    techStack: ['LangGraph', 'LLMs', 'AI Agents', 'Python', 'FastAPI', 'Apache NiFi', 'HL7 v2', 'X12 EDI'],
    goal: 'Let a user describe an integration interface in conversation and receive a validated, deployable NiFi flow.',
    contribution:
      'Built the agent pipeline with LangGraph and LLMs, and added deterministic HL7 and X12 generators so that standard interfaces no longer need a model call.',
    outcome: 'LLM cost per interface cut to zero and interface build time reduced by 90%.',
    featured: true,
    order: 0,
    published: true,
    createdAt: TIMESTAMP,
    updatedAt: TIMESTAMP,
  },
  {
    _id: 'offline-project-2',
    title: 'AI-Driven Dynamic Pricing Platform',
    category: 'saas',
    shortDescription:
      'AI-driven dynamic pricing and revenue management platform for property managers, improving projected occupancy and revenue by 30% across 1,000 properties.',
    coverImage: '/images/projects/dynamic-pricing.svg',
    gallery: [],
    techStack: ['React', 'TypeScript', 'Python', 'PostgreSQL'],
    goal: 'Help property managers set prices and manage revenue with AI-driven recommendations.',
    contribution: 'Built the pricing and revenue management platform with React, TypeScript, Python and PostgreSQL.',
    outcome: 'Projected occupancy and revenue improved by 30% across 1,000 properties.',
    featured: true,
    order: 1,
    published: true,
    createdAt: TIMESTAMP,
    updatedAt: TIMESTAMP,
  },
  {
    _id: 'offline-project-3',
    title: 'OCR + LLM Document Processing',
    category: 'saas',
    shortDescription:
      'Document pipeline inside MedSyncAI that combines OCR with LLMs to process documents, with dead letter routing and payload retention controls.',
    coverImage: '/images/projects/document-ai.svg',
    gallery: [],
    techStack: ['LLMs', 'OCR', 'Python', 'FastAPI', 'Apache NiFi'],
    goal: 'Bring documents into the same integration pipelines as structured healthcare messages.',
    contribution:
      'Implemented OCR + LLM document processing as part of the platform, with dead letter routing for failures and payload retention controls.',
    outcome: 'Document pipelines run alongside HL7 v2, FHIR and X12 EDI interfaces on the same no-code platform.',
    featured: false,
    order: 2,
    published: true,
    createdAt: TIMESTAMP,
    updatedAt: TIMESTAMP,
  },
  {
    _id: 'offline-project-4',
    title: 'MedSyncAI',
    category: 'saas',
    shortDescription:
      'No-code healthcare integration platform that lets healthcare teams build, deploy and monitor HL7 v2, FHIR, X12 EDI and document pipelines. A multi-tenant Azure SaaS serving around 10 tenants.',
    coverImage: '/images/projects/medsyncai.svg',
    gallery: [],
    techStack: [
      'React',
      'Python',
      'FastAPI',
      'Apache NiFi',
      'PostgreSQL',
      'Kafka',
      'HL7 v2',
      'FHIR R4',
      'X12 EDI',
      'Microsoft Azure',
      'Kubernetes',
      'Helm',
      'Azure Bicep',
    ],
    goal: 'Let healthcare teams build, deploy and monitor HL7 v2, FHIR, X12 EDI and document pipelines without writing code, on a multi-tenant Azure SaaS.',
    contribution:
      'Engineered core services across React, Python/FastAPI microservices, NiFi, PostgreSQL and Kafka. Implemented an HL7 v2 MLLP adapter, an HL7 version transformation engine, FHIR R4 conversion and X12 EDI over SFTP/PGP.',
    outcome:
      'A production platform serving around 10 tenants, available as hosted and bring-your-own-cloud (BYOC) deployments through Azure Bicep, Kubernetes/Helm charts and an Azure Marketplace template.',
    featured: true,
    order: 3,
    published: true,
    createdAt: TIMESTAMP,
    updatedAt: TIMESTAMP,
  },
  {
    _id: 'offline-project-5',
    title: 'Tenant Admin & API Studio',
    category: 'saas',
    shortDescription:
      'Tenant administration for MedSyncAI: interface lifecycle, deployment status monitoring, usage metering, entitlements and audit logs, plus API Studio for publishing tenant data APIs through Azure API Management.',
    coverImage: '/images/projects/api-studio.svg',
    gallery: [],
    techStack: [
      'React',
      'FastAPI',
      'Azure API Management',
      'Keycloak',
      'OIDC',
      'SSO',
      'RBAC',
      'Azure Key Vault',
    ],
    goal: 'Give each tenant control over its own interfaces and a way to publish its data as managed APIs.',
    contribution:
      'Delivered the tenant admin features and API Studio, integrated Keycloak OIDC single sign-on across the platform and NiFi with a realm per tenant and role-based access control, and secured secrets with Azure Key Vault.',
    outcome:
      'Tenants manage interface lifecycle, usage and entitlements themselves, with tenant isolation hardened against the OWASP Top 10.',
    featured: false,
    order: 4,
    published: true,
    createdAt: TIMESTAMP,
    updatedAt: TIMESTAMP,
  },
  {
    _id: 'offline-project-6',
    title: 'Spring Boot Analytics Tool',
    category: 'saas',
    shortDescription:
      'Java Spring Boot analytics tool for a multi-tenant healthcare platform that replaced manual reporting, saving 20 hours a week.',
    coverImage: '/images/projects/spring-analytics.svg',
    gallery: [],
    techStack: ['Java', 'Spring Boot'],
    goal: 'Replace manual reporting on a multi-tenant healthcare platform with an analytics tool.',
    contribution: 'Built the analytics tool in Java with Spring Boot.',
    outcome: 'Manual reporting cut by 20 hours per week.',
    featured: false,
    order: 5,
    published: true,
    createdAt: TIMESTAMP,
    updatedAt: TIMESTAMP,
  },
  {
    _id: 'offline-project-7',
    title: 'Multi-Tenant Healthcare Platform',
    category: 'saas',
    shortDescription:
      'Multi-tenant healthcare platform on Azure FHIR, Logic Apps and API Management covering scheduling, grievances, behaviour tracking and staff planning.',
    coverImage: '/images/projects/healthcare-platform.svg',
    gallery: [],
    techStack: ['Azure FHIR', 'Azure Logic Apps', 'Azure API Management', 'Java', 'Spring Boot'],
    goal: 'Bring scheduling, grievances, behaviour tracking and staff planning onto one multi-tenant platform built on Azure FHIR.',
    contribution:
      'Engineered the platform on Azure FHIR, Logic Apps and API Management, together with its Java Spring Boot analytics tool for reporting.',
    outcome: 'One multi-tenant platform covering scheduling, grievances, behaviour tracking and staff planning.',
    featured: false,
    order: 6,
    published: true,
    createdAt: TIMESTAMP,
    updatedAt: TIMESTAMP,
  },
  {
    _id: 'offline-project-8',
    title: 'React Design System',
    category: 'website',
    shortDescription:
      'Company design system with 100+ accessible React components, shipped through Azure DevOps CI/CD pipelines with release gates and zero-downtime deployments.',
    coverImage: '/images/projects/design-system.svg',
    gallery: [],
    techStack: ['React', 'Accessibility', 'Azure DevOps', 'CI/CD'],
    goal: 'Give product teams a shared library of accessible, consistent React components.',
    contribution:
      'Contributed 100+ accessible React components to the company design system and ran the Azure DevOps CI/CD pipelines that release it.',
    outcome: 'Releases go out through pipelines with release gates and zero-downtime deployments.',
    featured: false,
    order: 7,
    published: true,
    createdAt: TIMESTAMP,
    updatedAt: TIMESTAMP,
  },
];
