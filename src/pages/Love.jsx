import { useState, useEffect } from "react";

function LoveNotes() {
  const [detailedElapsed, setDetailedElapsed] = useState("");

  const notes = [
    {
      date: "2025-2-14",
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

      // Calculate total units
      const diffSeconds = Math.floor(diffMs / 1000);
      const diffMinutes = Math.floor(diffSeconds / 60);
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);

      // For detailed breakdown, create a human-readable string
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
        <div>
          <br />
        </div>

        <div className="item" style={{ color: "pink" }}>
          <div className="note-header">
            <div>{detailedElapsed}</div>
          </div>
          <br />
          <hr />
        </div>

        {notes.map((note, index) => (
          <div key={index} className="item">
            <div className="note-header">
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
