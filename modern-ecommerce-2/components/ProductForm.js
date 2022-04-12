import { useState, useEffect, useContext } from "react"
import Link from 'next/link'
import Image from 'next/image'
import LeafBg from '../images/leaf-3.svg'
import { formatter } from '../utils/helpers'
import ProductOptions from "./ProductOptions"
import { CartContext } from "../context/shopContext"
import axios from "axios"
import useSWR from 'swr'

// setup inventory fetcher
const fetchInventory = (url, id) =>
  axios
    .get(url, {
      params: {
        id: id,
      },
    })
    .then((res) => res.data)

export default function ProductForm({ product }) {

  const { data: productInventory } = useSWR(
    ['/api/available', product.handle],
    (url, id) => fetchInventory(url, id),
    { errorRetryCount: 3 }
  )

  const [available, setAvailable] = useState(true)

  const [openTab, setOpenTab] = useState(1);


  const { addToCart } = useContext(CartContext)

  const allVariantOptions = product.variants.edges?.map(variant => {
    const allOptions = {}

    variant.node.selectedOptions.map(item => {
      allOptions[item.name] = item.value
    })

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1
    }
  })

  const defaultValues = {}
  product.options.map(item => {
    defaultValues[item.name] = item.values[0]
  })

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  function setOptions(name, value) {
    setSelectedOptions(prevState => {
      return { ...prevState, [name]: value }
    })

    const selection = {
      ...selectedOptions,
      [name]: value
    }

    allVariantOptions.map(item => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item)
      }
    })
  }


  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(item => item.node.id === selectedVariant.id)

      if (checkAvailable[0].node.availableForSale) {
        setAvailable(true)
      } else {
        setAvailable(false)
      }
    }
  }, [productInventory, selectedVariant])


  return (
    <div className="relative w-full bg-blend-darken">

      <div className="opacity-5 z-0 w-10/12 h-10/12">
        <Image
          src={LeafBg}
          alt="outline of a leaf"
          layout="fill" 
          objectFit="contain" 
          objectPosition="center"
        />
      </div>

      <div className="rounded-2xl mt-8 p-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl dark:text-new-beige font-bold font-lora mt-6">{product.title}</h2>
        <span className="pb-3 dark:text-new-beige">{formatter.format(product.variants.edges[0].node.priceV2.amount)}</span>
        {
          product.options.map(({ name, values }) => (
            <ProductOptions
              key={`key-${name}`}
              name={name}
              values={values}
              selectedOptions={selectedOptions}
              setOptions={setOptions}
              selectedVariant={selectedVariant}
              productInventory={productInventory}
              available={available}
            />
          ))
        }
        {
          available ?
            <button
              onClick={() => {
                addToCart(selectedVariant)
              }}
              className="bg-lighter-green z-10 w-full rounded font-bold shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-black text-white px-2 py-3 mt-3 dark:bg-transparent dark:border-2 dark:border-new-beige dark:hover:bg-lightest-green dark:hover:text-bg-green md:w-4/5">Add To Cart
            </button> :
            <button
              className="rounded text-white z-10 px-2 py-3 mt-3 bg-gray-800 cursor-not-allowed md:w-4/5">
                Sold out!
            </button>
        }
            <Link href="/#product-section">
              <button className="rounded z-10 w-full text-gray-900 font-bold px-2 py-3 mt-3 border-2 border-gray-900 dark:text-white dark:border-new-beige md:w-4/5">
                Continue Shopping
              </button>
            </Link>
      </div>


        <div className="flex flex-wrap pt-5 px-0 sm:px-8 lg:px-[4.5rem] space-y-8 md:space-x-4 lg:space-x-8 max-w-4xl w-full mx-auto lg:mx-0">
          <div className="w-full p-4">
            <div className="flow-root">
              <div className="-my-8 divide-y divide-new-beige">
                <details className="py-8 group" open>
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg text-left font-medium dark:text-new-beige">
                      Product Description
                    </h5>

                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        width={24} 
                        height={24}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        width={24} 
                        height={24}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-left dark:text-new-beige">
                    {product.description}
                  </p>
                </details>

                <details className="py-8 group" open>
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg text-left font-medium  dark:text-new-beige">
                      Shipping Info
                    </h5>

                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        width={24} 
                        height={24}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        width={24} 
                        height={24}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-left dark:text-new-beige">
                    Ships in 1-2 business days
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}