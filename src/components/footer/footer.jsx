import React from 'react'
import './footer.css'

const footer = () => {
  return (
   <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-Container">
        {/*left side*/}
        <div className="f-left flexColStart">
            <span className='secondaryText'>
                ራዕያችን ሁሉንም ሰዎች የቤት ባለቤት <br/> ማድረግ ነው።
                የተሻለ ቤት ያግኙ
            </span>
        </div>
        <div className="f-right flexColStart">
            <span className='primaryText'>መረጃ</span>
            <span className='SecondaryText'>አዲስ አበባ , ኢትዮጵያ </span>
            </div>
            <div className="flexCenter f-menu">
                <span>ንብረት</span>
                <span>አገልግሎት</span>
                <span>ቤቶች </span>
                <span>ስለ እኛ</span>
            </div>
        </div>
   </section>
  )
}

export default footer;
