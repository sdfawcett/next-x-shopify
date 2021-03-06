import { useState } from 'react';
import Image from 'next/image'
import OilImage from '../images/cbd-tincture.webp';
import GummiesImage from '../images/cbd-gummies.webp';
import CreamImage from '../images/cbd-cream.webp';
import PetTreatsImage from '../images/cbd-pet-treats.webp';

export default function Tabs() {

  const [category, setCategory] = useState('1');

  return (
   <section id='tabs' className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 h-128 pointer-events-none" aria-hidden="true"></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">

         {/* Section header */}
         <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-lora text-gray-900 mb-4">How To Use Our CBD Products</h2>
            <p className="text-xl text-gray-900 font-karla">Pure CBD products made using simple, natural carrier oils and botanicals</p>
         </div>

         {/* Section content */}
         <div>
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-6">

            {/* Category buttons */}
            <div className="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0">
               <button
                  className={`lg:w-full font-medium px-3 py-2 text-gray-900 hover:bg-lighter-green hover:text-white transition duration-150 ease-in-out rounded flex items-center justify-center shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-gray-900 lg:justify-start m-1 lg:mx-0 ${category === '1' && 'bg-bg-green'}`}
                  onClick={() => setCategory('1')}
               >
                  <span className={category === '1' ? 'text-white' : 'text-gray-900'}>Gummies</span>
               </button>
               <button
                  className={`lg:w-full font-medium px-3 py-2 hover:bg-lighter-green hover:text-white shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-gray-900 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '2' && 'bg-bg-green'}`}
                  onClick={() => setCategory('2')}
               >
                  <span className={category === '2' ? 'text-white' : 'text-gray-900'}>Oil</span>
               </button>
               <button
                  className={`lg:w-full font-medium px-3 py-2 hover:bg-lighter-green hover:text-white shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-gray-900 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '3' && 'bg-bg-green'}`}
                  onClick={() => setCategory('3')}
               >
                  <span className={category === '3' ? 'text-white' : 'text-gray-900'}>Cream</span>
               </button>
               <button
                  className={`lg:w-full font-medium px-3 py-2 hover:bg-lighter-green hover:text-white shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-gray-900 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '4' && 'bg-bg-green'}`}
                  onClick={() => setCategory('4')}
               >
                  <span className={category === '4' ? 'text-white' : 'text-gray-900'}>Pet Treats</span>
               </button>
               

            </div>

            {/* Videos */}
            <div className="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">

                  <div className={['2'].includes(category) ? undefined : 'hidden'}>
                  <div className="relative">

                     <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                        <Image src={OilImage} alt="CBD Oil" />
                        </div>

                        <div className="flex flex-col">
                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 1</div>
                           <p className='text-l text-gray-900 mb-2.5'>Before use, shake your bottle of full-spectrum hemp extract CBD oil well.</p>

                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 2</div>
                           <p className='text-l text-gray-900 mb-2.5'>Fill the dropper of your high-quality CBD oil to .5ml (one serving) and release the oil under the tongue.</p>

                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 3</div>
                           <p className='text-l text-gray-900 mb-2.5'>Hold or swish for 60 seconds for best absorption.</p>
                        </div>

                     </div>
                     
                  </div>
                  </div>
                  
                  <div className={['1'].includes(category) ? undefined : 'hidden'}>
                  <div className="relative">
                     <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                        <Image src={GummiesImage} alt="CBD Gummies" />
                        </div>

                        <div className="flex flex-col">
                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 1</div>
                           <p className='text-l text-gray-900 mb-2.5'>Take an organic hemp CBD gummy from container.</p>

                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 2</div>
                           <p className='text-l text-gray-900 mb-2.5'>Pop the gummy in your mouth and chew.</p>

                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 3</div>
                           <p className='text-l text-gray-900 mb-2.5'>Suck on it or chew slowly before swallowing for maximum absorption of CBD goodness.</p>
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
                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 1</div>
                           <p className='text-l text-gray-900 mb-2.5'>Apply a fingertip-sized blob of the CBD topical cream to the desired area.</p>

                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 2</div>
                           <p className='text-l text-gray-900 mb-2.5'>Rub into clean, dry skin until fully absorbed.</p>

                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 3</div>
                           <p className='text-l text-gray-900 mb-2.5'>Use more if needed, but try to be consistent.</p>
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
                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 1</div>
                           <p className='text-l text-gray-900 mb-2.5'>Check the back of the package to see the best serving size for your pet.</p>

                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 2</div>
                           <p className='text-l text-gray-900 mb-2.5'>Grab a treat (or break one to size).</p>

                           <div className="text-xl font-bold text-gray-900 font-lora mb-1">Step 3</div>
                           <p className='text-l text-gray-900 mb-2.5'>Make your pet's day!</p>
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
