import React from 'react'
import dynamic from 'next/dynamic'
import Nav from './Nav'

const DynamicFooter = dynamic(() => import('./Footer'))

export default function Layout({ children }) {

  return (
    
    <div className='antialiased bg-gray-100 text-gray-900 dark:bg-bg-green dark:text-new-beige tracking-tight transition-colors duration-300'>
      <div className='flex flex-col justify-between min-h-screen'>
        <Nav />

        <main>
            {children}
        </main>
        
        <DynamicFooter />
      </div>
    </div>
  )
}