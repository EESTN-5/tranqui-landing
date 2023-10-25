import { DownloadButton } from '@/Components/Button'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.mainLeft}>
        <img src="/tranqui-logo.svg" alt='Tranqui logo'/>
        <h1 className={styles.main__title}>Herramienta para la prevención del suicidio</h1>
        <p className={styles.main__text}>
          Apunta al acompañamiento en crisis y a la psicoeducación sobre esta problemática. 
          <br /><br />
          Por eso, está pensada para ser utilizada por personas que están atravesando esta situación, familiares, amigxs, profesionales de salud, docentes, entre otros. 
        </p>
        <DownloadButton />  
      </section>
      <section className={styles.mainRight}>
        <img src="/tranqui-img.svg" alt="Tranqui image" />
      </section>
    </main>
  )
}
