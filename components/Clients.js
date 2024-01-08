import React from 'react'

const Clients = () => {
  const clients=[
    "afterPassout.png",
    "sparetrade.png"
  ]

  return (
    <div className='container py-3 sm:py-0'>
    <div className='font-bold text-center text-4xl mt-8'>Our Clients</div>
    <div className="grid grid-cols-7   mt-12">
    {clients.map((c1,index)=>
    <div className={`${!index%2===0 ? "bg-gradient-to-r from-[#FFFFFF] to-[#a7a7a9]" : "bg-gradient-to-r from-[#a7a7a9] to-[#FFFFFF]"} h-[80px] w-[120px] p-4 rounded-md flex items-center justify-center`}>
    <img src={c1} alt="client" className='w-full h-auto' />
    </div>
      
      )}
      </div>
      </div>
  )
}

export default Clients;