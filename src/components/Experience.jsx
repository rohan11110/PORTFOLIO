import { motion } from 'motion/react'
import { EXPERIENCES } from '../constants'

function Experience() {
  return (
    <section id="experience" className="section experience-section experience-v3">
      <div className="section-container">
        <div className="experience-header">
          <div className="experience-heading-block">
            <p className="section-label">03 / Experience</p>
            <h2>Where ideas<br /><em>became shipped work.</em></h2>
          </div>
          <div className="experience-intro">
            <span className="mono">ONE ROLE · REAL PRODUCTS</span>
            <p>Learning fast, owning the frontend, and helping turn product requirements into reliable experiences.</p>
          </div>
        </div>

        <div className="experience-feature">
          <div className="experience-rail" aria-hidden="true">
            <span className="experience-rail-dot" />
            <span className="experience-rail-line" />
            <span className="experience-rail-end" />
          </div>

          {EXPERIENCES.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              className="experience-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="experience-card-top">
                <div>
                  <span className="experience-index mono">0{index + 1}</span>
                  <p className="experience-company mono">{experience.company}</p>
                  <h3>{experience.role}</h3>
                </div>
                <div className="experience-date-block">
                  <span className="experience-status"><i /> CURRENT</span>
                  <span className="experience-date mono">{experience.period}</span>
                  <span className="experience-location mono">{experience.location}</span>
                </div>
              </div>

              <div className="experience-card-bottom">
                <p className="experience-description">{experience.description}</p>
                <div className="experience-tags" aria-label="Technologies used">
                  {experience.highlights.map((highlight) => (
                    <span key={highlight} className="experience-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="experience-foot mono">
          <span>FEB 2025 → PRESENT</span>
          <span>BUILDING WITH REACT / NEXT / NODE / FIREBASE</span>
        </div>
      </div>
    </section>
  )
}

export default Experience
