import Image from 'next/image'
import CatTreats from '../images/cat-treats.webp'
import CatTreatsTwo from '../images/cat-treats-2.webp'
import Tabs from './Tabs'

export default function CatTreatProductSection() {
   
  return (
   <section>

      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            
      
            <div className="relative flex items-center bg-gray-100">
               <span
               className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
               ></span>
      
               <div className="p-8 sm:p-16 lg:p-24">
               <h2 className="text-2xl font-bold font-lora dark:text-bg-green sm:text-3xl">Our Process</h2>
      
               <p className="mt-4 text-gray-600">
                  Our team has spent countless hours working with cat owners and vets to figure out how best to bring the joys of CBD to our beloved felines. We started off with an understanding that CBD products impact dogs’ nervous systems in much the same way that they do humans. Meaning that they instill a sense of calm while reducing pain signals from throughout the body.
               </p>

               <p className="mt-4 text-gray-600">
                  The questions quickly became: what dosage and when?
               </p>

               <p className="mt-4 text-gray-600">
                  That took trial and error, with our team working with the best in the field to find the right answer. Finally, we realized that the dosage must be tempered to meet the overall weight of the cat, with the dosage timing being similar to that of humans.
               </p>

               <p className="mt-4 text-gray-600">
                  It is with that knowledge in mind that we have crafted this product, perfect for dogs and cats of all shapes and sizes. Our production method, which uses the latest in effective CO2 extraction to produce a healthy and all-natural full-spectrum CBD oil product, has everything you need to help your cat live his best life.
               </p>
      
               </div>
            </div>

            <div className="relative z-10 lg:py-16">
               <div className="relative h-64 sm:h-80 lg:h-full">
               <Image
                  className="rounded-r-lg absolute inset-0 object-cover w-full h-full"
                  layout='fill'
                  src={CatTreats}
                  alt="cat treats"
               />
               </div>
            </div>

         </div>
      </div>

      <div className="py-16">
         <Tabs />
      </div>

      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
         <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
            <Image
               className="rounded-lg absolute inset-0 object-cover w-full h-full"
               layout='fill'
               src={CatTreatsTwo}
               alt="cat treats"
            />
            </div>
         </div>

            <div className="relative flex items-center bg-gray-100">
               <span
               className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
               ></span>

               <div className="p-8 sm:p-16 lg:p-24">
               <h2 className="text-2xl font-bold font-lora dark:text-bg-green sm:text-3xl">Storage</h2>

               <p className="mt-4 text-gray-600">
                  Please keep in a cool, dry location for storage. A cupboard or a pantry, for instance, are great places to store your cat treats.
               </p>

               <p className="mt-4 text-gray-600">
                  Refrigeration is not necessary as long as the product is not in direct sunlight. Also, make sure that the safety lid is tightly secured on the container when not in use.
               </p>

               </div>
            </div>
         </div>


   </div>
   </section>
  )
}
