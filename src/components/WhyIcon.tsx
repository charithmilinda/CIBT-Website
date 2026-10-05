type IconName = 'target' | 'handshake' | 'globe' | 'institution' | 'briefcase' | 'home' | 'graduationCap' | 'checklist' | 'phone' | 'mail' | 'pin' | 'clock' | 'play' | 'star' | 'calendar' | 'upload' | 'whatsapp' | 'facebook' | 'instagram' | 'linkedin' | 'chevronLeft' | 'chevronRight';

const paths: Record<IconName, React.ReactNode> = {
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2 16 16 0 0 1-14-14 2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 6.5l9 6.5 9-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  graduationCap: (
    <>
      <path d="M2 9l10-5 10 5-10 5-10-5z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 9v6" />
    </>
  ),
  checklist: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 8h8M8 12h8M8 16h5" />
      <path d="M8 8l0.01 0" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  handshake: (
    <>
      <path d="M2 12l4-4 4 3 3-3 4 4-3 3-4-3-3 3z" />
      <path d="M12 15l2 2a2 2 0 0 0 3-3" />
      <path d="M17 13l3 3a2 2 0 0 1-3 3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.8 2.6 4.2 5.7 4.2 9s-1.4 6.4-4.2 9c-2.8-2.6-4.2-5.7-4.2-9s1.4-6.4 4.2-9z" />
    </>
  ),
  institution: (
    <>
      <path d="M3 10l9-5 9 5" />
      <path d="M4 10v9h16v-9" />
      <path d="M9 19v-6M15 19v-6" />
      <path d="M3 21h18" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="8" width="18" height="11" rx="1.5" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none" />
    </>
  ),
  star: (
    <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L12 3z" />
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="1.5" />
      <path d="M3 9.5h18" />
      <path d="M8 3v4M16 3v4" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V4" />
      <path d="M7 9l5-5 5 5" />
      <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.6 13.8L3 21l4.4-1.4A9 9 0 1 0 12 3z" />
      <path d="M8.5 9.5c.3 2.5 2.5 4.7 5 5 .9.1 1.4-1 1-1.6l-.6-.9a.9.9 0 0 0-1-.3l-.6.2c-.5.2-1-.1-1.5-.6-.5-.5-.8-1-.6-1.5l.2-.6a.9.9 0 0 0-.3-1l-.9-.6c-.6-.4-1.7.1-1.6 1z" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.5H7.5v3H10v7h4z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10.5v6M8 7.8v.2" />
      <path d="M12 16.5v-3.5c0-1.2.8-2 2-2s2 .8 2 2v3.5" />
    </>
  ),
  chevronLeft: <path d="M15 6l-6 6 6 6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
};

export default function WhyIcon({ name, className = 'w-10 h-10' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
