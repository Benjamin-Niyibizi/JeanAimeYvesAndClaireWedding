import WEDDING from "../config.js";

export default function Invitation() {
  return (
    <section className="w-sec w-bg-white w-center w-invite" aria-label="Invitation">
      <div className="w-wrap">
        <p className="w-script-sub">With joyful hearts</p>
        <p className="w-invite-text">{WEDDING.intro}</p>
        <hr className="w-divider" />
        <p className="w-invite-text">{WEDDING.dateLabel}<br />{WEDDING.events[0].time} at {WEDDING.venue.name}</p>
      </div>
    </section>
  );
}
