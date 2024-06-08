import React from 'react';
import './contact.css';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

const contact = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            {/*left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>ያግኙን</span>
                <span className='primaryText' >እኛን ለማግኘት ቀላል መንገድ</span>
                <span className='secondaryText'>ምርጥ አገልግሎቶችን በማቅረብ ሁሌም ዝግጁ ነን .ቤሊቭ ጥሩ የመኖሪያ ቦታ ህይወትዎን የተሻለ ያደርገዋል.</span>
               
  <div className="flexColStart contactModes">
    {/* first row*/}
    <div className="flexStart row">
      <div className="flexColCenter mode">
        <div className="flexStart">
          <div className="flexCenter icon">
            <MdCall size ={25}/>
          </div>
          <div className="flexColStart detail">
            <span>ይደውሉ</span>
            <span>251 963 182 567</span>
          </div>
        </div>
        <div className="flexCenter button">አሁኑኑ ይደውሉ</div>
      </div>
      {/*second mode*/}
      <div className="flexColCenter mode">
        <div className="flexStart">
          <div className="flexCenter icon">
            <BsFillChatDotsFill size ={25}/>
          </div>
          <div className="flexColStart detail">
            <span>ውይይት</span>
            <span>251 963 182 567</span>
          </div>
        </div>
        <div className="flexCenter button">አሁኑኑ እንወያይ</div>
      </div>

    </div>

    {/*second row*/}
     <div className="flexStart row">
      <div className="flexColCenter mode">
        <div className="flexStart">
          <div className="flexCenter icon">
            <BsFillChatDotsFill size={25}/>
          </div>
          <div className="flexColStart detail">
            <span>የምስል ጥሪ</span>
            <span>251 963 182 567</span>
          </div>
        </div>
        <div className="flexCenter button">በቪዲዮ ጥሪ እንወያይ</div>
      </div>
      {/*second mode*/}
      <div className="flexColCenter mode">
        <div className="flexStart">
          <div className="flexCenter icon">
            <HiChatBubbleBottomCenter size ={25}/>
          </div>
          <div className="flexColStart detail">
            <span>መልእክት</span>
            <span>251 963 182 567</span>
          </div>
        </div>
        <div className="flexCenter button">መልእክት አሁኑኑ ይላኩ</div>
      </div>

    </div>
  </div>
 </div>                                                            
            {/*right side*/}
            <div className="c-right">
               <div className="image-container">
                 <img src="./contact.jpg" alt="" />
               </div>
               </div>
             </div>
    </section>
)}

export default contact
