import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef, useState } from 'react'

const chapters = [
  { number: '01', eyebrow: 'THE BEGINNING', title: 'I was curious before I was technical.', detail: 'A school kid, a laptop, and a lot of questions. I kept opening things just to see how they worked.', visual: 'child', micro: 'CURIOUS / OBSERVE / EXPLORE' },
  { number: '02', eyebrow: 'DISCOVERY', title: 'Then computers became my playground.', detail: 'Books, tutorials, notebooks, experiments — every answer only created a better question.', visual: 'book', micro: 'READ / TRY / REPEAT' },
  { number: '03', eyebrow: 'FIRST CODE', title: 'My first bug changed everything.', detail: 'I learned that coding is not about getting it right first. It is about staying long enough to understand why it is wrong.', visual: 'terminal', micro: 'FAIL → DEBUG → LEARN' },
  { number: '04', eyebrow: 'CREATING', title: 'I stopped only learning and started building.', detail: 'Ideas became interfaces. Interfaces became little apps. Building made everything click.', visual: 'app', micro: 'IDEA → BUILD → SHIP' },
  { number: '05', eyebrow: 'GROWTH', title: 'Hard problems made me better.', detail: 'Algorithms, architecture, late nights and plenty of dead ends taught me patience and clearer thinking.', visual: 'signal', micro: 'PRACTICE / PATIENCE / PROGRESS' },
  { number: '06', eyebrow: 'REAL WORLD', title: 'Then the code met real people.', detail: 'Projects stopped being exercises. UX, performance, reliability and the people using the product started to matter just as much.', visual: 'system', micro: 'UI ↔ API ↔ DATA' },
  { number: '07', eyebrow: 'TODAY', title: 'Now I build with a team.', detail: 'I still love the code, but now I care just as much about the problem, the product and the people solving it with me.', visual: 'team', micro: 'BUILD / COLLABORATE / IMPROVE' },
  { number: '08', eyebrow: 'NEXT', title: 'And I am still at the beginning.', detail: 'The tools changed. The problems got harder. The curiosity never left — and that is probably the best part.', visual: 'future', micro: 'KEEP MOVING →' },
]

function Visual({ type, progress }) {
  const drift = useTransform(progress, [0, 1], [-12, 12])
  const rotate = useTransform(progress, [0, 1], [-1, 1])
  const scale = useTransform(progress, [0, 1], [0.97, 1.03])
  const glow = useTransform(progress, [0, 1], [0.35, 0.85])

  return (
    <motion.div className={`journey-visual journey-visual-${type}`} style={{ x: drift, rotate, scale }}>
      <div className="journey-visual-grid" />
      <motion.div className="journey-visual-glow" style={{ opacity: glow }} />
      <div className="journey-visual-top mono">
        <span>ROHAN / STORY</span>
        <span>SCROLL {String(type).toUpperCase()}</span>
      </div>
      <div className="journey-visual-center">
        {type === 'child' && (
          <div className="scene-child">
            <div className="scene-ring ring-one" />
            <div className="scene-ring ring-two" />
            <div className="scene-person"><span /></div>
            <div className="scene-desk" />
            <div className="scene-laptop"><div className="scene-screen"><span>HELLO</span><b>WORLD();</b></div></div>
            <div className="scene-book" />
          </div>
        )}
        {type === 'book' && (
          <div className="scene-book-stack">
            <div className="book-card book-one"><span>COMPUTERS</span><i /></div>
            <div className="book-card book-two"><span>LOGIC</span><i /></div>
            <div className="book-card book-three"><span>BUILD</span><i /></div>
            <div className="book-pencil" />
          </div>
        )}
        {type === 'terminal' && (
          <div className="scene-terminal">
            <div className="terminal-bar"><i /><i /><i /><span className="mono">first-program.js</span></div>
            <div className="terminal-body mono">
              <p><b>const</b> idea = <em>true</em>;</p>
              <p><b>while</b> (idea) {'{'}</p>
              <p>&nbsp;&nbsp;build();</p>
              <p>&nbsp;&nbsp;debug();</p>
              <p>&nbsp;&nbsp;learn();</p>
              <p>{'}'}</p>
              <p className="terminal-prompt">$ npm run build <span>_</span></p>
            </div>
          </div>
        )}
        {type === 'app' && (
          <div className="scene-app">
            <div className="app-sidebar"><span /><span /><span /></div>
            <div className="app-main"><i className="app-dot" /><span /><span className="wide" /><div className="app-cards"><i /><i /><i /></div><div className="app-footer"><b /><b /><b /></div></div>
            <div className="app-cursor" />
          </div>
        )}
        {type === 'signal' && (
          <div className="scene-signal">
            <span>LEARN</span><span>TEST</span><span>FAIL</span><span>UNDERSTAND</span><span>REPEAT</span>
            <div className="signal-line" />
            <div className="signal-pulse" />
          </div>
        )}
        {type === 'system' && (
          <div className="scene-system">
            <div className="system-node node-main">PRODUCT</div>
            <div className="system-node node-ui">UI</div>
            <div className="system-node node-api">API</div>
            <div className="system-node node-db">DATA</div>
            <i className="system-link sl-a" /><i className="system-link sl-b" /><i className="system-link sl-c" />
          </div>
        )}
        {type === 'team' && (
          <div className="scene-team">
            <div className="team-orbit orbit-one" /><div className="team-orbit orbit-two" />
            <div className="team-core">YOU</div>
            <div className="team-person p1">DESIGN</div><div className="team-person p2">API</div><div className="team-person p3">DATA</div><div className="team-person p4">PRODUCT</div>
            <i className="team-line tl1" /><i className="team-line tl2" /><i className="team-line tl3" /><i className="team-line tl4" />
          </div>
        )}
        {type === 'future' && (
          <div className="scene-future">
            <div className="future-sun" />
            <div className="future-horizon" />
            <div className="future-word">NEXT</div>
            <div className="future-path" />
          </div>
        )}
      </div>
      <div className="journey-visual-bottom mono"><span>{chapters.find((c) => c.visual === type)?.micro}</span><span>SCROLL TO CONTINUE</span></div>
    </motion.div>
  )
}

