import ProductCard from "./ProductCard"


const RecommendedList = ({ products, current }) => {
  return (
    <div className="dark:bg-bg-green dark:text-new-beige">
      <div className="max-w-2xl mx-auto pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold mb-6">
          More Products You Might Like:
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map(product => (
              product.node.id === current ? null : <ProductCard key={product.node.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RecommendedList