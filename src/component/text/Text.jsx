import React from 'react'
import './text.css'

export const Text = (props) => {
  return (
    <a href={props.textLink} className={props.textClass}>{props.textValue}</a>
  )
}
