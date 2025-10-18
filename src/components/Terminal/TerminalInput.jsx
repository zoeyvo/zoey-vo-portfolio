// ==========================================
// FILE: src/components/Terminal/TerminalInput.jsx
// ==========================================
import React from "react";

export function TerminalInput({
  inputRef,
  terminalValue,
  caretPos,
  onInput,
  onKeyDown,
}) {
  const focusAndPlaceCaret = (el) => {
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };

  return (
    <div className="terminal-row">
      <span className="terminal-user">
        zoey<span className="at-symbol">@</span>wired
      </span>
      <span className="terminal-prompt flicker">&gt;</span>
      <span
        className="terminal-input"
        contentEditable
        suppressContentEditableWarning
        ref={inputRef}
        spellCheck={false}
        onInput={onInput}
        onKeyDown={onKeyDown}
        tabIndex={0}
        aria-label="Type a command"
        onClick={(e) => focusAndPlaceCaret(e.currentTarget)}
        style={{ flex: 1, minWidth: 0, display: "inline-block" }}
      />
      {terminalValue.length > 0 && (
        <span className="terminal-cursor blink input-cursor">
          {terminalValue[caretPos] || " "}
        </span>
      )}
    </div>
  );
}
