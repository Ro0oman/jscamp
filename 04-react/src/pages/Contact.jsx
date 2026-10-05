

export function Contact() {
  return (
    <>
      <div className="contact-page">

      <main className="contact-main">
        <section className="contact-section">
          <h2>📬 Contacto</h2>
          <p>
            Si quieres trabajar conmigo, colaborar en un proyecto o simplemente
            hablar sobre desarrollo web, puedes encontrarme aquí:
          </p>

          <ul className="contact-list">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:romainot99@gmail.com">
                romainot99@gmail.com
              </a>
            </li>


            <li>
              <strong>Portfolio:</strong>{" "}
              <a
                href="https://roman-myziuk-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                roman-myziuk-portfolio.vercel.app
              </a>
            </li>

            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mi GitHub
              </a>
            </li>

            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mi LinkedIn
              </a>
            </li>
          </ul>
        </section>

        <form className="formulario-contacto">
            <h1>🚀 Contactame</h1>
          <div>
            <input
              required
              name="name"
              type="text"
              placeholder="Nombre"
            />
            <input
              required
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <input
            className="details"
              required
              name="details"
              type="text"
              placeholder="Detalles"
            />
          </div>
          <button>Contact</button>
        </form>

      </main>

    
    </div>
    </>
  );
}
