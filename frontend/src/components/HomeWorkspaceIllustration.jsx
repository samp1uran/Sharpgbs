export default function HomeWorkspaceIllustration() {
  return (
    <svg
      aria-labelledby="workspace-title workspace-description"
      className="block aspect-[4/3] w-full"
      fill="none"
      role="img"
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="workspace-title">A professional working at a computer</title>
      <desc id="workspace-description">
        An animated illustration of a person typing at a computer, with active
        work on the screen.
      </desc>
      <defs>
        <linearGradient id="workspace-bg" x1="62" x2="578" y1="32" y2="448">
          <stop stopColor="#EFF6FF" />
          <stop offset="1" stopColor="#ECFEFF" />
        </linearGradient>
        <linearGradient id="screen-bg" x1="300" x2="514" y1="116" y2="328">
          <stop stopColor="#172554" />
          <stop offset="1" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="shirt" x1="154" x2="301" y1="257" y2="398">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#0891B2" />
        </linearGradient>
        <filter
          id="workspace-shadow"
          colorInterpolationFilters="sRGB"
          height="160%"
          width="160%"
          x="-30%"
          y="-30%"
        >
          <feDropShadow
            dx="0"
            dy="14"
            floodColor="#1E3A8A"
            floodOpacity=".14"
            stdDeviation="16"
          />
        </filter>
      </defs>

      <rect fill="url(#workspace-bg)" height="480" rx="28" width="640" />
      <circle cx="526" cy="103" fill="#BFDBFE" opacity=".55" r="51" />
      <circle cx="103" cy="351" fill="#A5F3FC" opacity=".48" r="65" />
      <path
        d="M64 405H578"
        stroke="#CBD5E1"
        strokeLinecap="round"
        strokeWidth="2"
      />

      <g className="hero-float-card" filter="url(#workspace-shadow)">
        <rect
          fill="white"
          height="66"
          rx="16"
          width="158"
          x="420"
          y="62"
        />
        <circle cx="446" cy="95" fill="#DCFCE7" r="14" />
        <path
          d="m440 95 4 4 8-9"
          stroke="#16A34A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <rect fill="#CBD5E1" height="7" rx="3.5" width="78" x="469" y="83" />
        <rect fill="#E2E8F0" height="6" rx="3" width="56" x="469" y="96" />
      </g>

      <g filter="url(#workspace-shadow)">
        <path
          d="M104 391V272c0-19 15-34 34-34h69c19 0 34 15 34 34v119"
          fill="#1E3A8A"
        />
        <path d="M123 395V281c0-11 9-20 20-20h60c11 0 20 9 20 20v114" fill="#DBEAFE" />
        <path d="M120 393h108" stroke="#1E40AF" strokeLinecap="round" strokeWidth="10" />
      </g>

      <g filter="url(#workspace-shadow)">
        <rect fill="#334155" height="13" rx="6.5" width="222" x="290" y="349" />
        <rect fill="#475569" height="14" rx="7" width="282" x="262" y="357" />
        <rect fill="#CBD5E1" height="7" rx="3.5" width="190" x="307" y="361" />
        <path d="M300 372h204l-17 12H317l-17-12Z" fill="#E2E8F0" />
        <path d="m373 384-12 20M436 384l12 20" stroke="#94A3B8" strokeWidth="5" />
      </g>

      <g filter="url(#workspace-shadow)">
        <rect fill="#334155" height="201" rx="18" width="266" x="283" y="113" />
        <rect fill="url(#screen-bg)" height="176" rx="11" width="242" x="295" y="125" />
        <path d="M397 314h38v24h-38z" fill="#64748B" />
        <path d="M379 338h75l14 11H365l14-11Z" fill="#94A3B8" />
        <rect fill="#1E293B" height="22" rx="11" width="214" x="309" y="139" />
        <circle cx="324" cy="150" fill="#FB7185" r="3" />
        <circle cx="336" cy="150" fill="#FBBF24" r="3" />
        <circle cx="348" cy="150" fill="#34D399" r="3" />
        <rect fill="#334155" height="104" rx="7" width="54" x="310" y="171" />
        <rect fill="#3B82F6" height="5" rx="2.5" width="24" x="320" y="183" />
        <rect fill="#64748B" height="4" rx="2" width="34" x="320" y="194" />
        <rect fill="#22D3EE" height="4" rx="2" width="28" x="320" y="205" />
        <rect fill="#64748B" height="4" rx="2" width="20" x="320" y="216" />
        <rect fill="#64748B" height="4" rx="2" width="32" x="320" y="227" />
        <rect fill="#3B82F6" height="4" rx="2" width="25" x="320" y="238" />
        <rect fill="#64748B" height="4" rx="2" width="17" x="320" y="249" />
        <rect fill="#1E293B" height="104" rx="7" width="137" x="375" y="171" />
        <path
          d="M389 188h31m-31 11h48m-48 11h38m-38 11h54m-54 11h31"
          stroke="#60A5FA"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M389 199h16m-16 22h15m-15 22h23"
          stroke="#22D3EE"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <rect
          className="hero-screen-cursor"
          fill="#67E8F9"
          height="9"
          rx="2"
          width="3"
          x="421"
          y="235"
        />
        <circle className="hero-screen-glow" cx="489" cy="150" fill="#22D3EE" r="3" />
      </g>

      <g filter="url(#workspace-shadow)">
        <path
          d="M163 263c-5-25 10-50 36-54 24-4 43 13 43 37v20l-25 20-54-23Z"
          fill="#1E293B"
        />
        <path d="M183 225c-3-17 9-31 25-31 17 0 28 13 28 30v16h-50l-3-15Z" fill="#F2B994" />
        <path d="M182 225c2-20 17-29 31-26 9 2 16 8 20 16-17 0-26-8-26-8-4 10-13 16-25 18Z" fill="#1E293B" />
        <path d="M201 243h27v28h-27z" fill="#E8A982" />
        <path
          d="M172 266c8-13 21-20 39-20s34 9 42 23l26 84H149l23-87Z"
          fill="url(#shirt)"
        />
        <path d="m200 254 12 22 13-22" fill="#F8FAFC" />
        <path d="m212 276 8 68h-17l-5-68 8-11 6 11Z" fill="#DBEAFE" />
        <path d="m250 279 61 59-13 12-73-51 25-20Z" fill="#2563EB" />
        <path
          className="hero-working-arm"
          d="m294 346 48 5c8 1 13 8 11 15-1 6-7 10-13 9l-57-8-16-17 15-13 12 9Z"
          fill="#F2B994"
        />
        <path d="m247 282 62 50-15 18-62-48 15-20Z" fill="#1D4ED8" />
        <path
          d="m287 342 46 15c7 2 10 9 8 15-2 6-8 9-14 7l-54-18-14-17 17-12 11 10Z"
          fill="#E8A982"
        />
        <path d="M177 365h99l-10 25h-89v-25Z" fill="#1E293B" />
        <path d="M183 387h84l-5 12h-83l4-12Z" fill="#0F172A" />
        <path d="M184 399h78" stroke="#0F172A" strokeLinecap="round" strokeWidth="6" />
        <path d="M224 396v8" stroke="#0F172A" strokeLinecap="round" strokeWidth="5" />
      </g>

      <g className="hero-float-card hero-float-card--secondary" filter="url(#workspace-shadow)">
        <rect fill="white" height="54" rx="15" width="126" x="74" y="126" />
        <circle cx="97" cy="153" fill="#DBEAFE" r="11" />
        <path
          d="M92 153h10m-5-5v10"
          stroke="#2563EB"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <rect fill="#94A3B8" height="6" rx="3" width="58" x="117" y="143" />
        <rect fill="#E2E8F0" height="5" rx="2.5" width="41" x="117" y="155" />
      </g>

      <g filter="url(#workspace-shadow)">
        <path d="M535 352h33l-5 47h-23l-5-47Z" fill="#F8FAFC" />
        <path d="M539 351c1-12 21-12 23 0" stroke="#94A3B8" strokeWidth="5" />
        <path d="M541 365h21" stroke="#CBD5E1" strokeWidth="3" />
      </g>
    </svg>
  );
}
