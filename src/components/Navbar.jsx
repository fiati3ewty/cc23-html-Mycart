import React from 'react'
import Logo from '../assets/jobpasscard-logo-nav.png'
import Search from '../assets/search.png'
import Cart from '../assets/cart.png'

function Navbar() {
  return (
    <nav>
        <div class='container border border-gray-200 h-auto mx-auto max-w-4xl p-2 flex md:flex-row md:justify-around md:h-[50px] md:items-center text-[14px]'>
            <div>
                <a href="#">
                    <img class='w-[150px]' src={Logo} alt="" />
                </a>
            </div>

            <ul class='flex font-medium tracking-tight'>
                <li class='md:mx-2'><a href="#">ABOUT US</a></li>
                <li class='md:mx-2'><a href="#">PASSCARD</a></li>
                <li class='md:mx-2'><a href="#">PEOPLE</a></li>
            </ul>

            <ul class='flex'>
                <li class='md:mx-2'><a href="#"><img class='w-[25px]' src={Search} alt="" /></a></li>
                <div class='relative md:h-[5px]'>
                        <li class=' md:mx-2'><a href="#"><img class='w-[25px]' src={Cart} alt="" /></a></li>
                        <div class='absolute text-[10px] text-white bg-red-500 h-4 w-4 border-red border rounded-full flex items-center justify-center -bottom-px -right-px'>1</div>
                </div>
                <div class='flex flex-row font-medium tracking-tight'>
                    <li class='md:mx-2'><a href="#">LOGIN</a></li>
                    <li class='md:mx-2'><a href="#">SIGN UP</a></li>
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar