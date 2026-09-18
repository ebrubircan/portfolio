import { Link } from 'react-router-dom'
import kioskGraduationProject from '../../assets/images/kiosk-graduation-project.jpg'
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="page-container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Software Developer</p>
          <h1 id="hero-title">Building useful digital products, from interface to intelligence.</h1>
          <p className="hero__summary">I’m Ebru Bircan, a software developer working across frontend, backend, and AI-powered applications.</p>
          <div className="hero__actions" aria-label="Hero actions">
            <Link className="hero__action" to="/projects">View my projects <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <figure className="hero__project-photo">
          <img alt="Ebru Bircan standing beside her graduation project, an interactive faculty kiosk" src={kioskGraduationProject} />
          <figcaption>Graduation project — interactive faculty kiosk</figcaption>
        </figure>
      </div>
    </section>
  )
}
