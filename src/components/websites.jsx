import React from 'react'

function Websites({webdata}) {
  return (
    <div className={`rounded-2xl py-7 flex px-5 flex-col ${webdata.maincolorstyle}`}>
      <div className={` h-auto flex gap-4 items-center ${webdata.style}`}>
        <div className={`w-1/2 overflow-hidden`}> <a href={webdata.link._1}><img className='w-full rounded-[10px]' src={webdata.img} /></a> </div>
        <div className={`w-[4px] h-16 ${webdata.colorstyle} rounded-full`}></div>
        <div className={`flex flex-col gap-2 bg-red-400/40 w-1/2 ${webdata.colorstyle} rounded-lg p-4`}>
          <h1 className='text-3xl font-bold'>{webdata.name}</h1>
          <div className='pr-20 leading-snug font-medium text-[0.93rem]'>
            <p>{webdata.des}</p>
          </div>
          <div className=' p-1 rounded-lg flex flex-wrap gap-3'>
            <a target='_blank' href={webdata.link._1} className=' text-zinc-800 border border-zinc-600 px-3 py-1 bg-[#FACC15] rounded-md font-medium tracking-tight text-[0.9rem]'>{webdata.name}</a>
          </div>
        </div>
      </div>
      <div className={`${webdata.mainstyle2}`}>
        {webdata.mainstyle2data}
      </div>
    </div>
  )
}

export default Websites