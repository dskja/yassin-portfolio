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
              <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5.58648 7.72107H0.768444C0.554612 7.72107 0.381348 7.89441 0.381348 8.10817V23.5865C0.381348 23.8003 0.554612 23.9736 0.768444 23.9736H5.58648C5.80032 23.9736 5.97358 23.8003 5.97358 23.5865V8.10817C5.97358 7.89441 5.80032 7.72107 5.58648 7.72107Z" fill="currentColor"></path><path d="M3.1793 0.0264282C1.42622 0.0264282 0 1.4511 0 3.20225C0 4.95417 1.42622 6.37938 3.1793 6.37938C4.93099 6.37938 6.35605 4.95409 6.35605 3.20225C6.35613 1.4511 4.93099 0.0264282 3.1793 0.0264282Z" fill="currentColor"></path><path d="M17.8417 7.33636C15.9066 7.33636 14.4762 8.16824 13.6085 9.11345V8.10816C13.6085 7.8944 13.4353 7.72106 13.2214 7.72106H8.60731C8.39348 7.72106 8.22021 7.8944 8.22021 8.10816V23.5865C8.22021 23.8003 8.39348 23.9735 8.60731 23.9735H13.4148C13.6287 23.9735 13.8019 23.8003 13.8019 23.5865V15.9283C13.8019 13.3477 14.5029 12.3423 16.3018 12.3423C18.261 12.3423 18.4167 13.954 18.4167 16.0611V23.5865C18.4167 23.8004 18.5899 23.9736 18.8038 23.9736H23.613C23.8269 23.9736 24.0001 23.8004 24.0001 23.5865V15.0964C24.0001 11.2591 23.2684 7.33636 17.8417 7.33636Z" fill="currentColor"></path></svg>
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
