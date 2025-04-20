import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    
      <section className={styles.headerSide}>
        <div className={styles.leftSide}>
          <Link href="/">
            <img className={styles.logo} src="/sparklesun-logo.svg" title="Sparklesun Logo"/>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <ul>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/our-products">Our Products</Link>
            </li>
            <li>
              <Link href="mailto:info@sparklesunny.com">Contact Us</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.topOne}>
        <div className={styles.description}>
          <h2>Our Products</h2>
        </div>
      </section>
      <section className={styles.mainThree}>
        <h5>Discover our high quality marble range. All our products are carefully selected and presented to add value to your projects.</h5>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect01.jpg" title="Sparklesun Image"/>
            <div>
              <h5>VEZIR BEIGE LIGHT</h5>
              <p><strong>Sizes/Dimensions</strong><br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80, 2x100x100,<br/>Sizes according to personal choices/tastes</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect02.jpg" title="Sparklesun Image"/>
            <div>
              <h5>VEZIR BEIGE DARK</h5>
              <p><strong>Sizes/Dimensions</strong><br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80, 2x100x100,<br/>Sizes according to personal choices/tastes</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect03.jpg" title="Sparklesun Image"/>
            <div>
              <h5>VEZIR BEIGE MUCARTALI</h5>
              <p><strong>Sizes/Dimensions</strong><br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80, 2x100x100,<br/>Sizes according to personal choices/tastes</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect04.jpg" title="Sparklesun Image"/>
            <div>
              <h5 className={styles.h5}>VEZIR BEIGE (MFE)</h5>
              <p><strong>Sizes/Dimensions</strong><br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80, 2x100x100,<br/>Sizes according to personal choices/tastes</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect05.jpg" title="Sparklesun Image"/>
            <div>
              <h5 className={styles.h5}>VEZIR BEIGE (MDE)</h5>
              <p><strong>Sizes/Dimensions</strong><br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80, 2x100x100,<br/>Sizes according to personal choices/tastes</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.footer}>
        <div className={styles.leftSide}>
          <Link href="/">
            <img className={styles.logo} src="/sparklesun-logo.svg" title="Sparklesun Logo"/>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <h6>Wyoming</h6>
          <p>30 N Gould St STE 38614</p>
          <p>Wyoming Sheridan ,82801</p>
          <h6>İstanbul</h6>
          <p>Hasanpasa Mahallesi, Kurbagilidere Caddesi</p>
          <p>Altunel Is Hani No: 51\53 Kadikoy/İstanbul</p>
        </div>
        <div className={styles.rightSide}>
          <h6>Phone</h6>
          <p>+1 949 315 56 25</p>
          <h6>Mail</h6>
          <p>info@sparklesunny.com</p>
        </div>
      </section>
      <section className={styles.footerTwo}>
        <p>© 2025 - All Rights Reserved</p>
      </section>

    </main>
  )
}
