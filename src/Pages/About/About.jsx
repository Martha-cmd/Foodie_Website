import React from 'react'
import FAQ from './Components/FAQ'
import ScrollSpy from 'react-ui-scrollspy';


const About = () => {
  return (
    <>
        <main className="lg:py-52 py-32 pb-20 w-full lg:px-[100px] md:px[50px] px-[20px] flex flex-col items-center text-black">

                 <p className='font-semibold md:text-5xl text-[1.8rem] text-center pb-16'>Quick, Reliable and Delicious <span className='inline-block'> 📦 </span></p>

                 <div className='text-base'>
                        Lorem ipsum dolor sit amet consectetur. A nibh sit sed tincidunt tellus. Convallis non elementum libero congue risus leo justo semper. Donec dictum venenatis pretium egestas risus ut montes. Duis sit cursus hendrerit maecenas id leo ullamcorper. Quam risus vel bibendum ullamcorper hendrerit. Sed et odio quis et. Lectus augue massa at adipiscing enim quis ut in. Gravida urna turpis placerat volutpat faucibus tellus magnis lectus. Leo a augue aliquet rhoncus in. Fermentum proin metus donec ut orci egestas amet. Cursus fusce leo pellentesque nunc ut nullam eu. Diam enim tortor odio dignissim aliquet. Aliquam adipiscing sed gravida dui lobortis netus. Mauris aliquam augue sit at mattis semper. Elementum sagittis nunc volutpat magna vulputate. Quam scelerisque vel turpis laoreet proin. Habitant aliquam mi facilisis amet ut purus pellentesque tincidunt. Ut nisi accumsan odio mattis egestas vitae tristique. Eget magna aenean sit ornare morbi suspendisse ante adipiscing nibh.
                 </div>

                 <div className='pt-16 text-base'>
                        Lorem ipsum dolor sit amet consectetur. A nibh sit sed tincidunt tellus. Convallis non elementum libero congue risus leo justo semper. Donec dictum venenatis pretium egestas risus ut montes. Duis sit cursus hendrerit maecenas id leo ullamcorper. Quam risus vel bibendum ullamcorper hendrerit. Sed et odio quis et. Lectus augue massa at adipiscing enim quis ut in. Gravida urna turpis placerat volutpat faucibus tellus magnis lectus. Leo a augue aliquet rhoncus in. Fermentum proin metus donec ut orci egestas amet. Cursus fusce leo pellentesque nunc ut nullam eu. Diam enim tortor odio dignissim aliquet. Aliquam adipiscing sed gravida dui lobortis netus. Mauris aliquam augue sit at mattis semper. Elementum sagittis nunc volutpat magna vulputate. Quam scelerisque vel turpis laoreet proin. Habitant aliquam mi facilisis amet ut purus pellentesque tincidunt. Ut nisi accumsan odio mattis egestas vitae tristique. Eget magna aenean sit ornare morbi suspendisse ante adipiscing nibh.
                 </div>

            
                      <div id="faq">
                          <FAQ />
                      </div>
        </main>
    </>
  )
}

export default About