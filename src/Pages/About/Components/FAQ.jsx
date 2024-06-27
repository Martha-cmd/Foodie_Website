import React, { useState } from 'react'
import Beam from '../../../assets/images/wax_15458208.png'


const FAQ = () => {

    const [ selectedQuestion, setSelectedQuestion ] = useState(0);

    const questionAndAnswers = [
          {
            question: "What is Foddii?",
            answer: `Foodii is a food delivery company that connects customers craving delicious meals, restaurants looking   to expand their reach, and delivery partners wanting flexible earning opportunities. 
                   We make it easy for you to enjoy delicious meals delivered to your door, grow your restaurant business, or start delivering meals on your own schedule.`,
          },

          {
            question: 'How does Foodii work?',
            answer: `Foodii works by connecting customers with restaurants and delivery partners. 
                     Customers can browse menus, place orders, and track their delivery in real-time.`,
          },

          {
            question: 'How can I order food?',
            answer: `You can order food by downloading the Foodii app on your device store, selecting your favorite restaurant, choosing your meal, and placing your order. 
            You can then track the delivery in real-time until it arrives at your doorstep.`,
          },

          {
            question: 'How can I become a delivery partner?',
            answer: `To become a delivery partner with Foodii, download Foodii Rider app and sign up as a delivery partner. You will need to provide some personal information and complete the registration process. 
            Once approved, you can start accepting delivery requests and earning money.`,
          },

          {
            question: 'How can restaurants join Foodii?',
            answer: `Restaurants can join Foodii by downloading the Foodii Restaurant app and signing up as a restaurant partner. You will need to provide some details about your restaurant, complete the registration process. 
            Once approved, you can start receiving orders from customers through Foodii.`,
          },

          {
            question: 'How can I fund my Foodii wallet?',
            answer: `You can fund your Foodii wallet by logging into your account on the Foodii app, going to the wallet section, and selecting the option to add funds. 
            You can add funds using various payment methods such as credit/debit cards, bank transfers, or other available options.`,
          },
    ]

  return (
    <>
         <div className='w-full bg-white border-[5px] border-[#034956] rounded-[30px] mt-24 flex md:flex-row flex-col md:px-10 px-3 py-10 justify-between gap-10'>

            <div className='w-full lg:flex flex-col items-start hidden'>
                  <p className='font-semibold md:text-4xl text-[1.8rem] text-center pb-16'>FAQs.</p>

                  <div className='w-full flex flex-col gap-4'>
                    {questionAndAnswers.map((item, index) =>
                    
                            <div className={`w-full border-[0.1px] border-[#034956] px-5 py-5 rounded-[15px] font-semibold text-[20px] cursor-default ${selectedQuestion === index ? 'bg-black text-white' : 'bg-[#FAFEFF]'}`}
                            onClick={() => setSelectedQuestion(index)}
                            >
                                {item.question}
                            </div>
                    )}

                    </div>

            </div>


            <div className='w-full lg:flex flex-col items-start hidden'>
                  <p className='font-semibold md:text-4xl text-[1.8rem] text-center pb-16'>Ans.</p>

                  <div className='w-full h-full bg-[#034956] rounded-[25px] text-white px-10 py-10 font-medium text-[20px]'>
                         <img src={ Beam } alt="ans" className='w-8 mb-5'/>

                    {selectedQuestion !== null && (
                         <>
                              {questionAndAnswers[selectedQuestion].answer.split('\n').map((line, index) => (
                                   <p key={index} className={index > 0 ? 'pt-3' : ''}>
                                        {line}
                                   </p>
                              ))}
                         </>
                    )}
                  </div>
            </div>

                <div className="join join-vertical w-full lg:hidden">
                {questionAndAnswers.map((item, index) => 
                        <div key={index} className="collapse collapse-arrow join-item border-base-300 border">
                            <input 
                            type="radio" 
                            name="my-accordion-4" 
                            checked={selectedQuestion === index}
                            onChange={() => setSelectedQuestion(index)}
                            defaultChecked 
                            />
                            

                            <div className="collapse-title md:text-xl text-[15px] font-medium ">{item.question}</div>
                            {selectedQuestion === index && (
                            <div className="collapse-content md:text-[14px] text-[12px]">
                                {item.answer.split('\n').map((line, idx) => (
                                <p key={idx} className={idx > 0 ? 'pt-3' : ''}>
                                    {line}
                                </p>
                                ))}
                            </div>
                            )}
                          
                        </div>
                  )}
                </div>
                
            

         </div>
    </>
  )
}

export default FAQ