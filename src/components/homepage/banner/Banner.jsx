import React from 'react';
import bannerImg from "../../../assets/banner.png"

const Banner = () => {

    return (

<section className=" hero min-h-[90vh] container mx-auto" >
  <div className="hero-content flex-col gap-x-60 lg:flex-row-reverse ">
    
       

    <img className="max-w-sm rounded-lg shadow-2xl " src={bannerImg} alt="Banner" />
        
   
    
    <div className=' space-y-4'>
        <div>
                    <div className='border border-transparent bg-purple-100 rounded-full p-3 flex items-center gap-4 w-max '> 
                        <div className='border border-[#4F39F6] rounded-full p-1  '>
                     <span className='text-[#4F39F6] rounded-full bg-[#4F39F6] w-2 h-2 block animate-pulse '>
                        
                        </span>
                        </div>
                       
            <h4  className='text-[16px] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#4F39F6] to-[#9514FA] '>New: AI-Powered Tools Available</h4>
                    </div>
                    
                </div>
                <h1 className='text-6xl font-extrabold leading-16 text-[#101727]'>Supercharge Your <br /> <span className='bg-clip-text text-transparent bg-gradient-to-b from-[#4F39F6] to-[#9514FA]'>Digital Workflow</span> </h1>
                <p className='text-[16px] font-normal text-[#101727] mt-4 w-10/12'>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.<br />Explore Products</p>
                <div className='flex gap-4'>
                    
                <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-[16px] font-semibold text-white p-6 mt-6 cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-in-out 
  focus:ring-2 focus:ring-purple-500 flex items-center gap-2">Explore Products <i class="fa-solid fa-arrow-right"></i></button>  
                
                    
                <button className="btn rounded-full border border-[#4F39F6] text-[16px] font-semibold text-[#4F39F6] p-6 mt-6 cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-in-out 
  focus:ring-2 focus:ring-purple-500 forced-color-[#ffffff] "><i class="fa-solid fa-play"></i> Watch Demo</button>
                
                </div>
      
    </div>
  </div>
</section>
    );
};

export default Banner;