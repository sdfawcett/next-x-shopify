import Image from 'next/image'
import CatOil from '../images/cat-oil.webp'
import CatOilTwo from '../images/cat-oil-2.webp'
import Tabs from './Tabs'

export default function CatOilProductSection() {
   
  return (
   <section>

      <div className="py-16 mx-auto max-w-screen-2xl">
         <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            
      
            <div className="relative flex items-center bg-gray-100">
               <span
               className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
               ></span>
      
               <div className="p-8 sm:p-16 lg:p-24">
               <h2 className="text-2xl font-bold font-lora dark:text-bg-green sm:text-3xl">Our Process</h2>
      
               <p className="mt-4 text-gray-600">
                  Our team has spent countless hours working with cat owners and vets to figure out how best to bring the joys of CBD to our beloved felines. We started off with an understanding that CBD products impact cats' nervous systems in much the same way that they do humans. Meaning that they instill a sense of calm while reducing pain signals from throughout the body.
               </p>

               <p className="mt-4 text-gray-600">
                  The questions quickly became: what dosage and when?
               </p>

               <p className="mt-4 text-gray-600">
                  That took trial and error, with our team working with the best in the field to find the right answer. Finally, we realized that the dosage must be tempered to meet the overall weight of the cat, with the dosage timing being similar to that of humans.
               </p>

               <p className="mt-4 text-gray-600">
                  It is with that knowledge in mind that we have crafted this product, perfect for cats of all shapes and sizes. Our production method, which uses the latest in effective CO2 extraction to produce a healthy and all-natural full-spectrum CBD oil product, has everything you need to help your cat live his best life.
               </p>
      
               </div>
            </div>

            <div className="relative z-10 lg:py-16">
               <div className="relative h-64 sm:h-80 lg:h-full">
               <Image
                  className="rounded-r-lg absolute inset-0 object-cover w-full h-full"
                  layout='fill'
                  src={CatOil}
                  alt="CBD oil for cats"
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
                  src={CatOilTwo}
                  alt="CBD oil for cats"
               />
               </div>
            </div>
      
            <div className="relative flex items-center bg-gray-100">
               <span
               className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
               ></span>
      
               <div className="p-8 sm:p-16 lg:p-24">
               <h2 className="text-2xl font-bold font-lora dark:text-bg-green sm:text-3xl">Suggestions</h2>
      
               <p className="mt-4 text-gray-600">
                  While the dropper is inside the bottle, squeeze the rubber end and release it to let it fill back up as far as it will go. This should fill up to around half of the dropper and give you a full 1ml dose of the oil.
               </p>

               <p className="mt-4 text-gray-600">
                  For the best results, place one full dose under your feline's tongue. Alternatively, it can also be mixed with food and drink. Give once or twice daily.
               </p>

               <p className="mt-4 text-gray-600">
                  It is always recommended to talk to your cat's veterinarian first before you start giving CBD. Their guidance should help with determining the best amount for your cat.
               </p>
      
               </div>
            </div>
         </div>


      </div>

   </section>
  )
}
