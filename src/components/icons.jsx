/* Simple line icons, 24x24, stroke = currentColor. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconKremlin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V10l2-2 2 2v11" />
      <path d="M15 21V10l2-2 2 2v11" />
      <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
      <path d="M7 8V5l-1 0M17 8V5l1 0" />
      <path d="M12 9V4l-1.5 1.5M12 4l1.5 1.5" />
    </svg>
  )
}

export function IconBridge(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9c4 0 4 3 9 3s5-3 9-3" />
      <path d="M3 9v9M21 9v9M3 18h18" />
      <path d="M8 12.5V18M16 12.5V18M12 12v6" />
    </svg>
  )
}

export function IconChurch(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v4M10 4h4" />
      <path d="M12 6c0 2-3 3-3 6v9M12 6c0 2 3 3 3 6v9" />
      <path d="M5 21V13l4-2.5M19 21V13l-4-2.5" />
      <path d="M3 21h18" />
    </svg>
  )
}

export function IconMosque(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c-2 2-3 4-3 6h6c0-2-1-4-3-6Z" />
      <path d="M6 21v-8c0-1.5 1-2.5 2.5-2.5h7C17 10.5 18 11.5 18 13v8" />
      <path d="M4 21V14M20 21V14" />
      <path d="M3 21h18M11 21v-3a1 1 0 0 1 2 0v3" />
    </svg>
  )
}

export function IconCastle(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V8l2 1 2-1 2 1 2-1 2 1 2-1 2 1v13" />
      <path d="M4 8V5h2v2M10 8V5h2v2M16 8V5h2v2" />
      <path d="M3 21h18M10 21v-5a2 2 0 0 1 4 0v5" />
    </svg>
  )
}

export function IconMountain(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20h18L14 6l-3.5 6.5L8 9l-5 11Z" />
      <path d="m12.5 11 1.5-2.5" />
    </svg>
  )
}

export function IconShip(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 16h18l-2 4a2 2 0 0 1-1.7 1H6.7A2 2 0 0 1 5 20l-2-4Z" />
      <path d="M5 16V9h10l3 4M9 9V5h3" />
      <path d="M12 3v13" />
    </svg>
  )
}

export function IconAnchor(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v13" />
      <path d="M5 12H3a9 9 0 0 0 18 0h-2" />
      <path d="M8 11h8" />
    </svg>
  )
}

export function IconPalm(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c0-6 0-9 1-12" />
      <path d="M13 9c-2-2-5-2-7 0M13 9c2-2 5-2 7 0M13 9c-1-2.5-3.5-4-6-4M13 9c1-2.5 3.5-4 6-4" />
      <path d="M9 21h6" />
    </svg>
  )
}

/* UI */
export function IconArrow(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export const cityIcons = {
  kremlin: IconKremlin,
  bridge: IconBridge,
  church: IconChurch,
  mosque: IconMosque,
  castle: IconCastle,
  mountain: IconMountain,
  ship: IconShip,
  anchor: IconAnchor,
  palm: IconPalm,
}
