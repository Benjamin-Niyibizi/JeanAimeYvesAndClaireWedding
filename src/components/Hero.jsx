// import WEDDING from "../config.js";
// import Photo from "./Photo.jsx";

// export default function Hero() {
//   return (
//     <header className="w-hero">
//       <Photo src={WEDDING.heroImage} alt={`${WEDDING.groom} and ${WEDDING.bride}`} className="w-hero-img" />
//       <div className="w-hero-inner">
//         <p className="w-hero-kicker">We're getting married</p>
//         <h1 className="w-hero-names">
//           <span>{WEDDING.groom}</span>
//           <span className="amp">&amp;</span>
//           <span>{WEDDING.bride}</span>
//         </h1>
//         <p className="w-hero-date">{WEDDING.shortDate}</p>
//         <p className="w-hero-place">{WEDDING.venue.name}, {WEDDING.venue.city}</p>
//         <a className="w-btn light" href="#rsvp">RSVP now</a>
//       </div>
//     </header>
//   );
// }


// New Hero component with updated design and content
import WEDDING from "../config.js";
import Photo from "./Photo.jsx";

export default function Hero() {
  return (
    <header className="w-hero">
      <Photo src={WEDDING.heroImage} alt={`${WEDDING.groom} and ${WEDDING.bride}`} className="w-hero-img" />

      <div className="w-hero-inner">
        <p className="w-hero-kicker" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", }}>Together with their families</p>

        <h1 className="w-hero-names">
          <span className="w-hero-name">{WEDDING.groom}</span>
          <span className="amp">&amp;</span>
          <span className="w-hero-name">{WEDDING.bride}</span>
        </h1>

        <p className="w-hero-invite">Joyfully invite you to celebrate their wedding day</p>

        <div className="w-hero-info">
          <div className="w-hero-col left" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "black" }}>
            <span className="w-hero-label">Date</span>
            <span className="w-hero-value" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "white" }}>{WEDDING.dateLabel}</span>
          </div>
          <span className="w-hero-sep" />
          <div className="w-hero-col right">
            <span className="w-hero-label">Venue</span>
            <span className="w-hero-value" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "white" }}>{WEDDING.venue.name}, {WEDDING.venue.city}</span>
          </div>
        </div>

        {/* <a className="w-hero-join" href="#story">Join us</a> */}
      </div>
    </header>
  );
}
