import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Archive() {
  const navigate = useNavigate();

  // Ensure font is loaded to reduce browser warnings
  useEffect(() => {
    if (document.fonts && document.fonts.load) {
      document.fonts.load("1rem Typewriter").catch(() => {});
    }
  }, []);

  const archiveItems = [
    { name: "guides", description: "anecdotal how to's" },
    { name: "notes", description: "stream of concisousness" },
    { name: "bookmarks", description: "resources & information" },
    { name: "media", description: "shit i fuck with" },
    { name: "cardgames", description: "learned card games" },
  ];

  const handleItemClick = (item) => {
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
