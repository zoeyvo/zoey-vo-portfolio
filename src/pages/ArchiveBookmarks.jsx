// ArchiveBookmarks.jsx
import React from "react";

function ArchiveBookmarks() {
  const bookmarks = [
    {
      url: "https://bdsmovement.net/Act-Now-Against-These-Companies-Profiting-From-Genocide",
      title: "BDS Boycott List",
    },
    {
      url: "https://www.healpalestine.org/",
      title: "Heal Palestine",
    },
    {
      url: "https://justice4palestinians.org/history-timeline/",
      title: "Palestinian Genocide Timeline",
    },
    {
      url: "https://acousticgender.space/",
      title: "voice training tool",
    },
    {
      url: "https://mydoctor.kaiserpermanente.org/ncal/structured-content/hormone-therapy-with-estrogen-and-androgen-blockers-1123088",
      title: "trans hormone therapy guide",
    },
    {
      url: "https://learngitbranching.js.org/",
      title: "learn git branching",
    },
    {
      url: "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
      title: "algorithm visualizations",
    },
  ];

  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~/archive/bookmarks</span>
        <div className="archive-item">
          <div className="bookmark-links">
            {bookmarks.map((bookmark, linkIndex) => (
              <div key={linkIndex} className="bookmark-link">
                <a
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-name mono"
                >
                  {bookmark.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveBookmarks;
