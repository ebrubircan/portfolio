import { aboutContent } from '../data/about'

export function AboutPage() {
  return (
    <main className="page-container about-page" aria-labelledby="about-title">
      <header className="about-page__intro">
        <h1 id="about-title">{aboutContent.intro.heading}</h1>
        <p>{aboutContent.intro.description}</p>
      </header>

      <div className="about-page__context">
        <section aria-labelledby="background-title">
          <h2 id="background-title">{aboutContent.background.title}</h2>
          <p>{aboutContent.background.description}</p>
        </section>
        <section aria-labelledby="how-i-work-title">
          <h2 id="how-i-work-title">{aboutContent.howIWork.title}</h2>
          <p>{aboutContent.howIWork.description}</p>
        </section>
      </div>

      <section className="about-page__areas" aria-labelledby="areas-title">
        <h2 id="areas-title">{aboutContent.areas.title}</h2>
        <div className="about-page__areas-list">{aboutContent.areas.items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </section>
    </main>
  )
}
