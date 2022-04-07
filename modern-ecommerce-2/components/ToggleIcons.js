import { FaYinYang } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'

export default function ToggleIcons({ active, handleChangeActive }) {
  return (
   <>
      {active ? (
         <BsSunFill 
         className="active h-full w-full cursor-pointer"
         alt="sun shining"
         onClick={() => handleChangeActive()}
         />
         
      ) : (
         <FaYinYang 
         className="inactive h-full w-full cursor-pointer text-gray-900 dark:text-contrast-gray"
         alt="yin yang symbol"
         onClick={() => handleChangeActive()}
         />
      )}
   </>
  )
}
