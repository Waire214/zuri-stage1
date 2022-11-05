import React, { Component } from 'react'
import { Input } from '../input/Input'
import { TextArea } from '../input/TextArea'
import formData from '../properties/Form'
import './contactForm.css'

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       collections: formData,
       checked: false,
       focused: false,
       btnFocused: false,
       textAreaValue: ''
    }
  }

  handleChange = (e) => {
    this.setState({checked: e.target.checked})
  }

  handleOnFocusIn = () => {
    this.setState({focused: true})
  }

  handleOnFocusOut = () => {
    this.setState({focused: false})
  }
  handleOnBtnFocusIn = () => {
    this.setState({btnFocused: true})
  }

  handleTextAreaMessageValue = (e) => {
    this.setState({textAreaValue: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your form has been submitted successfully`)
  }

  render() {
  const {collections, checked, focused, btnFocused, textAreaValue} = this.state


  return (
    <form onSubmit={this.handleSubmit}>
        <h4 className='heading'>Contact Me</h4>
        <p className='pgraph'>Hi there, contact me to ask me about anything you have in mind.</p>
        <div className='inputDiv'>
          {
              collections.map(val => ( 
                <Input 
                  key={val.ID} 
                  propVal={val} 
                />      
              ))
          }

        </div>
        {
            collections.map(val => ( val.textArea ?
              <TextArea 
                key={val.ID} 
                propVal={val} 
                messageValue={this.handleTextAreaMessageValue} 
                value={textAreaValue} /> 
                : ""
            ))
        }

      <div className='labelDiv'>
        <input 
          type="checkbox" 
          name="checkbox" id="" 
          className={`
            checkbox 
            ${focused && !checked ? 'focusIn' : 'focusOut'} 
            ${textAreaValue === '' ? "disableInput" : ""}
          `} 
          checked={checked} onChange={this.handleChange} 
          onMouseOver={this.handleOnFocusIn} 
          onMouseOut={this.handleOnFocusOut} 
          disabled={textAreaValue === '' ? true : false} 
        />
        <label htmlFor="checkbox">You agree to providing your data to Oluwatosin who may contact you.</label>

      </div>
        <button 
          type="submit" 
          disabled={!checked || textAreaValue === '' ? true : false} 
          className={`
            ${!checked ? 'btnDisabled' : 'btnEnabled'} 
            ${textAreaValue === '' ? 'btnDisabled' : 'btnEnabled'} 
            ${btnFocused && checked ? 'btnCheckedAndFocused' : ""}
          `} 
          onFocus={this.handleOnBtnFocusIn}
          id='btn__submit'>
            Send message
        </button>
    </form>
    )
  }
}
