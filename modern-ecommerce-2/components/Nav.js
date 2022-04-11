import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
import Announcement from './Announcement'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import Logo from '../images/bb-logo.svg'
import LogoDark from '../images/bb-logo-dark.svg'
import { FaYinYang } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })

 // Handle light modes
 const [darkMode, setDarkMode] = useState(() => {
  while (typeof window !== 'undefined') {
    let dark = localStorage.getItem('dark-mode');
    if (dark === null) {
      return false;
    } else {
      return dark === 'true';
    }
  }
  
});

useEffect(() => {
  localStorage.setItem('dark-mode', darkMode)
  if (darkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}, [darkMode]);

    //nav opacity change on scroll
    const [clientWindowHeight, setClientWindowHeight] = useState(false);

    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setClientWindowHeight(true)
      } else {
        setClientWindowHeight(false)
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll); 
      
    });

  return (
    <>
    <Announcement />

    <header className={clientWindowHeight ? 'border-b dark:border-b-lighter-green drop-shadow-lg sticky top-0 z-20 bg-gray-100 dark:bg-bg-green dark:text-new-beige backdrop-filter backdrop-blur-lg bg-opacity-75 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-75' : 'top-11 z-20 fixed inset-x-0 bg-transparent'}>
      <div
        className="flex items-center justify-between h-24 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
      >
        <div className="flex items-center">

          <Link href="/" passHref>
            <a className="flex cursor-pointer">
              <div className='relative w-[9.1rem] h-[3.1rem]'>
                {
                darkMode ? 
                <Image alt="Bomb Botanicals Logo" src={LogoDark} layout="fill" objectFit="cover" /> : 
                <Image alt="Bomb Botanicals Logo" src={Logo} layout="fill" objectFit="cover" />
                }
              </div>
            </a>
          </Link>

        </div>

        <div className="flex items-center justify-end flex-1">
          <div className="flex items-center ml-8">
              {
              !darkMode ? 
              <div className='text-gray-900 hidden animate-bounceshort sm:inline'>Day Mode</div> : 
              <div className='text-new-beige hidden animate-bounceshort sm:inline'>Zen Mode</div>
              }
            {/* theme switch */}
            <div className="form-switch flex flex-col justify-center ml-3 mr-3">
                <input type="checkbox" name="light-switch" id="light-switch-desktop" className="light-switch sr-only" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                <label className="relative" htmlFor="light-switch-desktop">
                  <span className="relative bg-gradient-to-t from-gray-100 to-new-beige dark:from-gray-100 dark:to-new-beige shadow-sm z-10" aria-hidden="true"></span>

                  <svg className="absolute top-1 left-6" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                    <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
                      <FaYinYang />
                    </g>
                  </svg>

                  <svg className="absolute top-1 left-1" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                    <g className="fill-current text-white" fillRule="nonzero" opacity=".88">  
                    <BsSunFill />
                    </g>
                  </svg>

                  <span className="sr-only">Switch to light or zen mode theme</span>
                </label>
              </div>
              
            
            <div className="flex items-center">

              <span>
                <a
                onClick={() => setCartOpen(!cartOpen)} 
                className="cursor-pointer pl-2"
                >

                  <ShoppingCartIcon className=
                  {clientWindowHeight ? 'inline text-gray-900 dark:text-new-beige h-8 w-8' : 'inline text-gray-900 h-8 w-8'} 
                  /> 
                  <span className={clientWindowHeight ? 'inline font-bold text-gray-900 dark:text-new-beige' : 'inline font-bold text-gray-900'}>
                    <span className='hidden sm:inline'>Cart</span> 
                    <span className='text-xs vs:text-base'>({cartQuantity})</span>
                  </span>
                </a>

                <MiniCart cart={cart} />
              </span>

            </div>
          </div>
        </div>
      </div>
    </header>
    </>

  )
}