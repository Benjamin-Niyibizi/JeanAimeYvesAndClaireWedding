import { useEffect, useState } from "react";

export function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, new Date(target).getTime() - now);
  return {
    done: diff === 0,
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

export const pad = (n) => String(n).padStart(2, "0");

export const mapsLink = (q) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const directionsLink = (q) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;

// Google Maps embed, no API key needed
export const mapEmbed = (q, zoom = 16) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=${zoom}&output=embed`;

// "2027-02-20T15:00:00+08:00" -> Google Calendar link (6-hour event)
export function googleCalendarLink(title, isoStart, location) {
  const start = new Date(isoStart);
  const end = new Date(start.getTime() + 6 * 3600000);
  const f = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  return (
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(title)}&dates=${f(start)}/${f(end)}` +
    `&location=${encodeURIComponent(location)}`
  );
}
