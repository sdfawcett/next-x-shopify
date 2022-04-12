import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import dynamic from 'next/dynamic'
import BackButton from './BackButton'
import ProductForm from './ProductForm'

const DynamicRecommendedList = dynamic(() => import('./RecommendedList'))
const DynamicOilProductSection = dynamic(() => import('./OilProductSection'))
const DynamicCreamProductSection = dynamic(() => import('./CreamProductSection'))
const DynamicDogOilProductSection = dynamic(() => import('./DogOilProductSection'))
const DynamicCatOilProductSection = dynamic(() => import('./CatOilProductSection'))
const DynamicDogTreatProductSection = dynamic(() => import('./DogTreatProductSection'))
const DynamicCatTreatProductSection = dynamic(() => import('./CatTreatProductSection'))
const DynamicGummiesProductSection = dynamic(() => import('./GummiesProductSection'))
const DynamicCapsuleProductSection = dynamic(() => import('./CapsuleProductSection'))

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
      
      <div className="flex flex-col lg:flex-row mx-0 sm:mx-14 mt-28 mb-10">
      
          <div className="relative w-full h-[50vh] min-h-[50vh] mb-8 bg-no-repeat lg:w-1/2 lg:h-[80vh] lg:mb-0">
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

      {cbdOil ? <DynamicOilProductSection /> : cbdCream ? <DynamicCreamProductSection /> : dogOil ? <DynamicDogOilProductSection /> : catOil ? <DynamicCatOilProductSection /> : dogTreat ? <DynamicDogTreatProductSection /> : catTreat ? <DynamicCatTreatProductSection /> : cbdGummy ? <DynamicGummiesProductSection /> : cbdCapsules ? <DynamicCapsuleProductSection /> : <DynamicOilProductSection />}

      
      <DynamicRecommendedList current={product.id} products={product.collections.edges[0].node.products.edges} />
    </div>
  )
}
