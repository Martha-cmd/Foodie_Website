import React from 'react'

const Terms = () => {
  return (
    <>
         <main className="w-full h-full lg:pt-24 md:pt-30 pt-24">
         <div className='bg-white dark:bg-black dark:text-white w-full md:px-24 px-10 lg:py-20 md:pt-20 pt-20 pb-24'>
                <h1 className='font-semibold md:text-5xl text-[1.8rem]'>Customer Terms of Service</h1>
                <div className="mt-8 flex flex-col gap-10">
                    <section>
                        <h2 className='font-semibold text-2xl pb-3'>Introduction</h2>
                        <p>Welcome to Foodii, a food ordering and delivery app powered by Kentodemaster Ltd. By accessing or using our app, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our app.</p>
                    </section>
                    <section className="mt-4 flex flex-col gap-3">
                        <h2 className='font-semibold text-2xl'>Account Registration</h2>
                        <ul className="list-disc pl-5">
                        <li><strong>Eligibility:</strong> To use Foodii, you must be at least 18 years old.</li>
                        <li><strong>Account Information:</strong> You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.</li>
                        <li><strong>Wallet:</strong> Foodii is a wallet-based app. You must fund your wallet before making any purchases. The balance in your wallet can be used to order meals from participating restaurants.</li>
                        </ul>
                    </section>
                    <section className="mt-4 flex flex-col gap-3">
                        <h2 className='font-semibold text-2xl'>Ordering and Delivery</h2>
                        <ul className="list-disc pl-5">
                        <li><strong>Placing Orders:</strong> You can place orders through the app from the available restaurants. Once an order is placed, it cannot be cancelled or modified.</li>
                        <li><strong>Payment:</strong> Payments for orders will be deducted from your wallet balance. Ensure your wallet has sufficient funds before placing an order.</li>
                        <li><strong>Delivery:</strong> We strive to ensure timely delivery of your orders. However, delivery times may vary based on various factors. We are not liable for any delays in delivery.</li>
                        </ul>
                    </section>
                    <section className="mt-4 flex flex-col gap-3">
                        <h2 className='font-semibold text-2xl'>Refunds and Cancellations</h2>
                        <ul className="list-disc pl-5">
                        <li><strong>Refunds:</strong> Refunds will be issued at our discretion in case of order issues such as incorrect or missing items. Refunds will be credited back to your wallet.</li>
                        <li><strong>Cancellations:</strong> Once an order is placed, it cannot be cancelled.</li>
                        </ul>
                    </section>
                    <section className="mt-4 flex flex-col gap-3">
                        <h2 className='font-semibold text-2xl'>User Conduct</h2>
                        <ul className="list-disc pl-5">
                        <li><strong>Prohibited Activities:</strong> You agree not to use Foodii for any unlawful purposes or engage in any activity that may harm the app or its users.</li>
                        <li><strong>Termination:</strong> We reserve the right to terminate or suspend your account for any violation of these terms.</li>
                        </ul>
                    </section>
                    <section className="mt-4 flex flex-col gap-3">
                        <h2 className='font-semibold text-2xl'>Limitation of Liability</h2>
                        <p>Kentodemaster Ltd. is not liable for any indirect, incidental, or consequential damages arising from your use of the Foodii app.</p>
                    </section>
                    <section className="mt-4 flex flex-col gap-3">
                        <h2 className='font-semibold text-2xl'>Changes to Terms</h2>
                        <p>We may update these terms from time to time. We will notify you of any changes by posting the new terms on the app. Your continued use of the app after any changes indicates your acceptance of the new terms.</p>
                    </section>
                    <section className="mt-4 flex flex-col gap-3">
                        <h2 className='font-semibold text-2xl'>Contact Us</h2>
                        <p>If you have any questions about these terms, please contact us at [contact information].</p>
                    </section>
               </div>
        </div>
         </main>
    
    </>
  )
}

export default Terms