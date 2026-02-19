// Application constants
export const TERMINAL_OPTIONS = [
  { label: "bio", display: "bio" },
  { label: "archive", display: "archive" },
];

export const ARCHIVE_SECTIONS = [
  "cardgames",
  "guides",
  "media",
  "notes",
  "bookmarks",
];

export const LOADING_MSG = "loading...";

// Simple asset URL helper for Vite
export const getAssetUrl = (path) => {
  // Ensure we return an absolute path from the site root so assets
  // resolve correctly when navigating directly to a nested route.
  let base = import.meta.env.BASE_URL || "/";

  // If project is built with a relative base like './', fallback to root
  if (base.startsWith("./")) base = "/";

  if (!base.endsWith("/")) base = base + "/";

  return base + path.replace(/^\/+/, "");
};
