import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/sparklesun-logo.svg"
          alt="Sparkle Sun Logo"
          width={300}
          height={265}
          priority
        />
      </div>

      <div className={styles.title}>
        <h2>About Us</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <p>We have more than 15 years of experience in the Banking and Finance sector in the European market. Our experience in corporate finance has allowed us to develop appropriate growth strategies, expand into new markets, conduct competitor analysis and identify suitable business partners.</p>
        </div>
        <div className={styles.card}>
          <Image
          className={styles.logo}
          src="/about-us-1.jpg"
          alt="Sparkle Sun About Us"
          width={500}
          height={334}
          priority
        />
        </div>
        <div className={styles.card}>
          <Image
          className={styles.logo}
          src="/about-us-2.jpg"
          alt="Sparkle Sun About Us"
          width={500}
          height={334}
          priority
        />
        </div>
        <div className={styles.card}>
          <p>These achievements have given us the power to offer solutions in various areas such as wholesale trade or analysis of specific products, creating comprehensive strategies for different customer segments and service areas, organizational issues, information technologies, risk management, branding and customer relationship management.</p>
        </div>
        <div className={styles.card}>
          <p>Taking advantage of these experiences, we founded our company called Sparkle Sun LLC and currently operate in the American, Canadian and Mexican markets “Our goals include expanding into European and Middle Eastern markets in the next phase.</p>
        </div>
        <div className={styles.card}>
          <Image
          className={styles.logo}
          src="/about-us-3.jpg"
          alt="Sparkle Sun About Us"
          width={500}
          height={334}
          priority
        />
        </div>
      </div>
      
      <div className={styles.title}>
        <h2>Contact Us</h2>
      </div>

      <div className={styles.contact}>
        <p>Hello,</p>
        <p>We are delighted to connect with you at Sparkle Sun LLC. Customer satisfaction is our top priority, and we are excited to collaborate with you. To better understand your needs, answer your questions, or explore potential partnerships, feel free to reach out to us using the information below</p>
        <p className={styles.contactTitle}><strong>Address</strong></p>
        <p>Sparkle Sun LLC</p>
        <p>30 N Gould St STE 38614</p>
        <p>Wyoming Sheridan</p>
        <p>82801</p>
        <p className={styles.contactTitle}><strong>Phone</strong></p>
        <p>+1 (949) 690 94 48</p>
        <p className={styles.contactTitle}><strong>Email</strong></p>
        <p><a href="mailto:info@sparklesunny.com">info@sparklesunny.com</a></p>
      </div>

    </main>
  )
}
