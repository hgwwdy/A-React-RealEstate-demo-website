import React from "react";
import "./Hero.css";
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup' //to make the numbers have the animation
import {motion} from 'framer-motion'//for the intrance motion type 
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/*left side*/}
        <div className="flexColStart  hero-left">
          <div className="hero-title">

        <div className="orange-circle"></div>
          <motion.h1 
          initial={{y:'2rem',opacity: 0}}
          animate={{y: 0  ,opacity:1}}
          transition= {{
            duration:2,
            type:'spring'
          }}>
          ምቹ እና <br/>ምርጥ ቤቶችን  ይሸምቱ
          </motion.h1>
          </div>
          <div className=" flexColStart ro-des">
            <span className='secondaryText'>በጣም በቀላሉ የሚስማሙዎትን የተለያዩ ንብረቶችን ያግኙ</span>
             <span className='secondaryText'>ለእርስዎ የመኖሪያ ቦታ ለማግኘት ሁሉንም ችግሮች ይረሱ</span>
          </div>

          <div className=" flexCenter search-bar">
            <HiLocationMarker color='var(--blue)' size={25}/>
             <input type="text" />
             <button className="button">ይፈልጉ</button>
          </div>
          <div className="flexCenter stats" >
              <div className="flexColCenter stat">
                <span>
                   <CountUp start={800} end={2000} duration={4}/>
                   <span>+</span>
                </span>
                <span className="secondaryText">
                    ፕሪሚየም ምርቶች
                </span>
              </div>
           <div className="flexColCenter stat">
                <span>
                   <CountUp start={600} end={1500} duration={4}/>
                   <span>+</span>
                </span>
                <span className="secondaryText">
                  ደስተኛ ደንበኞች
                </span>
              </div>
              <div className="flexColCenter stat">
                <span>
                   <CountUp  end={10} duration={4}/>
                   <span>+</span>
                </span>
                <span className="secondaryText">
                    ሽልማቶች
                </span>
              </div>
          </div>
        </div>
        {/*right side*/}
        <div className=" flexCenter hero-right ">
          <motion.div
          initial ={{x:'7rem',opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{
            duration:2,
            type:'spring'
          }}className="image-container">
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
        </div>
    </section>
  );
};

export default Hero;
