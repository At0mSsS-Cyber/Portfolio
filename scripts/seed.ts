import connectDB from '../lib/db/connect';
import Experience from '../models/Experience.model';
import Project from '../models/Project.model';
import Technology from '../models/Technology.model';
import SiteSettings from '../models/SiteSettings.model';
import { siteConfig } from '../config/site.config';
import { SEO_DEFAULTS } from '../constants/seo-defaults';
import { SOCIAL_LINKS } from '../constants/social-links';
import { offlineExperiences, offlineProjects, offlineTechnologies } from '../lib/offline/content';

/** Drops the offline-only id and timestamps so MongoDB assigns its own. */
function toDocument<T extends { _id: string; createdAt: string; updatedAt: string }>(entry: T) {
  const { _id, createdAt, updatedAt, ...fields } = entry;
  return fields;
}

/**
 * Seeds MongoDB with the same content the site shows in offline mode
 * (lib/offline/content.ts), so switching to a database changes nothing on the pages.
 * Existing Experience, Technology, Project and SiteSettings documents are replaced.
 */
async function seed() {
  console.log('Connecting to MongoDB...');
  await connectDB();
  console.log('Connected to MongoDB.');

  // 1. Seed Experience
  console.log('Seeding Experience documents...');
  await Experience.deleteMany({});
  const experiences = await Experience.create(offlineExperiences.map(toDocument));
  console.log(`Seeded ${experiences.length} Experience documents.`);

  // 2. Seed Technology
  console.log('Seeding Technology documents...');
  await Technology.deleteMany({});
  const technologies = await Technology.create(offlineTechnologies.map(toDocument));
  console.log(`Seeded ${technologies.length} Technology documents.`);

  // 3. Seed Project
  console.log('Seeding Project documents...');
  await Project.deleteMany({});
  const projects = await Project.create(offlineProjects.map(toDocument));
  console.log(`Seeded ${projects.length} Project documents.`);

  // 4. Seed SiteSettings
  console.log('Seeding SiteSettings singleton...');
  await SiteSettings.deleteMany({});
  const settings = await SiteSettings.create({
    resumeUrl: new URL(siteConfig.links.resume, siteConfig.url).toString(),
    contactEmail: siteConfig.contact.email,
    availableForWork: true,
    socialLinks: SOCIAL_LINKS.filter((link) => link.platform !== 'Email').map(({ platform, url }) => ({
      platform,
      url,
    })),
    seoDefaults: {
      title: SEO_DEFAULTS.title,
      description: SEO_DEFAULTS.description,
      ogImage: new URL(SEO_DEFAULTS.ogImage, siteConfig.url).toString(),
    },
  });
  console.log(`Seeded SiteSettings singleton document (ID: ${settings._id}).`);

  console.log('Database seeding complete successfully!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Error seeding database:', err);
  process.exit(1);
});
