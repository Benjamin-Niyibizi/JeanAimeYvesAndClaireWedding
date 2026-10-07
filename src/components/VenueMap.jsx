import WEDDING from "../config.js";
import { mapEmbed, mapsLink, directionsLink } from "../utils.js";

// Google Map of the venue. Sits at the bottom of the page, just before the footer.
export default function VenueMap() {
  const v = WEDDING.venue;
  const q = v.mapQuery || `${v.name}, ${v.address}`;
  return (
    <section className="w-sec" id="venue" aria-labelledby="venue-title">
      <div className="w-wrap">
        <div className="w-center">
          {/* <p className="w-script-sub">Find your way</p> */}
          <h2 className="w-title" id="venue-title">The venue</h2>
          <p className="w-lede">Introduction & Dowry and reception are both held here.</p>
        </div>
        <div className="w-map-card">
          <div className="w-map-info">
            <h3 className="w-map-name">{v.name}</h3>
            <p className="w-map-addr">{v.address}</p>
            <p className="w-map-note">{v.note}</p>
            <div className="w-map-actions">
              {/* <a className="w-btn solid" href={directionsLink(q)} target="_blank" rel="noreferrer">Get directions</a> */}
              <a className="w-btn" href={mapsLink(q)} target="_blank" rel="noreferrer">Open in Google Maps</a>
            </div>
          </div>
          <div className="w-map-frame">
            <iframe
              title={`Google Map showing ${v.name}`}
              src={mapEmbed(q)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
