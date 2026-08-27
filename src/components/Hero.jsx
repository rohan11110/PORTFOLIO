import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useEffect, useState } from 'react'

const codeLines = [
  'const curiosity = true;',
  'while (curiosity) {',
  '  build();',
  '  breakThings();',
  '  learn();',
  '}',
]

function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 22 })
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 22 })
  const gridX = useTransform(smoothX, [-1, 1], ['-18px', '18px'])
  const gridY = useTransform(smoothY, [-1, 1], ['-18px', '18px'])
  const orbX = useTransform(smoothX, [-1, 1], ['-30px', '30px'])
  const orbY = useTransform(smoothY, [-1, 1], ['-22px', '22px'])
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-IN', { timeStyle: 'short' }).format(new Date()))
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width * 2 - 1)
    mouseY.set((event.clientY - rect.top) / rect.height * 2 - 1)
  }

  return (
    <section id="top" className="hero hero-v2" onPointerMove={handlePointerMove}>
      <motion.div className="hero-grid-drift" style={{ x: gridX, y: gridY }} />
      <motion.div className="hero-orb" style={{ x: orbX, y: orbY }} />

      <div className="hero-topline">
        <span className="hero-kicker">Software engineer / builder</span>
        <span className="hero-topline-right"><span className="pulse-dot" /> available for interesting problems · {time}</span>
      </div>

      <div className="hero-main">
        <div className="hero-copy-block">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="hero-overline mono">01 — make it useful</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .05 }} className="hero-title">I build things<br />people <em>enjoy</em> using.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .18 }} className="hero-lede">From curious experiments to production-ready interfaces, I like turning a rough idea into something clear, fast, and a little delightful.</motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .26 }} className="hero-actions">
            <a href="#story" className="hero-cta hero-cta-primary">Enter the story <span>↓</span></a>
            <a href="#work" className="hero-cta hero-cta-secondary">See the work <span>↗</span></a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .3 }} className="hero-terminal-card" aria-label="Interactive code vignette">
          <div className="hero-terminal-top"><span className="mono">/home/rohan/ideas</span><span>RUNNING</span></div>
          <div className="hero-code">
            {codeLines.map((line, index) => <div key={line} className="hero-code-line"><span className="hero-code-index">0{index + 1}</span><span>{line}</span></div>)}
          </div>
          <div className="hero-terminal-bottom"><span>builds / 024</span><span>status: shipping</span></div>
        </motion.div>
      </div>

      <div className="hero-bottom hero-bottom-v2">
        <p>React · Next.js · Node.js · TypeScript · Java</p>
        <p>Scroll to explore ↓</p>
      </div>
    </section>
  )
}

export default Hero
