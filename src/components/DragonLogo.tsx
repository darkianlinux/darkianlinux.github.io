type Props = { className?: string };

// Stylized dragon swirl inspired by the Debian spiral — a coiled dragon
// whose tail forms the iconic Debian curl, with a small head and horn.
export function DragonLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Debian-style coiled body / tail */}
      <path
        d="M44 34c0 9-7 16-16 16s-16-7-16-16 7-16 16-16c6 0 11 3 13.5 8"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M38 30c0 5-4 9-9 9s-9-4-9-9 4-9 9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Dragon head */}
      <path
        d="M44 22c4-1 8 1 10 4-2 1-4 1-6 0 2 2 2 4 1 6-2-1-4-3-5-5-1 2-3 3-5 3 1-3 3-6 5-8z"
        fill="currentColor"
      />
      {/* Horn */}
      <path
        d="M50 20l4-6-1 6z"
        fill="currentColor"
      />
      {/* Eye */}
      <circle cx="48" cy="25" r="1.1" fill="hsl(0 0% 8%)" />
    </svg>
  );
}
