// import WEDDING from "../config.js";
// import { useCountdown, pad, googleCalendarLink } from "../utils.js";

// export default function Countdown() {
//   const t = useCountdown(WEDDING.date);
//   const units = [["Days", t.days], ["Hours", t.hours], ["Minutes", t.minutes], ["Seconds", t.seconds]];
//   const cal = googleCalendarLink(
//     `${WEDDING.groom} & ${WEDDING.bride}'s wedding`,
//     WEDDING.date,
//     `${WEDDING.venue.name}, ${WEDDING.venue.address}`
//   );
//   return (
//     <section className="w-sec w-bg-navy w-center" aria-labelledby="count-title">
//       <div className="w-wrap">
//         <p className="w-script-sub">Counting down</p>
//         <h2 className="w-title" id="count-title">Until we say I do</h2>
//         <p className="w-lede">{WEDDING.dateLabel}</p>
//         {t.done ? (
//           <p className="w-count-done">Today is the day!</p>
//         ) : (
//           <div className="w-count" role="timer">
//             {units.map(([label, value]) => (
//               <div className="w-count-item" key={label}>
//                 <div className="w-count-num">{label === "Days" ? value : pad(value)}</div>
//                 <div className="w-count-label">{label}</div>
//               </div>
//             ))}
//           </div>
//         )}
//         <div className="w-count-actions">
//           <a className="w-btn light" href={cal} target="_blank" rel="noreferrer">Add to calendar</a>
//         </div>
//       </div>
//     </section>
//   );
// }



// New countdown component with updated styling and structure
import WEDDING from "../config.js";
import { useCountdown, pad } from "../utils.js";

function Heart() {
  return (
    <svg className="w-cd-heart" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
    </svg>
  );
}

export default function Countdown() {
  const t = useCountdown(WEDDING.date);
  const units = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <section className="w-cd" aria-labelledby="count-title">
      <div className="w-cd-inner">
        {/* Small heading with lines and diamonds */}
        <p className="w-cd-eyebrow">
          <span className="w-cd-line" aria-hidden="true" />
          <span className="w-cd-diamond" aria-hidden="true" />
          <span>The big day is almost here</span>
          <span className="w-cd-diamond" aria-hidden="true" />
          <span className="w-cd-line" aria-hidden="true" />
        </p>

        <h2 className="w-cd-title" id="count-title">Countdown to Forever</h2>

        {t.done ? (
          <p className="w-cd-done">Today is the day!</p>
        ) : (
          <div className="w-cd-grid" role="timer">
            {units.map(([label, value]) => (
              <div className="w-cd-unit" key={label}>
                <span className="w-cd-num">{pad(value)}</span>
                <span className="w-cd-label">{label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Line · heart · date pill · heart · line */}
        <div className="w-cd-date">
          <span className="w-cd-line short" aria-hidden="true" />
          <Heart />
          <span className="w-cd-pill">{WEDDING.dateLabel}</span>
          <Heart />
          <span className="w-cd-line short" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

