function LoveNotes() {
  const notes = [
    {
      date: "2025-10-18",
      title: "note 1",
      content: "i love you ardently <3",
    },
  ];

  return (
    <div className="grid-cell">
      <div className="content">
        <span className="title">~/love</span>
        <div>
          <br />
        </div>
        {notes.map((note, index) => (
          <div key={index} className="item" style={{ textAlign: "center" }}>
            <div
              className="note-header"
              style={{ justifyContent: "center", textAlign: "center" }}
            >
              <span className="note-content">{note.content}</span> <br />
              <span className="note-date">[{note.date}]</span>
            </div>
            <br />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoveNotes;
