import React from 'react'
import { RiArrowDownSLine } from '@remixicon/react'
import "../App.css"
import img from "/img.webp"

function NavBar() {
  return (
    <div className="flex text-yellow-100 text-[1vw] gap-[5vw] max-sm:hidden">
        <div className="flex gap-10">
            <div className="flex items-center gap-0.5">
                <p>Womenswear</p>
                <p><RiArrowDownSLine size={17}/></p>
            </div>
            <div className="flex items-center gap-0.5">
                <p>Menswear</p>
                <p><RiArrowDownSLine size={17}/></p>
            </div>
            <div className="flex items-center gap-0.5">
                <p>Collections</p>
                <p><RiArrowDownSLine size={17}/></p>
            </div>
        </div>
        <div className="h-[4vw] w-[4vw] overflow-hidden rounded-full">
            <img src={img} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className="flex items-center gap-10">
           <div className="flex items-center gap-0.5">
                <p>Accessories</p>
                <p><RiArrowDownSLine size={17}/></p>
            </div>
            <div className="">
                <p>Zardoz Project</p>
            </div>
            <div className="">
                <p>Contact Us</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar