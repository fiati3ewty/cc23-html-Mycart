import React from 'react'
import Tash from '../assets/tash.png'

function Mycart() {
  return (
    <div class='container h-auto mx-auto max-w-4xl md:h-[50px] md:items-center mt-[50px]'>
        <div class='text-[30px] font-bold mb-[10px]'>My Cart</div>
        <div class='grid grid-cols-2 grid-rows-auto gap-[20px]'>
            <div class='rounded-md h-[180px] shadow-sm flex'>
                <div className="bg-blue-100 h-full w-[10vw] flex items-center justify-center">
                    <img class='w-7 h-7 border border-[#28dbb6] rounded-full p-1' src={Tash} alt=""></img>
                </div>
                <div className="bg-blue-300 h-full w-[45vw]">

                </div>
                <div className="bg-blue-500 h-full w-[45vw]">
                    
                </div>
            </div>

            <div class='rounded-md shadow-sm row-span-2'>
                
            </div>

            <div class='rounded-md shadow-sm h-[180px]'>
                
            </div>
        </div>
    </div>
  )
}

export default Mycart