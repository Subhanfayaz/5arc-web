// TrustedBy.jsx

export default function TrustedBy() {
  const partners = [
    {
      name: 'Google',
      svg: (
        <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0">
          <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
      ),
    },
    {
  name: 'Google Partner',
  svg: (
    <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0">
      <path fill="#FBBC05" d="M14 34l-4 10 8-3z" />
      <path fill="#EA4335" d="M34 34l4 10-8-3z" />
      <circle cx="24" cy="20" r="16" fill="#4285F4" />
      <path
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20l5 5 9-10"
      />
    </svg>
  ),
},
{
  name: 'Meta Business Partner',
  svg: (
    <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0">
      <defs>
        <linearGradient id="metaGrad" x1="0" y1="24" x2="48" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0064E0" />
          <stop offset="50%" stopColor="#0082FB" />
          <stop offset="100%" stopColor="#00C6FF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#metaGrad)"
        d="M8.5 24c0-7.2 4-13.5 9.2-13.5 4 0 6.6 3.1 9.3 8.3.4.7 1.7.7 2.1 0 2.7-5.2 5.3-8.3 9.3-8.3 5.2 0 9.2 6.3 9.2 13.5S43.6 37.5 38.4 37.5c-4 0-6.6-3.1-9.3-8.3-.4-.7-1.7-.7-2.1 0-2.7 5.2-5.3 8.3-9.3 8.3-5.2 0-9.2-6.3-9.2-13.5z"
      />
    </svg>
  ),
},
    {
      name: 'Microsoft Select Partner 2023',
      svg: (
        <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0">
          <rect x="5" y="5" width="18" height="18" fill="#F25022"/>
          <rect x="25" y="5" width="18" height="18" fill="#7FBA00"/>
          <rect x="5" y="25" width="18" height="18" fill="#00A4EF"/>
          <rect x="25" y="25" width="18" height="18" fill="#FFB900"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      svg: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" fill="#171515">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'React',
      svg: (
        <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0">
          <circle cx="24" cy="24" r="4" fill="#61DAFB"/>
          <g fill="none" stroke="#61DAFB" strokeWidth="2">
            <ellipse cx="24" cy="24" rx="20" ry="8"/>
            <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)"/>
            <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)"/>
          </g>
        </svg>
      ),
    },
    {
      name: 'Stripe',
      svg: (
        <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0">
          <rect width="48" height="48" rx="8" fill="#635BFF"/>
          <path fill="white" d="M22.4 18.4c0-1.3 1.1-1.8 2.8-1.8 2.5 0 5.6.8 7.8 2.1v-7.4c-2.6-1-5.2-1.5-7.8-1.5-6.4 0-10.6 3.3-10.6 8.9 0 8.7 12 7.3 12 11.1 0 1.5-1.3 2-3.1 2-2.7 0-6.2-1.1-8.9-2.6v7.5c3 1.3 6.1 1.9 8.9 1.9 6.6 0 11.1-3.2 11.1-8.9-.1-9.3-12.2-7.7-12.2-11.3z"/>
        </svg>
      ),
    },
    {
      name: 'Figma',
      svg: (
        <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0">
          <path fill="#F24E1E" d="M16 44c4.4 0 8-3.6 8-8v-8h-8c-4.4 0-8 3.6-8 8s3.6 8 8 8z"/>
          <path fill="#FF7262" d="M8 24c0-4.4 3.6-8 8-8h8v16h-8c-4.4 0-8-3.6-8-8z"/>
          <path fill="#A259FF" d="M8 12c0-4.4 3.6-8 8-8h8v16h-8c-4.4 0-8-3.6-8-8z"/>
          <path fill="#1ABCFE" d="M24 4h8c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8V4z"/>
          <path fill="#0ACF83" d="M40 24c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"/>
        </svg>
      ),
    },
    {
      name: 'Node.js',
      svg: (
        <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0">
          <path fill="#339933" d="M24 4L6 14.5v19L24 44l18-10.5v-19L24 4zm0 4.2l14 8.2v16.3L24 40.6 10 32.7V16.4L24 8.2z"/>
          <path fill="#339933" d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      svg: (
        <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0">
          <rect width="48" height="48" rx="4" fill="#3178C6"/>
          <path fill="white" d="M22 22h-6v-4h16v4h-6v14h-4V22zm10 10.5c.7.4 1.8.8 2.9.8 1.2 0 1.9-.5 1.9-1.3 0-.7-.5-1.2-1.8-1.7-1.8-.6-3-1.6-3-3.1 0-1.8 1.5-3.2 3.9-3.2 1.3 0 2.3.3 2.9.6l-.6 2c-.5-.2-1.3-.5-2.4-.5-1.1 0-1.7.5-1.7 1.2 0 .7.6 1.1 2 1.6 1.9.7 2.9 1.7 2.9 3.2 0 1.8-1.4 3.3-4.2 3.3-1.2 0-2.4-.3-3.1-.7l.3-2.2z"/>
        </svg>
      ),
    },
    {
      name: 'Google Analytics',
      svg: (
        <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0">
          <path fill="#F9AB00" d="M38 40c0 2.2-1.8 4-4 4s-4-1.8-4-4V20c0-2.2 1.8-4 4-4s4 1.8 4 4v20z"/>
          <path fill="#E37400" d="M26 40c0 2.2-1.8 4-4 4s-4-1.8-4-4v-8c0-2.2 1.8-4 4-4s4 1.8 4 4v8z"/>
          <circle fill="#E37400" cx="10" cy="40" r="4"/>
        </svg>
      ),
    },
  ];

  const tripled = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 px-6 overflow-hidden bg-white border-y border-gray-100">
      <div className="container mx-auto text-center mb-10">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gray-300" />
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400">Trusted Tools & Partnerships</p>
          <div className="h-px w-16 bg-gray-300" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#071E26] mt-3">
          Built With Industry-Leading Technology
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-partners gap-6">
          {tripled.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm hover:shadow-md hover:border-[#17A2B8] transition-all duration-300 whitespace-nowrap cursor-default"
            >
              {partner.svg}
              <span className="font-semibold text-[#071E26] text-sm">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}