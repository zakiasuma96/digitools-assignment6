import React from 'react';

const Ready = () => {
    return (
        <section className='sm:px-10 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-8 mt-20 px-52 '>
            <div className='w-full flex flex-col space-y-8 lg:flex-col1+ justify-between items-center text-center py-20'>
                <h2 className='sm:text-3xl lg:text-[40px] font-bold text-white leading-1'>Ready to Transform Your Workflow?</h2>
                <p className='text-white opacity-60 text-[16px] font-normal leading-6 mt-8'>Join thousands of professionals who are already using Digitools to work smarter. <br />
Start your free trial today.</p>
                <div className='flex space-x-4 justify-center'>

                <button className='bg-white text-[#4F39F6] font-bold py-3 px-6 rounded-full mt-4 hover:bg-transparent border-2 border-white hover:text-white hover:-translate-y-4 transition-transform duration-600 ease-in-out '>Explore Products</button>
                <button className='bg-transparent border-2 text-white  font-bold py-3 px-6 rounded-full mt-4 hover:bg-white  hover:text-[#4F39F6] hover:-translate-y-4 transition-transform duration-600 ease-in-out '>View Pricing</button>
                </div>
                <nav>
                    <ul>
                        <a href="#" className='text-white opacity-60 text-[16px] font-normal'>4-day free trial </a>
                        <a href="#" className='text-white opacity-60 text-[16px] font-normal'>• No credit card required </a>
                        <a href="#" className='text-white opacity-60 text-[16px] font-normal'>• Cancel anytime</a>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Ready;