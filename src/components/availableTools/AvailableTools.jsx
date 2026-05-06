import React from 'react';
import { TiTick } from 'react-icons/ti';
import Card from '../ui/Card';

const AvailableTools = ({ tools, setCount , setSelectedTools, selectedTools }) => {
   
    return (
        <>
        <div className='container mx-auto'> 

        <section className=' px-9 grid items-center justify-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 mb-20 '>
            {tools.map((tool)=>{
                return  <Card key={tool.id} tool={tool} setCount={setCount} setSelectedTools={setSelectedTools} selectedTools={selectedTools}></Card>             
    })}
          
         

        </section>
        </div>
        </>

    );
};

export default AvailableTools;