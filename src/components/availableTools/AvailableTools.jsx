import React from 'react';
import { TiTick } from 'react-icons/ti';
import Card from '../ui/Card';

const AvailableTools = ({ tools }) => {
   
    return (

        <section className=' grid mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {tools.map((tool)=>{
                return  <Card tool={tool}></Card>             
    })}
          
         

        </section>
    );
};

export default AvailableTools;