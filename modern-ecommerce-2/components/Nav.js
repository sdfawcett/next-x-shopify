import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
import Announcement from './Announcement'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import ToggleIcons from './ToggleIcons'
import Logo from '../images/bb-logo.svg';

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

    //theme switcher icon swap
    const [active, setActive] = useState(true);

    const handleChangeActive = () => {
      setActive((previousStar) => {
        return !previousStar;
      });
    };

  return (
    <>
    <Announcement />

    <header className={clientWindowHeight ? 'border-b sticky top-0 z-20 bg-gray-100 dark:bg-bg-green dark:text-new-beige backdrop-filter backdrop-blur-lg bg-opacity-75 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-75' : 'top-11 z-20 fixed inset-x-0 bg-transparent'}>
      <div
        className="flex items-center justify-between h-24 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
      >
        <div className="flex items-center">

          <Link href="/" passHref>
            <a className="flex cursor-pointer">
              <div className='relative w-[9.1rem] h-[3.1rem]'>
                <Image alt="Bomb Botanicals Logo" src={Logo} layout="fill" objectFit="cover" />
              </div>
            </a>
          </Link>

        </div>

        <div className="flex items-center justify-end flex-1">
          <div className="flex items-center ml-8">

            {/* theme switcher */}

            

              <input type="checkbox" name="light-switch" id="light-switch-desktop" className="light-switch sr-only" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />

              <div id='swap' className='p-1 border-2 rounded-md border-gray-900 mr-5'>
                <label className="relative" htmlFor="light-switch-desktop">
                  <ToggleIcons active={active} handleChangeActive={handleChangeActive} />
                  <span className="sr-only">Switch to light / zen mode version</span>
                </label>
              
              </div>
            
            <div className="flex items-center">

              <span>
                <a
                onClick={() => setCartOpen(!cartOpen)} 
                className="cursor-pointer pl-2"
                >

                <ShoppingCartIcon className={clientWindowHeight ? 'inline text-gray-900 dark:text-white h-8 w-8' : 'inline text-gray-900 h-8 w-8'} /> <span className={clientWindowHeight ? 'inline font-bold text-gray-900 dark:text-white' : 'inline font-bold text-gray-900'}>Cart ({cartQuantity})</span>
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