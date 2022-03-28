import { useEffect } from 'react';
import { getProductsInCollection } from "../lib/shopify"
import ProductList from '../components/ProductList'
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import Tabs from "../components/Tabs"
import AOS from 'aos';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

export default function Home({products}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 750,
      easing: 'ease-out-quart',
    });
  });

  return (
    <>
      <Hero />
      <div className="text-3xl">
        <ProductList products={products} />
      </div>
      <Carousel />
      <Tabs />
      <TestimonialsCarousel />
    </>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}
