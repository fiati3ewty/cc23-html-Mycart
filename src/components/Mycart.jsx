import React from 'react'
import Tash from '../assets/tash.png'
import Ticket from '../assets/ticket.png'

function Mycart() {
  return (
    <div class='container h-auto mx-auto max-w-4xl md:h-12 md:items-center mt-12'>
        <div class='flex justify-center md:justify-start text-3xl font-bold md:text-3xl md:font-bold md:mb-3'>My Cart</div>
        <div class='md:grid md:grid-cols-2 md:grid-rows-auto md:gap-5 flex flex-col'>

{/* Google Docs */}
            <div class='order-1 rounded-md h-45 shadow-sm flex'>
                <div className="h-full w-[20vw] flex items-center justify-center">
                    <img class='w-7 h-7 border border-[#28dbb6] rounded-full p-1' src={Tash} alt=""></img>
                </div>
                <div className="h-full w-[30vw] flex items-center">
                    <div className="bg-blue-300 h-4/6 w-full border-none rounded-xl"></div>
                </div>
                <div className="h-full w-[50vw]">
                    <div className="h-full flex flex-col justify-center gap-1 ml-4">
                        <div class='text-gray-600'>Google Docs</div>
                        <div className="flex items-center gap-1">
                            <div class='w-3 h-3 bg-[#28dbb6] rounded-full'></div>
                            <div class='w-3 h-3 bg-gray-300 rounded-full'></div>
                            <div class='w-3 h-3 bg-gray-300 rounded-full'></div>
                            <div>
                                <select class='block w-full border border-[#28dbb6] text-gray-500 font-semibold text-xs'>
                                    <option>LV 1-3</option>
                                    <option>LV 2-3</option>
                                    <option>LV 3-3</option>
                                </select>
                            </div>
                        </div>
                        <div class='mt-3 text-gray-600'>THB 150</div>
                    </div>
                </div>
            </div>

{/* Order info */}
            <div class='order-3 md:order-2 rounded-md shadow-sm row-span-2 p-7 flex flex-col gap-5'>
                <div className="flex justify-center md:justify-start w-full font-semibold text-2xl">Order Info</div>
                <div className=" w-full flex justify-between">
                    <div class='text-gray-500'>Subtotal</div>
                    <div class='font-semibold'>THB 300</div>
                </div>
                <div className="w-full p0-20 flex items-center gap-3">
                    <img class='w-7 h-7' src={Ticket} alt="" />
                    <input class='h-11 w-55 text-sm text-gray-500 pl-3 border border-gray-300' placeholder='Promotion code' type="text" />
                    <button class='w-30 text-[#28dbb6] text-sm font-bold rounded-xl border-2 border-[#28dbb6] py-2 active:bg-[#28dbb6] active:text-white'>APPLY</button>
                </div>
                <hr class='border border-gray-100' />
                <div className="w-full flex justify-between items-center">
                    <div class='text-xl'>Total payment</div>
                    <div class='text-4xl text-[#28dbb6] font-bold trackin-tighter'>THB 300</div>
                </div>
                <button class='h-12 bg-[#28dbb6] border border-[#28dbb6] rounded-2xl font-bold tracking-tighter active:bg-white'>LOG IN TO CHECKOUT</button>
            </div>

{/* Google Slides */}
            <div class='order-2 rounded-md h-45 shadow-sm flex'>
                <div className="h-full w-[20vw] flex items-center justify-center">
                    <img class='w-7 h-7 border border-[#28dbb6] rounded-full p-1' src={Tash} alt=""></img>
                </div>
                <div className="h-full w-[30vw] flex items-center">
                    <div className="bg-orange-300 h-4/6 w-full border-none rounded-xl"></div>
                </div>
                <div className="h-full w-[50vw]">
                    <div className="h-full flex flex-col justify-center gap-1 ml-4">
                        <div class='text-gray-600'>Google Slides</div>
                        <div className="flex items-center gap-1">
                            <div class='w-3 h-3 bg-[#28dbb6] rounded-full'></div>
                            <div class='w-3 h-3 bg-[#28dbb6] rounded-full'></div>
                            <div class='w-3 h-3 bg-[#28dbb6] rounded-full'></div>
                            <div class='w-3 h-3 bg-gray-300 rounded-full'></div>
                            <div>
                                <select class='block w-full border border-[#28dbb6] text-gray-500 font-semibold text-xs'>
                                    <option>LV 1-4</option>
                                    <option>LV 2-4</option>
                                    <option>LV 3-4</option>
                                    <option>LV 4-4</option>
                                </select>
                            </div>
                        </div>
                        <div class='mt-3 text-gray-600'>THB 150</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mycart