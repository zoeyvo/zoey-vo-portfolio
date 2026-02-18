import {
  Root,
  Bio,
  Resume,
  Love,
  Archive,
} from "../pages";
import ArchiveSection from "../pages/ArchiveSection";

/**
 * Route configuration for the application.
 * Defines main routes accessible from PageLayout.
 * Used to reduce duplication in the routing setup.
 */
export const layoutRoutes = [
  {
    path: "/root",
    label: "root",
    component: Root,
  },
  {
    path: "/bio",
    label: "bio",
    component: Bio,
  },
  {
    path: "/resume",
    label: "resume",
    component: Resume,
  },
  {
    path: "/love",
    label: "love",
    component: Love,
  },
  {
    path: "/archive",
    label: "archive",
    component: Archive,
  },
  {
    path: "/archive/:section",
    label: "archive-section",
    component: ArchiveSection,
  },
];

/**
 * Archive section names that can be navigated to via /archive/:section
 */
export const archiveSections = ["cardgames", "guides", "media", "notes", "bookmarks"];
