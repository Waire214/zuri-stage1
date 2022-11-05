import React, {useState} from 'react'
import './input.css'

export const Input = (props) => {
    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);

    const handleOnFocusIn = () => {
        setFocus(true)
    }
    const handleOnFocusOut = () => {
        setFocus(false)
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }

  return (
    <div className={`${props.propVal.emailDiv} ${props.propVal.textDiv}`}>
        <label htmlFor={props.propVal.inputName} className={`${props.propVal.textLabel} ${props.propVal.emailLabel}`}>{props.propVal.inputLabel}
        
        <input 
            type={props.propVal.inputType} 
            name={props.propVal.inputName} 
            onFocus={handleOnFocusIn} 
            onBlur={handleOnFocusOut} 
            className={` ${focus ? 'highLightBox' : 'removeBoxHighlight'} ${props.propVal.inputGeneralStyle} ${props.propVal.inputNameStyle} ${props.propVal.inputEmailStyle} `} 
            placeholder={props.propVal.inputPlaceHolder} 
            value={value} 
            onChange={handleChange} 
        />
        </label>    
    </div>
  )
}
