import Link from 'next/link'
import Image from 'next/image'
import Logo from '../images/bb-logo.svg';
import LogoDark from '../images/bb-logo-dark.svg'

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
                    <span className="block w-10 h-1 bg-lighter-green dark:bg-lightest-green rounded"></span>

                    <div>
                    <h5 className="text-2xl font-medium">
                        Get The Newsletter
                    </h5>

                    <p className="max-w-lg mt-1 text-sm text-gray-500 dark:text-contrast-gray">
                        Bomb Botanicals was founded with the goal of building a product line for the everyday person to feel comfortable supplementing with hemp. We believe in formulating quality products with a specific intent and purpose. No gimmicks, no hype, just results. 
                    </p>
                    </div>

                    <form>
                        <div className="relative max-w-lg">
                            <label className="sr-only" htmlFor="email"> Email </label>

                            <input className="w-full py-4 pl-3 pr-16 text-sm bg-lightest-green border-none rounded-lg" id="email" type="email" placeholder="Enter your email" />

                            <button className="absolute p-3 text-white -translate-y-1/2 bg-lighter-green rounded-md top-1/2 right-1.5" type="button">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex mt-8 space-x-3">
                    
                    <a className="p-2 border rounded-full border-white/25 hover:opacity-75" href="javascript:void(0);" rel="noreferrer">
                        <span className="sr-only"> Facebook </span>

                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    </a>

                    <a className="p-2 border rounded-full border-white/25 hover:opacity-75" href="javascript:void(0);" rel="noreferrer">
                    <span className="sr-only"> Instagram </span>

                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                    </a>

                    <a className="p-2 border rounded-full border-white/25 hover:opacity-75" href="javascript:void(0);" rel="noreferrer">
                        <span className="sr-only"> Twitter </span>

                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>

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
                        Info
                    </p>

                    <nav className="flex flex-col mt-2 space-y-1 text-sm text-gray-400">
                        <a className="hover:opacity-75" href="javascript:void(0);"> Lab Reports </a>
                        <a className="hover:opacity-75" href="javascript:void(0);"> Live Chat </a>
                        <a className="hover:opacity-75" href="javascript:void(0);"> Resources </a>
                    </nav>
                    </div>

                    <div>
                    <p className="font-bold">
                        Products
                    </p>

                    <nav className="flex flex-col mt-2 space-y-1 text-sm text-gray-400">
                        <a className="hover:opacity-75" href="javascript:void(0);"> CBD Oil </a>
                        <a className="hover:opacity-75" href="javascript:void(0);"> CBD Gummies </a>
                        <a className="hover:opacity-75" href="javascript:void(0);"> CBD Cream </a>
                        <a className="hover:opacity-75" href="javascript:void(0);"> CBD Dog Treats </a>
                    </nav>
                    </div>

                    <div>

                    <br/>

                    <nav className="flex flex-col mt-2 space-y-1 text-sm text-gray-400">
                        <a className="hover:opacity-75" href="javascript:void(0);"> CBD Cat Treats </a>
                        <a className="hover:opacity-75" href="javascript:void(0);"> CBD Capsules </a>
                        <a className="hover:opacity-75" href="javascript:void(0);"> Dog CBD Oil </a>
                        <a className="hover:opacity-75" href="javascript:void(0);"> Cat CBD Oil </a>
                    </nav>
                    </div>
                </div>

                <div className="flex mt-12 space-x-6 text-xs">
                    <p> &copy; 2022 Bomb Botanicals </p>
                    <a className="underline hover:opacity-75" href="javascript:void(0);"> Privacy Policy </a>
                    <a className="underline hover:opacity-75" href="javascript:void(0);"> Terms & Conditions </a>
                    <a className="underline hover:opacity-75" href="javascript:void(0);"> Cookies </a>
                </div>
                </div>
            </div>
        </footer>
   )
 }