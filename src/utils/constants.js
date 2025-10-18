// Application constants
export const TERMINAL_OPTIONS = [
  { label: "bio", display: "bio" },
  { label: "resume", display: "resume" },
  { label: "archive", display: "archive" },
];

export const ARCHIVE_SECTIONS = [
  "cardgames",
  "recipes",
  "media",
  "notes",
  "bookmarks",
];

export const LOADING_MSG = "loading...";

// Simple asset URL helper for Vite
export const getAssetUrl = (path) => {
  return import.meta.env.BASE_URL + path;
};
