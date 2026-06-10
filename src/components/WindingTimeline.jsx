import { useEffect, useRef, useState } from 'react'

/* Lane geometry (user units == pixels: SVG is rendered at 1:1) */
const LANE = 260
const ROW = 300
const BREAK = '(max-width: 900px)'

function buildPath(nodes, laneW, totalH) {
  if (!nodes.length) return ''
  const cx = laneW / 2
  let d = `M ${cx} 0 L ${nodes[0].x} ${nodes[0].y}`
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i]
    const b = nodes[i + 1]
    const my = (a.y + b.y) / 2
    d += ` C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`
  }
  const last = nodes[nodes.length - 1]
  d += ` L ${cx} ${totalH}`
  return d
}

export default function WindingTimeline({ items }) {
  const wrapRef = useRef(null)
  const pathRef = useRef(null)
  const fillRef = useRef(null)
  const dotRefs = useRef([])
  const yearRefs = useRef([])
  const markerRefs = useRef([])
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(BREAK)
    const apply = () => setMobile(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const laneW = LANE
  const totalH = items.length * ROW
  const nodes = items.map((it, i) => ({
    ...it,
    i,
    x: i % 2 === 0 ? 60 : laneW - 60,
    y: i * ROW + ROW * 0.5,
  }))
  const d = buildPath(nodes, laneW, totalH)

  /* Reveal cards locally so they animate even after a mobile/desktop swap. */
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const els = wrap.querySelectorAll('[data-reveal]:not(.is-revealed)')
    if (!els.length) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-revealed'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [mobile])

  /* Draw the road / fill the rail and light up stations on scroll. */
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const path = pathRef.current
    let len = 0
    if (!mobile && path) {
      len = path.getTotalLength()
      path.style.strokeDasharray = `${len}`
      path.style.strokeDashoffset = reduce ? '0' : `${len}`
    }

    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight || 800

      if (mobile) {
        const active = vh * 0.62
        const rect = wrap.getBoundingClientRect()
        let fill = active - rect.top
        fill = Math.max(0, Math.min(rect.height, fill))
        if (fillRef.current) {
          fillRef.current.style.height = reduce ? `${rect.height}px` : `${fill}px`
        }
        markerRefs.current.forEach((m, idx) => {
          if (!m) return
          const on = reduce || m.getBoundingClientRect().top <= active
          dotRefs.current[idx]?.classList.toggle('is-on', on)
          yearRefs.current[idx]?.classList.toggle('is-on', on)
        })
        return
      }

      if (!path) return
      const rect = wrap.getBoundingClientRect()
      const start = vh * 0.82
      const span = rect.height + vh * 0.5
      let p = (start - rect.top) / span
      p = Math.max(0, Math.min(1, p))
      if (!reduce) path.style.strokeDashoffset = `${len * (1 - p)}`
      const yOn = p * (totalH + vh * 0.5) - vh * 0.05
      nodes.forEach((n, idx) => {
        const on = reduce || n.y <= yOn
        dotRefs.current[idx]?.classList.toggle('is-on', on)
        yearRefs.current[idx]?.classList.toggle('is-on', on)
      })
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [d, totalH, mobile])

  /* ---- Mobile: normal-flow vertical rail (cards can never overlap) ---- */
  if (mobile) {
    return (
      <div className="rail" ref={wrapRef}>
        <span className="rail__track" aria-hidden="true" />
        <span className="rail__fill" ref={fillRef} aria-hidden="true" />
        {items.map((it, i) => (
          <div className="rail__item" key={it.year}>
            <span className="rail__node" ref={(el) => (markerRefs.current[i] = el)}>
              <span
                className="rail__dot"
                ref={(el) => (dotRefs.current[i] = el)}
              />
            </span>
            <article className="rail__card" data-reveal>
              <span
                className="rail__year"
                ref={(el) => (yearRefs.current[i] = el)}
              >
                {it.year}
              </span>
              <span className="station__index">
                Глава {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          </div>
        ))}
      </div>
    )
  }

  /* ---- Desktop: winding SVG road ---- */
  return (
    <div className="road" ref={wrapRef} style={{ height: totalH }}>
      <svg
        className="road__svg"
        width={laneW}
        height={totalH}
        viewBox={`0 0 ${laneW} ${totalH}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ left: '50%', marginLeft: -laneW / 2 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e6cd8a" />
            <stop offset="0.5" stopColor="#d23b36" />
            <stop offset="1" stopColor="#2e6be6" />
          </linearGradient>
          <filter id="roadGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path className="road__ghost" d={d} />
        <path className="road__line" ref={pathRef} d={d} />
      </svg>

      {nodes.map((n, i) => (
        <div
          key={n.year}
          className={'station station--' + (n.x < laneW / 2 ? 'left' : 'right')}
          style={{ top: n.y }}
        >
          <span
            className="station__dot"
            ref={(el) => (dotRefs.current[i] = el)}
            style={{ left: `calc(50% + ${n.x - laneW / 2}px)` }}
          />
          <span
            className="station__year-float"
            ref={(el) => (yearRefs.current[i] = el)}
            style={{ left: `calc(50% + ${n.x - laneW / 2}px)` }}
          >
            {n.year}
          </span>
          <article className="station__card">
            <div className="station__inner" data-reveal>
              <span className="station__index">
                Глава {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}
