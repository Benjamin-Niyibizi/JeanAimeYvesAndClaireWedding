import { useState } from "react";
import WEDDING from "../config.js";

// To receive replies by email, create a free form at https://formspree.io
// and paste its ID here. Left empty, the form only shows the thank-you message.
const FORMSPREE_ID = "";

export default function Rsvp() {
  const [data, setData] = useState({ name: "", email: "", attending: null, guests: "1", message: "" });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));
  const first = data.name.trim().split(" ")[0];

  const send = async () => {
    if (!data.name.trim()) return setError("Add your name so we know who is replying.");
    if (data.attending === null) return setError("Let us know whether you can come.");
    setError("");
    if (FORMSPREE_ID) {
      setSending(true);
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, attending: data.attending ? "Yes" : "No" }),
        });
        if (!res.ok) throw new Error();
      } catch {
        setSending(false);
        return setError("Your reply didn't send. Check your connection and try again.");
      }
      setSending(false);
    }
    setSent(true);
  };

  return (
    <section className="w-sec w-bg-navy w-center" id="rsvp" aria-labelledby="rsvp-title">
      <div className="w-wrap">
        <p className="w-script-sub">Kindly reply</p>
        <h2 className="w-title" id="rsvp-title">RSVP</h2>
        <p className="w-lede">Please let us know by {WEDDING.rsvpBy}.</p>

        {sent ? (
          <div aria-live="polite">
            <p className="w-thanks">
              {data.attending ? `Thank you, ${first}! See you there.` : `We'll miss you, ${first}.`}
            </p>
            <button className="w-btn light" onClick={() => setSent(false)}>Edit your reply</button>
          </div>
        ) : (
          <div className="w-rsvp">
            <div className="w-field">
              <label htmlFor="r-name">Full name</label>
              <input id="r-name" value={data.name} onChange={set("name")} autoComplete="name" />
            </div>
            <div className="w-field">
              <label htmlFor="r-email">Email</label>
              <input id="r-email" type="email" value={data.email} onChange={set("email")} autoComplete="email" />
            </div>
            <div className="w-field">
              <span className="w-legend" id="r-attend">Will you attend?</span>
              <div className="w-choice" role="group" aria-labelledby="r-attend">
                <button aria-pressed={data.attending === true} onClick={() => setData((d) => ({ ...d, attending: true }))}>
                  Joyfully accept
                </button>
                <button aria-pressed={data.attending === false} onClick={() => setData((d) => ({ ...d, attending: false }))}>
                  Regretfully decline
                </button>
              </div>
            </div>
            {data.attending && (
              <div className="w-field">
                <label htmlFor="r-guests">Number of guests</label>
                <select id="r-guests" value={data.guests} onChange={set("guests")}>
                  <option value="1">Just me</option>
                  <option value="2">2 people</option>
                </select>
              </div>
            )}
            <div className="w-field">
              <label htmlFor="r-msg">Message for the couple (optional)</label>
              <textarea id="r-msg" value={data.message} onChange={set("message")} />
            </div>
            {error && <p className="w-error" role="alert">{error}</p>}
            <button className="w-btn solid" onClick={send} disabled={sending}>
              {sending ? "Sending…" : "Send RSVP"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
