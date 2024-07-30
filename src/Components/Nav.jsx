import React, { useState, useEffect} from 'react'
import Logo from '../assets/logo/FOOdii logo (2) 1.png'
import Company from '../assets/images/image.png'
import Question from '../assets/icons/question.png'
import Contact from '../assets/icons/asterick.png'
import Package from '../assets/icons/social-paper-bag.png'
import Food from '../assets/icons/food.png'
import Rider from '../assets/icons/rider.png'
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import Modal from '../Pages/Home/Widgets/Modal'

const Nav = () => {
  const [ isScrolled, setisScrolled ] = useState(false);
  const [ showMenu, setshowMenu ] = useState(false);

  useEffect(() => {
     const handleScroll = () => {
        if (window.scrollY > 0) {
           setisScrolled(true);
        } else {
          setisScrolled(false);
        }
     };

     window.addEventListener('scroll', handleScroll);

     return () => {
           window.removeEventListener('scroll', handleScroll);
     }


  }, []);
  return (
    <>
        <main className={`w-full h-20 flex justify-between items-center cursor-pointer fixed text-black lg:px-[100px] md:px-[50px] px-[20px] z-40 transition-colors duration-300 ${isScrolled ? 'bg-[#fba68fd3]' : 'bg-transparent'}`}>

                   <Link to="/"><img src={ Logo } alt="" className='md:w-24 w- w-16 md:h-10 h-7'/></Link>
                   
                   <ul className=' lg:flex justify-end gap-10 items-center hidden'>

                      <Link to="/about" className='hover:underline underline-offset-4 decoration-[#034956] decoration-2 duration-500'>Company</Link>


                      <HashLink smooth to="/about#faq" className='hover:underline underline-offset-4 decoration-[#034956] decoration-2 duration-500'>FAQs</HashLink>

                      <ScrollLink to='footer' smooth={true} duration={500} className='hover:underline underline-offset-4 decoration-[#034956] decoration-2 duration-500'>Contact</ScrollLink>
                   
                      <div className="dropdown dropdown-bottom dropdown-end">
                            <button tabIndex={0} role="button" className="py-1.5 px-4 bg-black text-white rounded-full">Sign up</button>
                            <ol tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black text-white rounded-box w-52 ">
                                <li className='hover:bg-zinc-800 rounded' onClick={()=>document.getElementById('my_modal_1').showModal()}><a>Customer</a></li>
                                <li className='hover:bg-zinc-800 rounded' onClick={()=>document.getElementById('my_modal_1').showModal()}><a>Restaurant</a></li>
                                <li className='hover:bg-zinc-800 rounded' onClick={()=>document.getElementById('my_modal_1').showModal()}><a>Rider</a></li>
                            </ol>
                     </div>
                     </ul>

                     <Modal />

                     <MdOutlineMenu size={24} className='lg:hidden' onClick={() => setshowMenu(true)}/>
                  
        </main>

         {showMenu && (
               <div className="fixed inset-0 bg-black flex flex-col justify-start z-50 py-24 cursor-pointer h-screen overflow-scroll">
              <MdClose size={24} className="text-white absolute top-5 right-5 cursor-pointer" onClick={() => setshowMenu(false)} />

              <ul className='text-white flex flex-col gap-10 md:text-xl text-[14px]'>

                <Link to='/about' className='hover:bg-[#F15025] md:px-8 px-5 py-5 duration-500 flex gap-2 items-center' onClick={() => setshowMenu(false)}>
                  <img src={ Company } alt="company" className='md:w-8 w-6'/>
                  Company
                </Link>
                
                <HashLink smooth to="/about#faq" className='hover:bg-[#F15025] md:px-8 px-5 py-5 duration-500 flex gap-2 items-center' onClick={() => setshowMenu(false)}>
                <img src={ Question } alt="company" className='md:w-8 w-6'/>
                  FAQs
                </HashLink>


                <ScrollLink to='footer' className='hover:bg-[#F15025] md:px-8 px-5 py-5 duration-500 flex gap-2 items-center' onClick={() => setshowMenu(false)}>
                  <img src={ Contact } alt="company" className='md:w-8 w-6'/>
                  Contact
                </ScrollLink>
                <li className='hover:bg-[#F15025] md:px-10 px-6 py-5 duration-500 flex gap-3 items-center' onClick={()=>document.getElementById('my_modal_2').showModal()}>
                <img src={ Package } alt="company" className='md:w-5 w-4'/>
                  Customer App
                </li>
                <li className='hover:bg-[#F15025] md:px-9 px-6 py-5 duration-500 flex gap-3 items-center'  onClick={()=>document.getElementById('my_modal_2').showModal()}>
                     <img src={ Food } alt="company" className='md:w-7 w-4'/>
                     Restaurant App
                </li>
                <li className='hover:bg-[#F15025] md:px-8 px-5 py-5 duration-500 flex gap-2 items-center'  onClick={()=>document.getElementById('my_modal_2').showModal()}>
                    <img src={ Rider } alt="company" className='md:w-8 w-6'/>
                    Riders App
                </li>
              </ul>
            </div>

           
              
         )}
           <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <p className="py-4 font-bold text-lg">Coming Soon!</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={() => setshowMenu(false)}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
    </>
  )
}

export default Nav