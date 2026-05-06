import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-[#101727] text-white "> 
    <div className="container mx-auto py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <section className='footer sm:grid items-center justify-items-center grid-cols-2 mx-8 lg:grid-cols-5 gap-10 pt-30 pb-20'>

  <aside className='flex flex-col gap-4 lg:mx-0'>
        <h1 className='text-3xl font-bold text-white'>Digitool</h1>
    <p className='text-[16px] font-bold leading-6 text-white opacity-25'>
      Premium digital tools for creators, <br /> professionals, and businesses.  Work smarter <br /> with our suite of powerful tools.
      
    </p>
  </aside>
   <nav>
    <h6 className="footer-title text-2xl text-white opacity-70 leading-7">Product</h6>
    <a className="link link-hover text-2xl text-white opacity-20">Features</a>
    <a className="link link-hover text-2xl text-white opacity-20">Pricing</a>
    <a className="link link-hover text-2xl text-white opacity-20">Templates</a>
    <a className="link link-hover text-2xl text-white opacity-20">Integrations</a>
  </nav>
            

 
  <nav>
    <h6 className="footer-title text-2xl text-white opacity-70 leading-7">Company</h6>
    <a className="link link-hover text-2xl text-white opacity-20">About us</a>
    <a className="link link-hover text-2xl text-white opacity-20">Blog</a>
    <a className="link link-hover text-2xl text-white opacity-20">Careers</a>
    <a className="link link-hover text-2xl text-white opacity-20">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title text-2xl text-white opacity-70 leading-7">Resources</h6>
    <a className="link link-hover text-2xl text-white opacity-20">Documentation</a>
    <a className="link link-hover text-2xl text-white opacity-20">Help Center</a>
    <a className="link link-hover text-2xl text-white opacity-20">Community</a>
    <a className="link link-hover text-2xl text-white opacity-20">Contact</a>
  </nav>
  <div >
    <h6 className="footer-title text-2xl text-white opacity-70 leading-7">Social Links</h6>
    <div className="grid grid-flow-col gap-4">
        
         <span className=' text-white h-11 w-11 rounded-full bg-white flex items-center justify-center cursor-pointer '>
          <a className='text-xl text-black '>
        <i class="fa-brands fa-instagram"></i>
      
      </a>
          </span>
         <span className=' text-white h-11 w-11 rounded-full bg-white flex items-center justify-center cursor-pointer '>
          <a className='text-xl text-black '>
        <i className='' class="fa-brands fa-facebook-f"></i>
      
      </a>
          </span>
         <span className=' text-white h-11 w-11 rounded-full bg-white flex items-center justify-center cursor-pointer '>
          <a className='text-xl text-black '>
        <i class="fa-brands fa-x-twitter"></i>
      
      </a>
          </span>
      
    </div>
  </div>
        </section>
            

  
      </div>
       <hr className=' border-gray-400 pb-10' />
 <div className='flex flex-col mx-10 lg:flex-row items-center justify-between '>
    <p className=' text-white opacity-25 text-[16px] pb-6 font-bold leading-6'>© 2026 Digitools. All rights reserved.</p>

    <nav className='flex flex-row lg:flex-row items-center gap-6'>
      <a href="" className=' text-white opacity-25 text-[16px] pb-6 font-bold leading-6'>Privacy Policy</a> 
      <a href="" className=' text-white opacity-25 text-[16px] pb-6 font-bold leading-6'>Terms of Service</a>
      <a href="" className=' text-white opacity-25 text-[16px] pb-6 font-bold leading-6'>Cookies</a> 
    </nav>
 </div>
</footer>
    );
};

export default Footer;