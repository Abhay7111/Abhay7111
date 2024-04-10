import React, { useState } from 'react';
import Ochi from '/ochi.png';

function Hero() {
  return (
    <div className='w-full h-screen overflow-hidden items-center flex px-14 justify-between'>
     <div className='w-1/2 h-fit'>
          <h1 className='text-8xl font-bold leading-[75px] tracking-tight uppercase'>This is my <br /> <span className='text-yellow-500'>own work</span><br />websites</h1>
          <p className='mt-5 leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci asperiores id nam placeat, temporibus assumenda ducimus natus cumque quam maiores!</p>
          <div className='w-full h-12 mt-5 flex items-center justify-center rounded-xl'>
               <a href="https://www.google.com" className='font-bold uppercase px-7 py-1.5 bg-yellow-400 rounded-md'>Google</a>
          </div>
     </div>
     <div className='w-1/2 h-fit'>
          <img src= {Ochi} />
     </div>
<a href='#' target='_top'>
<span className='fixed size-10 bg-[#EAB308] bottom-4 right-4 rounded-full flex items-center justify-center'><i class="ri-arrow-up-double-fill text-[1.2rem] hover:text-[1.4rem] transition-all"></i></span>
</a>
    </div>
  )
}

export default Hero