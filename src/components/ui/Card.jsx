import React from 'react';

const Card = ((tool)) => {
    return (
        <section className=' grid mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {tools.map((tool)=>{
                return               <div className="card bg-base-100  shadow-sm">
                <div className='flex justify-end mt-4 mr-4'>

                <button className="btn rounded-full w-[40%]  bg-purple-200 text-purple-800 uppercase">{tool.tag}</button>
                </div>
  <figure className='flex justify-start mx-5 mt-4'>
    <img 
      src={tool.icon}
      alt="Shoes" />

  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold leading-10">{tool.name}</h2>
    <p>{tool.description}</p>
    

    <p className='text-2xl font-bold leading-10'>${tool.price.toFixed(2)}/<span className='font-medium text-black opacity-70'>{tool.period}</span></p>
    <h3 className='flex items-center gap-1 text-black opacity-70 font-medium'><TiTick className='text-green-400 text-2xl font-normal' />{tool.features[0]}</h3>
    <h3 className='flex items-center gap-1 text-black opacity-70 font-medium'><TiTick className='text-green-400 text-2xl font-normal' />{tool.features[1]}</h3>
    <h3 className='flex items-center gap-1 text-black opacity-70 font-medium'><TiTick className='text-green-400 text-2xl font-normal' />{tool.features[2]}</h3>
    
    
    <h3></h3>
    <div className="card-actions justify-end">
      <button className="btn w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Buy Now</button>
    </div>
  </div>
</div>  
    })}
          
         

        </section>
    );
};

export default Card;