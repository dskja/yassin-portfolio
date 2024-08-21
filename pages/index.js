import styles from '../styles/Home.module.scss';
import Background from '../public/grids.svg';
import Image from 'next/image';
import dynamic from "next/dynamic"
import { useEffect, useReducer } from 'react';
import Modal from '../src/components/Modal';
import { useRouter } from 'next/router';
import Layout from '../src/components/Layout';

export default function Home() {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    loading: () => <p>Laden...</p>,
  })

  return (
    <Layout>
      <section className={styles.container}>
        <Image src={Background} alt="background_top" className={styles.image} priority></Image>
        <div className={styles.hero}>
          <div className={styles.leftHero}>
            <span className={styles.hoverMe}>Derzeit in der Beta-Phase</span>
            <h2 className={styles.hello}>Hallo!</h2>
            <p className={styles.paragraph}>
              Mein Name ist <span className={styles.name}>Yassin</span> aka Hades,
              <br />
              Internet Persönlichkeit, Programmierer usw. (Kein Bock alles aufzulisten).
            </p>
            <p className={styles.description}>
            Ich bin Webentwickler, ich liebe es, neue Dinge zu kreieren und ich bin immer
              <br />
              auf der Suche nach neuen Herausforderungen.
            </p>
            <p className={styles.press}>Drücken sie <span>A</span> um mich zu kontaktieren</p>
          </div>
          <div className={styles.rightHero}>
            <Spline scene="https://prod.spline.design/x80ZL67KtZKcaFxQ/scene.splinecode" />
          </div>
        </div>
        <Image src={Background} alt="background_bottom" className={styles.imageBottom} priority></Image>
          <div className={styles.typeWriter}>
          <h1>Projekte</h1>
          </div>
        <div className={styles.myWork} id="my_work">
          <div className={styles.singleWork}>
            <h3>HadesBot</h3>
            <p>Ein WhatsApp Bot der viele Funktionen hat. AI, Downloader, Tools, Games und mehr. (Derzeit nicht mehr in Betrieb)
            </p>
          </div>
          <div className={styles.singleWork}>
            <h3>HadesAI</h3>
            <p>Ein weiterer WhatsApp Bot welcher nur auf AI ausgestattet ist.</p>
          </div>
          <div className={styles.singleWork}>
            <h3>SzeneChat</h3>
            <p>SzeneChat ist ein sich in Entwicklung befindendes Projekt welches ein Web Chat ist und viele Möglichkeiten bieten wird.</p>
            </div>
            </div>
        <footer className={styles.footer}>
          <div className={styles.socialMedia}>
            <a aria-label="GitHub" target="_blank" href="https://github.com/dskja">
              <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"></path>
              </svg>
            </a>
            <a aria-label="Instagram" target="_blank" href="https://instagram.com/yassin.shelbyd">
  <svg
    width="20"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.976.976 1.248 2.243 1.31 3.608.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.976.976-2.243 1.248-3.608 1.31-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.976-.976-1.248-2.243-1.31-3.608-.058-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.976-.976 2.243-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.708 0 8.307.013 7.052.07 5.705.129 4.437.376 3.384 1.43 2.33 2.483 2.084 3.752 2.025 5.098.968 6.352.955 6.754.955 12s.013 5.648.07 6.902c.059 1.347.305 2.616 1.359 3.67 1.054 1.054 2.322 1.3 3.668 1.359 1.255.058 1.656.07 6.902.07s5.648-.013 6.902-.07c1.346-.059 2.615-.305 3.669-1.359 1.054-1.054 1.3-2.323 1.359-3.669.058-1.254.07-1.656.07-6.902s-.013-5.648-.07-6.902c-.059-1.346-.305-2.615-1.359-3.669C19.368.376 18.099.129 16.753.07 15.497.013 15.096 0 12 0z"
      fill="currentColor"
    />
    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
    <circle cx="18.406" cy="5.594" r="1.44" fill="currentColor" />
  </svg>
</a>
<a aria-label="WhatsApp" target="_blank" href="https://api.whatsapp.com/send?phone=4917670939812">
  <svg
    width="20"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 0C5.372 0 0 5.373 0 12C0 18.627 5.372 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 22C6.485 22 2 17.515 2 12C2 6.485 6.485 2 12 2C17.515 2 22 6.485 22 12C22 17.515 17.515 22 12 22ZM16.55 14.89C16.33 14.67 15.755 14.355 15.29 14.205C14.825 14.055 14.535 14 14.245 14C13.955 14 13.71 14.045 13.535 14.195C13.36 14.345 13.2 14.595 13.03 14.805C12.86 15.015 12.765 15.14 12.615 15.165C12.465 15.19 12.29 15.145 12.135 15.05C11.98 14.955 11.33 14.62 10.715 13.92C10.1 13.22 9.655 12.545 9.505 12.295C9.355 12.045 9.47 11.915 9.57 11.82C9.67 11.725 9.85 11.515 9.96 11.375C10.07 11.235 10.105 11.135 10.19 10.98C10.275 10.825 10.235 10.635 10.165 10.535C10.095 10.435 9.875 9.87 9.645 9.335C9.415 8.8 9.265 8.38 9.145 8.135C9.025 7.89 8.9 7.825 8.765 7.82C8.63 7.815 8.445 7.82 8.29 7.82C8.135 7.82 7.975 7.82 7.785 7.865C7.595 7.91 7.275 8.05 7.06 8.275C6.845 8.5 6.66 8.78 6.58 8.98C6.5 9.18 6.45 9.405 6.53 10.055C6.61 10.705 6.975 11.67 7.395 12.58C7.815 13.49 8.34 14.305 8.89 14.945C9.44 15.585 10.1 16.105 10.79 16.505C11.48 16.905 12.185 17.135 12.835 17.175C13.485 17.215 13.725 17.045 13.865 16.96C14.005 16.875 14.325 16.655 14.52 16.415C14.715 16.175 14.77 16 14.825 15.885C14.88 15.77 14.915 15.685 15.025 15.545C15.135 15.405 15.27 15.315 15.42 15.245C15.57 15.175 15.875 15.025 16.085 14.945C16.295 14.865 16.465 14.865 16.55 14.89Z"
      fill="currentColor"
    />
  </svg>
</a>
          </div>
          <div className={styles.policy}>
            <a href='#'>Datenschutzbestimmungen</a>
            <a href='#'>Nutzungsbedingungen</a>
          </div>
        </footer>
      </section>
    </Layout>
  )
}
