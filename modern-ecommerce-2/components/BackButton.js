import Link from 'next/link'
import { MdArrowBack } from 'react-icons/md'

export default function BackButton() {


  return (
   <>
      <Link href="/#product-section">
         <a><MdArrowBack className='inline' /> Back To Products</a>
      </Link>
   </>
  )
}
