function ArchiveNotes() {
  const notes = [
    {
      date: "2026-02-11",
      message: "V4 ✓",
    },
    {
      date: "2026-01-16",
      message: "REJECT FACISM",
    },
    {
      date: "2026-01-07",
      message: "V3 ✓",
    },
    {
      date: "2026-01-01",
      message: "yurimaxxing",
    },
    {
      date: "2025-12-14",
      message: "V2 ✓",
    },
    {
      date: "2025-12-2",
      message: "I LOVE PROGESTERONE",
    },
    {
      date: "2025-11-29",
      message: "pulled gardevoir SAR at card show",
    },
    {
      date: "2025-11-23",
      message: "V1 ✓",
    },
    {
      date: "2025-11-20",
      message: "3.5 years together ❤",
    },
    {
      date: "2025-11-15",
      message: "V0 ✓",
    },
    {
      date: "2025-11-08",
      message: "climbed @ sessions",
    },
    {
      date: "2025-11-06",
      message: "favorite pokemon",
      images: [
        "/assets/images/notes/mew.png",
        "/assets/images/notes/hzorua.png",
        "/assets/images/notes/slowpoke.png",
      ],
    },
    {
      date: "2025-11-04",
      message: "employed, hooray!",
    },
    {
      date: "2025-10-16",
      message: "'alleged misandrist'",
    },
    {
      date: "2025-10-10",
      message: "thousand yard stare",
    },
    {
      date: "2025-10-06",
      message: "they are bogarting it all",
    },
    {
      date: "2025-09-29",
      message: "when does perspective become delusion",
    },
    {
      date: "2025-09-22",
      message: "the state of political discourse is unbelievable",
    },
    {
      date: "2025-09-15",
      message: "place a kalshi bet on my rights",
    },
    {
      date: "2025-09-08",
      message: "FREE PALESTINE",
    },
    {
      date: "2025-09-01",
      message: "ABOLISH ICE",
    },
    {
      date: "2025-08-28",
      message: "PROTECT THE DOLLS",
    },
    {
      date: "2025-08-25",
      message: "smile thru it all",
    },
    {
      date: "2025-08-23",
      message: "i love pokemon cards so much",
    },
    {
      date: "2025-08-22",
      message: "i have no mouth and i must scream",
    },
    {
      date: "2025-08-21",
      message: "wlw ftw",
    },
    {
      date: "2025-08-18",
      message: "all this buttoning and unbuttoning",
    },
    {
      date: "2025-08-17",
      message: "hashtag clocky tgirl #fembossqween",
    },
    {
      date: "2025-08-10",
      message: "when will they realize its already happening",
    },
    {
      date: "2025-08-09",
      message: "tragic yuri <3",
    },
    {
      date: "2025-08-08",
      message: "FREE PALESTINE",
    },
    {
      date: "2025-08-07",
      message: "protect children (they are actively harming the children)",
    },
    {
      date: "2025-08-01",
      message: "hashtag graduted early into chaos wtf is even happening",
    },
    {
      date: "2025-06-14",
      message: "goodluck trans queens and kings",
    },
    {
      date: "2025-06-05",
      message: "dr i need my red 40 and ozempic stat",
    },
    {
      date: "2025-06-01",
      message: "hello <3",
    },
  ];

  return (
    <div className="grid-cell">
      <div className="content">
        <span className="title">~/archive/notes</span>
        {(() => {
          const sortedNotes = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));
          return sortedNotes.map((note, index) => (
            <div 
              key={index} 
              className={`note-item ${index === sortedNotes.length - 1 ? 'note-item-last' : ''}`}
            >
              <span className="note-date">[{note.date}]</span>
              <br />
              <span className="note-message">{note.message}</span>
              {note.images && (
                <div className="note-images">
                  {note.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`note ${index} img ${i}`}
                      className="note-img"
                    />
                  ))}
                </div>
              )}
            </div>
          ));
        })()}
      </div>
    </div>
  );
}

export default ArchiveNotes;
