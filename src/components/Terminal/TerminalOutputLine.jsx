// ==========================================
// FILE: src/components/Terminal/TerminalOutputLine.jsx
// ==========================================
import React from "react";

export function TerminalOutputLine({ line }) {


  const isError =
    line.value === "cat" ||
    line.output?.toString().includes("is not a command") ||
    line.output?.toString().includes("not found");

  const isList = line.value === "ls" || line.value === "ls archive";
  const isHelp = line.value === "help";

  return (
    <>
      {line.value && (
        <div className="terminal-row">
          <span className="terminal-user">
            zoey<span className="at-symbol">@</span>wired
          </span>
          <span className="terminal-prompt flicker">&gt;</span>
          <span className="terminal-input-history">
            <span className="cmd">{line.value}</span>
          </span>
        </div>
      )}

      {
        <div className="terminal-row">
          <span className="terminal-user" style={{ visibility: "hidden" }}>
            zoey<span className="at-symbol">@</span>wired
          </span>
          <span
            className="terminal-prompt flicker"
            style={{ visibility: "hidden" }}
          >
            &gt;
          </span>
          <span
            className={
              isError ? "error" : isList ? "ls-list" : isHelp ? "help-list" : ""
            }
          >
            {Array.isArray(line.output) ? (
              isList ? (
                <div className="ls-items">
                  {line.output.map((item, i) => (
                    <span key={i} className="ls-item">
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                line.output.map((l, i) => (
                  <div
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html:
                        typeof l === "string" &&
                        (l.includes("ls") ||
                          l.includes("help") ||
                          l.includes("clear") ||
                          l.includes("cat") ||
                          l.includes("archive"))
                          ? l.replace(
                              /(ls|help|clear|cat \[?\w*\/?\w*\]?|archive|\.\/forever\.exe)/g,
                              '<span class="cmd-accent">$1</span>'
                            )
                          : l,
                    }}
                  />
                ))
              )
            ) : (
              line.output
            )}
          </span>
        </div>
      }
    </>
  );
}
