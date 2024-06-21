import React from 'react'
import Google from '../../assets/logo/vecteezy_google-play-store-icon-logo-symbol_22484511.png'
import HeroImg from '../../assets/images/Take Away-cuate.png'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";


const Hero = () => {
  return (
    <>
         <main className="w-full py-52 flex justify-between items-center h-[90vh] text-black px-[100px]">

           <div className='flex flex-col gap-5'>

                <div className='font-extrabold text-5xl text-black flex flex-col gap-1'>
                        <p>Hungry?</p>
                        <p>We deliver happiness</p>
                    </div>

                    <div className='flex flex-col'>
                            <p>Order the meals you crave with few clicks; hassle free.</p>
                            <p>Download Foodii app to satisfy your carvings.</p>
                    </div>

                    <div className='mt-10 flex gap-10'>
                          {/* <button className='py-1.5 px-4 bg-black text-white rounded-lg flex items-center gap-3'>
                             <img src={ Google } alt="Google Play" className='w-6 h-8'/>
                              <div className='flex flex-col items-start'>
                                    <p className='font-light text-[12px]'>GET IT ON</p>
                                    <p className='font-semibold text-lg'>Google Play</p>
                              </div>
                          </button> */}

                          {/* <button className='py-1.5 px-4 bg-black text-white rounded-lg flex items-center gap-3'>
                          <FaApple size={30}/>
                              <div className='flex flex-col items-start'>
                                    <p className='font-light text-[12px]'>Download on the</p>
                                    <p className='font-semibold text-lg'>App Store</p>
                              </div>
                          </button> */}

                          <button className='py-1.5 px-4 bg-[#F7351E] flex justify-center text-white rounded-full items-center gap-2 shadow-md shadow-[#F7351E]'>
                          <p className='text-lg text-[16px]'>Apple Store</p>
                          <FaApple size={18}/>
                          </button>

                          <button className='py-1.5 px-4 bg-transparent border-2 border-gray-700 flex justify-center text-gray-700 rounded-full items-center gap-2'>
                          <p className='text-lg text-[16px] '>Google Play</p>
                          <FaGooglePlay size={18}/>
                          </button>
                    </div>

                   
           </div>

           <div className='w-[50%] h-[70vh] flex justify-center'>
                <img src={ HeroImg } alt="" className='w-full h-full'/>
           </div>
                
         </main>
    </>
  )
}

export default Hero