import Image from 'next/image'
import RollingStoneLogo from '../images/Rolling-Stone-Logo-cropped.svg'
import MaximLogo from '../images/Maxim-Logo-cropped.svg'
import TimeLogo from '../images/Time-Logo-cropped.svg'
import VarietyLogo from '../images/Variety-Logo-cropped.svg'

export default function Companies() {
  return (
     <>
   
   <section className='relative marquee border-t-4 border-b-4 border-gray-900 dark:border-new-beige text-gray-900 dark:text-new-beige'>
      <div className="relative flex overflow-x-hidden font-karla">
         <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="mx-4 text-xl">
               "World's finest CBD brand for relaxation." &#8212; Rolling Stone
            </span>
            <span className="mx-4 text-xl">"The hottest CBD brand around right now." &#8212; Maxim Magazine</span>
            <span className="mx-4 text-xl">"Thanks to Bomb Botanicals, we're living our best lives." &#8212; Time Magazine</span>
            <span className="mx-4 text-xl">"One of the best THC-free CBD oils that we've ever tried." &#8212; Variety Magazine</span>
         </div>

         <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap font-karla">
            <span className="mx-4 text-xl">"World's finest CBD brand for relaxation." &#8212; Rolling Stone</span>
            <span className="mx-4 text-xl">"The hottest CBD brand around right now." &#8212; Maxim Magazine</span>
            <span className="mx-4 text-xl">"Thanks to Bomb Botanicals, we're living our best lives." &#8212; Time Magazine</span>
            <span className="mx-4 text-xl">"One of the best THC-free CBD oils that we've ever tried." &#8212; Variety Magazine</span>
         </div>
      </div>
   </section>
   </>
  )
}
