import { useEffect, useRef } from 'react'
import './App.css'
import logo from './assets/Logo.jpg'

const capabilities = [
  'Semantic cloud optimization',
  'AI-driven infrastructure concepts',
  'Mobile application development',
  'Digital platform engineering',
]

const aboutLines = [
  'Nexlore Technologies Pvt Ltd is a technology-focused company.',
  'We build innovative digital solutions for modern business needs.',
  'Our work spans cloud optimization, intelligent infrastructure, and mobile applications.',
]

const visionLines = [
  'To create intelligent and scalable digital systems.',
  'To reduce technological complexity through practical engineering.',
  'To improve future digital infrastructure efficiency.',
]

const missionPoints = [
  'Develop innovative problem-solving technologies',
  'Build scalable digital platforms',
  'Explore AI-driven infrastructure optimization',
  'Deliver practical and efficient software solutions',
]

const focusPoints = [
  'Distributed cloud optimization',
  'AI-driven multimedia infrastructure',
  'Smart automation systems',
  'Data optimization architectures',
]

const values = [
  'Innovation-focused approach',
  'Practical problem solving',
  'Scalable digital vision',
  'Future-ready engineering',
]

const contactLines = [
  'Head Office: No:44/2/6, Ground Floor, Middle Street, Thamminayackan Patty (PO), Thevaram, Theni, Tamil Nadu - 625530',
  'Branch Office: Door No: 2/99/12, SF No: 646/1A, Murugam Palayam, Vanjipalayam (PO), Mangalam (Via), Tirupur - 641663',
]

const services = [
  {
    title: 'Cloud optimization',
    description: 'Semantic cloud workflows and distributed systems designed to stay efficient as demand grows.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="6" width="17" height="12" rx="2" />
        <path d="M8.5 12h7m-7 3h5m6.5-5-8-5-8 5" />
      </svg>
    ),
  },
  {
    title: 'AI infrastructure',
    description: 'Concept-driven AI systems that improve data handling, automation, and platform intelligence.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M5.9 5.9l2.2 2.2M15.9 15.9l2.2 2.2M18.1 5.9l-2.2 2.2M8.1 15.9l-2.2 2.2" />
      </svg>
    ),
  },
  {
    title: 'Mobile products',
    description: 'Clear, usable mobile application experiences with service flows and practical product thinking.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
        <path d="M10.5 5.5h3M10 17.8h4M12 20h.01" />
      </svg>
    ),
  },
]

function LineStack({ items, tone = 'default' }: { items: string[]; tone?: 'default' | 'muted' }) {
  return (
    <div className={`line-stack ${tone}`}>
      {items.map((item, index) => (
        <p
          key={item}
          className="line-item"
          style={{ animationDelay: `${index * 110}ms` }}
        >
          {item}
        </p>
      ))}
    </div>
  )
}

