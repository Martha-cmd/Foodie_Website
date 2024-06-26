import React from 'react'
import OrderPng from '../../assets/images/Order food-pana.png'
import SellPng from '../../assets/images/fruit shop-rafiki.png'
import DeliveryPng from '../../assets/images/Delivery-cuate.png'
import Card from './Widgets/Card'

const Categories = () => {
  return (
    <>
         <main className='w-full text-black pb-20 flex lg:flex-row flex-col justify-between gap-4 lg:px-[100px] md:px-[50px] px-[20px] items-center'>

            <Card 
                title="Order Food" 
                text="Craving something delicious? Browse, choose, and enjoy your favorite meals delivered to your door with just a few taps." 
                imgSrc={OrderPng} 
            />
            <Card 
                title="Start Selling" 
                text="Expand your reach and grow your business. Join our platform to connect with more customers and boost your sales effortlessly." 
                imgSrc={SellPng} 
            />
            <Card 
                title="Deliver Happiness" 
                text="Become a delivery partner. Register on our app and start delivering smiles and tasty meals on your own schedule." 
                imgSrc={DeliveryPng} 
            />

         </main>
    </>
  )
}

export default Categories