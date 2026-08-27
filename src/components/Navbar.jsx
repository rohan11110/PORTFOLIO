import { useEffect, useState } from 'react'

function Navbar() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const sections = ['top', 'story', 'experience', 'work', 'contact']
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { threshold: [0.2, 0.5, 0.75] })
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return <header className="site-nav site-nav-v2">
    <a className="nav-name" href="#top">Rohan<span>.</span></a>
    <nav className="nav-links" aria-label="Primary navigation">{[['top', 'Home'], ['story', 'Story'], ['experience', 'Experience'], ['work', 'Work'], ['contact', 'Contact']].map(([id, label]) => <a key={id} className={active === id ? 'is-active' : ''} href={`#${id}`}>{label}</a>)}</nav>
    <a className="nav-hello mono" href="mailto:Rohan2k25@gmail.com"><span className="nav-status" /> Say hello ↗</a>
  </header>
}

export default Navbar
