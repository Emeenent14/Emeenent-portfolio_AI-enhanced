import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-4 bg-black text-white">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
          
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          
        </a>

        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://github.com/firebreather-heart" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          
        </a>
      </footer>
    )
}