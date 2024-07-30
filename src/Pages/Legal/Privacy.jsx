import React from 'react'

const Privacy = () => {
  return (
    <>
        <main className="w-full h-full lg:pt-24 md:pt-30 pt-24">
                 <div className='bg-white w-full md:px-24 px-10 lg:py-20 md:pt-20 pt-20 pb-24'>
                        <h1 className='font-semibold md:text-5xl text-[1.8rem]'>Customer Privacy Policy</h1>
                  <div className="mt-8 flex flex-col gap-10">
                    <section>
                        <h2 className='font-semibold text-2xl'>Introduction</h2>
                        <p>Kentodemaster Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use the Foodii app.</p>
                    </section>
                    <section className="mt-4">
                        <h2 className='font-semibold text-2xl'>Information We Collect</h2>
                        <ul className="list-disc pl-5">
                        <li><strong>Personal Information:</strong> When you create an account, we collect personal information such as your name, email address, phone number, and payment information.</li>
                        <li><strong>Usage Information:</strong> We collect information about how you use the app, including your order history and interactions with the app.</li>
                        </ul>
                    </section>
                    <section className="mt-4">
                        <h2 className='font-semibold text-2xl'>How We Use Your Information</h2>
                        <ul className="list-disc pl-5">
                        <li><strong>To Provide Services:</strong> We use your information to process your orders, manage your wallet, and deliver your meals.</li>
                        <li><strong>To Improve Our Services:</strong> We use your information to understand how you use the app and to improve its functionality.</li>
                        <li><strong>Marketing:</strong> We may use your information to send you promotional messages, but you can opt out at any time.</li>
                        </ul>
                    </section>
                    <section className="mt-4">
                        <h2 className='font-semibold text-2xl'>Sharing Your Information</h2>
                        <ul className="list-disc pl-5">
                        <li><strong>Service Providers:</strong> We may share your information with third-party service providers who help us operate the app and deliver your orders.</li>
                        <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights.</li>
                        </ul>
                    </section>
                    <section className="mt-4">
                        <h2 className='font-semibold text-2xl'>Data Security</h2>
                        <p>We take reasonable measures to protect your information from unauthorized access, disclosure, or loss. However, no method of transmission over the internet or electronic storage is completely secure.</p>
                    </section>
                    <section className="mt-4">
                        <h2 className='font-semibold text-2xl'>Your Rights</h2>
                        <ul className="list-disc pl-5">
                        <li><strong>Access and Correction:</strong> You have the right to access and correct your personal information.</li>
                        <li><strong>Deletion:</strong> You can request the deletion of your personal information, but we may retain certain information as required by law.</li>
                        </ul>
                    </section>
                    <section className="mt-4">
                        <h2 className='font-semibold text-2xl'>Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on the app. Your continued use of the app after any changes indicates your acceptance of the new policy.</p>
                    </section>
                    <section className="mt-4">
                        <h2 className='font-semibold text-2xl'>Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at [contact information].</p>
                    </section>
                  </div>
                 </div>
        </main>
    </>
  )
}

export default Privacy