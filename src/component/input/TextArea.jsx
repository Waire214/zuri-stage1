import React, {useState} from 'react'
import './input.css'

export const TextArea = (props) => {
    // const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);

    const handleOnFocusIn = () => {
        setFocus(true)
    }
    const handleOnFocusOut = () => {
        setFocus(false)
    }
    // const handleChange = (e) => {
    //     setValue(e.target.value)
    // }


    return (
        <div key={props.propVal.ID}>
            <label htmlFor={props.propVal.textAreaName} className="emailLabel messageLabel">{props.propVal.textAreaLabel}</label>

            <textarea 
                name={props.propVal.textAreaName} 
                onFocus={handleOnFocusIn} 
                onBlur={handleOnFocusOut} 
                className={` 
                    ${focus ? 'highLightBox' : 'removeBoxHighlight'} 
                    ${props.propVal.inputGeneralStyle} 
                    ${props.propVal.inputNameStyle} 
                    ${props.propVal.inputEmailStyle}  
                    textArea 
                    ${props.value===props.propVal.textAreaPlaceHolder ? 'placeholderError' : ""} 
                    ${focus && props.value==="" ? 'emptyTextArea' : ""}
                    ${!focus ? "defaultEmptyTextArea" : ""}
                `} 
                placeholder={props.propVal.textAreaPlaceHolder} 
                value={props.value} 
                onChange={props.messageValue}>
                    {props.value}
            </textarea>

            <p className={`
                ${(focus && props.value==="") 
                || 
                (focus && props.value===props.propVal.textAreaPlaceHolder) 
                || 
                (props.value==="") 
                || 
                (!focus && props.value==="") 
                || 
                (!focus && props.value===props.propVal.textAreaPlaceHolder) ? 'showSubText' : 'removeSubText'}`}>
                    Please enter a message
            </p>
        </div>
        
  )
}
