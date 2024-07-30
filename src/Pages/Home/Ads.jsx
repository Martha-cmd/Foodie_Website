import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import MockUpAds from '../../assets/images/mockuuups-female-hand-holding-iphone-14-pro-mockup.png'
import MockUpAdss from '../../assets/images/mockuuups-female-hand-holding-iphone-14-pro-mockup.png'
import Modal from './Widgets/Modal';


const Ads = () => {
  return (
    <>
          <main className='w-full py-20 text-black flex flex-col items-center lg:px-[100px] md:px-[50px] px-[0] lg:mt-28 mt-12'>

                 <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center w-full lg:h-[400px] h-fit lg:gap-0 gap-20 rounded-[30px] border-[5px] border-[#034956] lg:pt-5 pt-10 lg:px-16 px-5 bg-red-500" style={{
                        background: `linear-gradient(to bottom, #F15025 0%, rgba(247, 53, 30, 93.23) 100%, rgba(255, 21, 21, 0.85) 100%)`,
                    }}>
                      

                        <div className='w-[348px] clip-bottom lg:block hidden'>
                                <img src={ MockUpAds } alt="User holding mobile device" />
                        </div>

                        <div className='w-[348px] relative overflow-hidden lg:hidden block'>
                                <img src={ MockUpAdss } alt="User holding mobile device" />
                        </div>
                        
                       <div className='flex flex-col lg:gap-2 gap-6 items-center lg:w-auto w-full'>
                            <p className='text-[#034956] text-lg font-semibold'>Download the app</p>
                                
                                <div className="text-white md:text-[40px] text-2xl font-semibold lg:w-[440px] w-full text-center leading-[3rem]">
                                    Enjoy your food without leaving the house
                                </div>
                            
                                <div className="mt-4 flex md:flex-row flex-col md:gap-4 gap-6">

                                    <button className='py-1.5 px-4 bg-white flex justify-center text-black rounded-full items-center gap-2 '>
                                    <p className='text-lg text-[16px]' onClick={()=>document.getElementById('my_modal_1').showModal()}>Apple Store</p>
                                    <FaApple size={18}/>
                                    </button>

                                    <button className='py-1.5 px-4 bg-transparent border-2 border-white flex justify-center text-white rounded-full items-center gap-2'>
                                    <p className='text-lg text-[16px]' onClick={()=>document.getElementById('my_modal_1').showModal()}>Google Play</p>
                                    <FaGooglePlay size={18}/>
                                    </button>
                        </div>
                       </div>
                    </div>

                  <Modal />

          </main>
    </>
  )
}

export default Ads