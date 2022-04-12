import { useEffect } from 'react'
import { getProductsInCollection } from "../lib/shopify"
import dynamic from 'next/dynamic'
import Companies from '../components/Companies'
import Hero from "../components/Hero"
import AOS from 'aos'

const DynamicProductList = dynamic(() => import('../components/ProductList'))
const DynamicImageGrid = dynamic(() => import('../components/ImageGrid')) 
const DynamicFeatures = dynamic(() => import('../components/Features')) 
const DynamicTestimonials = dynamic(() => import('../components/Testimonials')) 
const DynamicFooterFade = dynamic(() => import('../components/FooterFade')) 

export default function Home({products}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1200,
      easing: 'ease-out-quart',
    });
  });

  return (
    <>
      <Hero />
      <Companies />
      <div className="text-3xl">
        <DynamicProductList products={products} />
      </div>
      <DynamicFeatures />
      <DynamicImageGrid />
      <DynamicTestimonials />
      <DynamicFooterFade />
    </>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}