import Image from 'next/image'
import Marquee from "react-fast-marquee";
import RollingStoneLogo from '../images/Rolling-Stone-Logo-cropped.svg'
import MaximLogo from '../images/Maxim-Logo-cropped.svg'
import TimeLogo from '../images/Time-Logo-cropped.svg'
import VarietyLogo from '../images/Variety-Logo-cropped.svg'
import ViceLogo from '../images/Vice-Logo.svg'
import NewYorkerLogo from '../images/The-New-Yorker-Logo.svg'
import EntertainmentWeeklyLogo from '../images/Entertainment-Weekly-Logo.svg'
import NewYorkTimesLogo from '../images/New-York-Times_Logo.svg'

export default function Companies() {
  return (
   <section className='relative marquee border-t-4 border-b-4 border-gray-900 dark:border-new-beige text-gray-900 dark:text-new-beige'>
      <div className="relative flex overflow-x-hidden font-karla">
         <div className="py-12 whitespace-nowrap">

            <Marquee gradient={false} speed={30}>
               <span className="mx-28 text-xl text-center">
                  "World's finest CBD brand for relaxation."<br />
                  <Image src={RollingStoneLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "The hottest CBD brand around right now."<br />
                  <Image src={MaximLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "Thanks to Bomb Botanicals, we're living our best lives."<br />
                  <Image src={TimeLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "One of the best THC-free CBD oils that we've ever tried."<br />
                  <Image src={VarietyLogo} height={40} width={100} />
               </span>

               <span className="mx-28 text-xl text-center">
                  "World's finest CBD brand for relaxation."<br />
                  <Image src={ViceLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "The hottest CBD brand around right now."<br />
                  <Image src={NewYorkerLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "Thanks to Bomb Botanicals, we're living our best lives."<br />
                  <Image src={EntertainmentWeeklyLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "One of the best THC-free CBD oils that we've ever tried."<br />
                  <Image src={NewYorkTimesLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "World's finest CBD brand for relaxation."<br />
                  <Image src={RollingStoneLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "The hottest CBD brand around right now."<br />
                  <Image src={MaximLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "Thanks to Bomb Botanicals, we're living our best lives."<br />
                  <Image src={TimeLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "One of the best THC-free CBD oils that we've ever tried."<br />
                  <Image src={VarietyLogo} height={40} width={100} />
               </span>

               <span className="mx-28 text-xl text-center">
                  "World's finest CBD brand for relaxation."<br />
                  <Image src={ViceLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "The hottest CBD brand around right now."<br />
                  <Image src={NewYorkerLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "Thanks to Bomb Botanicals, we're living our best lives."<br />
                  <Image src={EntertainmentWeeklyLogo} height={40} width={100} />
               </span>
               <span className="mx-28 text-xl text-center">
                  "One of the best THC-free CBD oils that we've ever tried."<br />
                  <Image src={NewYorkTimesLogo} height={40} width={100} />
               </span>
            </Marquee>

         </div>
      </div>
   </section>

  )
}
