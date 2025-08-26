import React from "react";

function ArchiveMedia() {
  const mediaItems = [
    {
      type: "video",
      src: "https://www.youtube.com/embed/RiwEzF3DsGk",
      caption: "jrjrjr!"
    },
    {
      type: "video",
      src: "https://www.youtube.com/watch?v=UNYqwpx7Cys",
      caption: "*music*"
    },
    {
      type: "movie",
      src: "https://www.imdb.com/title/tt15574270",
      caption: "the tv glows!"
    },
  ];

  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~/archive/media</span>
        <div className="archive-media-list">
          {mediaItems.map((item, idx) => (
            <div className="media-entry" key={idx}>
              {item.type === "video" ? (
                <div className="media-video terminal-glow-border">
                  <iframe
                    width="100%"
                    height="315"
                    src={item.src}
                    title={item.caption}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : item.type === "movie" ? (
                <div className="media-movie terminal-glow-border">
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono"
                  >
                    🎬 {item.caption}
                  </a>
                </div>
              ) : (
                <div className="media-image terminal-glow-border">
                  <img src={item.src} alt={item.caption} style={{ maxWidth: "100%" }} />
                </div>
              )}
              <div className="media-caption mono">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArchiveMedia;
