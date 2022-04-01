import { useEffect } from 'react';
import { getProductsInCollection } from "../lib/shopify"
import ProductList from '../components/ProductList'
import Companies from '../components/Companies'
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import FooterFade from "../components/FooterFade"
import Tabs from "../components/Tabs"
import AOS from 'aos';
import Testimonials from '../components/Testimonials';
import Features from '../Features';

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
      <Companies />
      <div className="text-3xl">
        <ProductList products={products} />
      </div>
      <Features />
      <Carousel />
      <Tabs />
      <Testimonials />
      <FooterFade />
    </>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}