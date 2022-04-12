import Image from 'next/image'
import CarouselImage01 from '../images/berry-king-of-the-hill.webp'
import CarouselImage02 from '../images/natural-berry.webp'
import CarouselImage03 from '../images/paws-fab-pets.webp'
import CarouselImage04 from '../images/pm-chews.webp'
import CarouselImage05 from '../images/products-rainbow.webp'
import CarouselImage06 from '../images/which-is-your-go-to.webp'


export default function ImageGrid() {
  return (
   <section id='social-image-grid' className='pt-20'>
      <h2 data-aos="fade-left" className="z-10 text-3xl uppercase font-bold sm:text-4xl font-lora text-center">
         @bombbotanicals
      </h2>
   
      <p data-aos="fade-right" className="z-10 mt-4 font-karla text-xl text-center">
         We're socially concious just like our CBD products.
      </p>

      <div className="mx-auto">
         <div className="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <div data-aos="flip-up" className="grid-img cursor-pointer w-full rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage01} alt="berry cbd oil" />
            </div>
            <div data-aos-delay="400" data-aos="flip-up" className="grid-img cursor-pointer w-full col-span-2 row-span-2 rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage02} alt="berry cbd oil" />
            </div>
            <div data-aos-delay="500" data-aos="flip-up" className="grid-img cursor-pointer w-full rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage03} alt="cbd pet treats" />
            </div>
            <div data-aos-delay="600" data-aos="flip-down" className="grid-img cursor-pointer w-full rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage04} alt="cbd chews" />
            </div>
            <div data-aos-delay="700" data-aos="flip-down" className="grid-img cursor-pointer w-full rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage05} alt="cbd oil" />
            </div>
            <div data-aos-delay="800" data-aos="flip-down" className="grid-img cursor-pointer w-full rounded">
               <Image className="block object-cover object-center w-full h-full rounded-lg" src={CarouselImage06} alt="cbd oil" />
            </div>
         </div>
      </div>
   </section>
  )
}
