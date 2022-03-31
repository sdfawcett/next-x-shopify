import { useState, useEffect, useContext } from "react"
import Link from 'next/link'
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
    <div className="relative" >
      <div className="rounded-2xl p-4 flex flex-col w-full justify-center items-center md:w-full">
        <h2 className="text-2xl font-bold mt-6">{product.title}</h2>
        <span className="pb-3">{formatter.format(product.variants.edges[0].node.priceV2.amount)}</span>
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
              className="bg-black rounded text-white px-2 py-3 mt-3 dark:bg-transparent dark:border dark:border-white hover:bg-gray-800 md:w-4/5">Add To Cart
            </button> :
            <button
              className="rounded text-white px-2 py-3 mt-3 bg-gray-800 cursor-not-allowed md:w-4/5">
                Sold out!
            </button>
        }
            <Link href="/#product-section">
              <button className="rounded text-gray-900 px-2 py-3 mt-3 border border-gray-900 dark:text-white dark:border-white md:w-4/5">
                Continue Shopping
              </button>
            </Link>
      </div>


        <div className="flex flex-wrap pt-5 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-full mx-auto">
          <div className="w-full p-4">
          <div className="accordion flex flex-col">
            
            <div className="w-full">
              <input type="checkbox" name="panel" id="panel-1" className="hidden" />
              <label htmlFor="panel-1" className="relative block text-xl text-gray-600 p-4 border-t border-grey text-left cursor-pointer">Sourcing</label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4 text-left">Only The Best</h2>
                <p className="accordion__body p-4 text-left" id="panel1">Sourcing is important when it comes to CBD products. All of our hemp comes from farms in Oregon. We chose this state because of the quality of the soil, as well as their high regulation standards for cultivation and testing.</p>
              </div>
            </div>
            
            <div className="w-full">
              <input type="checkbox" name="panel" id="panel-2" className="hidden" />
              <label htmlFor="panel-2" className="relative block text-xl text-gray-600 p-4 border-t border-grey text-left cursor-pointer">Return Policy</label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4 text-left">Return Unopened Products</h2>
                <p className="accordion__body p-4 text-left">A full refund is available for all UNOPENED products. All you have to do is ship the products back within 30 days of your purchase. A shipping label is provided for returns upon request.</p>
              </div>
            </div>
          
          </div>
          </div>
        </div>

    </div>
  )
}