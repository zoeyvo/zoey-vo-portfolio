// Archive.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Archive({ playSwap }) {
  const navigate = useNavigate();

  // Ensure font is loaded to reduce browser warnings
  useEffect(() => {
    if (document.fonts && document.fonts.load) {
      document.fonts.load('1rem Typewriter').catch(() => {
        // Font loading failed, fallback will be used
      });
    }
  }, []);

  const archiveItems = [
    { name: "bookmarks", description: "good links and resources" },
    { name: "cardgames", description: "card games i like" },
    { name: "recipes", description: "favorite foods to make and consume" },
    { name: "media", description: "media i resonate with" },
    { name: "notes", description: "stream of concisousness" }
  ];

  const handleItemClick = (item) => {
    if (playSwap) playSwap();
    navigate(`/archive/${item}`);
  };

  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~/archive</span>        <div className="archive-grid">
          {archiveItems.map((item) => (
            <div 
              key={item.name}
              className="archive-item archive-section-item"
              onClick={() => handleItemClick(item.name)}
              onMouseDown={playSwap}
            >
              <div className="archive-item-header">
                <span className="cmd">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Archive;
