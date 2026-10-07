// Simple line icons for the event timeline.
// Use one of these names in config.js: "heart-hand", "church", "party", "rings", "glass"
const ICONS = {
  "heart-hand": (
    <>
      <path d="M12 9.5c-.9-1.6-3.6-1.4-3.6.6 0 1.5 2 2.8 3.6 3.9 1.6-1.1 3.6-2.4 3.6-3.9 0-2-2.7-2.2-3.6-.6z" />
      <path d="M3 15.5h2.5l3.2 1.9c.5.3 1.1.4 1.6.2l5.2-1.6a1.2 1.2 0 0 0-.6-2.3l-3.4.6" />
      <path d="M5.5 15.5l2.2-2c.5-.4 1.1-.6 1.7-.5l2.6.4M3 20h3l4 1.2c.6.2 1.2.1 1.7-.2L21 16" />
    </>
  ),
  church: (
    <>
      <path d="M12 2v4M10.5 3.5h3" />
      <path d="M7 21V10l5-4 5 4v11" />
      <path d="M3 21v-7l4-3M21 21v-7l-4-3" />
      <path d="M10 21v-4a2 2 0 0 1 4 0v4M2 21h20" />
      <path d="M12 10.5v2.5M10.8 11.6h2.4" />
    </>
  ),
  party: (
    <>
      <path d="M4 21l4.5-12 7.5 7.5L4 21z" />
      <path d="M6.6 14.2l3.2 3.2M7.8 11l5.2 5.2" />
      <path d="M14 3.5c.8 1.2.8 2.6 0 3.8M18 10c1.2-.8 2.6-.8 3.8 0" />
      <path d="M16.5 6.5l1.5-1.5M20 3l.5.5M11 4l.3.9M21 13.5l-.9.3" />
    </>
  ),
  rings: (
    <>
      <circle cx="9" cy="14" r="5" />
      <circle cx="15" cy="14" r="5" />
      <path d="M7.5 5.5L9 3.5l1.5 2L9 7.5z" />
    </>
  ),
  glass: (
    <>
      <path d="M6 3h5l-.5 5a2.5 2.5 0 0 1-4 0L6 3zM8.5 10.5V19M6.5 19h4" />
      <path d="M13 3h5l-.5 5a2.5 2.5 0 0 1-4 0L13 3zM15.5 10.5V19M13.5 19h4" />
      <path d="M6.2 5.5h4.6M13.2 5.5h4.6" />
    </>
  ),
};

export default function EventIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name] || ICONS["heart-hand"]}
    </svg>
  );
}
