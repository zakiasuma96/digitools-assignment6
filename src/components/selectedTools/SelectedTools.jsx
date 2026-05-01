import React from 'react';


const SelectedTools = ({ selectedTools, tools, setSelectedTools }) => {
    const handleDeleteSelectedTools = (tools) => {
        alert("Proceeding to checkout!");
        console.log(tools,"tools")
    }
    return (
       <>
        <h2 className='text-4xl font-bold mb-5 mt-8 '>Selected Tools({selectedTools.length}/{tools.length})</h2>
        
        <div className='border border-gray-300 rounded-lg p-5 mb-5'>
            <h3 className='text-lg font-bold mb-3'>Your Cart</h3>
        {selectedTools.map((tools,ind)=>{
            return<>
           

             <div className='border border-gray-400 rounded-lg flex items-center justify-between gap-5 p-5 mb-5' key={ind}>
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
            
            
            </>
            
        })}
        <div className='flex justify-between items-center gap-5'>
            <h2>Total:</h2>
            <p className='text-2xl font-bold leading-10'>${selectedTools.reduce((total, tool) => total + tool.price, 0).toFixed(2)}</p>
           
        </div>
        <button  className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white p-2 w-full rounded-lg hover:bg-blue-600'>
               Proceed To Checkout
            </button>
        </div>


       </>
    );
};

export default SelectedTools;