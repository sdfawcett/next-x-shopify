import Image from 'next/image'
import BbGlobe from '../images/bb-globe-only.svg'

export default function Features() {
  return (
   <section className="bg-lightest-green text-gray-900 relative">

      <div className="custom-shape-divider-top">
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
         </svg>
      </div>

      <div className="relative max-w-screen-xl px-4 py-36 sm:px-6 lg:px-8 mx-auto">
         <div className="opacity-10 z-0 w-10/12 h-10/12">
         <Image
            src={BbGlobe}
            alt="bomb botanicals logo globe"
            layout="fill" 
            objectFit="contain" 
            objectPosition="center"
         />
         </div>
      
         <h2 data-aos="fade-left" className="z-10 text-3xl font-bold sm:text-4xl font-lora text-center">Natural CBD, inspired by Earth</h2>
   
         <p data-aos="fade-left" className="z-10 mt-4 text-gray-900 font-karla text-xl text-center">
            Mother nature inspires everything we do. That’s why our CBD is pure, GMO-free, and has zero pesticides.
         </p>
      
   
      <div
         className="z-10 grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
      >
         <div data-aos="fade-right" className="flex items-start">
            <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">

            <svg
               className="w-5 h-5"
               fill="none"
               stroke="#DAD7CD"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               ></path>
            </svg>
            </span>
   
            <div className="ml-4">
            <h2 className="text-xl font-bold font-lora">Cool, Calm, &amp; CBD</h2>
   
            <p className="mt-1 text-md text-gray-900">
               We feel everyone should be able to dive into life, find warmth among friends, stand together to face challenges, and keep their cool under pressure, regardless of their situation.
            </p>
            </div>
         </div>
   
         <div data-aos="fade-right" className="flex items-start">
            <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
            <svg
               className="w-5 h-5"
               fill="none"
               stroke="#DAD7CD"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               ></path>
            </svg>
            </span>
   
            <div className="ml-4">
            <h2 className="text-xl font-bold font-lora">We Take It Easy</h2>
   
            <p className="mt-1 text-md text-gray-900">
               Life can throw a lot at you, and it can take a toll on your physical and mental well-being. That’s why we believe in the power of CBD and its ability to bring balance to the human body.
            </p>
            </div>
         </div>
   
         <div data-aos="fade-right" className="flex items-start">
            <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
            <svg
               className="w-5 h-5"
               fill="none"
               stroke="#DAD7CD"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               ></path>
            </svg>
            </span>
   
            <div className="ml-4">
            <h2 className="text-xl font-bold font-lora">We Cultivate Our Own Hemp</h2>
   
            <p className="mt-1 text-md text-gray-900">
               It all starts in Oregon, where our hemp is grown. Absolutely zero pesticides are used during the cultivation process. Our products are untainted by harmful chemicals, and we are dedicated to remaining eco-conscious through sustainable farming practices.
            </p>
            </div>
         </div>
   
         <div data-aos="fade-right" className="flex items-start">
            <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
            <svg
               className="w-5 h-5"
               fill="none"
               stroke="#DAD7CD"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               ></path>
            </svg>
            </span>
   
            <div className="ml-4">
            <h2 className="text-xl font-bold font-lora">We Extract Our Own Medicine</h2>
   
            <p className="mt-1 text-md text-gray-900">
               We use state-of-the-art technology to extract our CBD. Our CO<sub>2</sub> extraction process preserves the natural compounds of the plant, including the beneficial terpenes.
            </p>
            </div>
         </div>
   
         <div data-aos="fade-right" className="flex items-start">
            <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
            <svg
               className="w-5 h-5"
               fill="none"
               stroke="#DAD7CD"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               ></path>
            </svg>
            </span>
   
            <div className="ml-4">
            <h2 className="text-xl font-bold font-lora">We're Friends, Scientists, and CBD Enthusiasts</h2>
   
            <p className="mt-1 text-md text-gray-900">
               Our team is composed of a group of specialists from a multitude of industries, educational fields and areas of expertise. We're all united by our enthusiasm for bringing CBD to households everywhere.
            </p>
            </div>
         </div>
   
         <div data-aos="fade-right" className="flex items-start">
            <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
            <svg
               className="w-5 h-5"
               fill="none"
               stroke="#DAD7CD"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               ></path>
            </svg>
            </span>
   
            <div className="ml-4">
            <h2 className="text-xl font-bold font-lora">We Make Better CBD For a Better Price</h2>
   
            <p className="mt-1 text-md text-gray-900">
               Our mission is to provide accessible, high-quality CBD products at an affordable price. We're also dedicated to transparency during our process. At any time you can check the lab results from third-party tests right here on the website. 
            </p>
            </div>
         </div>
         </div>
      </div>

      <div className="custom-shape-divider-bottom">
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
         </svg>
      </div>
      
   </section>
  )
}
