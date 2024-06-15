import React from 'react'
import { FaSistrix } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <div className='scroll'>
        <p>Free 24hrs Shipping over $20.</p>
      </div>
      <div className='navbar'>
        <div className='buttons'>
            <span>BREW TEA CO</span>
            <button>SUBSCRIBE</button>
            <label className='nav-btn'>SHOP</label>
            <label className='nav-btn'>THE GIFT SHOP</label>
            <label className='nav-btn'>BREW COINS</label>
            <label className='nav-btn'>ABOUT</label>
            <input className='s-bar' type='search' placeholder='Search'/>
            <label className='s-bar-icon'><FaSistrix/></label>
            <button>Log-in</button>
        </div>
    </div>
    </div>
  )
}

export default NavBar