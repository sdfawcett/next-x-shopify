import Link from 'next/link'
import Image from 'next/image'
import HempFieldBg from '../images/hemp-field.webp';


export default function FooterFade() {
  return (
    <section>

      <div className="footer-fade bg-light-green relative min-h-min">
        
        <aside className="relative overflow-hidden text-white bg-gradient-to-b from-darker-green to-light-green">
          <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
              <h2 className="text-4xl font-bold sm:text-5xl">
                New product launched!
                <span className="hidden sm:block">
                  Impossible to put down
                </span>
              </h2>

              <p className="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, fuga voluptatum ex rem enim deleniti
                officiis, odio voluptatibus non soluta! Quo, explicabo aspernatur!
              </p>

              <a className="inline-flex items-center px-6 py-3 font-medium bg-black rounded-full hover:opacity-75" href="">
                Get it now

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="absolute inset-0 w-full h-full mix-blend-multiply">


            <Image
            src={HempFieldBg}
            alt="A field of hemp plants"
            className='absolute inset-0 object-cover object-top w-full h-full'
            layout="fill" 
            objectFit="cover" 
            placeholder="blur"
            objectPosition="center"

            />

          </div>
        </aside>


      </div>

    </section>
  )
}
