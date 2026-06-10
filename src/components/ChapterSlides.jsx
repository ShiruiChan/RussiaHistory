import { useEffect, useRef, useState } from 'react'
import { IconArrow } from './icons.jsx'

export default function ChapterSlides({ chapters }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    const update = () => {
      raf = 0
      const slide = track.querySelector('.slide')
      if (!slide) return
      const step = slide.offsetWidth + 20 // slide + gap
      setActive(Math.round(track.scrollLeft / step))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const goTo = (i) => {
    const track = trackRef.current
    if (!track) return
    const slide = track.querySelector('.slide')
    if (!slide) return
    const step = slide.offsetWidth + 20
    const clamped = Math.max(0, Math.min(chapters.length - 1, i))
    track.scrollTo({ left: clamped * step, behavior: 'smooth' })
  }

  return (
    <div className="slides">
      <div className="slides__head">
        <div className="section__head" style={{ marginBottom: 0 }} data-reveal>
          <span className="kicker">Эпохи</span>
          <h2>Пять глав одной истории</h2>
          <p>Пролистайте ключевые периоды - от древних княжеств до наших дней.</p>
        </div>
        <div className="slides__nav">
          <button
            type="button"
            className="slides__btn"
            onClick={() => goTo(active - 1)}
            disabled={active <= 0}
            aria-label="Предыдущая эпоха"
          >
            <IconArrow style={{ transform: 'rotate(180deg)' }} />
          </button>
          <button
            type="button"
            className="slides__btn"
            onClick={() => goTo(active + 1)}
            disabled={active >= chapters.length - 1}
            aria-label="Следующая эпоха"
          >
            <IconArrow />
          </button>
        </div>
      </div>

      <div className="slides__track" ref={trackRef}>
        {chapters.map((c, i) => (
          <article key={c.title} className={`slide slide--${i + 1}`}>
            <span className="slide__no">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <p className="slide__range">{c.range}</p>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="slides__dots" role="tablist" aria-label="Навигация по эпохам">
        {chapters.map((c, i) => (
          <button
            key={c.title}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={c.title}
            className={'slides__dot' + (active === i ? ' slides__dot--active' : '')}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
