import React from 'react'
import './text.css'

export const Text = (props) => {
  return (
    <a href={props.textLink} className={props.textClass} id={props.textID} target="_blank" rel="noreferrer">{props.textValue}</a>
  )
}