function App() {
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const hero = heroRef.current

    if (!hero) {
      return
    }

    const handleMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      hero.style.setProperty('--parallax-x', `${x * 18}px`)
      hero.style.setProperty('--parallax-y', `${y * 18}px`)
    }

    const handleLeave = () => {
      hero.style.setProperty('--parallax-x', '0px')
      hero.style.setProperty('--parallax-y', '0px')
    }

    hero.addEventListener('pointermove', handleMove)
    hero.addEventListener('pointerleave', handleLeave)

    return () => {
      hero.removeEventListener('pointermove', handleMove)
      hero.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return (
    <>
      <main className="page-shell">
        <header className="topbar reveal">
        <div className="brand-lockup">
          <img className="brand-logo" src={logo} alt="Nexlore Technologies logo" />
          <div>
            <p className="eyebrow">Nexlore Technologies Pvt Ltd</p>
            <p className="topbar-note">Building smarter digital systems</p>
          </div>
        </div>

        <nav className="topnav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#vision">Vision</a>
          <a href="#contact">Contact</a>
        </nav>
        </header>

        <section ref={heroRef} className="hero-card reveal delay-1">
        <div className="parallax-orb orb-a" aria-hidden="true" />
        <div className="parallax-orb orb-b" aria-hidden="true" />
        <div className="parallax-orb orb-c" aria-hidden="true" />

        <div className="hero-copy">
          <div className="hero-brand">
            <img className="hero-logo" src={logo} alt="Nexlore Technologies logo" />
            <div>
              <p className="eyebrow">Nexlore Technologies Pvt Ltd</p>
              <p className="hero-brand-note">Technology company focused on intelligent digital systems</p>
            </div>
          </div>

          <p className="eyebrow">Home page</p>
          <h1>Clean digital platforms for modern businesses.</h1>
          <LineStack
            items={[
              'Innovative technology solutions focused on semantic cloud optimization.',
              'AI-driven infrastructure concepts designed for scalability.',
              'Mobile applications and next-generation digital platforms.',
            ]}
          />

          <div className="hero-actions">
            <a href="#contact" className="primary-action">
              Contact us
            </a>
            <a href="#about" className="secondary-action">
              Learn more
            </a>
          </div>

          <div className="hero-stats" aria-label="Company highlights">
            <div>
              <strong>Scalable</strong>
              <span>Architectures that grow with your roadmap</span>
            </div>
            <div>
              <strong>Practical</strong>
              <span>Solutions shaped around real business needs</span>
            </div>
            <div>
              <strong>Future-ready</strong>
              <span>Technology exploration with long-term value</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel floating-card">
          <div className="panel-badge">Company overview</div>
          <h2>We turn complex technical goals into clear product direction.</h2>
          <p>
            Our work spans cloud optimization, intelligent infrastructure, mobile product
            development, and digital platform engineering.
          </p>

          <div className="panel-list">
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
        </section>

        <div className="section-divider reveal delay-2" aria-hidden="true">
          <span>About</span>
        </div>

        <section className="section-block reveal delay-2" id="about">
        <div className="section-heading">
          <p className="section-label">About us</p>
          <h2>Who we are</h2>
        </div>
        <LineStack items={aboutLines} tone="muted" />
        </section>

        <div className="section-divider reveal delay-3" aria-hidden="true">
          <span>Services</span>
        </div>

        <section className="services-band reveal delay-3" id="services">
        <div className="section-heading">
          <p className="section-label">Services</p>
          <h2>What we do</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title} style={{ animationDelay: `${index * 120}ms` }}>
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        </section>

        <div className="section-divider reveal delay-4" aria-hidden="true">
          <span>Capabilities</span>
        </div>

        <section className="grid-layout reveal delay-4" id="capabilities">
        <article className="content-card spacious">
          <p className="section-label">Mission</p>
          <h2>Focused on practical innovation.</h2>
          <ul className="checklist animated-list">
            {missionPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="content-card accent">
          <p className="section-label">Mobile application development</p>
          <h2>Pandit Seva Mobile App</h2>
          <p>
            A digital platform connecting users with spiritual and traditional service
            providers through simplified booking and service management solutions.
          </p>
          <div className="inline-note">
            Designed for real-world usability, clarity, and smooth user journeys.
          </div>
        </article>

        <article className="content-card">
          <p className="section-label">Focus areas</p>
          <h2>Technical solutions for digital inefficiencies.</h2>
          <ul className="bullet-list">
            {focusPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        </section>

        <div className="section-divider reveal delay-5" aria-hidden="true">
          <span>Vision</span>
        </div>

        <section className="grid-layout reveal delay-5" id="vision">
        <article className="content-card spacious wide-card">
          <p className="section-label">Vision</p>
          <h2>To create intelligent and scalable digital systems.</h2>
          <LineStack items={visionLines} tone="muted" />
          <div className="pill-grid">
            {values.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>

        <article className="content-card">
          <p className="section-label">Why Nexlore</p>
          <h2>Built with a calm, clear, and scalable mindset.</h2>
          <p>
            We keep design and technology aligned so the result feels reliable,
            modern, and easy to understand.
          </p>
        </article>
        </section>

        <div className="section-divider reveal delay-5" aria-hidden="true">
          <span>Contact</span>
        </div>

        <section className="contact-card reveal delay-5" id="contact">
        <div>
          <p className="section-label">Contact us</p>
          <h2>Nexlore Technologies Pvt Ltd</h2>
          <LineStack items={contactLines} tone="muted" />
        </div>

        <div className="contact-columns">
          <div>
            <h3>Branch office</h3>
            <p>Door No: 2/99/12, SF No: 646/1A</p>
            <p>Murugam Palayam, Vanjipalayam (PO)</p>
            <p>Mangalam (Via), Tirupur - 641663</p>
          </div>
          <div>
            <h3>Contact numbers</h3>
            <p>+91 7598209215</p>
            <p>+91 9994169088</p>
          </div>
        </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-shell">
          <div className="footer-brand">
            <img className="footer-logo" src={logo} alt="Nexlore Technologies logo" />
            <div>
              <p className="eyebrow">Nexlore Technologies Pvt Ltd</p>
              <p className="footer-tagline">Intelligent and scalable digital systems.</p>
            </div>
          </div>

          <div className="footer-columns">
            <div>
              <h3>Registered offices</h3>
              <p>No:44/2/6, Ground Floor, Middle Street, Thamminayackan Patty (PO), Thevaram, Theni, Tamil Nadu - 625530</p>
              <p>Door No: 2/99/12, SF No: 646/1A, Murugam Palayam, Vanjipalayam (PO), Mangalam (Via), Tirupur - 641663</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>+91 7598209215</p>
              <p>+91 9994169088</p>
            </div>
            <div>
              <h3>Legal</h3>
              <p>Privacy policy</p>
              <p>Terms of use</p>
              <p>Compliance and governance</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Nexlore Technologies Pvt Ltd. All rights reserved.</p>
            <p>Designed for modern, secure, and scalable digital ecosystems.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
