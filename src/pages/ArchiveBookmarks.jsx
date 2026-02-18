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
      title: "Voice Training Tool",
    },
    {
      url: "https://mydoctor.kaiserpermanente.org/ncal/structured-content/hormone-therapy-with-estrogen-and-androgen-blockers-1123088",
      title: "Trans HRT Guide",
    },
    {
      url: "https://learngitbranching.js.org/",
      title: "Learn Git Branching",
    },
    {
      url: "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
      title: "Algorithm Visualizations",
    },
  ];

  return (
    <div className="grid-cell">
      <div className="content">
        <span className="title">~/archive/bookmarks</span>
        {bookmarks.map((bookmark, linkIndex) => (
          <div key={linkIndex}>
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArchiveBookmarks;
