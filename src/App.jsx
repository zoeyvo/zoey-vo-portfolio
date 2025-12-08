// ==========================================
// FILE: src/App.jsx (MAIN FILE - SIMPLIFIED)
// ==========================================
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { CursorTrail, CustomCursor, PageLayout } from "./components";
import {
  Root,
  Bio,
  Resume,
  Love,
  Archive,
  ArchiveCardGames,
  ArchiveGuides,
  ArchiveMedia,
  ArchiveNotes,
  ArchiveBookmarks,
} from "./pages";
import { Terminal } from "./components/Terminal/Terminal";
import { MuteButton } from "./components/MuteButton";
import { useTerminal } from "./hooks/useTerminal";
import { useAudio } from "./hooks/useAudio";
import { useCursorEnlargeOnClick } from "./hooks";
import "./styles/App.scss";

function App() {
  const [entered, setEntered] = useState(false);
  const navigate = useNavigate();
  const terminal = useTerminal();
  const audio = useAudio(entered);

  useCursorEnlargeOnClick();

  // Handle GitHub Pages SPA routing redirect
  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
      sessionStorage.removeItem("redirect");
      navigate("/" + redirect, { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <CustomCursor />
      <MuteButton isMuted={audio.isMuted} onToggle={audio.toggleMute} />

      <audio ref={audio.phwipRef} src="/assets/audio/swap.mp3" preload="auto" />
      <audio
        ref={audio.musicRef}
        src="/assets/audio/within.mp3"
        preload="auto"
        loop
        style={{ display: "none" }}
      />
      <audio
        ref={audio.windRef}
        src="/assets/audio/wind.mp3"
        loop
        autoPlay
        style={{ display: "none" }}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div className="root">
              <CursorTrail />
              <header className="header"></header>
              <div className="grid-cell">
                <div className="row1" />
                <div className="row2">
                  {!entered && (
                    <>
                      <img
                        className="lain-img"
                        src="/assets/images/lain.gif"
                        alt="Lain"
                      />
                      <button
                        className="enter-btn"
                        onMouseDown={audio.playSwap}
                        onClick={() => setEntered(true)}
                      >
                        [enter]
                      </button>
                    </>
                  )}

                  {entered && (
                    <Terminal
                      terminalState={terminal.state}
                      inputRef={terminal.inputRef}
                      terminalInnerRef={terminal.terminalInnerRef}
                      onInput={terminal.handleInput}
                      onKeyDown={terminal.handleKeyDown}
                    />
                  )}
                </div>
                <div className="row3" />
              </div>

              <footer className="footer">
                <span>
                  <a
                    href="https://github.com/zoeyvo"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={audio.playSwap}
                  >
                    github.com/zoeyvo
                  </a>
                  {" | "}
                  <a
                    href="https://www.linkedin.com/in/zoeyvo"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={audio.playSwap}
                  >
                    linkedin.com/in/zoeyvo
                  </a>
                  {" | "}
                  <span className="footer-email" title="Email (obfuscated)">
                    <a
                      href="https://mail.google.com/mail/?view=cm&to=zoeyvo256@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={audio.playSwap}
                    >
                      zoeyvo256<span className="at-symbol">@</span>gmail.com
                    </a>
                  </span>
                </span>
              </footer>
            </div>
          }
        />

        <Route
          path="/root"
          element={
            <PageLayout playSwap={audio.playSwap}>
              <Root playSwap={audio.playSwap} />
            </PageLayout>
          }
        />
        <Route
          path="/bio"
          element={
            <PageLayout playSwap={audio.playSwap}>
              <Bio />
            </PageLayout>
          }
        />
        <Route
          path="/resume"
          element={
            <PageLayout playSwap={audio.playSwap}>
              <Resume />
            </PageLayout>
          }
        />
        <Route
          path="/love"
          element={
            <PageLayout playSwap={audio.playSwap}>
              <Love />
            </PageLayout>
          }
        />
        <Route
          path="/archive"
          element={
            <PageLayout playSwap={audio.playSwap}>
              <Archive playSwap={audio.playSwap} />
            </PageLayout>
          }
        />
        <Route
          path="/archive/cardgames"
          element={
            <PageLayout playSwap={audio.playSwap}>
              <ArchiveCardGames />
            </PageLayout>
          }
        />
        <Route
          path="/archive/guides"
          element={
            <PageLayout playSwap={audio.playSwap}>
              <ArchiveGuides />
            </PageLayout>
          }
        />
        <Route
          path="/archive/media"
          element={
            <PageLayout playSwap={audio.playSwap}>
              <ArchiveMedia />
            </PageLayout>
          }
        />
        <Route
          path="/archive/notes"
          element={
            <PageLayout playSwap={audio.playSwap}>
              <ArchiveNotes />
            </PageLayout>
          }
        />
        <Route
          path="/archive/bookmarks"
          element={
            <PageLayout playSwap={audio.playSwap}>
              <ArchiveBookmarks />
            </PageLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
