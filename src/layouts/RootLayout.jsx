import { useState, useEffect } from "react";
import { CursorTrail } from "../components";
import { Terminal } from "../components/Terminal/Terminal";
import { useTerminal } from "../hooks/useTerminal";

/**
 * RootLayout renders the home/landing page.
 * Includes the enter button and terminal interface.
 */

function RootLayout({ children }) {
  const [entered, setEntered] = useState(false);
  const terminal = useTerminal();

  return (
    <>
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
    </>
  );
}

export default RootLayout;
