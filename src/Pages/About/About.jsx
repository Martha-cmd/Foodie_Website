import React from 'react'
import FAQ from './Components/FAQ'


const About = () => {
  return (
    <>
      <main className="lg:py-52 py-32 pb-20 w-full lg:px-[100px] md:px[50px] px-[20px] flex flex-col items-center text-black">

        <p className='font-semibold md:text-5xl text-[1.8rem] text-center pb-16'>Quick, Reliable and Delicious <span className='inline-block'> 📦 </span></p>

         <div className='-mt-5'>

          <section>
            <p>Welcome to Foodii, your ultimate food ordering and delivery companion! Powered by Kentodemaster Ltd., Foodii revolutionizes the way you experience dining by connecting you with a diverse selection of restaurants, all at your fingertips. Our app is designed to offer a seamless, convenient, and delightful food ordering experience.</p>
          </section>
          <section className="mt-8">
            <h2 className='font-semibold text-2xl mb-5'>Why Choose Foodii?</h2>
            <ul className="list-disc pl-5 flex flex-col gap-5">
              <li><strong>Diverse Restaurant Choices:</strong> Whether you're craving local delicacies or international cuisines, Foodii has got you covered with a wide variety of restaurant options to satisfy your taste buds.</li>
              <li><strong>Easy Wallet System:</strong> With Foodii's wallet-based payment system, adding funds and making purchases has never been easier. Simply top up your wallet and enjoy a hassle-free checkout process every time you order.</li>
              <li><strong>Fast and Reliable Delivery:</strong> We understand the importance of timely deliveries. Our dedicated delivery team ensures that your food arrives hot and fresh, right at your doorstep.</li>
              <li><strong>User-Friendly Interface:</strong> Navigating through Foodii is a breeze, thanks to our intuitive and user-friendly interface. Find your favorite restaurants, explore new cuisines, and place orders with just a few taps.</li>
              <li><strong>Exclusive Offers and Discounts:</strong> Stay tuned for exciting deals, discounts, and promotions exclusively available on the Foodii app. Enjoy great savings on your favorite meals!</li>
            </ul>
          </section>
          <section className="mt-4">
            <p>At Foodii, we're committed to enhancing your dining experience by providing quality service and delicious meals. Download Foodii today and embark on a culinary journey like never before!</p>
          </section>

        </div>

       <div id="faq">
          <FAQ />
        </div>
      </main>
    </>
  )
}

export default About