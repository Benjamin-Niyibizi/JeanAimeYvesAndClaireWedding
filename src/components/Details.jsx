import { Fragment } from "react";
import WEDDING from "../config.js";
import EventIcon from "./EventIcon.jsx";

// Small line with a diamond, shown between events
function Divider() {
  return (
    <div className="w-tl-divider" aria-hidden="true">
      <span className="w-tl-line" />
      <span className="w-tl-dot" />
      <span className="w-tl-diamond" />
      <span className="w-tl-dot" />
      <span className="w-tl-line" />
    </div>
  );
}

export default function Details() {
  const { events } = WEDDING;
  // const { events, dressCode } = WEDDING;
  return (
    <section className="w-sec w-bg-white w-center" aria-labelledby="details-title">
      <div className="w-wrap">
        {/* Heading: eyebrow with lines + diamonds, title, date with lines */}
        <div className="w-prog-head">
          <p className="w-prog-eyebrow">
            <span className="w-prog-line" aria-hidden="true" />
            <span className="w-prog-diamond" aria-hidden="true" />
            <span>The day's programme</span>
            <span className="w-prog-diamond" aria-hidden="true" />
            <span className="w-prog-line" aria-hidden="true" />
          </p>
          <h2 className="w-prog-title" id="details-title">Celebrations</h2>
          <p className="w-prog-date">
            <span className="w-prog-line short" aria-hidden="true" />
            <span>{WEDDING.dateLabel}</span>
            <span className="w-prog-line short" aria-hidden="true" />
          </p>
        </div>

        {/* Event timeline */}
        <div className="w-timeline">
          {events.map((e, i) => (
            <Fragment key={e.title}>
              {i > 0 && <Divider />}
              <div className="w-tl-item">
                <div className="w-tl-icon">
                  <EventIcon name={e.icon} />
                </div>
                <span className="w-tl-time">{e.time}</span>
                <h3 className="w-tl-title">{e.title}</h3>
                <p className="w-tl-place">{e.place}</p>
                <p className="w-tl-location">{e.location}</p>
              </div>
            </Fragment>
          ))}
        </div>

        {/* <div className="w-dress">
          <h3 className="w-title">Dress code</h3>
          <p className="w-lede" style={{ marginBottom: 0 }}>{dressCode.text}</p>
          <ul className="w-swatches">
            {dressCode.colors.map((c) => (
              <li className="w-swatch" key={c.name}>
                <span style={{ background: c.hex }} aria-hidden="true" />
                {c.name}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  );
}
