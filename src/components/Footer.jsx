export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">
          <span className="navbar__flag" aria-hidden="true" />
          История&nbsp;России
        </span>
        <p>
          © {new Date().getFullYear()} · Образовательная презентация · Сделано с
          уважением к прошлому
        </p>
      </div>
    </footer>
  )
}
