import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>İLK BÖLÜM</h1>
        <h6>Sayfanın ilk bölümü, genel olarak logo ve ufak tanıtım gibi bir bölüm</h6>
      </section>
      <section className={styles.topOne}>
        <div className={styles.description}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <img className={styles.logo} src="/sparklesun-logo.svg" title="Sparklesun Logo"/>
      </section>
      <section className={styles.topTwo}>
        <div className={styles.leftSide}>
          <img className={styles.topImage} src="/marbleImage01.jpg" title="Sparklesun Image"/>
        </div>
        <div className={styles.description}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Link href='#'><button>Contact Us</button></Link>
        </div>
      </section>
      <section className={styles.section}>
        <h1>İKİNCİ BÖLÜM - ARA KATMANLAR</h1>
        <h6>İçerikler, ürün bilgileri, sıkça sorulanlar, örnek çalışmalar gibi kısımların toplandığı bölüm</h6>
      </section>
      <section className={styles.mainOne}>
        <div className={styles.card}>
          <div className={styles.number}>01</div>
          <div className={styles.header}>Lorem İpsum Dolar</div>
          <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        </div>
        <div className={styles.card}>
          <div className={styles.number}>02</div>
          <div className={styles.header}>Lorem İpsum Dolar</div>
          <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        </div>
        <div className={styles.card}>
          <div className={styles.number}>03</div>
          <div className={styles.header}>Lorem İpsum Dolar</div>
          <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        </div>
      </section>
      <section className={styles.mainTwo}>
        <div className={styles.leftSide}>
          <img className={styles.mainImage} src="/product01.jpg" title="Sparklesun Image"/>
          <img className={styles.mainImage} src="/product02.jpg" title="Sparklesun Image"/>
          <img className={styles.mainImage} src="/product03.jpg" title="Sparklesun Image"/>
          <img className={styles.mainImage} src="/product04.jpg" title="Sparklesun Image"/>
        </div>
        <div className={styles.rightSide}>
          <h6>About Us</h6>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>
      <section className={styles.mainThree}>
        <h1>Our Products</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect01.jpg" title="Sparklesun Image"/>
            <h5>VEZIR BEIGE LIGHT</h5>
            <p>Sizes/Dimensions<br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80 2x100x100<br/>Sizes according to personal choices/tastes</p>
          </div>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect02.jpg" title="Sparklesun Image"/>
            <h5>VEZIR BEIGE DARK</h5>
            <p>Sizes/Dimensions<br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80 2x100x100<br/>Sizes according to personal choices/tastes</p>
          </div>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect03.jpg" title="Sparklesun Image"/>
            <h5>VEZIR BEIGE MUCARTALI</h5>
            <p>Sizes/Dimensions<br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80 2x100x100<br/>Sizes according to personal choices/tastes</p>
          </div>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect04.jpg" title="Sparklesun Image"/>
            <h5>VEZIR BEIGE (MFE)</h5>
            <p>Sizes/Dimensions<br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80 2x100x100<br/>Sizes according to personal choices/tastes</p>
          </div>
        </div>
      </section>
    </main>
  )
}
