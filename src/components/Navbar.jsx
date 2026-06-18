import React from 'react'
import Logo from '../assets/jobpasscard-logo-nav.png'
import Search from '../assets/search.png'
import Cart from '../assets/cart.png'

function Navbar() {
  return (
    <nav>
        <div class='container flex items-center md:items-center flex-col gap-2 md:gap-0 border border-gray-200 md:h-13 md:mx-auto md:max-w-4xl md:p-2 md:flex-row md:justify-between  md:text-sm'>
            <div class='mt-3 md:mt-0'>
                <a href="#">
                    <img class='w-38' src={Logo} alt="" />
                </a>
            </div>

            <ul class='flex flex-col md:flex-row items-center font-medium tracking-tight'>
                <li class='mx-2'><a href="#">ABOUT US</a></li>
                <li class='mx-2'><a href="#">PASSCARD</a></li>
                <li class='mx-2'><a href="#">PEOPLE</a></li>
            </ul>

            <ul class='flex flex-col md:flex-row md:items-start items-center gap-3 md:gap-0'>
                <div class='relative h-1 flex md:flex-row md:justify-center'>
                    <li class='mx-2'><a href="#"><img class='w-6' src={Search} alt="" /></a></li>
                    <li class='mx-2 w-6'><a href="#"><img src={Cart} alt="" /></a></li>
                    <li class='absolute text-[10px] text-white bg-red-500 h-4 w-4 border-red border rounded-full flex items-center justify-center -bottom-px -right-px'>1
                    </li>
                </div>
                <div class='flex flex-col md:flex-row font-medium tracking-tight mt-4 md:mt-0'>
                    <li class='mx-4'><a href="#">LOGIN</a></li>
                    <li class='mx-4'><a href="#">SIGN UP</a></li>
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar