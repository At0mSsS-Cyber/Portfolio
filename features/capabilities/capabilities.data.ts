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
    id: 'full-stack-engineering',
    number: '01',
    pillCategory: 'Full-Stack Engineering',
    subheading: 'FULL-STACK ENGINEERING',
    title: 'Multi-Tenant SaaS Platforms',
    ghostTitle: 'FULL-STACK',
    description:
      'I build and ship scalable, multi-tenant SaaS platforms end to end: React and TypeScript interfaces from Figma designs, Python (FastAPI) microservices and REST APIs behind them, and the data layer that ties it all together.',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    imageSrc:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    imageAlt:
      'Full-stack software development code editor interface on dark screen',
  },
  {
    id: 'healthcare-interoperability',
    number: '02',
    pillCategory: 'Healthcare Interoperability',
    subheading: 'HEALTHCARE INTEROPERABILITY',
    title: 'Healthcare Integration Pipelines',
    ghostTitle: 'HEALTHCARE',
    description:
      'I build the pipelines that move clinical and claims data between systems: HL7 v2 over MLLP, FHIR R4 conversion, X12 EDI over SFTP/PGP and OCR-based document processing, with dead letter routing and payload retention controls.',
    tags: ['HL7 v2', 'FHIR R4', 'X12 EDI', 'Apache NiFi'],
    imageSrc:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    imageAlt:
      'Network cabling connecting systems in a data centre',
  },
  {
    id: 'generative-ai',
    number: '03',
    pillCategory: 'Generative AI',
    subheading: 'GENERATIVE AI & AGENTS',
    title: 'LLM Agents & Automation',
    ghostTitle: 'GEN AI',
    description:
      'I build Generative AI features with LLMs and LangGraph agents, such as a pipeline that turns chat conversations into validated, deployable integration flows. Where a deterministic generator does the job, I use that instead to keep cost and build time down.',
    tags: ['LLMs', 'LangGraph', 'RAG', 'Prompt Engineering'],
    imageSrc:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
    imageAlt:
      'Developer workspace with multiple screens',
  },
  {
    id: 'cloud-devops-security',
    number: '04',
    pillCategory: 'Cloud & DevOps',
    subheading: 'CLOUD, DEVOPS & SECURITY',
    title: 'Azure Infrastructure & Delivery',
    ghostTitle: 'CLOUD',
    description:
      'I take platforms into production on Microsoft Azure with Infrastructure as Code (Bicep), Kubernetes and Helm, and CI/CD pipelines with release gates. Security is part of the build: Keycloak single sign-on, role-based access control and Azure Key Vault.',
    tags: ['Microsoft Azure', 'Kubernetes', 'Bicep (IaC)', 'CI/CD'],
    imageSrc:
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop',
    imageAlt:
      'Cloud deployment, DevOps production infrastructure, and performance monitoring',
  },
];

