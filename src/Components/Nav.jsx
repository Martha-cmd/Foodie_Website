import React from 'react'
import Logo from '../assets/logo/FOOdii logo (2) 1.png'

const Nav = () => {
  return (
    <>
        <main className='w-full h-20 flex justify-between items-center cursor-pointer fixed text-black px-[100px] z-40'>
                   <img src={ Logo } alt="" className='w-24 h-10'/>
                   
                   <ul className='w-96 flex gap-10 items-center'>
                      <li>Company</li>
                      <li>FAQs</li>
                      <li>Contact</li>
                   
                      {/* <button className='py-1.5 px-4 bg-black text-white rounded-full'>Sign up</button> */}
                      <div className="dropdown dropdown-bottom dropdown-end">
                            <button tabIndex={0} role="button" className="py-1.5 px-4 bg-black text-white rounded-full">Sign up</button>
                            <ol tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black text-white rounded-box w-52 ">
                                <li className='hover:bg-zinc-800 rounded'><a>Customer</a></li>
                                <li className='hover:bg-zinc-800 rounded'><a>Restaurant</a></li>
                                <li className='hover:bg-zinc-800 rounded'><a>Rider</a></li>
                            </ol>
                     </div>
                     </ul>
                  

                   
        </main>
    </>
  )
}

export default Nav