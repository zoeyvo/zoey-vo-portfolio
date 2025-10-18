// Root.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Root({ playSwap }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (document.fonts && document.fonts.load) {
      document.fonts.load("1rem Typewriter").catch(() => {});
    }
  }, []);

  const rootItems = [
    { name: "bio", description: "about me" },
    { name: "resume", description: "my skills and experience" },
    { name: "archive", description: "content i resonate with" },
  ];

  const handleItemClick = (item) => {
    if (playSwap) playSwap();
    navigate(`/${item}`);
  };

  return (
    <div className="grid-cell">
      <div className="content">
        <span className="title">~./</span>
        <div className="grid">
          {rootItems.map((item) => (
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

export default Root;
