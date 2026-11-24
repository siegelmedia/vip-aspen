/**
 * Small line icons drawn inline (no icon font, no extra request). The users and
 * luggage icons are from the Lucide set (ISC licence); the rest are this
 * design's own. All are decorative: the text beside them carries the meaning.
 */
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const UsersIcon = () => (
  <svg {...base} strokeWidth={1.4}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const LuggageIcon = () => (
  <svg {...base} strokeWidth={1.4}>
    <path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" />
    <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
    <path d="M10 20h4" />
    <circle cx="16" cy="20" r="2" />
    <circle cx="8" cy="20" r="2" />
  </svg>
);

export const PhoneIcon = () => (
  <svg {...base} strokeWidth={1.6}>
    <path d="M5 4h3.5l1.6 4.2-2.1 1.5a12 12 0 0 0 6.3 6.3l1.5-2.1L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.6A1.5 1.5 0 0 1 5 4z" />
  </svg>
);

export const WhatsAppIcon = () => (
  <svg {...base} strokeWidth={1.6}>
    <path d="M3.6 20.4l1.2-4.2a8.5 8.5 0 1 1 3.3 3.1z" />
    <path d="M9.2 8.3c-.5 2.6 3 6.3 6 6.4l1-1.5-1.8-1-.9.8c-.9-.5-1.7-1.3-2.2-2.2l.8-.9-1-1.8z" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.2v3h2.5V21z" />
  </svg>
);

export const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.6" cy="7.4" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

export const CarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path d="M4 16v-4l2-5h12l2 5v4M4 16h16M4 16v2h3v-2m10 0v2h3v-2M7 12h10" />
  </svg>
);

export const PlaneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M21 15.5v-1.6l-7.5-4.6V4.6c0-.9-.7-1.6-1.5-1.6s-1.5.7-1.5 1.6v4.7L3 13.9v1.6l7.5-2.3v4.6l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.6z"
    />
  </svg>
);
