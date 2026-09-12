import { motion } from 'motion/react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { PROJECTS } from '../constants'

const projectPatterns = ['collab', 'loader', 'window', 'chat', 'dashboard', 'game']

function ProjectVisual({ type, index }) {
  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      <div className="project-visual-top mono">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>BUILD / {type.toUpperCase()}</span>
      </div>

      {type === 'collab' && (
        <div className="mini-collab">
          <div className="mini-collab-bar"><span /><span /><span /><b>Untitled document</b></div>
          <div className="mini-collab-body">
            <div className="mini-collab-sidebar"><i /><i /><i /><i /></div>
            <div className="mini-collab-page"><strong>Project notes</strong><span /><span /><span /><span /><small>● ● ●</small></div>
            <div className="mini-collab-users"><i /><i /><i /></div>
          </div>
        </div>
      )}

      {type === 'loader' && (
        <div className="mini-loader">
          <div className="mini-loader-progress"><span /></div>
          <div className="mini-loader-screen"><b>Loading next route</b><span /><span /><span /></div>
        </div>
      )}

      {type === 'window' && <div className="mini-window"><div /><div /><div /><div /><div /></div>}
      {type === 'chat' && <div className="mini-chat"><span /><span /><span /><span /></div>}
      {type === 'dashboard' && <div className="mini-dashboard"><i /><i /><i /><div /></div>}
      {type === 'game' && <div className="mini-game"><span>+</span><span>↗</span><span>×</span></div>}
    </div>
  )
}

function Projects() {
  return (
    <section id="work" className="section work-section">
      <div className="work-header">
        <div>
          <p className="section-label">04 / Selected work</p>
          <h2>Things I made<br />to solve a problem.</h2>
        </div>
        <div className="work-intro">
          <span className="mono">{String(PROJECTS.length).padStart(2, '0')} builds</span>
          <p>Products, experiments, and open-source work—built to be useful, fast, and pleasant to use.</p>
        </div>
      </div>

      <div className="project-list">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="project project-rich"
          >
            <div className="project-num mono">{String(index + 1).padStart(2, '0')}</div>

            <div className="project-core">
              <div className="project-title-row">
                <div>
                  <p className="project-eyebrow mono">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                </div>
                {project.url ? (
                  <a
                    className="project-link-icon"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} external link`}
                  >
                    <ExternalLink size={18} />
                  </a>
                ) : (
                  <span className="project-arrow"><ArrowUpRight size={19} /></span>
                )}
              </div>

              <p className="project-tech mono">{project.technologies.join(' / ')}</p>
              <p className="project-desc">{project.description}</p>

              {project.features?.length > 0 && (
                <div className="project-features">
                  {project.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
              )}

              {project.url && (
                <a className="project-inline-link" href={project.url} target="_blank" rel="noreferrer">
                  {project.linkLabel || 'View project'} <ArrowUpRight size={15} />
                </a>
              )}
            </div>

            <ProjectVisual type={projectPatterns[index % projectPatterns.length]} index={index} />
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
