import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {

  return (
    
    <div className='font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight'>
      <div className='flex flex-col justify-between min-h-screen'>
        <Nav />

        <main>
            {children}
        </main>
        
        <Footer />
      </div>
    </div>
  )
}