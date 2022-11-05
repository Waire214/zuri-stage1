import React from 'react'
import { Footer } from '../../component/footer/Footer'
import ContactForm  from '../../component/form/ContactForm'
import './contact.css'

export const Contact = () => {
  return (
    <div className='contact-container'>
        <ContactForm />
        <Footer />
    </div>
  )
}
