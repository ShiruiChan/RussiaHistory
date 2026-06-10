import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Главная', end: true },
  { to: '/scientists', label: 'Учёные' },
  { to: '/cities', label: 'Города' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          <span className="navbar__flag" aria-hidden="true" />
          <span className="navbar__brand-text">История&nbsp;России</span>
        </NavLink>
        <nav className="navbar__links" aria-label="Основная навигация">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                'navbar__link' + (isActive ? ' navbar__link--active' : '')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
