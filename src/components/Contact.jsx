import { CONTACT } from '../constants'

function Contact() {
  return (
    <section id="contact" className="section dark-section contact contact-v3">
      <div className="section-container contact-inner">
        <div className="contact-topline">
          <span className="section-label">05 / Contact</span>
          <span className="mono">OPEN FOR SOMETHING WORTH BUILDING</span>
        </div>

        <div className="contact-orbit" aria-hidden="true">
          <span className="contact-orbit-ring contact-orbit-ring-a" />
          <span className="contact-orbit-ring contact-orbit-ring-b" />
          <span className="contact-orbit-dot contact-orbit-dot-a" />
          <span className="contact-orbit-dot contact-orbit-dot-b" />
        </div>

        <div className="contact-main">
          <div className="contact-copy-block">
            <p className="contact-kicker mono">Have a project, idea, or problem?</p>
            <h2>Let&apos;s make<br /><a href={`mailto:${CONTACT.email}`}>something matter.</a></h2>
            <p className="contact-copy">I like thoughtful products, challenging frontend problems, and teams that care about the details.</p>
          </div>

          <div className="contact-action-column">
            <a className="contact-button contact-button-v3" href={`mailto:${CONTACT.email}`}>
              <span className="contact-button-index mono">01</span>
              <span>Start a conversation</span>
              <span className="contact-button-arrow">↗</span>
            </a>
            <div className="contact-meta-grid">
              <a href={`mailto:${CONTACT.email}`}><span className="mono">EMAIL</span>{CONTACT.email}</a>
              <a href="https://github.com/rohan11110" target="_blank" rel="noreferrer"><span className="mono">GITHUB</span>rohan11110 ↗</a>
              <a href="https://www.linkedin.com/in/rohanvimal/" target="_blank" rel="noreferrer"><span className="mono">LINKEDIN</span>rohanvimal ↗</a>
              <span><span className="mono">BASE</span> {CONTACT.address}</span>
            </div>
          </div>
        </div>

        <footer className="contact-footer contact-footer-v3">
          <span>© {new Date().getFullYear()} Rohan Vimal</span>
          <span className="contact-footer-center mono">BUILT WITH CURIOSITY · REACT</span>
          <span>SCROLL BACK ↑</span>
        </footer>
      </div>
    </section>
  )
}

export default Contact
