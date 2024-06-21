import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";

const Ads = () => {
  return (
    <>
          <main className='w-full py-20 text-black flex flex-col items-center px-[100px] mt-28'>

          {/* <div class="custom-shape-divider w-full h-[300px]">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
           <path d="M0,50 L1200,0 L1200,120 L0,120 Z" class="shape-fill shape-border"></path> 
                <text x="70%" y="30%" dominant-baseline="middle" text-anchor="middle" class="svg-text" className='fill-[#034956] text-[14px] font-semibold tracking-wider'>Download the app</text>
                <text x="70%" y="50%" dominant-baseline="middle" text-anchor="middle" class="svg-text" className='fill-white text-xl font-semibold tracking-wider'>Enjoy your food without leaving the house.</text>

             <foreignObject x="0" y="0" width="100%" height="100%">
                    <div className="flex flex-col justify-start items-center w-full h-full bg-red-500 pt-5">
                        <text x="70%" y="30%" dominant-baseline="middle" text-anchor="middle" class="svg-text" className='text-[#034956] text-[14px] font-semibold tracking-wider'>Download the app</text>
                        <text x="70%" y="50%" dominant-baseline="middle" text-anchor="middle" class="svg-text" className='text-white text-xl font-semibold tracking-wider'>Enjoy your food without leaving the house.</text>
                        
                        <div className="mt-4 flex gap-4 bg-purple-500 h-20">
                                <button className='w-24 h-5 bg-[#F7351E] flex justify-center text-white rounded-full items-center gap-2 shadow-md shadow-[#F7351E]'>
                                <p className='text-lg text-[14px]'>Apple Store</p>
                                <FaApple size={18}/>
                                </button>

                                <button className='py-1.5 px-4 bg-transparent border-2 border-gray-700 flex justify-center text-gray-700 rounded-full items-center gap-2'>
                                <p className='text-lg text-[16px] '>Google Play</p>
                                <FaGooglePlay size={18}/>
                                </button> 
                        </div>
                    </div>
        </foreignObject>
           </svg>
          </div> */}

                 <div className="flex justify-between items-center w-full h-[400px] rounded-[30px] border-[5px] border-[#034956] pt-5 px-16" style={{
                        background: `linear-gradient(to bottom, #F15025 0%, rgba(247, 53, 30, 93.23) 100%, rgba(255, 21, 21, 0.85) 100%)`,
                    }}>

                        <div className='w-[348px] clip-bottom'>
                                <div className="mockup-phone ">
                                                    <div className="camera"></div> 
                                                    <div className="display">
                                                    <div className="artboard artboard-demo phone-1">Hi.</div>
                                                    </div>

                                </div>
                        </div>
                        
                       <div className='flex flex-col gap-2'>
                            <p className='text-[#034956] text-lg font-semibold'>Download the app</p>
                                
                                <div className='text-white text-[40px] font-semibold w-[440px]'>Enjoy your food <p className='break-words'>without leaving the</p><p>house.</p></div>
                            
                                <div className="mt-4 flex gap-4">

                                    <button className='py-1.5 px-4 bg-white flex justify-center text-black rounded-full items-center gap-2 '>
                                    <p className='text-lg text-[16px]'>Apple Store</p>
                                    <FaApple size={18}/>
                                    </button>

                                    <button className='py-1.5 px-4 bg-transparent border-2 border-white flex justify-center text-white rounded-full items-center gap-2'>
                                    <p className='text-lg text-[16px] '>Google Play</p>
                                    <FaGooglePlay size={18}/>
                                    </button>
                        </div>
                       </div>
                    </div>



          </main>
    </>
  )
}

export default Ads