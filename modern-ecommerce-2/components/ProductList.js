import ProductCard from "./ProductCard"

const ProductList = ({products}) => {
  return (
    <section id="product-section" className="border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20">

        <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
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