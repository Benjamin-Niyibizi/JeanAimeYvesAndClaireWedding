import { useState } from "react";
import WEDDING from "../config.js";

// Envelope that opens when the guest taps the seal
export default function Intro({ onOpen }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    setTimeout(onOpen, reduce ? 0 : 1650);
  };
  return (
    <div className={`w-intro ${open ? "open" : ""}`} role="dialog" aria-label="Wedding invitation">
      <div className="w-intro-inner">
        <p>You're invited to the wedding of Jean Aime Yves and Claire</p>
        <div className="w-env">
          <div className="w-env-back" />
          <div className="w-env-card">{WEDDING.groom} &amp; {WEDDING.bride}</div>
          <div className="w-env-front" />
          <div className="w-env-flap" />
          <button className="w-seal" onClick={handleOpen} aria-label="Open the invitation" autoFocus>
            {WEDDING.initials.replace(/\s/g, "")}
          </button>
        </div>
        <span className="w-intro-hint">Tap here to open the seal</span>
      </div>
    </div>
  );
}
