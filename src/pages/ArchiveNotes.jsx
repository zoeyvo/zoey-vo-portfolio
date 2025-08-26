// ArchiveNotes.jsx
import React from "react";

function ArchiveNotes() {
  const notes = [
    {
    date: "2025.06.01",
    title: "1",
    content: "hello <3",
    },
    {
    date: "2025.06.05",
    title: "2",
    content: "dr i need my red 40 and ozempic stat",
    },
    {
    date: "2025.06.14",
    title: "3",
    content: "goodluck trans queens and kings",
    },
    {
    date: "2025.08.01",
    title: "5",
    content: "hashtag graduted early into chaos wtf is even happening",
    },
    {
    date: "2025.08.07",
    title: "6",
    content: "protect children (they are actively harming the children)",
    },
    {
    date: "2025.08.08",
    title: "7",
    content: "FREE PALESTINE",
    },
    {
    date: "2025.08.09",
    title: "8",
    content: "tragic yuri <3",
    },
    {
    date: "2025.08.10",
    title: "9",
    content: "when will they realize its already happening",
    },
    {
    date: "2025.08.17",
    title: "10",
    content: "hashtag clocky tgirl #fembossqween",
    },
    {
    date: "2025.08.18",
    title: "11",
    content: "all this buttoning and unbuttoning",
    },
    {
    date: "2025.08.21",
    title: "12",
    content: "wlw ftw",
    },
    {
    date: "2025.08.22",
    title: "13",
    content: "i have no mouth and i must scream",
    },
    {
    date: "2025.08.23",
    title: "14",
    content: "i love pokemon cards",
    },
    {
    date: "2025.08.25",
    title: "16",
    content: "smile thru it all",
    }
  ];
  
  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~/archive/notes</span>

        {notes.map((note, index) => (
          <div key={index} className="archive-item" style={{ textAlign: "center" }}>
            <div className="note-header" style={{ justifyContent: "center", textAlign: "center" }}>
              <span className="note-content">{note.content}</span>{" "}
              <span className="note-date">[{note.date}]</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArchiveNotes;
