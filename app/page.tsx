const playlistId = "5qgTeFnWLchsSv3ibtsiUA";

const services = [
  {
    number: "01",
    title: "Music production",
    description:
      "Distinctive sounds, thoughtful arrangements and full production shaped around your vision.",
  },
  {
    number: "02",
    title: "Songwriting",
    description:
      "Melodies, lyrics and song ideas developed into records that connect.",
  },
  {
    number: "03",
    title: "Vocal recording",
    description:
      "A focused recording environment to help artists capture their best performance.",
  },
  {
    number: "04",
    title: "Mixing & mastering",
    description:
      "Polished, balanced sound that helps your music translate across listening environments.",
  },
];

export default function Home() {

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Greamar home">
          GREAMAR<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#credits">Produced &amp; Written</a>
          <a href="#services">Services</a>
          <a href="#booking">Book a Session</a>
        </nav>
        <a className="nav-cta" href="#booking">
          Book a session <span>↗</span>
        </a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> MUSIC PRODUCER · COMPOSER ·
            SONGWRITER
          </p>
          <h1>
            GREAMAR.
            <br />
            <span>SOUND BUILT</span>
            <br />
            DIFFERENT.
          </h1>
          <p className="hero-description">
            Creating music that moves people — blending mood, emotion and
            rhythm into timeless sounds.
          </p>
          <div className="social-row" aria-label="Social links">
            <a
              href="https://instagram.com/greamar_/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href={`https://open.spotify.com/playlist/${playlistId}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Spotify"
            >
              SP
            </a>
          </div>
        </div>
        <div
          className="hero-portrait"
          role="img"
          aria-label="Portrait of Greamar"
        >
          <div className="portrait-shade" />
          <div className="hero-stamp">
            <span>GOOD MUSIC</span>
            <b>✳</b>
            <span>LIVES LONGER</span>
          </div>
        </div>
        <a className="scroll-cue" href="#credits">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
      </section>

      <section className="about section-wrap section-border" id="about">
        <div className="about-photo">
          <img
            src="/greamar-portrait.jpg"
            alt="Greamar, Nigerian record producer and composer"
          />
          <span className="photo-caption">GREAMAR · PRODUCER / COMPOSER</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            THE STORY <i />
          </p>
          <h2>
            THE MIND BEHIND
            <br />
            <span>THE MUSIC.</span>
          </h2>
          <p>
            Great Udhe, professionally known as Greamar, is a Nigerian record
            producer and composer from Warri, Delta State, and part of a new
            generation of producers shaping Nigeria’s contemporary sound.
          </p>
          <p>
            Now based in Lagos, his musical foundation began in church, where
            he played drums and bass. Predominantly self-taught, he refined his
            craft through hands-on studio experience and independent music
            production.
          </p>
          <p>
            Rooted in African heritage and authenticity, his sound brings
            together carefully selected global rhythmic influences. His recent
            production credits include Young Jonn, Phyno, Rybeena, Tolibian and
            ODUMODUBLVCK.
          </p>
          <a className="text-link" href="#services">
            Explore services <span>↘</span>
          </a>
        </div>
        <div className="about-side-note">
          <span>WARRI ROOTS</span>
          <i />
          <span>LAGOS BASED</span>
        </div>
      </section>

      <section
        className="credits section-wrap section-border"
        id="credits"
      >
        <div className="credits-intro">
          <p className="eyebrow">
            SELECTED WORKS <i />
          </p>
          <h2>
            PRODUCED &amp;
            <br />
            <span>WRITTEN.</span>
          </h2>
          <p>
            A selection of songs from Greamar’s musical world. Listen to the
            playlist on Spotify.
          </p>
          <a
            className="button button-outline"
            href={`https://open.spotify.com/playlist/${playlistId}`}
            target="_blank"
            rel="noreferrer"
          >
            Listen on Spotify <span>↗</span>
          </a>
        </div>
        <div className="spotify-panel">
          <div className="spotify-panel-heading">
            <div>
              <span className="spotify-mark">◉</span>
              <div>
                <strong>Greamar · Selected Works</strong>
                <small>Produced &amp; written</small>
              </div>
            </div>
            <span className="spotify-label">SPOTIFY</span>
          </div>
          <iframe
            title="Greamar selected works Spotify playlist"
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      <section
        className="services section-wrap section-border"
        id="services"
      >
        <div className="services-heading">
          <div>
            <p className="eyebrow">
              WHAT I DO <i />
            </p>
            <h2>
              LET’S CREATE
              <br />
              <span>TOGETHER.</span>
            </h2>
          </div>
          <p>
            From the first idea to the final sound, I work with artists to bring
            a clear creative vision to life.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon">
                {service.number === "01"
                  ? "〽"
                  : service.number === "02"
                    ? "♫"
                    : service.number === "03"
                      ? "◉"
                      : "✳"}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                href="#booking"
                aria-label={`Enquire about ${service.title}`}
              >
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="booking section-wrap section-border"
        id="booking"
      >
        <div className="booking-copy">
          <p className="eyebrow">
            BOOK A SESSION <i />
          </p>
          <h2>
            LET’S WORK
            <br />
            <span>TOGETHER.</span>
          </h2>
          <p>
            Have a song in mind, need production, or want to collaborate? Send a
            message and let’s talk.
          </p>
          <p className="booking-email">
            DIRECT EMAIL
            <a href="mailto:greatudhe@gmail.com">
              greatudhe@gmail.com ↗
            </a>
          </p>
        </div>
        <form
          className="booking-form"
          action="https://formsubmit.co/greatudhe@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Greamar booking enquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <label>
            Your name
            <input
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="name"
              required
            />
          </label>
          <label>
            Your email
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>
          <label>
            What are you working on?
            <textarea
              name="message"
              placeholder="Tell me a little about your project..."
              rows={5}
              required
            />
          </label>
          <button className="button button-lime submit-button" type="submit">
            Send message <span>↗</span>
          </button>
          <p className="form-note">
            Your email app is not needed. Submit here and check your inbox for a FormSubmit activation email the first time.
          </p>
        </form>
      </section>

      <footer className="site-footer section-wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="wordmark" href="#home">
              GREAMAR<span>.</span>
            </a>
            <p>
              Music producer. Composer. Songwriter.
              <br />
              Sound built different.
            </p>
          </div>
          <div className="footer-links">
            <strong>EXPLORE</strong>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#credits">Produced &amp; Written</a>
            <a href="#services">Services</a>
            <a href="#booking">Book a Session</a>
          </div>
          <div className="footer-links">
            <strong>CONNECT</strong>
            <a
              href="https://instagram.com/greamar_/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href={`https://open.spotify.com/playlist/${playlistId}`}
              target="_blank"
              rel="noreferrer"
            >
              Spotify ↗
            </a>
            <a href="mailto:greatudhe@gmail.com">Email ↗</a>
          </div>
          <div className="footer-tagline">
            GOOD MUSIC
            <br />
            <span>LIVES LONGER.</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Greamar. All rights reserved.</span>
          <a href="#home">BACK TO TOP ↑</a>
          <span>WARRI · LAGOS · NIGERIA</span>
        </div>
      </footer>
    </main>
  );
}
