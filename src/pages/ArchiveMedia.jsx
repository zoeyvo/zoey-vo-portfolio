import React from "react";

function ArchiveMedia() {
  const mediaItems = [
    {
      type: "video",
      src: "https://www.youtube.com/watch?v=RiwEzF3DsGk",
      caption: "jrjrjr!!!"
    },
    {
      type: "video",
      src: "https://www.youtube.com/watch?v=UNYqwpx7Cys",
      caption: "music"
    }
  ];

  // Convert YouTube links into proper embed URLs with autoplay=0
  const formatYouTubeUrl = (url) => {
    const match = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]+)/);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=0`;
    }
    return url;
  };

  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~/archive/media</span>
        <div className="archive-media-list">
          {mediaItems.map((item, idx) => (
            <div className="media-video" key={idx}>
              {item.type === "video" ? (
                <div className="media-video terminal-glow-border">
                  <iframe
                    width="100%"
                    height="315"
                    src={formatYouTubeUrl(item.src)}
                    title={item.caption}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="media-image terminal-glow-border">
                  <img
                    src={item.src}
                    alt={item.caption}
                    style={{ maxWidth: "100%" }}
                  />
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
