import { useParams, Navigate } from "react-router-dom";
import ArchiveCardGames from "./ArchiveCardGames";
import ArchiveGuides from "./ArchiveGuides";
import ArchiveMedia from "./ArchiveMedia";
import ArchiveNotes from "./ArchiveNotes";
import ArchiveBookmarks from "./ArchiveBookmarks";

/**
 * Dynamic archive section router.
 * Maps URL params to the appropriate archive component.
 * Usage: /archive/:section renders the correct archive based on the section param.
 */
function ArchiveSection() {
  const { section } = useParams();

  const archiveComponents = {
    cardgames: ArchiveCardGames,
    guides: ArchiveGuides,
    media: ArchiveMedia,
    notes: ArchiveNotes,
    bookmarks: ArchiveBookmarks,
  };

  const ArchiveComponent = archiveComponents[section];

  // Redirect to /archive if invalid section
  if (!ArchiveComponent) {
    return <Navigate to="/archive" replace />;
  }

  return <ArchiveComponent />;
}

export default ArchiveSection;
