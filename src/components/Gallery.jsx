import { useCallback, useEffect, useState } from "react";
import WEDDING from "../config.js";
import Photo from "./Photo.jsx";

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const total = WEDDING.gallery.length;
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d) => setIndex((i) => (i + d + total) % total), [total]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <section className="w-sec w-bg-white w-center" aria-labelledby="gallery-title">
      <div className="w-wrap">
        <p className="w-script-sub">Moments</p>
        <h2 className="w-title" id="gallery-title">Our gallery</h2>
        <p className="w-lede">Tap a photo to see it larger.</p>
        <div className="w-gallery">
          {WEDDING.gallery.map((src, i) => (
            <button key={src + i} onClick={() => setIndex(i)} aria-label={`Open photo ${i + 1} of ${total}`}>
              <Photo src={src} alt={`Photo ${i + 1}`} />
            </button>
          ))}
        </div>
        <p className="w-hashtag">Share your photos with {WEDDING.hashtag}</p>
      </div>

      {index !== null && (
        <div className="w-lightbox" role="dialog" aria-label="Photo viewer" onClick={close}>
          <img src={WEDDING.gallery[index]} alt={`Photo ${index + 1}`} onClick={(e) => e.stopPropagation()} />
          <button className="w-lb-btn w-lb-close" onClick={close} aria-label="Close">×</button>
          <button className="w-lb-btn w-lb-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo">‹</button>
          <button className="w-lb-btn w-lb-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo">›</button>
          <div className="w-lb-count">{index + 1} / {total}</div>
        </div>
      )}
    </section>
  );
}
