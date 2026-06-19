import Link from "next/link";

/*
 * Site header — quiet, sticky, hairline. Wordmark + minimal nav + an honest
 * availability note (Breno is in transition and open to work — real, not copy).
 */
export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="wordmark" aria-label="Breno Sampaio — home">
          BS<span className="dot">.</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#approach" className="nav-hide-sm">Approach</Link>
        </nav>

        <div className="header-right">
          <span className="availability">
            <span className="dot" aria-hidden="true" />
            Available for new work
          </span>
          <Link href="/#contact" className="header-contact">
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
