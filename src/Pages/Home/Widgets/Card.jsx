import React from 'react'

const Card = ({ title, text, imgSrc }) => {
  return (
         
    <div className='w-[440px] h-[441px] rounded-[30px] border-[5px] border-[#034956] bg-[#f4f4f4] py-10 px-5 flex flex-col gap-3'>
    <p className='font-semibold text-2xl'>{ title }</p>
    <p className='text-[16px]'>{ text }</p>

    <div className='w-full flex justify-center'>
        <img src={ imgSrc } alt="" className='w-60 h-60'/>
    </div>

   </div>
  )
}

export default Card