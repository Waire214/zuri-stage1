import React from 'react'
import { Text } from '../text/Text'
import './box.css'
import '../text/text.css'
import { Link } from "react-router-dom";

export const Box = (props) => {
  return (
    <section className='box-section'>
        {
            props.propVal.map(val => (
                <div key={val.id} className="box-class">  
                    <Text 
                      key={val.id} 
                      textClass="text-class" 
                      textValue={val.textValue} 
                      textID={val.textID} 
                      textLink={val.textLink} 
                      sub={val.sub} 
                    />
                    <sub>{val.sub}</sub>
                 </div>
            ))
        }
        
        <div className="box-class">
            <Link to="/contact" className='text-class' id='contact'>Contact Me</Link>
            <sub>Get in touch with me!</sub>
        </div>
        {/* <Outlet /> */}
    </section>
  )
}
