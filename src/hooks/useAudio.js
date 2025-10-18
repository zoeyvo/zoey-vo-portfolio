// ==========================================
// FILE: src/hooks/useAudio.js
// ==========================================
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useAudio(entered) {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(true);
  const phwipRef = useRef(null);
  const musicRef = useRef(null);
  const windRef = useRef(null);
  const location = useLocation();

  // Set volumes and mute state
  useEffect(() => {
    if (phwipRef.current) {
      phwipRef.current.volume = 0.025;
      phwipRef.current.muted = isMuted;
    }
    if (musicRef.current) {
      musicRef.current.volume = 0.1;
      musicRef.current.muted = isMuted;
    }
    if (windRef.current) {
      windRef.current.volume = 0.1;
      windRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Wind audio control
  useEffect(() => {
    if (!entered && windRef.current && hasInteracted) {
      windRef.current.play().catch((e) => console.log("Wind play error:", e));
    } else if (entered && windRef.current) {
      windRef.current.pause();
      windRef.current.currentTime = 0;
    }
  }, [entered, hasInteracted]);

  // Background music control
  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.loop = true;
      if (entered) {
        musicRef.current.play().catch(() => {});
      } else {
        musicRef.current.pause();
        musicRef.current.currentTime = 0;
      }
    }
  }, [entered]);

  // Play swap sound on route change
  useEffect(() => {
    if (phwipRef.current) {
      phwipRef.current.currentTime = 0;
      phwipRef.current.play();
    }
  }, [location.pathname]);

  const playSwap = () => {
    if (phwipRef.current && !isMuted && hasInteracted) {
      phwipRef.current.currentTime = 0;
      phwipRef.current.play();
    }
  };

  const toggleMute = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      if (windRef.current && !entered) {
        windRef.current
          .play()
          .catch((e) => console.log("Wind audio play error:", e));
      }
      if (musicRef.current && entered) {
        musicRef.current
          .play()
          .catch((e) => console.log("Music play error:", e));
      }
    }
    setIsMuted((prev) => !prev);
  };

  return {
    isMuted,
    phwipRef,
    musicRef,
    windRef,
    playSwap,
    toggleMute,
  };
}
