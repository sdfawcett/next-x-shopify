import { getProductsInCollection } from '../lib/shopify'

function Home({}) {
  return (
    <div className='text-3xl'>Hello from shopify next.js</div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: { products }, // will be passed to the page component as props
  }
}

export default Home
