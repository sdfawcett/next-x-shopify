import type { NextPage } from 'next'
import ProductList from '../components/ProductList'
import { getProductsInCollection } from '../lib/shopify'



const Home: NextPage = (products) => {
  
  console.log(products)
  return (
    <div className='text-3xl'>
      
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: { products }, // will be passed to the page component as props
  }
}

export default Home

