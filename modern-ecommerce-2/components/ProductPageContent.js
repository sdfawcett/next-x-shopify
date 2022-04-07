import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import BackButton from './BackButton'
import ProductForm from './ProductForm'
import RecommendedList from './RecommendedList'
import OilProductSection from './OilProductSection'
import CreamProductSection from './CreamProductSection'
import DogOilProductSection from './DogOilProductSection'
import CatOilProductSection from './CatOilProductSection'
import DogTreatProductSection from './DogTreatProductSection'
import CatTreatProductSection from './CatTreatProductSection'
import GummiesProductSection from './GummiesProductSection'
import CapsuleProductSection from './CapsuleProductSection'

export default function ProductPageContent({ product }) {

  const cbdOil = product.title === 'CBD Oil'
  const cbdCream = product.title === 'CBD Cream'
  const dogOil = product.title === 'Dog CBD Oil'
  const catOil = product.title === 'Cat CBD Oil'
  const dogTreat = product.title === 'CBD Dog Treats'
  const catTreat = product.title === 'CBD Cat Treats'
  const cbdGummy = product.title === 'CBD Gummies'
  const cbdCapsules = product.title === 'CBD Capsules'

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
      
      <div className="flex flex-col lg:flex-row mx-14 mt-28">
      
          <div className="relative w-full bg-no-repeat lg:w-1/2 min-h-[80vh] h-[80vh]">
          <BackButton />
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

        <div className='w-full text-center lg:w-1/2'>

        <ProductForm product={product} />

      </div>
    </div>

      {cbdOil ? <OilProductSection /> : cbdCream ? <CreamProductSection /> : dogOil ? <DogOilProductSection /> : catOil ? <CatOilProductSection /> : dogTreat ? <DogTreatProductSection /> : catTreat ? <CatTreatProductSection /> : cbdGummy ? <GummiesProductSection /> : cbdCapsules ? <CapsuleProductSection /> : <OilProductSection />}

      
      <RecommendedList current={product.id} products={product.collections.edges[0].node.products.edges} />
    </div>
  )
}
