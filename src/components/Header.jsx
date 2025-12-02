import React from 'react'

function Header({ scrollToContactForm }) {
  return (
    <header className="relative">
      <div className="bg-black max-w-7xl mx-auto text-white rounded-b-3xl overflow-hidden clip-custom">
        <div className="container mx-auto px-4 py-4 relative">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center py-2 space-x-2">
              <a href="/">
                <img src="/images/group1.svg" alt="Eatro Logo" className="h-6" />
              </a>
            </div>

            {/* Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a href="/#about" className="text-[14px] font-medium leading-[94%] capitalize hover:bg-orange-900 px-1  hover:text-orange-500 transition-colors" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>About</a>
              <a href="/#how-it-works" className="text-white hover:bg-orange-900 text-[14px] font-medium leading-[94%] capitalize hover:text-orange-500 transition-colors" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>How It Works</a>
              <a href="/#features" className="text-white text-[14px] hover:bg-orange-900 font-medium leading-[94%] capitalize hover:text-orange-500 transition-colors" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>Features</a>
              <a href="/#contact" className="text-white text-[14px] hover:bg-orange-900 font-medium leading-[94%] capitalize hover:text-orange-500 transition-colors" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>Contact</a>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 ml-auto">
              <button className="hover:text-orange-500 transition-colors">Login</button>
              <button onClick={scrollToContactForm} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Book a Demo
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


