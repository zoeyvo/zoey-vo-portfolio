// ==========================================
// FILE: src/components/Terminal/Terminal.jsx
// ==========================================
import React from "react";
import { TerminalOutputLine } from "./TerminalOutputLine";
import { TerminalInput } from "./TerminalInput";

export function Terminal({
  terminalState,
  inputRef,
  terminalInnerRef,
  onInput,
  onKeyDown,
}) {
  return (
    <div
      className="terminal-container"
      onClick={() => {
        if (inputRef.current) {
          inputRef.current.focus();
          const range = new Range();
          range.selectNodeContents(inputRef.current);
          range.collapse(false);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }}
    >
      <div className="pixel-stream-bg"></div>
      <div className="terminal-inner" ref={terminalInnerRef}>
        {terminalState.output.map((line, idx) => (
          <TerminalOutputLine key={idx} line={line} />
        ))}

        <TerminalInput
          inputRef={inputRef}
          terminalValue={terminalState.terminalValue}
          caretPos={terminalState.caretPos}
          onInput={onInput}
          onKeyDown={onKeyDown}
        />
      
      </div>
    </div>
  );
}
