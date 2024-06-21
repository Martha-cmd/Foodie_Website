import React from 'react'
import Logo from '../assets/logo/FOOdiilogofooter.png'

const Footer = () => {
    
    const navigation = [
         {title: "Tab", Nav: ["Get Help", "About Foodii", "Company"]},
         {title: "Legal", Nav: ["Privacy Policy", "Terms of Use"]},
         {title: "Contact Us", Nav: ["Instagram", "Whatsapp", "Phone Call"]},

    ]
  return (
    <>
        <main className="w-full bg-black h-98 text-white py-20 px-24 flex justify-between">

              <div className='flex flex-col items-center gap-1'>
                    <img src={ Logo } alt="" className='w-36'/>
                    <p className='text-[#F15025] font-light'>Quick, Reliable, and Delicious</p>
              </div>

              <div className='flex gap-48'>

                 <div>
                     <p>Tabs</p>
                     <ul className='mt-4 flex flex-col gap-5 text-gray-400 text-[15px]'>
                         <li>Get Help</li>
                         <li>About Foodii</li>
                         <li>Company</li>
                     </ul>
                 </div>

                 <div>
                     <p>Legal</p>
                     <ul className='mt-4 flex flex-col gap-5 text-gray-400 text-[15px]'>
                         <li>Privacy Policy</li>
                         <li>Terms of use</li>
                     </ul>
                 </div>

                 <div>
                     <p>Contact Us</p>
                     <ul className='mt-4 flex flex-col gap-5 text-gray-400 text-[15px]'>
                         <li>Instagram</li>
                         <li>Whatsapp</li>
                         <li>Phone Call</li>
                     </ul>
                 </div>

              </div>
        </main>
    </>
  )
}

export default Footer