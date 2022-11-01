import React from 'react'
import './footer.css'
import {ReactComponent as Zuri} from '../../assets/zuri.svg'
import I4G from '../../assets/I4G.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <Zuri />
        <p className='footerP'>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="ingressive" className='ingressive-logo' />
    </div>
  )
}
