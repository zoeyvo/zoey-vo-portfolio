import { useState, useEffect } from "react";

function LoveNotes() {
  const [detailedElapsed, setDetailedElapsed] = useState("");

  const notes = [
    {
      date: "2026-5-20",
      title: "note 4",
      content: "FOUR YEARS TOGETHER!!!\ni want to hold you forever <3",
    },
    {
      date: "2026-2-14",
      title: "note 3",
      content: "HAPPY VALENTINE'S DAY!!!",
    },
    {
      date: "2025-12-06",
      title: "note 2",
      content: "have the happiest of birthdays my love ❤",
    },
    {
      date: "2025-10-18",
      title: "note 1",
      content: "i love you ardently <3",
    },
  ];

  useEffect(() => {
    const startDate = new Date("2022-05-20T23:25:00");

    const calculateElapsed = () => {
      const now = new Date();
      const diffMs = now - startDate;

      const diffSeconds = Math.floor(diffMs / 1000);
      const diffMinutes = Math.floor(diffSeconds / 60);
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);

      const years = Math.floor(diffDays / 365.25);
      const months = Math.floor((diffDays % 365.25) / 30.44);
      const days = Math.floor((diffDays % 365.25) % 30.44);
      const hours = diffHours % 24;
      const minutes = diffMinutes % 60;
      const seconds = diffSeconds % 60;

      const parts = [];
      if (years > 0) parts.push(`${years} year${years !== 1 ? "s" : ""}`);
      if (months > 0) parts.push(`${months} month${months !== 1 ? "s" : ""}`);
      if (days > 0) parts.push(`${days} day${days !== 1 ? "s" : ""}`);
      if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
      if (minutes > 0)
        parts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
      if (seconds > 0)
        parts.push(`${seconds} second${seconds !== 1 ? "s" : ""}`);

      setDetailedElapsed(parts.join(", "));
    };

    calculateElapsed();
    const interval = setInterval(calculateElapsed, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid-cell">
      <div className="content">
        <span className="title">~/love</span>

        {/* Elapsed header rendered as a note-item for consistent styling */}
        <div className="note-item" style={{ color: "pink" }}>
          <span className="note-date">&nbsp;</span>
          <br />
          <span className="note-message">{detailedElapsed}</span>
        </div>

        {(() => {
          const parseDate = (s) => {
            if (!s) return new Date(0);
            const parts = String(s).split(/[^0-9]+/).map(Number);
            const [y = 0, m = 1, d = 1] = parts;
            return new Date(y, m - 1, d);
          };

          const sortedNotes = [...notes].sort((a, b) => parseDate(b.date) - parseDate(a.date));
          return sortedNotes.map((note, index) => (
            <div
              key={index}
              className={`note-item ${index === sortedNotes.length - 1 ? 'note-item-last' : ''}`}
            >
              <span className="note-date">[{note.date}]</span>
              <br />
              <span className="note-message">{note.content}</span>
            </div>
          ));
        })()}
      </div>
    </div>
  );
}

export default LoveNotes;
