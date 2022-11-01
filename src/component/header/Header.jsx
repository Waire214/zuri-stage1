import React from 'react'
import './header.css'
import {ReactComponent as ProfileImage} from '../../assets/profileImg.svg'
import {ReactComponent as Share} from '../../assets/share.svg'
import {ReactComponent as MobileShare} from '../../assets/mobileShare.svg'

export const Header = () => {
  return (
    <div className='header'>
        <div className='profile'>
            <ProfileImage id='profile__img' />
            <p id='twitter'>waireTT</p>
            <p id='slack'>waire</p>
        </div>
        <span className='share'>
            <Share className='desktop-share share-icon' />
            <MobileShare className='mobile-share share-icon' />
        </span>

    </div>
  )
}