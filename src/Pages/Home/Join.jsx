import React from 'react'
import MockUp1 from '../../assets/images/iPhone 13 mini - 1.png'
import MockUp2 from '../../assets/images/iPhone 13 mini - 2.png'
import MockUp3 from '../../assets/images/iPhone 13 mini - 3.png'
import MockUp4 from '../../assets/images/iPhone 13 mini - 4.png'
import MockUp5re from '../../assets/images/iPhone 13 mini - re5.png'

const Join = () => {
  return (
    <>
         <main className='w-full h-fit lg:py-20 pt-20 pb-10 text-black flex flex-col items-center'>
              <p className='font-semibold md:text-5xl text-[1.8rem] text-center'>Join the Foodii Family <span className='inline-block' style={{ transform: 'rotate(-15deg)' }}> 🍔</span></p>

              <div className='carousel lg:mt-20 mt-14'>
          <div className='carousel-track'>
          
            <img src={ MockUp1 } alt="" className='md:w-[50rem] md:h-[40rem] w-[30rem] h-[20rem]'/>
            <img src={ MockUp2 } alt="" className='md:w-[50rem] md:h-[40rem] w-[30rem] h-[20rem]'/>
            <img src={ MockUp3 } alt="" className='md:w-[50rem] md:h-[40rem] w-[30rem] h-[20rem]'/>
            <img src={ MockUp4 } alt="" className='md:w-[50rem] md:h-[40rem] w-[30rem] h-[20rem]'/>
            <img src={ MockUp5re } alt="" className='md:w-[50rem] md:h-[40rem] w-[30rem] h-[20rem]'/>
           
            {/* Duplicate the content to ensure seamless scrolling */}
            <img src={ MockUp1 } alt="" className='md:w-[50rem] md:h-[40rem] w-[30rem] h-[20rem]'/>
            <img src={ MockUp2 } alt="" className='md:w-[50rem] md:h-[40rem] w-[30rem] h-[20rem]'/>
            <img src={ MockUp3 } alt="" className='md:w-[50rem] md:h-[40rem] w-[30rem] h-[20rem]'/>
            <img src={ MockUp4 } alt="" className='md:w-[50rem] md:h-[40rem] w-[30rem] h-[20rem]'/>
            <img src={ MockUp5re } alt="" className='lg:w-[50rem] lg:h-[40rem] w-[30rem] h-[20rem]'/>
            
          </div>
        </div>

         </main>
    </>
  )
}

export default Join