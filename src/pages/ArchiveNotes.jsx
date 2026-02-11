function ArchiveNotes() {
  const notes = [
    {
      date: "2026-01-16",
      title: "note 35",
      content: "REJECT FACISM",
    },
    {
      date: "2026-01-07",
      title: "note 34",
      content: "V3 ✓",
    },
    {
      date: "2026-01-01",
      title: "note 33",
      content: "yurimaxxing",
    },
    {
      date: "2025-12-14",
      title: "note 32",
      content: "V2 ✓",
    },
    {
      date: "2025-12-2",
      title: "note 31",
      content: "I LOVE PROGESTERONE",
    },
    {
      date: "2025-11-29",
      title: "note 30",
      content: "pulled gardevoir SAR at card show",
    },
    {
      date: "2025-11-23",
      title: "note 29",
      content: "V1 ✓",
    },
    {
      date: "2025-11-20",
      title: "note 28",
      content: "3.5 years together ❤",
    },
    {
      date: "2025-11-15",
      title: "note 27",
      content: "V0 ✓",
    },
    {
      date: "2025-11-08",
      title: "note 26",
      content: "climbed @ sessions",
    },
    {
      date: "2025-11-06",
      title: "note 25",
      content: "favorite pokemon",
      images: [
        "../assets/images/pokemon/mew.png",
        "../assets/images/pokemon/hzorua.png",
        "../assets/images/pokemon/slowpoke.png",
      ],
    },
    {
      date: "2025-11-04",
      title: "note 24",
      content: "employed, hooray!",
    },
    {
      date: "2025-10-16",
      title: "note 23",
      content: "'alleged misandrist'",
    },
    {
      date: "2025-10-10",
      title: "note 22",
      content: "thousand yard stare",
    },
    {
      date: "2025-10-06",
      title: "note 21",
      content: "they are bogarting it all",
    },
    {
      date: "2025-09-29",
      title: "note 20",
      content: "when does perspective become delusion",
    },
    {
      date: "2025-09-22",
      title: "note 19",
      content: "the state of political discourse is unbelievable",
    },
    {
      date: "2025-09-15",
      title: "note 18",
      content: "place a kalshi bet on my rights",
    },
    {
      date: "2025-09-08",
      title: "note 17",
      content: "FREE PALESTINE",
    },
    {
      date: "2025-09-01",
      title: "note 16",
      content: "ABOLISH ICE",
    },
    {
      date: "2025-08-28",
      title: "note 15",
      content: "PROTECT THE DOLLS",
    },
    {
      date: "2025-08-25",
      title: "note 14",
      content: "smile thru it all",
    },
    {
      date: "2025-08-23",
      title: "note 13",
      content: "i love pokemon cards so much",
    },
    {
      date: "2025-08-22",
      title: "note 12",
      content: "i have no mouth and i must scream",
    },
    {
      date: "2025-08-21",
      title: "note 11",
      content: "wlw ftw",
    },
    {
      date: "2025-08-18",
      title: "note 10",
      content: "all this buttoning and unbuttoning",
    },
    {
      date: "2025-08-17",
      title: "note 9",
      content: "hashtag clocky tgirl #fembossqween",
    },
    {
      date: "2025-08-10",
      title: "note 8",
      content: "when will they realize its already happening",
    },
    {
      date: "2025-08-09",
      title: "note 7",
      content: "tragic yuri <3",
    },
    {
      date: "2025-08-08",
      title: "note 6",
      content: "FREE PALESTINE",
    },
    {
      date: "2025-08-07",
      title: "note 5",
      content: "protect children (they are actively harming the children)",
    },
    {
      date: "2025-08-01",
      title: "note 4",
      content: "hashtag graduted early into chaos wtf is even happening",
    },
    {
      date: "2025-06-14",
      title: "note 3",
      content: "goodluck trans queens and kings",
    },
    {
      date: "2025-06-05",
      title: "note 2",
      content: "dr i need my red 40 and ozempic stat",
    },
    {
      date: "2025-06-01",
      title: "note 1",
      content: "hello <3",
    },
  ];

  return (
    <div className="grid-cell">
      <div className="content">
        <span className="title">~/archive/notes</span>
        <div>
          <br />
        </div>
        {[...notes]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((note, index) => (
            <div key={index} className="note-item">
              <p className="note-date">[{note.date}]</p>
              <p className="note-content">{note.content}</p>
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
              <hr />
            </div>
          ))}
      </div>
      <div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default ArchiveNotes;
