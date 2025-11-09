import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Archive({ playSwap }) {
  const navigate = useNavigate();

  // Ensure font is loaded to reduce browser warnings
  useEffect(() => {
    if (document.fonts && document.fonts.load) {
      document.fonts.load("1rem Typewriter").catch(() => {});
    }
  }, []);

  const archiveItems = [
    { name: "notes", description: "stream of concisousness" },
    { name: "bookmarks", description: "good links and resources" },
    { name: "cardgames", description: "card games i like" },
    { name: "media", description: "media i resonate with" },
    { name: "recipes", description: "favorite foods to make and consume" },
  ];

  const handleItemClick = (item) => {
    if (playSwap) playSwap();
    navigate(`/archive/${item}`);
  };

  return (
    <div className="grid-cell cell1">
      <div className="content">
        <span className="title">~/archive</span>{" "}
        <div className="grid">
          {archiveItems.map((item) => (
            <div
              key={item.name}
              className="item section-item"
              onClick={() => handleItemClick(item.name)}
              onMouseDown={playSwap}
            >
              <div className="item-header">
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
