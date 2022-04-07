import Link from 'next/link'
import Image from 'next/image'
import Logo from '../images/bb-logo.svg';

const navigation = [
   { name: 'About', href: '#' },
   { name: 'Shop', href: '#' },
   { name: 'Jobs', href: '#' },
   { name: 'Terms and Conditions', href: '#' }
 ]
 
 export default function Footer() {
   return (
    <footer>
        <div className="grid max-w-screen-xl grid-cols-1 mx-auto lg:grid-cols-2">
            <div className="px-4 py-16 border-b border-gray-800 md:border-b-0 md:border-l lg:pl-12 lg:order-last">
            <div className="block lg:hidden">
                <Link href="/" passHref>
                    <a className="flex cursor-pointer">
                    <div className='relative w-[9.1rem] h-[3.1rem]'>
                        <Image alt="Bomb Botanicals Logo" src={Logo} layout="fill" objectFit="cover" />
                    </div>
                    </a>
                </Link>
            </div>

            <div className="mt-12 space-y-4 lg:mt-0">
                <span className="block w-10 h-1 bg-bg-green rounded"></span>

                <div>
                <h5 className="text-2xl font-medium">
                    Get The Newsletter
                </h5>

                <p className="max-w-lg mt-1 text-xs text-gray-500 dark:text-contrast-gray">
                    Bomb Botanicals was founded with the goal of building a product line for the everyday person to feel comfortable supplementing with hemp. We believe in formulating quality products with a specific intent and purpose. No gimmicks, no hype, just results. 
                </p>
                </div>

                <form>
                <div className="relative max-w-lg">
                    <label className="sr-only" htmlFor="email"> Email </label>

                    <input className="w-full py-4 pl-3 pr-16 text-sm bg-gray-800 border-none rounded-lg" id="email" type="email" placeholder="Enter your email" />

                    <button className="absolute p-3 text-white -translate-y-1/2 bg-lighter-green rounded-md top-1/2 right-1.5" type="button">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    </button>
                </div>
                </form>
            </div>
            </div>

            <div className="px-4 py-16 lg:pr-12">
                <div className="hidden lg:block">
                    <Link href="/" passHref>
                        <a className="flex cursor-pointer">
                        <div className='relative w-[9.1rem] h-[3.1rem]'>
                            <Image alt="Bomb Botanicals Logo" src={Logo} layout="fill" objectFit="cover" />
                        </div>
                        </a>
                    </Link>
                </div>

                <div className="grid grid-cols-3 gap-8 lg:mt-12">
                    <div>
                    <p className="font-bold">
                        Helpful
                    </p>

                    <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                        <a className="hover:opacity-75" href=""> Contact </a>
                        <a className="hover:opacity-75" href=""> Live Chat </a>
                        <a className="hover:opacity-75" href=""> Resources </a>
                    </nav>
                    </div>

                    <div>
                    <p className="font-bold">
                        Solutions
                    </p>

                    <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                        <a className="hover:opacity-75" href=""> Instant Checkout </a>
                        <a className="hover:opacity-75" href=""> Product Upsells </a>
                        <a className="hover:opacity-75" href=""> Slideout Cart </a>
                        <a className="hover:opacity-75" href=""> User Dashboards </a>
                    </nav>
                    </div>

                    <div>
                    <p className="font-bold">
                        About
                    </p>

                    <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                        <a className="hover:opacity-75" href=""> About Us </a>
                        <a className="hover:opacity-75" href=""> Meet the Team </a>
                        <a className="hover:opacity-75" href=""> History </a>
                        <a className="hover:opacity-75" href=""> Careers </a>
                    </nav>
                    </div>
                </div>

                <div className="flex mt-12 space-x-6 text-xs">
                    <p> &copy; 2022 Company Name </p>
                    <a className="underline hover:opacity-75" href=""> Privacy Policy </a>
                    <a className="underline hover:opacity-75" href=""> Terms & Conditions </a>
                    <a className="underline hover:opacity-75" href=""> Cookies </a>
                </div>
                </div>
            </div>
        </footer>
   )
 }