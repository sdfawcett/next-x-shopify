import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import ProductForm from './ProductForm'
import RecommendedList from './RecommendedList'

export default function ProductPageContent({ product }) {

  const images = []

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image src={image.node.originalSrc} alt={image.node.altText} layout="fill" objectFit="cover" />
      </SwiperSlide>
    )
  })

  SwiperCore.use([Navigation, Pagination])

  return (
    <div>

      <div className="flex flex-col md:flex-row mx-14">

          <div className="relative w-full md:w-1/2 min-h-[80vh] h-[80vh]">
            <Swiper
              style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000' }}
              navigation
              pagination={{ clickable: true }}
              className="h-full rounded-2xl"
              loop="true"
            >
              {images}
            </Swiper>
          </div>

        <div className='w-full text-center md:w-1/2'>

        <ProductForm product={product} />

      </div>
    </div>
      
      <RecommendedList current={product.id} products={product.collections.edges[0].node.products.edges} />
    </div>
  )
}
