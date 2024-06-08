import React from 'react'
import {useState} from 'react';
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
const Header = () => {
  const [menuOpened , setMenuOPened] = useState(false);

   const getMenustyles = (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800 ){
      return{right: !menuOpened && '-100%'}
    }

   }
  return (
    <section className="h-wrapper">
        <div className=" flexCenter padding innerWidth h-container">
            <img src="./ቤቶን_transparent.png" alt="logo" width={100} />

            <OutsideClickHandler onOutsideClick={()=>{setMenuOPened(false)}}>
            <div className="flexCenter h-menu" style={getMenustyles(menuOpened)}>
                <a href="">የመኖሪያ ቦታዎች</a>
                <a href="">የእኛ እሴቶች</a>
                <a href="">አግኙን </a>
                <a href="">ይቀላቀሉን </a>
                <button className='button'>
                 <a href="">የእኛ ገጽ</a>
                </button>
            </div>
            </OutsideClickHandler>
    <div className="menu-icon" onClick={()=>setMenuOPened((prev)=>!prev)} >
        <BiMenuAltRight size={30}/> 
          </div>
        </div>
    </section>
  )
}

export default Header;
