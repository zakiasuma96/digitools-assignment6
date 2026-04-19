import React, { use } from 'react';
import AvailableTools from '../../availableTools/AvailableTools';

const Tools = ({ toolsPromise }) => {
    
    const tools =use(toolsPromise);
    
    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl font-bold mb-5 mt-8 text-center'>Premium Digital Tools</h2>
            <p className='text-[16px] text-[#627382] leading-6 text-center mb-6'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='flex justify-center mb-10 gap-2'>
                <button className="btn rounded-full w-[14%]  bg-purple-200 text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Products</button>
                <button className="btn rounded-full w-[10%]  bg-purple-200 text-purple-800 ml-4">Cart</button>
            </div>
         
        
            <AvailableTools tools={tools} />
        </div>
    );
};

export default Tools;