import React, { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import CarouselImage01 from '../images/berry-king-of-the-hill.webp'
import CarouselImage02 from '../images/natural-berry.webp'
import CarouselImage03 from '../images/fab-social-polaroids.webp'
import CarouselImage04 from '../images/pm-chews.webp'
import CarouselImage05 from '../images/products-rainbow.webp'
import CarouselImage06 from '../images/which-is-your-go-to.webp'
import CarouselImage07 from '../images/blood-orange.webp'
import CarouselImage08 from '../images/cbd-dog-salve.webp'
import CarouselImage09 from '../images/chews.webp'
import CarouselImage10 from '../images/paws-fab-pets.webp'
import { FaInstagram } from 'react-icons/fa'

// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Autoplay, Navigation]);

export default function Carousel() {

   useEffect(() => {
      // eslint-disable-next-line no-unused-vars
      const carousel = new Swiper('.carousel', {
        slidesPerView: 'auto',
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        initialSlide: 1,
        spaceBetween: 24,
        autoplay: {
          delay: 7000,
        },
        navigation: {
          nextEl: '.carousel-next',
          prevEl: '.carousel-prev',
        },
      })
    }, [])

  return (
   <section>
      <div className="py-12 md:py-20 dark:bg-bg-green">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div data-aos="fade-down" className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 font-lora text-gray-900 dark:text-new-beige mb-4">From rough design files, to powerful products</h1>
            <p className="text-xl font-karla text-gray-900 dark:text-new-beige">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className="carousel swiper-container">
          <div className="swiper-wrapper">
            {/* Carousel items */}
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage01} width="540" height="460" alt="Carousel item 01" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>

                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage02} width="540" height="460" alt="Carousel item 02" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage03} width="540" height="460" alt="Carousel item 03" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage04} width="540" height="460" alt="Carousel item 04" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage05} width="540" height="460" alt="Carousel item 05" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage06} width="540" height="460" alt="Carousel item 05" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage07} width="540" height="460" alt="Carousel item 05" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage08} width="540" height="460" alt="Carousel item 03" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage09} width="540" height="460" alt="Carousel item 05" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage10} width="540" height="460" alt="Carousel item 03" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>

            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage01} width="540" height="460" alt="Carousel item 01" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage02} width="540" height="460" alt="Carousel item 02" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage03} width="540" height="460" alt="Carousel item 03" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage04} width="540" height="460" alt="Carousel item 04" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage05} width="540" height="460" alt="Carousel item 05" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage06} width="540" height="460" alt="Carousel item 05" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage07} width="540" height="460" alt="Carousel item 05" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage08} width="540" height="460" alt="Carousel item 03" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage09} width="540" height="460" alt="Carousel item 05" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image className="transition-opacity duration-300" src={CarouselImage10} width="540" height="460" alt="Carousel item 03" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white py-5 bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0"><FaInstagram className='inline text-2xl' /></a>
                </div>
                
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Instagram</a>
                </div>
              </div>
            </div>
            

          </div>
        </div>

        {/* Arrows */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mt-12 md:mt-16">
            <button className="carousel-prev relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-bg-green hover:bg-lighter-green dark:border dark:border-new-beige dark:hover:bg-lighter-green dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-current text-gray-300 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-bg-green hover:bg-lighter-green dark:border dark:border-new-beige dark:hover:bg-lighter-green dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-current text-gray-300 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