function Journey() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.45 })
  const chapterRaw = useTransform(smoothProgress, (value) => value * chapters.length)
  const chapterProgress = useTransform(chapterRaw, (value) => value % 1)
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(chapterRaw, 'change', (value) => {
    const next = Math.min(chapters.length - 1, Math.floor(value))
    setActiveIndex((current) => (current === next ? current : next))
  })

  const active = chapters[activeIndex]

  const jumpToChapter = (index) => {
    const element = ref.current
    if (!element) return
    const start = element.offsetTop
    const range = element.offsetHeight - window.innerHeight
    window.scrollTo({ top: start + (range * index) / chapters.length, behavior: 'smooth' })
  }

  return (
    <section ref={ref} id="story" className="journey-section">
      <div className="journey-sticky">
        <div className="journey-header">
          <div>
            <span className="section-label">02 / My story</span>
            <h2>One thing led<br /><em>to another.</em></h2>
          </div>
          <div className="journey-header-meta">
            <span className="mono">A PERSONAL LOG</span>
            <span>Scroll slowly. The story changes with you.</span>
          </div>
        </div>

        <div className="journey-body">
          <aside className="journey-rail" aria-label="Story chapters">
            <div className="journey-rail-line"><motion.span style={{ scaleY: smoothProgress }} /></div>
            {chapters.map((chapter, index) => (
              <button type="button" key={chapter.number} className={`journey-chapter ${activeIndex === index ? 'is-active' : ''}`} onClick={() => jumpToChapter(index)}>
                <span className="journey-chapter-dot" />
                <span className="journey-chapter-copy"><small className="mono">{chapter.number}</small><strong>{chapter.eyebrow}</strong></span>
              </button>
            ))}
          </aside>

          <div className="journey-copy-wrap">
            <div className="journey-copy-index mono">{active.number}</div>
            <div className="journey-copy">
              <motion.p className="journey-eyebrow" key={`eyebrow-${active.number}`}>{active.eyebrow}</motion.p>
              <motion.h3 key={`title-${active.number}`}>{active.title}</motion.h3>
              <motion.p className="journey-detail" key={`detail-${active.number}`}>{active.detail}</motion.p>
              <div className="journey-note-row">
                <span className="journey-micro mono">{active.micro}</span>
                <span className="journey-scroll-hint mono">↓ keep scrolling</span>
              </div>
            </div>
          </div>

          <div className="journey-visual-wrap">
            <Visual type={active.visual} progress={chapterProgress} />
          </div>
        </div>

        <div className="journey-footer">
          <span className="mono">{active.number} / {chapters.length.toString().padStart(2, '0')}</span>
          <div className="journey-progress"><motion.span style={{ scaleX: smoothProgress }} /></div>
          <span className="mono">my-story.exe</span>
        </div>
      </div>
    </section>
  )
}

export default Journey
