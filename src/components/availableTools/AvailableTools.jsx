import React from 'react';
import { TiTick } from 'react-icons/ti';
import Card from '../ui/Card';

const AvailableTools = ({ tools, setCount , setSelectedTools, selectedTools }) => {
   
    return (

        <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {tools.map((tool)=>{
                return  <Card key={tool.id} tool={tool} setCount={setCount} setSelectedTools={setSelectedTools} selectedTools={selectedTools}></Card>             
    })}
          
         

        </section>
    );
};

export default AvailableTools;