import { Fragment, useContext, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { TrashIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { CartContext } from '../context/shopContext'
import { formatter } from '../utils/helpers'
import EmptyCartLady from '../images/shopping-cart-lady.webp'

export default function MiniCart({ cart }) {
   const cancelButtonRef = useRef()
 
   const { cartOpen, setCartOpen, checkoutUrl, removeCartItem, updateCartQuantity } = useContext(CartContext)
 
   let cartTotal = 0
   cart.map(item => {
     cartTotal += item?.variantPrice * item?.variantQuantity
   })
 
   const [inputValue, setInputValue] = useState(1);

   const increment = (product_id) => {
     let item = cart.find(el => el.id === product_id)
     item.variantQuantity += 1
     setInputValue(item.variantQuantity)
     updateCartQuantity(item)
   }
 
   const decrement = (product_id) => {
     let item = cart.find(el => el.id === product_id)
     setInputValue(item.variantQuantity)
     if (item.variantQuantity > 1) {
       item.variantQuantity -= 1
       setInputValue(item.variantQuantity)
       updateCartQuantity(item)
     }
   }
 
   const handleChange = (id, e) => {
     let item = cart.find(el => el.id === id)
     item.variantQuantity = Number.parseFloat(e)
     setInputValue(item.variantQuantity)
     updateCartQuantity(item)
   }
 
   const updateState = (id) => {
     let item = cart.find(el => el.id === id)
     item.variantQuantity = 1
     setInputValue(item.variantQuantity)
   }

return (
   <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog 
      initialFocus={cancelButtonRef}
      as="div" 
      className="fixed z-50 inset-0 overflow-hidden" 
      onClose={() => { setCartOpen(!cartOpen) }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between border-b pb-4">
                      <Dialog.Title className="text-lg font-medium text-gray-900"> Shopping cart </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          ref={cancelButtonRef}
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setCartOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        {
                          cart.length > 0 ?
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {cart.map((product) => (
                            <li key={product.id + Math.random()} className="flex py-6">
                              <div className="h-24 w-24 relative flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image
                                  src={product.image}
                                  alt={product.title}
                                  layout='fill'
                                  objectFit='cover'
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <Link href={`/products/${product.handle}`} passHref>
                                        <a
                                        onClick={() => setCartOpen(false)}
                                        > {product.title} </a>
                                      </Link>
                                    </h3>
                                    <p className="ml-4">{formatter.format(product.variantPrice)}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{product.variantTitle}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="rounded-lg inline-block mt-2 xxs:w-[111px] xs:!w-[130.4px]">
                                      <button 
                                      onClick={() => decrement(product.id)}
                                      className='text-gray-900 highlight-removal transition-all ease-in-out duration-100 px-3 rounded-l py-1 font-semibold hover:bg-lightest-green hover:text-white active:bg-gray-900 active:text-white'>
                                        &mdash;
                                      </button>
                                          <input id="input" inputMode='numeric' pattern="[0-9]*" onFocus={(e) => e.target.value = ""} onBlur={(e) => e.target.value = product.variantQuantity} className="transition-all text-gray-900 ease-in-out duration-100 relative z-50 caret-lighter-green text-center rounded xxs:w-9 xs:!w-14 py-1 font-semibold" type="text" value={product.variantQuantity} onChange={(e) => handleChange(product.id, e.target.value)} />
                                      <button 
                                      onClick={() => increment(product.id)}
                                      className='text-gray-900 highlight-removal transition-all ease-in-out duration-100 px-3 rounded-r py-1 font-semibold hover:bg-lightest-green hover:text-white active:bg-gray-900 active:text-white'>
                                        &#xff0b;
                                      </button>  
                                  </div> 

                                  <div className="flex">
                                    <button 
                                    type="button" 
                                    className="font-medium text-gray-500 hover:text-gray-800"
                                    onClick={() => {
                                      removeCartItem(product.id)
                                      updateState(product.id);
                                    }}
                                    >
                                      <svg width={44} height={24} viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                                        <g className="fill-current" fillRule="nonzero">
                                          <TrashIcon />
                                        </g>
                                      </svg>
                                    </button>
                                    
                                    
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul> : 

                        <div>
                          <Image
                            src={EmptyCartLady} 
                            alt="Woman with CBD gummies"
                          />

                          <h3 className='text-center text-gray-600'>Ready to add something to your cart?</h3>
                        </div>

                        }
                        
                      </div>
                    </div>
                  </div>
                  {
                     cart.length > 0 ?
                     <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                           <p>Subtotal</p>
                           <p>{formatter.format(cartTotal)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                           <a
                              href={checkoutUrl}
                              className="flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white bg-black hover:bg-gray-800"
                           >
                              Checkout
                           </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                           <p>
                              or{' '}
                              <button
                              type="button"
                              className="font-medium hover:text-gray-800"
                              onClick={() => setCartOpen(false)}
                              >
                              Continue Shopping<span aria-hidden="true"> &rarr;</span>
                              </button>
                           </p>
                        </div>
                     </div> : null
                  }
                  
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
)
 }
