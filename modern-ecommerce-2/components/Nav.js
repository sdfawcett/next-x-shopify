import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
import Announcement from './Announcement'
import { ShoppingCartIcon } from '@heroicons/react/outline'
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
          return true;
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

    <header className={clientWindowHeight ? 'border-b sticky top-0 z-20 bg-white dark:bg-gray-900 dark:text-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-75 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-75' : 'top-11 z-20 fixed inset-x-0 bg-transparent'}>
      <div
        className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
      >
        <div className="flex items-center">

          <Link href="/" passHref>
            <a className="flex cursor-pointer">
              <span className="inline-block w-32 h-10 bg-gray-200 rounded-lg"></span>
            </a>
          </Link>

        </div>

        <div className="flex items-center justify-end flex-1">
          <div className="flex items-center ml-8">

            {/* theme switcher */}
            <div className='flex pr-8'>
                {/*<span className='hidden md:inline'>day mode</span> */}
                
                  <div className="form-switch flex flex-col justify-center ml-3 mr-3">
                    <input type="checkbox" name="light-switch" id="light-switch-desktop" className="light-switch sr-only" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                    <label className="relative" htmlFor="light-switch-desktop">
                      <span className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-100 dark:to-white shadow-sm z-10" aria-hidden="true"></span>

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

                      <span className="sr-only">Switch to light / zen mode version</span>
                    </label>
                  </div>

                {/*<span className='hidden md:inline'>zen mode</span> */}
                
            </div>

            <div className="flex items-center">

              <span>
                <a
                onClick={() => setCartOpen(!cartOpen)} 
                className="cursor-pointer pl-2"
                >

                <ShoppingCartIcon className='inline h-6 w-6' /> <span className='inline text-md font-bold'>Cart ({cartQuantity})</span>
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