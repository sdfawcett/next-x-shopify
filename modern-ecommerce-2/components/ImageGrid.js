import Image from 'next/image'
import CarouselImage01 from '../images/berry-king-of-the-hill.webp'
import CarouselImage02 from '../images/natural-berry.webp'
import CarouselImage03 from '../images/paws-fab-pets.webp'
import CarouselImage04 from '../images/pm-chews.webp'
import CarouselImage05 from '../images/products-rainbow.webp'
import CarouselImage06 from '../images/which-is-your-go-to.webp'


export default function ImageGrid() {
  return (
   <section id='social-image-grid' className="overflow-hidden text-gray-700">
      <div class="mx-auto">
         <div class="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <div data-aos="fade-left" class="grid-img cursor-pointer w-full rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage01} alt="berry cbd oil" />
            </div>
            <div data-aos-delay="400" data-aos="fade-left" class="grid-img cursor-pointer w-full col-span-2 row-span-2 rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage02} alt="berry cbd oil" />
            </div>
            <div data-aos-delay="500" data-aos="fade-left" class="grid-img cursor-pointer w-full rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage03} alt="cbd pet treats" />
            </div>
            <div data-aos-delay="600" data-aos="fade-right" class="grid-img cursor-pointer w-full rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage04} alt="cbd chews" />
            </div>
            <div data-aos-delay="700" data-aos="fade-right" class="grid-img cursor-pointer w-full rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage05} alt="cbd oil" />
            </div>
            <div data-aos-delay="800" data-aos="fade-right" class="grid-img cursor-pointer w-full rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage06} alt="cbd oil" />
            </div>
         </div>
      </div>
   </section>
  )
}
