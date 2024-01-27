import React from 'react'
import ContactCard from '../components/ContactCard';
import styles from '@/app/styles/contact.module.css'
import ContactForm from '../components/ContactForm';

function Page() {
  return (
    <>
    <div className={styles.container}>
    <h1>Contact Us</h1>
    <ContactCard />

    <section className={styles.contact_section}>
      <h2>We'd love to hear <span> from you </span></h2>
      <ContactForm />
    </section>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0175290985403!2d79.087637474013!3d21.15170068354703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c16c2ce261a3%3A0x2274577b245debbf!2sNagpur%20Railway%20Station%20East%20End%20Car%20Park%20Entry!5e0!3m2!1sen!2sin!4v1705211930937!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowFullScreen="" loading="lazy" className={styles.mapping} referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Page