// import WEDDING from "../config.js";

// export default function DressCode() {
//   const { dressCode } = WEDDING;
//   return (
//     <section className="w-sec w-center" aria-labelledby="dress-title">
//       <div className="w-wrap">
//         <div className="w-dress" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "black" }}>
//           <h3 className="w-title" id="dress-title" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "black" }}>Dress code</h3>
//           <p className="w-lede" style={{ marginBottom: 0, fontFamily: "Cormorant Garamond, Georgia, serif", color: "black" }}>{dressCode.text}</p>
//           <ul className="w-swatches">
//             {dressCode.colors.map((c) => (
//               <li className="w-swatch" key={c.name}>
//                 <span style={{ background: c.hex }} aria-hidden="true" />
//                 {c.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }


import WEDDING from "../config.js";

// Picks dark or light text so the name is readable on any colour
function isLight(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 170;
}

export default function DressCode() {
  const { dressCode } = WEDDING;
  return (
    <section className="w-dc" aria-labelledby="dress-title">
      <div className="w-dc-inner">
        {/* Eyebrow: line ◇ WHAT TO WEAR ◇ line */}
        <p className="w-dc-eyebrow">
          <span className="w-dc-line" aria-hidden="true" />
          <span className="w-dc-diamond" aria-hidden="true" />
          <span>What to wear</span>
          <span className="w-dc-diamond" aria-hidden="true" />
          <span className="w-dc-line" aria-hidden="true" />
        </p>

        <h2 className="w-dc-title" id="dress-title">Dress Code</h2>
        <p className="w-dc-text">{dressCode.text}</p>

        {/* Colour palette */}
        <div className="w-dc-palette">
          {dressCode.colors.map((c) => (
            <div
              key={c.name}
              className={`w-dc-swatch ${isLight(c.hex) ? "light" : "dark"}`}
              style={{ background: c.hex }}
            >
              <span className="w-dc-name">{c.name}</span>
              <span className="w-dc-hex">{c.hex.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}