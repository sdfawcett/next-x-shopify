import Link from 'next/link'
import Image from 'next/image'
import WomanHeroBg from '../images/woman-hero-bg.jpg';


export default function Hero() {
  return (
    <section>

      <div class="hero min-h-screen">
        
      <Image
            src={WomanHeroBg}
            alt="Woman holding CBD tincture bottle"
            className='object-center'
            layout="fill" 
            objectFit="cover" 
            placeholder="blur"
            objectPosition="center"

        />
        <div class="hero-content z-10 text-center dark:border dark:border-gray-800 mx-3.5">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl h2 font-bold font-red-hat-display dark:text-gray-800">Premium CBD Products You Can Trust</h1>
            <p class="mb-5 dark:text-gray-700">Made from the highest quality, lab tested, Oregon hemp plants</p>
            <button class="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>

    </section>
  )
}
