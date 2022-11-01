import React from 'react'
import './logo.css'
import {ReactComponent as Github} from '../../assets/Icon.svg'
import {ReactComponent as Slack} from '../../assets/slack24.svg'


export const Logo = (props) => {
  return (
    <div className='logo'>
                <span  className='logo-icon'>
                    <Slack />
                </span>
                <span className='logo-icon'>
                    <Github />
                </span>
    </div>
  )
}
