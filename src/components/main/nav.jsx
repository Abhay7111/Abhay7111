import React from 'react'

function Nav() {
  return (
    <div className='w-full h-14 bg-yellow-500 flex items-center px-6 justify-between'>
     <div className='h-full w-1/6 flex items-center justify-start'><p className='font-bold text-3xl tracking-tighter'>LOGO</p></div>
     <div className='w-1/3 h-full flex items-center justify-between'>
          <ul className='flex gap-1 font-medium text-[0.9rem] items-center'>
               <li><a className='px-4 py-1 text-nowrap hover:bg-white rounded-md' href="#">Home</a></li>
               <li><a className='px-4 py-1 text-nowrap hover:bg-white rounded-md' href="#">Websites</a></li>
               <li><a className='px-4 py-1 text-nowrap hover:bg-white rounded-md' href="#">Contact me</a></li>
          </ul>
          <button type="button" className='font-medium text-[0.9rem] hover:bg-white transition-colors px-5 py-1 rounded-lg'>Help</button>
     </div>
    </div>
  )
}

export default Nav