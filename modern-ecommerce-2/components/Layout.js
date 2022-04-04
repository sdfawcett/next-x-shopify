import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {

  return (
    
    <div className='antialiased bg-white text-gray-900 dark:bg-bg-green dark:text-contrast-gray tracking-tight'>
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