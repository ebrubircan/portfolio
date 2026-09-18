import { site } from '../data/site'

const contactLinks = site.links ?? []
const linkedIn = contactLinks.find((link) => link.label === 'LinkedIn')
const gitHub = contactLinks.find((link) => link.label === 'GitHub')

function LinkedInIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5.2 3.5A1.7 1.7 0 1 1 5.2 7a1.7 1.7 0 0 1 0-3.5ZM3.7 8.4h3v12h-3v-12Zm4.9 0h2.9V10h.1c.4-.8 1.4-1.9 3.2-1.9 3.4 0 4 2.2 4 5.2v7.1h-3v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.4h-3v-12Z" fill="currentColor" /></svg>
}

function GitHubIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2.6a9.7 9.7 0 0 0-3.1 18.9c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.4-1.1.7-1.3-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.2 9.2 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.8V21c0 .3.2.6.7.5A9.7 9.7 0 0 0 12 2.6Z" fill="currentColor" /></svg>
}

export function ContactPage() {
  return (
    <main className="page-container contact-page" aria-labelledby="contact-title">
      <header className="contact-page__intro">
        <p className="editorial-page__label">Contact</p>
        <h1 id="contact-title">Let&apos;s talk.</h1>
        <p>I am open to discussing software engineering opportunities, interesting projects and thoughtful collaborations.</p>
      </header>

      <section className="contact-page__details" aria-labelledby="contact-details-title">
        <h2 id="contact-details-title" className="sr-only">Contact details</h2>
        <p className="contact-page__email-label">Email</p>
        {site.email ? <a className="contact-page__email" href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">→</span></a> : null}
        <nav aria-label="Social profiles" className="contact-page__social-links">
          {linkedIn ? <a href={linkedIn.href} rel="noreferrer" target="_blank"><LinkedInIcon />LinkedIn <span aria-hidden="true">→</span></a> : null}
          {gitHub ? <a href={gitHub.href} rel="noreferrer" target="_blank"><GitHubIcon />GitHub <span aria-hidden="true">→</span></a> : null}
        </nav>
        <p className="contact-page__location">Istanbul, Turkey</p>
      </section>

      {site.peopleWorkedWith?.length ? <section className="contact-page__people" aria-labelledby="people-worked-with-title">
        <h2 id="people-worked-with-title">People I&apos;ve worked with</h2>
        <div>{site.peopleWorkedWith.map((person) => <article key={person.href}><h3>{person.name}</h3><p>{person.title}</p><a href={person.href} rel="noreferrer" target="_blank"><LinkedInIcon />LinkedIn <span aria-hidden="true">→</span></a></article>)}</div>
      </section> : null}
    </main>
  )
}
