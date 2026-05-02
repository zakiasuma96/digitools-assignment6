import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { toast } from 'react-toastify';
import SelectedCard from '../ui/SelectedCard';


const SelectedTools = ({ selectedTools, tools, setSelectedTools }) => {
    const handleDeleteSelectedTools = (tools) => {
        toast.success(`${tools.name} removed from cart!`);
      
        const updatedSelectedTools = selectedTools.filter((tool) => tool.name !== tools.name);
        setSelectedTools(updatedSelectedTools);
    }
    return (
        <div>
       
        <h2 className='text-4xl font-bold mb-5 mt-8 '>Selected Tools({selectedTools.length}/{tools.length})</h2>
        
        <div className='border border-gray-300 rounded-lg p-5 mb-5'>
            <h3 className='text-lg font-bold mb-3'>Your Cart</h3>
        {selectedTools.length===0 ?
        <div className='h-[400px] flex flex-col items-center justify-center gap-4'>
            
            
            <TiShoppingCart className='text-xl text-gray-200' />
            <h3 className='font-medium text-xl text-gray-400' >Your cart is empty.</h3>
        </div>
        :
        selectedTools.map((tools,ind)=>{
            return(

                <SelectedCard key={ind} tools={tools} handleDeleteSelectedTools={handleDeleteSelectedTools}  />
            )
            
        })}
             <div>
                 <div className='flex justify-between items-center gap-5'>
            <h2>Total:</h2>
            <p className='text-2xl font-bold leading-10'>${selectedTools.reduce((total, tool) => total + tool.price, 0).toFixed(2)}</p>
           
        </div>
        <button  className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white p-2 w-full rounded-lg hover:bg-blue-600'>
               Proceed To Checkout
            </button>
            </div>
        </div>


    </div>
    );
};

export default SelectedTools;