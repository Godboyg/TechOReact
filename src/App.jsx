import React from 'react'
import NavBar from './Components/NavBar'
import img from "/img.webp"
import img2 from "/img2.webp"
import "./App.css"
import { Link } from "react-router-dom"
import { RiArrowDownSLine , RiFacebookLine , RiTwitterLine , RiYoutubeLine , RiInstagramLine , RiShareFill , RiWhatsappLine , RiInformationLine , RiHeartLine , RiSearchLine } from '@remixicon/react'

function App() {

  const products = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/31174778/pexels-photo-31174778/free-photo-of-elegant-woman-in-traditional-asian-attire.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Buttercup Chanderi Silk & Organza Silk Embro...",
      price: "₹ 1,37,500",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/31193092/pexels-photo-31193092/free-photo-of-young-woman-with-flowers-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Buttercup Chanderi Silk & Organza Silk Embro...",
      price: "₹ 1,37,500",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/31157331/pexels-photo-31157331/free-photo-of-elegant-woman-in-red-velvet-traditional-dress.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Buttercup Chanderi Silk & Organza Silk Embro...",
      price: "₹ 1,37,500",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/31157371/pexels-photo-31157371/free-photo-of-elegant-woman-in-traditional-vietnamese-dress.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Buttercup Chanderi Silk & Organza Silk Embro...",
      price: "₹ 1,37,500",
    }
  ]

  return (
    <div className="bg-[#1a1a1a] h-[100%] w-full text-yellow-100 text-[1vw] max-sm:text-xl max-sm:w-[100%]">
      <div className='flex items-center justify-between py-[1.5vw] px-[4vw] max-sm:py-[3vw] max-sm:pt-[5vw]'>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            <span>₹ INR</span>
            <p><RiArrowDownSLine size={17}/></p>
          </div>
          <p><RiSearchLine size={17}/></p>
        </div>
        <NavBar />
        <div className="flex gap-4 items-center">
          <span><RiHeartLine size={17}/></span>
          <span>Login</span>
          <span>🛒</span>
        </div>
      </div>
      <div className="flex gap-0.5 max-sm:block">
        <div className="h-[110vh] w-[33vw] max-sm:w-full max-sm:h-[50vh] max-sm:mt-5 overflow-hidden">
          <img src="https://images.pexels.com/photos/31157323/pexels-photo-31157323/free-photo-of-elegant-woman-in-traditional-velvet-dress.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full w-full object-cover'/>
        </div>
        <div className="h-[110vh] w-[33vw] max-sm:hidden">
          <img src="https://images.pexels.com/photos/31174778/pexels-photo-31174778/free-photo-of-elegant-woman-in-traditional-asian-attire.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full w-full object-cover'/>
        </div>
        <div className="py-[4vw] px-[3vw] w-[34vw] max-sm:w-full max-sm:text-xl">
          <div className="">
            <h1 className='text-yellow-200 max-sm:text-[#7F7269]'>Sarhad</h1>
            <div className="flex justify-between">
              <div className="mt-1 text-[1.3vw] max-sm:text-xl">
                <p>Majestic Peacock Embellished</p>
                <p>Lenhenga Ensemble</p>
              </div>
              <RiHeartLine size={17}/>
            </div>
            <p className='mt-6 w-[23vw] max-sm:w-[80vw] max-sm:text-[#7F7269]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum et, iste laudantium necessitatibus odio assumenda doloribus vero magnam fuga facilis!</p>
            <div className="flex gap-3">
              <p className='mt-10'>₹ 67,500</p>
              <p className='mt-10 text-[#b5a89f] line-through'>₹ 77,500</p>
              <p className='mt-10'><RiInformationLine/></p>
            </div>
            <div className="mt-10">
              <div className="flex justify-between max-sm:text-xl">
                <p>Size:</p>
                <p>Size guide</p>
              </div>
              <div className="flex gap-3 mt-4 bg-[#1a1311] max-sm:text-xl">
              {["8","10","12","14","16"].map((item , size)=>(
                <div
                key={size}
                className="w-12 h-10 border border-[#b5a89f] flex items-center justify-center text-[#b5a89f]"
              >
                {item}
              </div>
              ))}
              </div>
            </div>
            <div className="mt-10">
              <div className="flex gap-1 items-center">
                <p className='text-[0.8vw] max-sm:text-[4vw] max-sm:text-[#7F7269]'>Ships within:</p>
                <p className='max-sm:text-[4vw]'>5-6 weeks</p>
              </div>
              <div className="h-[7vh] w-full bg-yellow-50 text-yellow-900 mt-3 max-sm:text-xl">
                <button className='h-full w-full'>Add to cart</button>
              </div>
              <div className="h-[7vh] w-full border border-white mt-3 max-sm:text-xl">
                <button className='h-full w-full'>Customize Now</button>
              </div>
              <div className="flex justify-between mt-5 max-sm:flex max-sm:items-center max-sm:justify-between">
                <div className="flex gap-1.5 items-center justify-center max-sm:flex max-sm:text-xl max-sm:items-center">
                  <RiWhatsappLine size={17} className='max-sm:text-[#7F7269]'/>
                  <p>Need help?</p>
                  <p className=''>Contact us</p>
                </div>
                <RiShareFill size={17} className='max-sm:text-[#7F7269]'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[122vh] max-sm:h-[140vh] w-full bg-[#EFE7DA] text-black">
        <div className="w-full h-[20vh] flex flex-col items-center justify-center">
          <p className='text-[#8B5E3C] tracking-tighter mt-[2vw]'>Behind the scenes</p>
          <h1 className="text-[#6E4325] text-xl mt-3 tracking-[0.4vw] font-['EB_Garamond']">BEHIND THE REGAL VEIL</h1>
        </div>
        <p class="text-center text-[#C69064]"> ✤ ✦ ✧ ✦ ✤</p>
        <div className="mt-12 flex justify-between max-sm:flex max-sm:flex-wrap max-sm:justify-around">
          <div className="w-[39vw] h-[60vh] max-sm:h-[35vh] max-sm:w-[45vw]">
            <img className='h-full w-full object-cover rounded-md shadow-[8px_8px_15px_rgba(0,0,0,0.3)]' src="https://images.pexels.com/photos/31157323/pexels-photo-31157323/free-photo-of-elegant-woman-in-traditional-velvet-dress.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className="flex flex-col justify-between max-sm:flex-col max-sm:gap-5">
            <div className="h-[30vh] w-[18vw] max-sm:h-[20vh] max-sm:w-[30vw]">
              <img className='h-full w-full shadow-[8px_8px_15px_rgba(0,0,0,0.3)] rounded-md object-cover' src="https://images.pexels.com/photos/1057313/pexels-photo-1057313.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="h-[27vh] w-[18vw] max-sm:h-[20vh] max-sm:w-[30vw]">
              <img className='h-full w-full shadow-[8px_8px_15px_rgba(0,0,0,0.3)] rounded-md object-cover' src="https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
          </div>
          <div className="h-[60vh] w-[39vw] max-sm:h-[30vh] max-sm:w-[45vw]">
            <img className='h-full w-full shadow-[8px_8px_15px_rgba(0,0,0,0.3)] rounded-md object-cover' src="https://images.pexels.com/photos/8386657/pexels-photo-8386657.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
        </div>
        <div className="text-center mt-30 ">
          <p className='max-sm:text-[3vw]'>Standing tall as the custodians of “zardozi”, Sarhad features archival couture,<br/> handcrafted to perfection. From hundred year old restored “jamavars” to <br/> grandmother’s “suchaa taar” weave.</p>
        </div>
      </div>
      <div className="w-full h-[80vh] max-sm:h-[130vh] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center bg-black flex items-center justify-around">
        <div className="">
          <div className="ml-12 max-sm:w-[20vw] max-sm:h-[13vh] flex flex-col items-center justify-center text-center w-[6vw] border-[#3d2b1f] rounded-full shadow-[1px_1px_3px_rgb(255,255,255)] border h-[15vh] text-[#B88746] font-['cinzel']">
            <p className="text-xl font-semibold tracking-wide">200+</p>
            <p className="text-lg tracking-wider">HOURS</p>
          </div>
          <p className='mt-10 tracking-[0.5vw]'>200+ HOURS OF <br/> CRAFTSMANSHIP</p>
        </div>
        <div className="max-sm:mt-25">
          <div className="ml-20 p-[1vw] max-sm:w-[20vw] max-sm:ml-14 max-sm:h-[13vh] max-sm:p-[3vw] flex flex-col overflow-hidden items-center justify-center text-center w-[6vw] border-[#3d2b1f] rounded-full shadow-[1px_1px_1px_rgb(255,255,255)] border h-[15vh] text-[#B88746] font-['cinzel']">
            <img className='h-full w-full object-cover rounded-full' src={img2} alt="" />
          </div>
          <p className='mt-10 tracking-[0.5vw] text-center'>EXQUISITE ZARDOSI <br/> EMBROIDERY</p>
        </div>
        <div className="max-sm:mt-25">
          <div className="ml-5 max-sm:w-[20vw] max-sm:h-[13vh] max-sm:p-[3vw]  flex items-center p-[1vw] overflow-hidden justify-center text-center w-[6vw] border-[#3d2b1f] rounded-full shadow-[1px_1px_3px_rgb(255,255,255)] border h-[15vh] text-[#B88746] font-['cinzel']">
            <img className='h-full rounded-full w-full object-cover' src={img} alt="" />
          </div>
          <p className='mt-10 tracking-[0.5vw] text-center'>HERITAGE <br/> HEIRLOOMS</p>
        </div>
      </div>
      <div className="h-[100vh] max-sm:h-[50vh] flex">
        <div className="h-full w-[35vw] max-sm:h-[50vh]">
          <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/31149099/pexels-photo-31149099/free-photo-of-dynamic-sand-dance-on-doha-s-desert-dunes.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="h-full w-[40vw] max-sm:h-[50vh]">
          <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/31141477/pexels-photo-31141477/free-photo-of-majestic-dubai-desert-with-sand-dunes-and-explorer.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="h-full w-[35vw] max-sm:h-[50vh]">
          <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/30320422/pexels-photo-30320422/free-photo-of-camel-caravan-crossing-sahara-desert-dunes.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </div>
      <div className="h-[125vh] max-sm:h-[100vh]">
        <div className="w-full h-[20vh] mt-5 flex flex-col items-center justify-center">
          <p className='text-[#6E4325]  tracking-tighter mt-[2vw] max-sm:text-[3vw]'>Our recommendations</p>
          <h1 className="text-2xl mt-3 tracking-[0.4vw] font-['EB_Garamond']">EXQUISITE PICKS</h1>
        </div>
        <div className="mt-10 w-full">
          <div className="whitespace-nowrap scrollbar-hide overflow-x-scroll">
          {products.map((product) => (
            <div key={product.id} className="relative inline-block w-[25vw] max-sm:w-[50vw] ml-5">
              <img src={product.image} alt={product.title} className="h-96 w-full object-cover" />
              <div className="absolute top-4 right-4">
                <button className="text-white bg-black/50 rounded-full p-2">
                  ❤️
                </button>
              </div>
              <div className="mt-3">
                <h3 className="text-[0.9vw] max-sm:text-[2.4vw]">{product.title}</h3>
                <p className="text-[1vw] mt-5 font-semibold text-center max-sm:text-[2.7vw]">{product.price}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className="text-center mt-15">
          <button className="max-sm:text-[3.4vw] border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition">
              view all
          </button>
        </div>
      </div>
      <div className="max-sm:flex-col max-sm:h-[120vh] max-sm:items-center max-sm:justify-center h-[70vh] w-full bg-[#3A2C2C] flex items-center justify-around">
        <div className="h-[40vh] max-sm:h-[75vh] max-sm:mt-20 max-sm:w-[85vw] max-sm:text-[4vw]">
          <h1 className=''>STAY CONNECTED</h1>
          <p className='text-[#8B5E3C] mt-3'>Subscribe to our newsletters</p>
          <div className="flex border-b border-white w-[21vw] mt-10 h-10 max-sm:w-full max-sm:h-[5vh]">
            <input type="text" placeholder='enter email' className='outline-none w-[16vw] max-sm:w-[60vw]' />
            <p className='mt-2'>sign up</p>
          </div>
          <div className="flex gap-1 mt-20">
           <div className="p-[1vw] bg-black/50 rounded-full w-[3vw] h-[3vw] max-sm:w-[7vw] max-sm:h-[7vw] flex items-center justify-center">
             <a href=""><RiInstagramLine /></a>
           </div>
           <div className="p-[1vw] bg-black/50 rounded-full w-[3vw] h-[3vw] max-sm:w-[7vw] max-sm:h-[7vw]  flex items-center justify-center">
             <a href=""><RiFacebookLine /></a>
           </div>
           <div className="p-[1vw] bg-black/50 rounded-full w-[3vw] h-[3vw] max-sm:w-[7vw] max-sm:h-[7vw]  flex items-center justify-center">
             <a href=""><RiTwitterLine /></a>
           </div>
           <div className="p-[1vw] bg-black/50 rounded-full w-[3vw] h-[3vw] max-sm:w-[7vw] max-sm:h-[7vw]  flex items-center justify-center">
             <a href=""><RiYoutubeLine /></a>
           </div>
          </div>
        </div>
        <div className="h-[40vh] max-sm:h-[60vh] max-sm:w-[85vw] max-sm:text-[4vw]">
          <h1 className=''>Company</h1>
          <div className="text-[#8B5E3C] mt-5">
            <p className=''>About us</p>
            <p className='mt-2'>Contact us</p>
            <p className='mt-2'>Store location</p>
            <p className='mt-2'>Book an appointment</p>
          </div>
        </div>
        <div className="h-[40vh] max-sm:h-[75vh] max-sm:w-[85vw] max-sm:text-[4vw]">
          <h1>LEGAL</h1>
          <div className="text-[#8B5E3C] mt-5">
            <p>FAQs</p>
            <p className='mt-2'>Privacy Policy</p>
            <p className='mt-2'>Terms & conditions</p>
            <p className='mt-2'>Payment & shipping</p>
            <p className='mt-2'>Return/ Refund & Exchange</p>
          </div>
        </div>
        <div className="h-[40vh] max-sm:h-[60vh] max-sm:w-[85vw] max-sm:text-[4vw]">
          <h1>CUSTOMER SUPPORT</h1>
          <div className="flex gap-1 mt-5">
            <p className='text-[#8B5E3C]'>Call/Whatsapp:</p>
            <p>+91 96500 39960, 93114 23980</p>
          </div>
          <div className="flex gap-1">
            <p className='text-[#8B5E3C] mt-5'>Timings:</p>
            <p className='mt-5'>11 a.m. - 8 p.m. IST | Mon - Sun</p>
          </div>
          <div className="flex gap-1 mt-5">
            <p className='text-[#8B5E3C]'>Email:</p>
            <p>online@divaniindia.in</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App