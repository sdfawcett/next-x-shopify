import ProductCard from "./ProductCard"

const ProductList = ({products}) => {
  return (
    <section className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 font-red-hat-display mb-4">From rough design files, to powerful products</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

        </div>
        <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 className='text-2xl font-extrabold text-gray-900 mb-6'>
              Products
            </h2>
            <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
              {
              products.map(product => (
                <ProductCard key={product.node.id} product={product} />
              ))
            }
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProductList