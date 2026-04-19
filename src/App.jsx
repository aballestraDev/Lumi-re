import { useState, useEffect } from 'react'
import './index.css'
import { restaurantData } from './data'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [lightbox, setLightbox] = useState({ open: false, image: '', title: '' })
  const [menuModal, setMenuModal] = useState(false)
  const [activeMenuTab, setActiveMenuTab] = useState(0)
  const data = restaurantData

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800)
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 50))
    return () => clearTimeout(timer)
  }, [])

  const openLightbox = (image, title) => setLightbox({ open: true, image, title })
  const closeLightbox = () => setLightbox({ open: false, image: '', title: '' })
  const openMenuModal = () => setMenuModal(true)
  const closeMenuModal = () => setMenuModal(false)

  if (isLoading) {
    return (
      <div className="intro-loader">
        <div className="intro-content">
          <div className="intro-ring"></div>
          <div className="intro-logo-container">
            <h1 className="intro-logo">{data.name}<span>.</span></h1>
          </div>
          <p className="intro-tagline">Fine Dining Experience</p>
          <div className="intro-loader-bar">
            <div className="intro-loader-progress"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Lightbox */}
      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close">&times;</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} />
            <p>{lightbox.title}</p>
          </div>
        </div>
      )}

      {/* Full Menu Modal */}
      {menuModal && (
        <div className="menu-modal" onClick={closeMenuModal}>
          <button className="menu-modal-close" onClick={closeMenuModal}>&times;</button>
          <div className="menu-modal-content" onClick={e => e.stopPropagation()}>
            <h2>Our Menu</h2>
            <div className="menu-modal-tabs">
              {data.menuCategories.map((cat, i) => (
                <button key={i} className={`menu-modal-tab ${activeMenuTab === i ? 'active' : ''}`} onClick={() => setActiveMenuTab(i)}>{cat.name}</button>
              ))}
            </div>
            <div className="menu-modal-items">
              {data.menuCategories[activeMenuTab].items.map((item, i) => (
                <div className="menu-modal-item" key={i}>
                  <div className="menu-modal-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-dots"></span>
                    <span className="menu-modal-price">{item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="logo">{data.name}<span>.</span></a>
        <ul className="nav-links">
          {data.nav.map((item, i) => <li key={i}><a href={item.href}>{item.label}</a></li>)}
        </ul>
        <button className="cta-btn">{data.cta.primary}</button>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-bg" onClick={() => openLightbox(data.images.hero, 'Savoria Restaurant')} style={{cursor: 'pointer'}}>
          <img src={data.images.hero} alt="Fine dining" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge">{data.badge}</span>
          <h1>{data.tagline}</h1>
          <p>{data.description}</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => document.getElementById('menu').scrollIntoView({behavior: 'smooth'})}>{data.cta.primary}</button>
            <a href="#menu" className="secondary-btn">{data.cta.secondary}</a>
          </div>
          <div className="hero-stats">
            {data.stats.map((stat, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-image" onClick={() => openLightbox(data.images.about, 'Our Story')} style={{cursor: 'pointer'}}>
          <img src={data.images.about} alt="About" />
          <div className="about-accent"></div>
        </div>
        <div className="about-content">
          <span className="section-tag">Our Story</span>
          <h2>{data.about.title}</h2>
          <p>{data.about.description}</p>
          <div className="about-values">
            {data.about.values.map((v, i) => (
              <div className="value-item" key={i}>
                <span className="value-title">{v.title}</span>
                <span className="value-desc">{v.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="features-header">
          <span className="section-tag">Why Savoria</span>
          <h2>Excellence in Every Detail</h2>
        </div>
        <div className="features-grid">
          {data.features.map((f, i) => (
            <div className="feature-card" key={i} onClick={() => openLightbox(f.image, f.title)} style={{cursor: 'pointer'}}>
              <div className="feature-image">
                <img src={f.image} alt={f.title} />
              </div>
              <div className="feature-text">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section className="menu" id="menu">
        <div className="menu-header">
          <span className="section-tag">Signature Dishes</span>
          <h2>Culinary Masterpieces</h2>
        </div>
        <div className="menu-grid">
          {data.menu.map((item, i) => (
            <div className="menu-item" key={i} onClick={() => openLightbox(item.image, item.name)} style={{cursor: 'pointer'}}>
              <div className="menu-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="menu-btn" onClick={openMenuModal}>Explore Full Menu</button>
      </section>

      {/* Gallery */}
      <section className="gallery" id="gallery">
        <div className="gallery-header">
          <span className="section-tag">Gallery</span>
          <h2>Experience Savoria</h2>
        </div>
        <div className="gallery-grid">
          {data.images.gallery.map((img, i) => (
            <div className="gallery-item" key={i} onClick={() => openLightbox(img, `Gallery ${i + 1}`)} style={{cursor: 'pointer'}}>
              <img src={img} alt={`Gallery ${i + 1}`} />
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg" onClick={() => openLightbox(data.images.hero, 'Reserve Your Table')} style={{cursor: 'pointer'}}>
          <img src={data.images.hero} alt="Reservation" />
          <div className="cta-overlay"></div>
        </div>
        <div className="cta-content">
          <h2>{data.reservation.title}</h2>
          <p>{data.reservation.description}</p>
          <button className="cta-btn-large">{data.reservation.cta}</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonials-header">
          <span className="section-tag">Testimonials</span>
          <h2>What Guests Say</h2>
        </div>
        <div className="testimonials-grid">
          {data.testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="quote-icon">"</div>
              <p>{t.text}</p>
              <div className="testimonial-author">
                <div className="avatar">{t.initials}</div>
                <div>
                  <h4>{t.author}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>{data.name}<span>.</span></h3>
            <p>{data.footer.description}</p>
            <div className="footer-contact">
              <p>{data.footer.address}</p>
              <p>{data.footer.city}</p>
              <p>{data.footer.phone}</p>
              <p>{data.footer.email}</p>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {data.nav.map((n, i) => <li key={i}><a href={n.href}>{n.label}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Hours</h4>
            <ul>
              {data.footer.hours.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <div className="social-links">
              {data.footer.social.map((s, i) => <a key={i} href="#">{s.icon}</a>)}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {data.year} {data.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App