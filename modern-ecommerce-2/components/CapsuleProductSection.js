import Image from 'next/image'
import Capsules from '../images/cbd-caps.webp';
import CapsulesTwo from '../images/cbd-caps-2.webp';

export default function CapsuleProductSection() {
   
  return (
   <section>

      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            
      
            <div className="relative flex items-center bg-gray-100">
               <span
               className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
               ></span>
      
               <div className="p-8 sm:p-16 lg:p-24">
               <h2 className="text-2xl font-bold dark:text-bg-green sm:text-3xl">Our Process</h2>
      
               <p className="mt-4 text-gray-600">
                  Our approach to CBD starts at the root. We make sure that all of our hemp is grown using sustainable and environmentally-friendly practices. So not only is it non-GMO, but pesticide and herbicide free as well.
               </p>

               <p className="mt-4 text-gray-600">
                  From the farm it is taken directly to our labs, where it undergoes an extensive distillation process. We choose a broad-spectrum extraction method because it retains all of the other beneficial compounds of hemp, such as terpenes, flavonoids and other plant materials.
               </p>

               <p className="mt-4 text-gray-600">
                  Finally, this broad-spectrum oil is taken and combined with other ingredients—including gelatin, glycerin and MCT oil—to create our signature gel capsules.
               </p>
      
               </div>
            </div>

            <div className="relative z-10 lg:py-16">
               <div className="relative h-64 sm:h-80 lg:h-full">
               <Image
                  className="absolute inset-0 object-cover w-full h-full"
                  layout='fill'
                  src={Capsules}
                  alt="cbd capsules"
               />
               </div>
            </div>

         </div>
      </div>


      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">

         <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            <div className="relative z-10 lg:py-16">
               <div className="relative h-64 sm:h-80 lg:h-full">
               <Image
                  className="absolute inset-0 object-cover w-full h-full"
                  layout='fill'
                  src={CapsulesTwo}
                  alt="cbd capsules"
               />
               </div>
            </div>
      
            <div className="relative flex items-center bg-gray-100">
               <span
               className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
               ></span>
      
               <div className="p-8 sm:p-16 lg:p-24">
               <h2 className="text-2xl font-bold dark:text-bg-green sm:text-3xl">Calm, in a bottle.</h2>
      
               <p className="mt-4 text-gray-600">
                  Our CBD capsules come in a 30-count bottle. They are soft gel capsules that can be easily swallowed and ingested. Each capsule packs a potent 25mg dose of our broad-spectrum oil. That means you get a precise dosage every time.
               </p>

               <p className="mt-4 text-gray-600">
                  We recommended CBD capsules for anyone who wants to take CBD but isn’t a fan of the taste. They are totally flavorless and go down quickly. No need to hold it under the tongue like you do with CBD oils.
               </p>

               <p className="mt-4 text-gray-600">
                  They’re also the most convenient form of CBD for people with an active lifestyle. Their capsule form makes them incredibly portable, so you can take them with you to the office, the gym, the park or anywhere else you might need them.
               </p>

               <p className="mt-4 text-gray-600">
                  This product will not get you "high." 🎉
               </p>
      
               </div>
            </div>
         </div>


      </div>

   </section>
  )
}
