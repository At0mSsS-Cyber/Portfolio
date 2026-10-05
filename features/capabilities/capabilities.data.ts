export interface CapabilityItem {
  id: string;
  number: string;
  pillCategory: string;
  subheading: string;
  title: string;
  ghostTitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt?: string;
}

/**
 * Hardcoded, typed capabilities content array.
 * Per project spec & implementation plan, "What I do" capabilities are not represented
 * as a separate Mongoose database model, but defined as structured constants data.
 */
export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: 'generative-ai',
    number: '01',
    pillCategory: 'Generative AI',
    subheading: 'GENERATIVE AI & AGENTS',
    title: 'LLM Agents & Automation',
    ghostTitle: 'GEN AI',
    description:
      'I build Generative AI features with LLMs and LangGraph agents, such as a pipeline that turns chat conversations into validated, deployable integration flows, and OCR + LLM document processing. Where a deterministic generator does the job, I use that instead to keep cost and build time down.',
    tags: ['LLMs', 'LangGraph', 'AI Agents', 'RAG', 'Vector Search'],
    imageSrc: '/images/capabilities/generative-ai.svg',
    imageAlt: 'An AI agent graph: prompt, plan, LLM, validate and deploy, with RAG, tools and vector search',
  },
  {
    id: 'full-stack-engineering',
    number: '02',
    pillCategory: 'Full-Stack Engineering',
    subheading: 'FULL-STACK ENGINEERING',
    title: 'Multi-Tenant SaaS Products',
    ghostTitle: 'FULL-STACK',
    description:
      'I build and ship scalable, multi-tenant SaaS products end to end: React and TypeScript interfaces from Figma designs, state and data fetching with Redux and TanStack Query, and the REST APIs and real-time WebSocket connections behind them.',
    tags: ['React', 'TypeScript', 'Redux', 'TanStack Query', 'REST APIs'],
    imageSrc: '/images/capabilities/full-stack.svg',
    imageAlt: 'A web application interface connected to its API endpoints',
  },
  {
    id: 'backend-apis',
    number: '03',
    pillCategory: 'Backend & APIs',
    subheading: 'BACKEND & MICROSERVICES',
    title: 'Python, Node.js & Java Services',
    ghostTitle: 'BACKEND',
    description:
      'I build backend services and REST APIs in Python (FastAPI, Django REST, Flask), Node.js and Java Spring Boot, including a Spring Boot analytics tool that cut manual reporting by 20 hours a week. Microservices, event-driven architecture with Kafka, and PostgreSQL, MongoDB and Redis underneath.',
    tags: ['FastAPI', 'Node.js', 'Java', 'Spring Boot', 'Kafka', 'Microservices'],
    imageSrc: '/images/capabilities/backend-apis.svg',
    imageAlt: 'FastAPI, Node.js and Spring Boot services sharing a Kafka event bus and data stores',
  },
  {
    id: 'healthcare-interoperability',
    number: '04',
    pillCategory: 'Healthcare Interoperability',
    subheading: 'HEALTHCARE INTEROPERABILITY',
    title: 'Healthcare Integration Pipelines',
    ghostTitle: 'HEALTHCARE',
    description:
      'My domain specialism: the pipelines that move clinical and claims data between systems. HL7 v2 over MLLP, FHIR R4 conversion, X12 EDI over SFTP/PGP and document processing, with dead letter routing and payload retention controls.',
    tags: ['HL7 v2', 'FHIR R4', 'X12 EDI', 'Apache NiFi'],
    imageSrc: '/images/capabilities/healthcare.svg',
    imageAlt: 'HL7 v2, X12 EDI and documents flowing through a no-code hub to FHIR R4, APIs and monitoring',
  },
  {
    id: 'cloud-devops-security',
    number: '05',
    pillCategory: 'Cloud & DevOps',
    subheading: 'CLOUD, DEVOPS & SECURITY',
    title: 'Azure Infrastructure & Delivery',
    ghostTitle: 'CLOUD',
    description:
      'I take platforms into production on Microsoft Azure with Infrastructure as Code (Bicep), Docker, Kubernetes and Helm, and CI/CD pipelines with release gates. Security is part of the build: Keycloak single sign-on, role-based access control and Azure Key Vault.',
    tags: ['Microsoft Azure', 'Kubernetes', 'Bicep (IaC)', 'CI/CD'],
    imageSrc: '/images/capabilities/cloud-devops.svg',
    imageAlt: 'A release pipeline deploying into a Kubernetes cluster on Azure',
  },
];

