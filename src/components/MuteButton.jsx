// ==========================================
// FILE: src/components/MuteButton.jsx
// ==========================================
import React, { useState } from "react";

export function MuteButton({ isMuted, onToggle }) {
  const [touchUsed, setTouchUsed] = useState(false);

  const handleTouchStart = (e) => {
    e.preventDefault();
    setTouchUsed(true);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    const touch = e.changedTouches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (
      element &&
      (element.classList.contains("mute-btn-fixed") ||
        element.closest(".mute-btn-fixed"))
    ) {
      onToggle();
    }

    setTimeout(() => setTouchUsed(false), 300);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!touchUsed) {
      onToggle();
    }
  };

  return (
    <button
      className="mute-btn-fixed"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
    >
      <img
        src={isMuted ? "/assets/images/mute.png" : "/assets/images/volume.png"}
        alt={isMuted ? "Muted" : "Volume on"}
        className="mute-btn-icon"
      />
    </button>
  );
}
