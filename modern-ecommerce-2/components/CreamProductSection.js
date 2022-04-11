import Image from 'next/image'
import CreamSmeared from '../images/cream-smear.webp'
import CreamProcess from '../images/cream-process.webp'
import Tabs from './Tabs'

export default function CreamProductSection() {
   
  return (
   <section>
      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">

         <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            <div className="relative z-10 lg:py-16">
               <div className="relative h-64 sm:h-80 lg:h-full">
               <Image
                  className="rounded-lg absolute inset-0 object-cover w-full h-full"
                  layout='fill'
                  src={CreamSmeared}
                  alt="woman eating gummy worm"
               />
               </div>
            </div>
      
            <div className="relative flex items-center bg-gray-100">
               <span
               className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
               ></span>
      
               <div className="p-8 sm:p-16 lg:p-24">
               <h2 className="text-2xl font-bold font-lora dark:text-bg-green sm:text-3xl">What is CBD?</h2>
      
               <p className="mt-4 text-gray-600">
                  Often referred to as CBD, cannabidiol is a naturally occurring substance found throughout various strains of the Cannabis Sativa plant. In specific, it tends to have the highest concentration in industrial hemp.
               </p>

               <p className="mt-4 text-gray-600">
                  CBD is often confused with THC, the psychoactive compound in marijuana. However, they couldn’t be any more dissimilar. While THC induces a state of “high” in its users, CBD does not. On the contrary, it actually boosts focus, balance, and overall wellness.
               </p>

               <p className="mt-4 text-gray-600">
                  So how does it work? The answer lies in the endocannabinoid system (ECS). It is essentially a series of receptors that can be found throughout all of the major organs of our bodies. The ECS utilizes cannabinoids for a wide range of functions.
               </p>

               <p className="mt-4 text-gray-600">
                  As a result, CBD products have become a highly studied and discussed topic in science today.
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
                  Quality has always been the number one priority at Penguin. That’s because we believe that our customer’s experience comes first.  So to make sure that our products live up to our standards, we get involved in every step of the process.
               </p>

               <p className="mt-4 text-gray-600">
                  From the farm to the lab, our hemp remains pure and free from any synthetic chemical additives. It is processed through our cutting-edge, CO2 extraction technology until it becomes a refined, broad-spectrum oil.
               </p>

               <p className="mt-4 text-gray-600">
                  This oil is then combined with other ingredients to make our CBD Cream. It is loaded with terpenes to promote skin-cell rejuvenation.
               </p>
      
               </div>
            </div>

            <div className="relative z-10 lg:py-16">
               <div className="relative h-64 sm:h-80 lg:h-full">
               <Image
                  className="rounded-r-lg absolute inset-0 object-cover w-full h-full"
                  layout='fill'
                  src={CreamProcess}
                  alt="hand getting cbd cream from jar"
               />
               </div>
            </div>

         </div>
      </div>
   </section>
  )
}
