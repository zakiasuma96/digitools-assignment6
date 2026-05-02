import React from 'react';

const SelectedCard = ({ tools, handleDeleteSelectedTools }) => {
    return (
        <div>
            <div className='border border-gray-400 rounded-lg flex items-center justify-between gap-5 p-5 mb-5' >
                <div className='flex  items-center gap-6'>

                <img src={tools.icon} alt={tools.name} />

               <div>
                 <h2 className='text-xl font-bold leading-8'>{tools.name}</h2>
                <p className='text-xl font-bold leading-8'>${tools.price.toFixed(2)}</p>
               </div>
                </div>
                <button onClick={()=>handleDeleteSelectedTools(tools)} className=' text-red-500 font-bold border rounded-full px-4 py-2 cursor-pointer hover:bg-red-500 hover:text-white transition duration-300 ease-in-out '>
                    Remove
                </button>
            </div>
        </div>
         
    );
};

export default SelectedCard;