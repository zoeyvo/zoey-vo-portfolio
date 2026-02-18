function ArchiveMedia() {
  const mediaItems = [
    {
      src: "../assets/images/media/collage.jpeg",
    },
    {
      src: "https://www.youtube.com/watch?v=RiwEzF3DsGk",
    },
  ];

  return (
    <div className="grid-cell">
      <div className="content">
        <span className="title">~/archive/media</span>
        <div>
          <br />
        </div>
        <div className="media-list">
          {mediaItems.map((item, idx) => (
            <div className="media-item terminal-glow-border" key={idx}>
              <div>
                {item.src}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArchiveMedia;
