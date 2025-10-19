import { useState, useEffect } from "react";

function LoveNotes() {
  const [elapsed, setElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const notes = [
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

      // Calendar-based years and months
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();

      if (now.getDate() < startDate.getDate()) {
        months--;
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      // Anchor date for day/hour/minute/second calculation
      const monthAnchor = new Date(
        startDate.getFullYear() + years,
        startDate.getMonth() + months,
        startDate.getDate(),
        startDate.getHours(),
        startDate.getMinutes(),
        startDate.getSeconds()
      );

      const diffMs = now - monthAnchor;

      // Break down remaining time
      const totalSeconds = Math.floor(diffMs / 1000);
      const seconds = totalSeconds % 60;

      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;

      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;

      const totalDays = Math.floor(totalHours / 24);
      const days = totalDays;

      setElapsed({ years, months, days, hours, minutes, seconds });
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
            <div>
              {elapsed.years} years, {elapsed.months} months, {elapsed.days}{" "}
              days
              <br />
              {elapsed.hours} hours, {elapsed.minutes} minutes,{" "}
              {elapsed.seconds} seconds
            </div>
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
