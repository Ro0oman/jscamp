

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
              <strong>Teléfono:</strong>{" "}
              <a href="tel:+34634662067">
                +34 634 66 20 67
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

        <section className="contact-section about">
          <h2>🚀 Sobre esta página</h2>
          <p>
            Esta página ha sido creada por <strong>Roman Myziuk</strong> usando
            como guía los cursos de <strong>JSCamp</strong> creados por
            Midudev.
          </p>
          <p>
            Proyecto personal para seguir mejorando mis habilidades en HTML,
            CSS y desarrollo frontend.
          </p>
        </section>
      </main>

    
    </div>
    </>
  );
}
