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

        <div className="w-full bg-gray-200 rounded-sm overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image 
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <h3 className="font-extrabold text-xl font-red-hat-display mb-1 mt-4 text-gray-600 dark:text-gray-400 text-center">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 text-center">{formatter.format(price)}</p>
        <button class="w-full btn text-white bg-teal-500 hover:bg-teal-400">View</button>

      </a>

    </Link>
  )
}

export default ProductCard