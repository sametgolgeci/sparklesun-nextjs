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
          <h2>About Us</h2>
        </div>
      </section>
      <section className={styles.topTwo}>
        <div className={styles.leftSide}>
          <img className={styles.topImage} src="/aboutus01.jpg" title="Sparklesun Image"/>
        </div>
        <div className={styles.description}>
          <p>Sparkle Sun LLC is a supplier of high-quality natural stones imported from Turkey’s leading marble quarries and delivered to the North American market. We provide elegant, durable, and aesthetic marble solutions for the architecture, construction, and interior design industries.</p>
          <p>While marble is at the core of our product range, we also assist our clients in sourcing granite and other types of natural stones upon request.</p>
        </div>
      </section>
      <section className={styles.topThree}>
        <div className={styles.leftSide}>
          <img className={styles.topImage} src="/aboutus02.jpg" title="Sparklesun Image"/>
        </div>
        <div className={styles.description}>
          <p>With a strong supply network and industry experience, we offer our customers competitive pricing, consistent quality, and reliable delivery.</p>
        </div>
      </section>
      <section className={styles.topTwo}>
        <div className={styles.leftSide}>
          <img className={styles.topImage} src="/aboutus03.jpg" title="Sparklesun Image"/>
        </div>
        <div className={styles.description}>
          <p>Our company serves clients across the United States, with a focus on the California region through our local sales representatives, allowing us to stay closely connected to our business partners.</p>
        </div>
      </section>
      <section className={styles.topThree}>
        <div className={styles.leftSide}>
          <img className={styles.topImage} src="/aboutus04.jpg" title="Sparklesun Image"/>
        </div>
        <div className={styles.description}>
          <p>At Sparkle Sun, our goal is to become a trusted supplier in the industry by building long-term partnerships based on reliability, transparency, and quality service.</p>
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
