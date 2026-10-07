import WEDDING from "../config.js";

export default function Entourage() {
  return (
    <section className="w-sec w-center" aria-labelledby="ent-title">
      <div className="w-wrap">
        <p className="w-script-sub">Standing with us</p>
        {/* <h2 className="w-title" id="ent-title">The entourage</h2> */}
        <p className="w-lede">The people who helped bring us here.</p>
        <div className="w-entourage">
          {WEDDING.entourage.map((g) => (
            <div className={`w-ent-group ${g.names.length > 3 ? "wide" : ""}`} key={g.role}>
              <h3 className="w-ent-role">{g.role}</h3>
              {/* line ◇ line */}
      <div className="w-ft-divider" aria-hidden="true">
        <span />
        <i className="diamond" />
        <span />
      </div>
      
              <ul className="w-ent-names">
                {g.names.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
