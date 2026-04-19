import React from 'react';
import shoppingCart from '../../../assets/products/shopping-cart.png'

const NavBar = () => {
    return (
      
        <div className="navbar container mx-auto">
            <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[16px] font-semibold text-[#101727]">
         <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[16px] font-semibold text-[#101727]">
      <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>

    </ul>
  </div>
  <div className="navbar-end gap-6 ">
    <div className="flex items-center gap-4 justify-between  ">
      <button className="text-[16px] font-semibold text-[#101727] cursor-pointer ">
       <img src={shoppingCart} alt="Shopping Cart" />
      </button>
         
    <h4 className='text-[16px] font-semibold text-[#101727] cursor-pointer'>Login</h4>
    </div>
   
    <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-[16px] font-semibold text-white">Get Started</button>
    
  </div>
  

</div>


    );
};

export default NavBar;