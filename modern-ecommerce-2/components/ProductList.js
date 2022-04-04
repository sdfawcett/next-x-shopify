import ProductCard from "./ProductCard"

const ProductList = ({products}) => {
  return (
    <section id="product-section" className="border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 font-lora text-gray-900 mb-4 dark:text-new-beige">From rough design files, to powerful products</h1>
            <p className="text-xl text-gray-900 dark:text-new-beige">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

        </div>
        <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 className='text-2xl font-extrabold font-lora text-gray-900 mb-6 dark:text-new-beige'>
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