import React, { Component } from 'react'
import './main.css'
import { Box } from '../boxes/Box'
import boxData from '../properties/TextBox'
import { Logo
 } from '../logo/Logo'
export class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         collections: boxData
      }
    }
  render() {
    const {collections} = this.state
    return (
      <div className='main-class'>
        <Box propVal={collections} />

        <div>
            <Logo propVal={collections} />
        </div>

      </div>
    )
  }
}

export default Main