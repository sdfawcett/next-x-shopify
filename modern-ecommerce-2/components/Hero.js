import Link from 'next/link'
import Image from 'next/image'
import MockupImage from '../images/mockup-image-01.jpg';
import IphoneMockup from '../images/iphone-mockup.png';
import HeroBg from '../images/hero-bg-03.jpg';
import HeroImage from '../images/about-hero.jpg';


export default function Hero() {
  return (
    <section>

      <div className="h-screen w-full relative"> 
        <Image
          src={HeroBg}
          alt="Picture of the author"
          layout="fill" 
          objectFit="cover" 
          className="h-full w-full" 
          width="100%"
          height="100%"
        />
      </div>

    </section>
  )
}
