// import WEDDING from "../config.js";
// import Photo from "./Photo.jsx";

// export default function Story() {
//   return (
//     <section className="w-sec w-center" aria-labelledby="story-title">
//       <div className="w-wrap">
//         <p className="w-script-sub">How it all began</p>
//         <h2 className="w-title" id="story-title">Our story</h2>
//         <p className="w-lede">From a spilled drink to a proposal by the lake.</p>
//         <div className="w-story">
//           {WEDDING.story.map((s) => (
//             <article className="w-story-item" key={s.year}>
//               <Photo src={s.image} alt={s.title} className="w-story-photo" />
//               <div className="w-story-year">{s.year}</div>
//               <h3 className="w-story-title">{s.title}</h3>
//               <p className="w-story-text">{s.text}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// newer version of the story component
import WEDDING from "../config.js";
import Photo from "./Photo.jsx";

// "Meet the Bride & Groom" — shown in the Story section's place.
// All names, photos and messages come from WEDDING.couple in src/config.js

function Person({ role, person, badge }) {
  return (
    <div className="w-st-person">
      <div className="w-st-photo-wrap">
        <span className="w-st-paper" aria-hidden="true" />
        <Photo src={person.photo} alt={person.fullName} className="w-st-photo" />
        <span className={`w-st-badge ${badge}`}>{role}</span>
      </div>

      <h3 className="w-st-name">
        {person.fullName}
        {person.nickname && <span className="w-st-nick"> "{person.nickname}"</span>}
      </h3>
      <p className="w-st-parents">{person.parents}</p>

      <div className="w-st-divider" aria-hidden="true">
        <span />
        <i />
        <span />
      </div>

      <p className="w-st-message">"{person.message }"</p>
      
      {/* line ◇ line */}
      <div className="w-ft-divider" aria-hidden="true">
        <span />
        <i className="diamond" />
        <span />
      </div>
    </div>
  );
}

export default function Story() {
  const { groom, bride } = WEDDING.couple;
  return (
    <section className="w-sec w-st" aria-labelledby="story-title">
      <div className="w-wrap w-center">
        <p className="w-st-eyebrow">
          <span className="w-st-line" aria-hidden="true" />
          <span className="w-st-diamond" aria-hidden="true" />
          <span>The happy couple</span>
          <span className="w-st-diamond" aria-hidden="true" />
          <span className="w-st-line" aria-hidden="true" />
        </p>
        <h2 className="w-st-title" id="story-title">Meet the Bride &amp; Groom</h2>

        <div className="w-st-grid">
          <Person role="Groom" person={groom} badge="dark" />

          <div className="w-st-middle" aria-hidden="true">
            <span className="w-st-vline" />
            <svg className="w-st-heart" viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
            </svg>
            <span className="w-st-vline" />
          </div>

          <Person role="Bride" person={bride} badge="light" />
        </div>
      </div>
    </section>
  );
}

