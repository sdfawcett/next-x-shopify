import Link from 'next/link'
import Image from 'next/image'
import { formatter } from '../utils/helpers'

const ProductCard = ({ product }) => {
  const { handle, title } = product.node

  const { altText, originalSrc } = product.node.images.edges[0].node

  const price = product.node.priceRange.minVariantPrice.amount

  return (
    <Link
      href={`/products/${handle}`}
    >
      <a className="group">

        <div className="w-full bg-gray-200 rounded-sm dark:rounded-bl-3xl dark:rounded-tr-3xl overflow-hidden">
          <div className="relative h-72 group-hover:scale-105 transition-transform duration-500">
            <Image 
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <h3 className="font-extrabold text-xl font-lora mb-1 mt-4 text-dark-blue text-center">{title}</h3>
        <p className="mt-1 text-sm text-dark-blue font-karla text-center">{formatter.format(price)}</p>
        <button className="w-full btn text-white bg-dark-blue hover:bg-dark-blue">View</button>

      </a>

    </Link>
  )
}

export default ProductCard