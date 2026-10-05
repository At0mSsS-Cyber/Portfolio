import type {
  ContributionDay,
  ContributionWeek,
  ContributionsData,
} from '@/lib/github/fetchContributions';
import type { SerializedExperience } from '@/lib/validations/experience.schema';
import type { SerializedProject } from '@/lib/validations/project.schema';
import type { SerializedTechnology } from '@/lib/validations/technology.schema';
import { offlineExperiences, offlineProjects, offlineTechnologies } from './content';

/**
 * Offline Mode
 *
 * Active whenever DATABASE_URL is not configured. The public pages then read from
 * ./content.ts instead of MongoDB, so the site runs with no external services.
 * The admin panel still needs the database and auth variables from `.env.example`.
 */
export const isOfflineMode = !process.env.DATABASE_URL;

/**
 * Offline mode on a local dev server. Gates the stand-ins that must never reach a
 * deployed site: the sample GitHub calendar and the contact form's logged "send".
 */
export const isOfflineDev = isOfflineMode && process.env.NODE_ENV !== 'production';

if (isOfflineMode) {
  console.info(
    '[Offline Mode] DATABASE_URL is not set. Serving local content from lib/offline/content.ts.'
  );
}

export function getOfflineExperiences(limit?: number): SerializedExperience[] {
  const sorted = [...offlineExperiences].sort((a, b) => a.order - b.order);
  return limit ? sorted.slice(0, limit) : sorted;
}

export function getOfflineTechnologies(): SerializedTechnology[] {
  return [...offlineTechnologies].sort(
    (a, b) => a.order - b.order || a.name.localeCompare(b.name)
  );
}

export function getOfflineProjects(filters?: {
  category?: string;
  featured?: boolean;
  includeUnpublished?: boolean;
}): SerializedProject[] {
  return offlineProjects
    .filter((project) => filters?.includeUnpublished || project.published)
    .filter(
      (project) =>
        !filters?.category || filters.category === 'all' || project.category === filters.category
    )
    .filter((project) => filters?.featured === undefined || project.featured === filters.featured)
    .sort((a, b) => a.order - b.order);
}

const DAY_MS = 24 * 60 * 60 * 1000;

/** Stable pseudo-random value in [0, 1) derived from a date string. */
function seededUnit(seed: string): number {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    hash = Math.imul(hash ^ seed.charCodeAt(i), 16777619);
  }
  hash ^= hash >>> 13;
  hash = Math.imul(hash, 0x5bd1e995);
  hash ^= hash >>> 15;
  return (hash >>> 0) / 4294967296;
}

function sampleDay(date: string, isFuture: boolean): ContributionDay {
  const roll = isFuture ? 0 : seededUnit(date);
  let count = 0;
  let level: ContributionDay['level'] = 'NONE';

  if (roll >= 0.95) {
    count = 10 + Math.floor(roll * 100) % 5;
    level = 'FOURTH_QUARTILE';
  } else if (roll >= 0.85) {
    count = 6 + Math.floor(roll * 100) % 4;
    level = 'THIRD_QUARTILE';
  } else if (roll >= 0.65) {
    count = 3 + Math.floor(roll * 100) % 3;
    level = 'SECOND_QUARTILE';
  } else if (roll >= 0.35) {
    count = 1 + Math.floor(roll * 100) % 2;
    level = 'FIRST_QUARTILE';
  }

  return { date, count, color: '', level };
}

/**
 * Deterministic sample contribution calendar for the GitHub Activity section.
 * Mirrors the GitHub API shape: Sunday-started weeks spanning the given calendar
 * year, or running from the Sunday of the week one year ago up to today when no
 * year is passed.
 */
export function getSampleContributions(year?: number): ContributionsData {
  const now = new Date();
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const yearAgo = Date.UTC(now.getUTCFullYear() - 1, now.getUTCMonth(), now.getUTCDate());
  const end = year ? Date.UTC(year, 11, 31) : today;
  const start = year ? Date.UTC(year, 0, 1) : yearAgo - new Date(yearAgo).getUTCDay() * DAY_MS;

  const weeks: ContributionWeek[] = [];
  let totalContributions = 0;

  for (let time = start; time <= end; time += DAY_MS) {
    const date = new Date(time);
    if (weeks.length === 0 || date.getUTCDay() === 0) {
      weeks.push({ days: [] });
    }

    const day = sampleDay(date.toISOString().slice(0, 10), time > today);
    totalContributions += day.count;
    weeks[weeks.length - 1].days.push(day);
  }

  return { totalContributions, weeks };
}
