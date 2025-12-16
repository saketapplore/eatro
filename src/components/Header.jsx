import React, { useState } from 'react'

function Header({ scrollToContactForm }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header id="about" className="relative">
      <div
  className={`bg-black max-w-full text-white rounded-b-3xl mx-4 md:mx-0 ${
    mobileMenuOpen ? 'overflow-visible' : 'overflow-hidden clip-custom'
  }`}
>

      <div className="px-4 md:px-6 lg:px-8 py-4 relative w-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] min-[2560px]:max-w-[2200px] mx-auto">

          <div className="flex items-center justify-between">
            
            {/* Mobile Menu Button - Left Side (Mobile Only) */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:text-orange-500 transition-colors order-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Logo - Left (Desktop) / Center (Mobile) */}
            <div className="flex items-center py-2 space-x-2 md:order-1 order-2 absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none">
              <a href="/">
                <img src="/images/group1.svg" alt="Eatro Logo" className="h-5 md:h-6 lg:h-7 min-[2560px]:h-8" />
              </a>
            </div>

            {/* Navigation - Centered (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 min-[2560px]:space-x-12 absolute left-1/2 transform -translate-x-1/2 md:order-2">
              <a href="/#about" className="text-[14px] min-[2560px]:text-[16px] font-medium leading-[94%] capitalize hover:bg-orange-900 px-1 hover:text-orange-500 transition-colors" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>About</a>
              <a href="/#how-it-works" className="text-white hover:bg-orange-900 text-[14px] min-[2560px]:text-[16px] font-medium leading-[94%] capitalize hover:text-orange-500 transition-colors" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>How It Works</a>
              <a href="/#features" className="text-white text-[14px] min-[2560px]:text-[16px] hover:bg-orange-900 font-medium leading-[94%] capitalize hover:text-orange-500 transition-colors" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>Features</a>
              <a href="/#contact-form" className="text-white text-[14px] min-[2560px]:text-[16px] hover:bg-orange-900 font-medium leading-[94%] capitalize hover:text-orange-500 transition-colors" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>Contact</a>
            </nav>

            {/* Action Buttons (Desktop) */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 min-[2560px]:space-x-8 ml-auto md:order-3">
              <button className="hover:text-orange-500 transition-colors text-[14px] min-[2560px]:text-[16px]">Login</button>
              <button onClick={scrollToContactForm} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 min-[2560px]:px-8 min-[2560px]:py-3 rounded-lg font-semibold transition-colors text-[14px] min-[2560px]:text-[16px]">
                Book a Demo
              </button>
            </div>

            {/* Login Button - Right Side (Mobile Only) */}
            <button className="md:hidden hover:text-orange-500 transition-colors text-[14px] order-3 underline">
              Login
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
              <nav className="flex flex-col space-y-4 mt-4">
                <a 
                  href="/#about" 
                  onClick={closeMobileMenu}
                  className="text-white text-[14px] font-medium leading-[94%] capitalize hover:text-orange-500 transition-colors py-2" 
                  style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}
                >
                  About
                </a>
                <a 
                  href="/#how-it-works" 
                  onClick={closeMobileMenu}
                  className="text-white text-[14px] font-medium leading-[94%] capitalize hover:text-orange-500 transition-colors py-2" 
                  style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}
                >
                  How It Works
                </a>
                <a 
                  href="/#features" 
                  onClick={closeMobileMenu}
                  className="text-white text-[14px] font-medium leading-[94%] capitalize hover:text-orange-500 transition-colors py-2" 
                  style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}
                >
                  Features
                </a>
                <a 
                  href="/#contact" 
                  onClick={closeMobileMenu}
                  className="text-white text-[14px] font-medium leading-[94%] capitalize hover:text-orange-500 transition-colors py-2" 
                  style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}
                >
                  Contact
                </a>
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
                  <button 
                    onClick={closeMobileMenu}
                    className="text-left hover:text-orange-500 transition-colors py-2"
                  >
                    Login
                  </button>
                  <button 
                    onClick={(e) => {
                      closeMobileMenu()
                      scrollToContactForm(e)
                    }} 
                    className="hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center"
                  >
                    Book a Demo
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header



