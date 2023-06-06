import styles from '@/styles/Home.module.css'
import {Header,Banner,Section1,Section2,Section3,Banner2,Section4,Footer} from '@/components/index.js'

export default function Home() {
  return (
    <>
      <div className={styles['gradient__bg']}>
      <Header />
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Banner2 />
      <Section4 />
      <Footer />
      </div>
    </>
  )
}


