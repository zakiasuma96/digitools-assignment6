import React from 'react';
import { TiTick } from 'react-icons/ti';

const AvailableTools = ({ tools }) => {
    console.log(tools, "tools")
    return (

        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className='flex justify-end mt-4 mr-4'>

                <button className="btn rounded-full w-[40%]  bg-purple-200 text-purple-800">{tools[0].tag}</button>
                </div>
  <figure className='flex justify-start mx-5 mt-4'>
    <img 
      src={tools[0].icon}
      alt="Shoes" />

  </figure>
  <div className="card-body">
    <h2 className="card-title">{tools[0].name}</h2>
    <p>{tools[0].description}</p>
    

    <p>${tools[0].price.toFixed(2)}/{tools[0].period}</p>
    <h3 className='flex items-center gap-1'><TiTick />{tools[0].features[0]}</h3>
    <h3 className='flex items-center gap-1'><TiTick />{tools[0].features[1]}</h3>
    <h3 className='flex items-center gap-1'><TiTick />{tools[0].features[2]}</h3>
    
    
    <h3></h3>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            {/* {tools.map((tool) => (
                <div key={tool.id}>
                    <img src={tool.icon} alt={tool.name} />
                    <h3>{tool.name}</h3>
                    <p>{tool.description}</p>
                </div>
            ))} */}

        </div>
    );
};

export default AvailableTools;