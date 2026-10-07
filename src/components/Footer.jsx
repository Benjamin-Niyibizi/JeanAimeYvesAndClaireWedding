// import WEDDING from "../config.js";

// export default function Footer() {
//   return (
//     <footer className="w-footer">
//       <p className="w-footer-names">{WEDDING.groom} &amp; {WEDDING.bride}</p>
//       <p>{WEDDING.dateLabel}</p>
//       <p>{WEDDING.hashtag}</p>
//     </footer>
//   );
// }

// export default function Footer() {
//   return (
//     <footer className="w-footer">
      
//     </footer>
//   );
// }



import WEDDING from "../config.js";

export default function Footer() {
  const year = new Date(WEDDING.date).getFullYear();
  const contacts = WEDDING.contacts || [];

  return (
    <footer className="w-ft">
      <p>{WEDDING.dateLabel}</p>
      <p>{WEDDING.hashtag}</p>
      {/* line ◇ line */}
      <div className="w-ft-divider" aria-hidden="true">
        <span />
        <i className="diamond" />
        <span />
      </div>
      
      {/* Phone contacts, separated by a thin vertical line */}
      <div className="w-ft-contacts">
        {contacts.map((c, i) => (
          <div className="w-ft-contact" key={c.name + i}>
            <span className="w-ft-name">{c.name}</span>
            <a className="w-ft-phone" href={`tel:${c.phone.replace(/\s/g, "")}`}>
              {c.phone}
            </a>
          </div>
        ))}
      </div>

      {/* line • line */}
      <div className="w-ft-divider small" aria-hidden="true">
        <span />
        <i className="dot" />
        <span />
      </div>

      <p className="w-ft-copy">
        © {year} {WEDDING.groom} &amp; {WEDDING.bride}
      </p>
      {/* <p className="w-footer-names">{WEDDING.groom} &amp; {WEDDING.bride}</p> */}
      
    </footer>
    
  );
}
