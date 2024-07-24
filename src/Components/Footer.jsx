import React from 'react'
import Logo from '../assets/logo/FOOdiilogofooter.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  
  return (
    <>
        <main id="footer" className="w-full bg-black h-98 text-white py-20 px-24 flex lg:flex-row flex-col-reverse lg:justify-between gap-14 cursor-pointer">

              <div className='flex flex-col items-center gap-1 lg:w-auto w-full'>
                    <img src={ Logo } alt="" className='w-36'/>
                    <p className='text-[#F15025] font-light text-center'>Quick, Reliable and Delicious</p>
              </div>

              <div className='flex md:flex-row flex-wrap lg:w-auto w-full md:justify-center lg:items-start items-center md:gap-48 gap-20'>

                 <div>
                     <p className='text-[14px]'>TABS</p>
                     <ul className='mt-4 flex flex-col gap-5 text-gray-400 text-[15px]'>
                         <Link to='/about' className='hover:text-gray-200'>Company</Link>
                         <HashLink smooth to="/about#faq" className='hover:text-gray-200'>FAQ</HashLink>
                     </ul>
                 </div>

                 <div>
                     <p className='text-[14px]'>LEGAL</p>
                     <ul className='mt-4 flex flex-col gap-5 text-gray-400 text-[15px]'>
                         <Link to="/userprivacy" className='hover:text-gray-200'>Privacy Policy</Link>
                         <Link to='/userterms' className='hover:text-gray-200'>Terms of use</Link>
                     </ul>
                 </div>

                 <div>
                     <p className='text-[14px]'>CONTACT US</p>
                     <ul className='mt-4 flex flex-col gap-5 text-gray-400 text-[15px]'>
                         <li className='hover:text-gray-200'>Instagram</li>
                         <li className='hover:text-gray-200'>Whatsapp</li>
                         <li className='hover:text-gray-200'>Phone Call</li>
                         <li className='hover:text-gray-200'>Email</li>
                     </ul>
                 </div>

              </div>
        </main>
    </>
  )
}

export default Footer