import { useState } from 'react';
import Image from 'next/image'
import VideoThumb from '../images/video-thumb.jpg';
import PlayBtn from '../images/play-button.svg';
import OilImage from '../images/cbd-tincture.webp';
import GummiesImage from '../images/cbd-gummies.webp';
import CreamImage from '../images/cbd-cream.webp';
import PetTreatsImage from '../images/cbd-pet-treats.webp';
import SuperfoodImage from '../images/cbd-superfood.webp';
import SalveImage from '../images/cbd-salve.webp';

export default function Tabs() {

  const [category, setCategory] = useState('1');

  return (
   <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none" aria-hidden="true"></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">

         {/* Section header */}
         <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">How To Use CBD Products</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Pure CBD products made using simple, natural carrier oils and botanicals</p>
         </div>

         {/* Section content */}
         <div>
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-6">

            {/* Category buttons */}
            <div className="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0">
               <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '1' && 'bg-teal-600 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('1')}
               >
                  <span className={category === '1' ? 'text-gray-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Oil</span>
               </button>
               <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '2' && 'bg-teal-600 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('2')}
               >
                  <span className={category === '2' ? 'text-gray-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Gummies</span>
               </button>
               <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '3' && 'bg-teal-600 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('3')}
               >
                  <span className={category === '3' ? 'text-gray-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Cream</span>
               </button>
               <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '4' && 'bg-teal-600 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('4')}
               >
                  <span className={category === '4' ? 'text-gray-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Pet Treats</span>
               </button>
               <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '5' && 'bg-teal-600 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('5')}
               >
                  <span className={category === '5' ? 'text-gray-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Superfoods</span>
               </button>
               <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '6' && 'bg-teal-600 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('6')}
               >
                  <span className={category === '6' ? 'text-gray-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Salve</span>
               </button>
            </div>

            {/* Videos */}
            <div className="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">

                  <div className={['1'].includes(category) ? undefined : 'hidden'}>
                  <div className="relative">

                     <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                        <Image src={OilImage} alt="CBD Oil" />
                        </div>
                        <div className="flex flex-col">
                           <div className="text-xl font-bold font-red-hat-display">Step 1</div>
                        </div>
                     </div>
                     
                  </div>
                  </div>
                  
                  <div className={['2'].includes(category) ? undefined : 'hidden'}>
                  <div className="relative">
                     <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                        <Image src={GummiesImage} alt="CBD Gummies" />
                        </div>
                        <div className="flex flex-col">
                           <div className="text-xl font-bold font-red-hat-display">Step 1</div>
                        </div>
                     </div>
                  </div>
                  </div>
                  <div className={['3'].includes(category) ? undefined : 'hidden'}>
                  <div className="relative">
                     <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                        <Image src={CreamImage} alt="CBD Cream" />
                        </div>
                        <div className="flex flex-col">
                           <div className="text-xl font-bold font-red-hat-display">Step 1</div>
                        </div>
                     </div>
                  </div>
                  </div>
                  <div className={['4'].includes(category) ? undefined : 'hidden'}>
                  <div className="relative">
                     <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                        <Image src={PetTreatsImage} alt="CBD Pet Treats" />
                        </div>
                        <div className="flex flex-col">
                           <div className="text-xl font-bold font-red-hat-display">Step 1</div>
                        </div>
                     </div>
                  </div>
                  </div>
                  <div className={['5'].includes(category) ? undefined : 'hidden'}>
                  <div className="relative">
                     <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                        <Image src={SuperfoodImage} alt="CBD Superfood" />
                        </div>
                        <div className="flex flex-col">
                           <div className="text-xl font-bold font-red-hat-display">Step 1</div>
                        </div>
                     </div>
                  </div>
                  </div>
                  <div className={['6'].includes(category) ? undefined : 'hidden'}>
                  <div className="relative">
                     <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                        <Image src={SalveImage} alt="CBD Salve" />
                        </div>
                        <div className="flex flex-col">
                           <div className="text-xl font-bold font-red-hat-display">Step 1</div>
                        </div>
                     </div>
                  </div>
                  </div>

               
            </div>

            </div>

         </div>

      </div>
      </div>
   </section>
  )
}
