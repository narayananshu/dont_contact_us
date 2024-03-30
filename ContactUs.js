import React from 'react'

import styles from './Contactheader.module.css'

const ContactUs = () => {

    console.log(styles)
  return (
    <div className={`container ${styles.contact_header}`}>
      <h1>Contact Us</h1>
     <p>But changing the image is pretty easy: just tap it. Tapping the picture will open an edit edit menu where you can take a new picture or select one from the Gallery, then crop it to your liking. Once chosen, it will show up in the contact's card </p>
        </div>
  )
}

export default ContactUs
