import Image from 'next/image'
import RollingStoneLogo from '../images/Rolling-Stone-Logo-cropped.svg'
import MaximLogo from '../images/Maxim-Logo-cropped.svg'
import TimeLogo from '../images/Time-Logo-cropped.svg'
import VarietyLogo from '../images/Variety-Logo-cropped.svg'

export default function Companies() {
  return (
   <section className="relative">
      {/* Background gradient (light version only) */}
      <div className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden" aria-hidden="true"></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pb-12">
         <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center" data-aos-id-stats>
            {/* 1st item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]">
            <div className="text-gray-600 dark:text-gray-400">"World's finest CBD brand for relaxation."</div>
            <Image className="transition-opacity duration-300" width="100" height="50" src={RollingStoneLogo} alt="Rolling Stone Magazine" />
            </div>
            {/* 2nd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="100">
            <div className="text-gray-600 dark:text-gray-400">"The hottest CBD brand around right now."</div>
            <Image className="transition-opacity duration-300" width="100" height="50" src={MaximLogo} alt="Maxim Magazine" />
            </div>
            {/* 3rd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="200">
            <div className="text-gray-600 dark:text-gray-400">"Thanks to Bomb Botanicals, we're living our best lives."</div>
            <Image className="transition-opacity duration-300" width="100" height="50" src={TimeLogo} alt="Time Magazine" />
            </div>
            {/* 4th item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="300">
            <div className="text-gray-600 dark:text-gray-400">"One of the best THC-free CBD oils."</div>
            <Image className="transition-opacity duration-300" width="100" height="50" src={VarietyLogo} alt="Variety Magazine" />
            </div>
         </div>
      </div>
      </div>
   </section>
  )
}
