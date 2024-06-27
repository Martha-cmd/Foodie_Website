import React, { useEffect } from 'react'
import OrderPng from '../../assets/images/Order food-pana.png'
import SellPng from '../../assets/images/fruit shop-rafiki.png'
import DeliveryPng from '../../assets/images/Delivery-cuate.png'
import Card from './Widgets/Card'
import AOS from 'aos'
import 'aos/dist/aos.css';



const Categories = () => {

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      offset: 200, // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // AOS easing option
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
    AOS.refresh(); // Refresh AOS to detect the elements
  }, []);

  return (
    <>
         <main className='w-full text-black pb-20 flex lg:flex-row flex-col justify-between gap-4 lg:px-[100px] md:px-[50px] px-[20px] items-center' data-aos="fade-up">

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