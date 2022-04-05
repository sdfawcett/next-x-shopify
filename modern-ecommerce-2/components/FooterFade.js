import Link from 'next/link'
import Image from 'next/image'
import HempFieldBg from '../images/hemp-field.webp';


export default function FooterFade() {
  return (
    <section className='relative'>

      <div className="bg-bg-green relative min-h-min">
        <div id='ff-bg' className="relative overflow-hidden text-white bg-blend-darken">
          <div className="grid max-w-screen-xl grid-cols-1 mx-auto lg:grid-cols-2">

            <div className="relative z-10 max-w-screen-xl px-4 py-7 lg:py-32 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-xl space-y-8 text-center lg:text-right sm:ml-auto">
                <h2 className="text-4xl font-bold font-lora sm:text-5xl">
                  A One-Year Supply of CBD On Us!
                </h2>

                <p className="sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
                  Sign up for your chance to win one year's worth of CBD, compliments of Bomb Botanicals.
                </p>


              </div>
            </div>

            <div className="z-10 max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="space-y-8 text-left ml-0 lg:ml-auto">
              <form action="" className="p-8 pt-2 lg:pt-20 lg:mt-6 mb-0 space-y-4 rounded-lg">

                <div>
                  <label htmlFor="first-name" className="text-sm font-medium">First Name</label>

                  <div className="relative mt-1">
                    <input
                      type="text"
                      id="email"
                      className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                      placeholder="Your first name here"
                    />

                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                        />
                      </svg>

                      
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-left">Email Address</label>

                  <div className="relative mt-1">
                    <input
                      type="email"
                      id="email"
                      className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                      placeholder="Enter your email address"
                    />

                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg">
                  Sign Up
                </button>

              </form>
              </div>
            </div>

          </div>

        </div>
        
        

      </div>

    </section>
  )
}
