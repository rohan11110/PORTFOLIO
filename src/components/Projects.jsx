import { motion } from 'motion/react'
import { PROJECTS } from '../constants'

const projectPatterns = ['window', 'chat', 'dashboard', 'game']

function ProjectVisual({ type, index }) {
  return <div className={`project-visual project-visual-${type}`} aria-hidden="true">
    <div className="project-visual-top mono"><span>0{index + 1}</span><span>LIVE BUILD</span></div>
    {type === 'window' && <div className="mini-window"><div /><div /><div /><div /><div /></div>}
    {type === 'chat' && <div className="mini-chat"><span /><span /><span /><span /></div>}
    {type === 'dashboard' && <div className="mini-dashboard"><i /><i /><i /><div /></div>}
    {type === 'game' && <div className="mini-game"><span>+</span><span>↗</span><span>×</span></div>}
  </div>
}

function Projects() {
  return <section id="work" className="section work-section">
    <div className="work-header">
      <div>
        <p className="section-label">04 / Selected work</p>
        <h2>Things I made<br />to solve a problem.</h2>
      </div>
      <div className="work-intro"><span className="mono">{String(PROJECTS.length).padStart(2, '0')} builds</span><p>Hover a project. The preview is generated with the interface itself—no screenshots needed.</p></div>
    </div>

    <div className="project-list">
      {PROJECTS.map((project, index) => <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: index * .06 }} className="project project-rich">
        <div className="project-num mono">0{index + 1}</div>
        <div className="project-core"><div className="project-title-row"><h3>{project.title}</h3><span className="project-arrow">↗</span></div><p className="project-tech mono">{project.technologies.join(' / ')}</p><p className="project-desc">{project.description}</p></div>
        <ProjectVisual type={projectPatterns[index % projectPatterns.length]} index={index} />
      </motion.article>)}
    </div>
  </section>
}

export default Projects
