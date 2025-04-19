import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.headerSide}>
        <div className={styles.leftSide}>
          <Link href="/new-design">
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
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.topOne}>
        <div className={styles.description}>
          <h2>Every vein tells a story</h2>
          <p>Our stones carry millions of years of history into your design</p>
        </div>
        <img className={styles.logo} src="/sparklesun-logo.svg" title="Sparklesun Logo"/>
      </section>
      <section className={styles.topTwo}>
        <div className={styles.leftSide}>
          <img className={styles.topImage} src="/marbleImage01.jpg" title="Sparklesun Image"/>
        </div>
        <div className={styles.description}>
          <h2>The natural beauty of stone, the soul of your space</h2>
          <p>Let timeless textures breathe life into your architectural vision — from tranquil living spaces to bold commercial designs, our natural stones bring warmth, character, and authenticity to every surface they touch</p>
          <Link href='#'><button>Contact Us</button></Link>
        </div>
      </section>

      <section className={styles.mainOne}>
        <div className={styles.card}>
          <div className={styles.number}>01</div>
          <div className={styles.header}>Reliable<br/>Sourcing</div>
          <div className={styles.description}>We source premium natural stones directly from leading Turkish quarries</div>
        </div>
        <div className={styles.card}>
          <div className={styles.number}>02</div>
          <div className={styles.header}>Dependable<br/>Delivery</div>
          <div className={styles.description}>With strong logistics, we ensure timely and consistent deliveries every time</div>
        </div>
        <div className={styles.card}>
          <div className={styles.number}>03</div>
          <div className={styles.header}>Long-Term<br/>Partnerships</div>
          <div className={styles.description}>We build lasting relationships based on trust, transparency, and shared success</div>
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
          <h2>Timeless marble solutions for spaces that inspire</h2>
          <p>Sparkle Sun LLC supplies high-quality natural stones from Turkey’s leading marble quarries to the North American market. While marble is our core product, we also source granite and other stones upon request. With competitive pricing and a strong supply network, we ensure consistent quality and reliable delivery</p>
        </div>
      </section>
      <section className={styles.mainThree}>
        <h1>Our Products</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect01.jpg" title="Sparklesun Image"/>
            <h5>VEZIR BEIGE LIGHT</h5>
            <p><strong>Sizes/Dimensions</strong><br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80 2x100x100<br/>Sizes according to personal choices/tastes</p>
          </div>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect02.jpg" title="Sparklesun Image"/>
            <h5>VEZIR BEIGE DARK</h5>
            <p><strong>Sizes/Dimensions</strong><br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80 2x100x100<br/>Sizes according to personal choices/tastes</p>
          </div>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect03.jpg" title="Sparklesun Image"/>
            <h5>VEZIR BEIGE MUCARTALI</h5>
            <p><strong>Sizes/Dimensions</strong><br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80 2x100x100<br/>Sizes according to personal choices/tastes</p>
          </div>
          <div className={styles.card}>
            <img className={styles.mainImage} src="/productRect04.jpg" title="Sparklesun Image"/>
            <h5>VEZIR BEIGE (MFE)</h5>
            <p><strong>Sizes/Dimensions</strong><br/>2x30x30, 2x30x60, 2x40x40, 2x50x50, 2x60x60, 2x80x80 2x100x100<br/>Sizes according to personal choices/tastes</p>
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
          <p>Lorem dolar sit amet</p>
          <p>Lorem dolar sit amet</p>
        </div>
        <div className={styles.rightSide}>
          <h6>Phone</h6>
          <p>+1 (949) 690 94 48</p>
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
