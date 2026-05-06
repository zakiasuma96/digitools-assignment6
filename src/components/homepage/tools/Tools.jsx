import React, { use } from 'react';
import AvailableTools from '../../availableTools/AvailableTools';
import { useState } from 'react';
import SelectedTools from '../../selectedTools/SelectedTools';

const Tools = ({ toolsPromise, setCount}) => {
    
    const tools =use(toolsPromise);
    const [selectedType, setSelectedType] = useState('Products');
    const [selectedTools, setSelectedTools] = useState([]);

    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl font-bold mb-5 mt-8 text-center'>Premium Digital Tools</h2>
            <p className='text-[16px] text-[#627382] mx-auto leading-6 text-center mb-6 w-[80%]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
           
            <div className='flex justify-center mb-10 gap-2'>
                <button onClick={()=>setSelectedType("Products")} className={`btn ${selectedType ==="Products" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-purple-800"} rounded-full w-[14%]`}>Products</button>
                <button onClick={()=>setSelectedType("Cart")} className={`btn ${selectedType ==="Cart" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-purple-800"} rounded-full w-[10%] ml-4`}>
                Cart({selectedTools.length}) </button>
            </div>
         
        
           {selectedType === "Products" ? 
           <AvailableTools tools={tools} setCount={setCount} setSelectedTools={setSelectedTools} selectedTools={selectedTools} ></AvailableTools > : <SelectedTools tools={tools} selectedTools={selectedTools} setSelectedTools={setSelectedTools}></SelectedTools>}
        </div>
    );
};

export default Tools;