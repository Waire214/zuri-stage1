import React from 'react'
import { Footer } from '../../component/footer/Footer'
import { Header } from '../../component/header/Header'
import Main from '../../component/main/Main'
import './layout.css'

export const Layout = () => {
  return (
    <div className='layoutContainer'>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}
