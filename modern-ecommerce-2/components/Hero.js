import Link from 'next/link'
import Image from 'next/image'
import WomanHeroBg from '../images/woman-hero-bg.jpg';


export default function Hero() {
  return (
    <section id='hero' className="relative bg-white">
      <Image
            src={WomanHeroBg}
            alt="Woman holding CBD tincture bottle"
            className='absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100'
            layout="fill" 
            objectFit="cover" 
            placeholder="blur"
            objectPosition="center"

        />


        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div className="z-10 relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">

            <h1 className="mb-5 text-5xl h2 font-extrabold font-lora dark:text-gray-800">Premium CBD Products You Can Trust</h1>
            <p className="mb-5 text-2xl dark:text-gray-700 font-karla">Made from the highest quality, lab tested, Oregon hemp plants.</p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
            <Link href="#product-section">
              <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-black bg-lighter-green sm:w-auto active:bg-bg-green hover:bg-bg-green focus:outline-none focus:ring" href="/get-started">
                Shop CBD
              </a>
            </Link>
            </div>
          </div>
        </div>
      </section>
  )
}
