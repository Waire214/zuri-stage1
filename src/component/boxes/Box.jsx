import React from 'react'
import { Text } from '../text/Text'
import './box.css'

export const Box = (props) => {
  return (
    <section className='box-section'>
        {
            props.propVal.map(val => (
                <div key={val.id} className="box-class">  
                    <Text key={val.id} textClass="text-class" textValue={val.textValue} textID={val.textID} textLink={val.textLink} />
                 </div>
            ))
        }
    </section>
  )
}
