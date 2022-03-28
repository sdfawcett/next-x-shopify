import Link from 'next/link'
import Image from 'next/image'
import WomanHeroBg from '../images/woman-hero-bg.jpg';


export default function Hero() {
  return (
    <section>

      <div className="hero h-screen w-full relative text-center">
          <Image
            src={WomanHeroBg}
            alt="Woman holding CBD tincture bottle"
            className='object-center'
            layout="fill" 
            objectFit="cover" 
            placeholder="blur"

          />
        

        <div class="flex h-screen relative z-1">
          <div class="m-auto">
            <h3 class='h2 font-red-hat-display mb-4'>Pure &#38; Premium CBD</h3>
            <p class='text-xl text-gray-600 dark:text-gray-400'>Naturally grown. Lab certified. Dependable Results.</p>
            <div className="mt-8" data-aos="fade-down" data-aos-delay="300">
              <Link href='#anchor-section'><a className="btn text-white bg-teal-500 hover:bg-teal-400 ml-3">Request code</a></Link>
            </div>
          </div>
        </div>
      </div>



    </section>
  )
}
