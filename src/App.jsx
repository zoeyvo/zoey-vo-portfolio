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
import { useTerminal } from "./hooks/useTerminal";
import { useCursorEnlargeOnClick } from "./hooks";
import "./styles/App.scss";

function App() {
  const [entered, setEntered] = useState(false);
  const navigate = useNavigate();
  const terminal = useTerminal();

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
                  >
                    github.com/zoeyvo
                  </a>
                  {" | "}
                  <a
                    href="https://www.linkedin.com/in/zoeyvo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/zoeyvo
                  </a>
                  {" | "}
                  <span className="footer-email" title="Email (obfuscated)">
                    <a
                      href="https://mail.google.com/mail/?view=cm&to=zoeyvo256@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
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
            <PageLayout>
              <Root />
            </PageLayout>
          }
        />
        <Route
          path="/bio"
          element={
            <PageLayout>
              <Bio />
            </PageLayout>
          }
        />
        <Route
          path="/resume"
          element={
            <PageLayout>
              <Resume />
            </PageLayout>
          }
        />
        <Route
          path="/love"
          element={
            <PageLayout>
              <Love />
            </PageLayout>
          }
        />
        <Route
          path="/archive"
          element={
            <PageLayout>
              <Archive />
            </PageLayout>
          }
        />
        <Route
          path="/archive/cardgames"
          element={
            <PageLayout>
              <ArchiveCardGames />
            </PageLayout>
          }
        />
        <Route
          path="/archive/guides"
          element={
            <PageLayout>
              <ArchiveGuides />
            </PageLayout>
          }
        />
        <Route
          path="/archive/media"
          element={
            <PageLayout>
              <ArchiveMedia />
            </PageLayout>
          }
        />
        <Route
          path="/archive/notes"
          element={
            <PageLayout>
              <ArchiveNotes />
            </PageLayout>
          }
        />
        <Route
          path="/archive/bookmarks"
          element={
            <PageLayout>
              <ArchiveBookmarks />
            </PageLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
