import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="row-start-3 text-xl flex gap-6 flex-wrap items-center justify-center py-4 bg-black text-white">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:emeenent14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://wa.me/07069273822"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/chukwuemeka-franklin-54a02334b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          
        </a>

        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://github.com/Emeenent14" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          
        </a>
      </footer>
    )
}