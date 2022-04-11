import Image from 'next/image'
import WomanTakingOil from '../images/taking-cbd-oil.gif'
import CbdOil from '../images/cbd-oil.webp'
import Tabs from './Tabs'

export default function OilProductSection() {
   
  return (
   <section>
      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">

         <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            <div className="relative z-10 lg:py-16">
               <div className="relative h-64 sm:h-80 lg:h-full">
               <Image
                  className="rounded-lg absolute inset-0 object-cover w-full h-full"
                  layout='fill'
                  src={WomanTakingOil}
                  alt="woman taking cbd oil"
               />
               </div>
            </div>
      
            <div className="relative flex items-center bg-gray-100">
               <span
               className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
               ></span>
      
               <div className="p-8 sm:p-16 lg:p-24">
                  
               <h2 className="text-2xl font-lora font-bold dark:text-bg-green sm:text-3xl">What is CBD?</h2>
      
               <p className="mt-4 text-gray-600">
                  Cannabidiol (commonly known as CBD) is one of the main cannabinoid compounds found within the Cannabis Sativa plant. It is mainly derived from hemp, which is a separate and distinct strain of the cannabis plant than marijuana. Despite CBD being found in both hemp and marijuana, they are not one and the same.
               </p>

               <p className="mt-4 text-gray-600">
                  CBD is also different from THC, the other main cannabinoid in cannabis, in that it does not produce psychoactive effects or create a high.
               </p>

               <p className="mt-4 text-gray-600">
                  Instead, CBD has been found to have a wide range of benefits. That’s because humans have what’s called an endocannabinoid system, a network of receptors that use CBD. Many have found CBD to be an effective remedy for everyday life.
               </p>
      
               </div>
            </div>
         </div>


      </div>

      <div className="py-16">
         <Tabs />
      </div>

      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            
      
            <div className="relative flex items-center bg-gray-100">
               <span
               className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
               ></span>
      
               <div className="p-8 sm:p-16 lg:p-24">
               <h2 className="text-2xl font-lora font-bold dark:text-bg-green sm:text-3xl">Our Process</h2>
      
               <p className="mt-4 text-gray-600">
                  Our process begins in Oregon, where our hemp is organically grown on our farms. The utmost care is put into cultivating the plants without the use of any pesticides, herbicides or chemical fertilizers. That’s because we believe in only using sustainable and environmentally-conscious farming methods.
               </p>

               <p className="mt-4 text-gray-600">
                  Next, the hemp is taken to our labs so that the CBD can be extracted, distilled and turned into oil. We use a CO2 extraction process in order to ensure that our oil contains the cleanest, purest CBD extract possible.
               </p>
      
               </div>
            </div>

            <div className="relative z-10 lg:py-16">
               <div className="relative h-64 sm:h-80 lg:h-full">
               <Image
                  className="rounded-r-lg absolute inset-0 object-cover w-full h-full"
                  layout='fill'
                  src={CbdOil}
                  alt="bottle of cbd oil"
               />
               </div>
            </div>

         </div>
      </div>
   </section>
  )
}
