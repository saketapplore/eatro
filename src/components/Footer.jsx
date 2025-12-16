import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative py-8 sm:py-10 md:py-12 mt-6 sm:mt-8 md:mt-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background - foots1.png */}
        <img 
          src="/images/fooot.png" 
          alt="Footer Background" 
          className="md:hidden w-full h-full object-fill"
        />
        {/* Desktop Background - foott.png */}
        <img 
          src="/images/foott.png" 
          alt="Footer Background" 
          className="hidden md:block w-full h-full object-fill"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-full px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Centered Top, Left-aligned Bottom */}
        <div className="md:hidden">
          {/* Top Section - Centered */}
          <div className="text-center mb-8">
            {/* Logo */}
            <div className="flex items-center justify-center mb-4">
              <img
                src="/images/loog.png"
                alt="Eatro logo"
                className="h-6 md:h-12 object-contain"
              />
            </div>

            {/* Tagline */}
            <p className="text-white text-sm mb-4" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 400 }}>
              The All In One Solution To Build Back Loyalty and Maximize Margins.
            </p>

            {/* Copyright */}
            <p className="text-white text-xs" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 400 }}>
              © Eatro Tech 2025 - All Rights Reserved.
            </p>
          </div>

          {/* Bottom Section - Centered */}
          <div className="space-y-6 text-center">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold underline text-base mb-3" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>Quick Links</h3>
              <ul className="space-y-2">
                <li>
                <a href="/#how-it-works" className="text-white text-sm font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    About
                  </a>
                </li>
                <li>
                  <a href="/#how-it-works" className="text-white text-sm font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/#features" className="text-white text-sm font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="/#contact-form" className="text-white text-sm font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold underline text-base mb-3" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-white text-sm font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/tech-security-policy" onClick={() => window.scrollTo(0, 0)} className="text-white text-sm font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="text-white text-sm font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-white font-semibold underline text-base mb-3" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>Get in Touch</h3>
              <div className="flex justify-center gap-3">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/eatrotech/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a href="https://www.instagram.com/eatro_?igsh=MWNnam5oZzk2aHoxNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a href="#" className="text-white hover:text-orange-500 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Keep Original */}
        <div className="hidden md:grid grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {/* Left Section - Logo and Info */}
          <div className="space-y-4 md:space-y-6 mt-4 md:mt-6 ml-0 md:ml-12">
            <img
              src="/images/elogo.png"
              alt="Eatro logo"
              className="w-[80px] sm:w-[90px] md:w-[100px]"
            />
            <p className="text-white text-[11px] sm:text-[12px] leading-relaxed mt-4 md:mt-6 lg:mt-10 mb-4 md:mb-6" style={{ color: '#FFF', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 400 }}>
            The All In One Solution To Build Back Loyalty <br className="hidden sm:block" />and Maximize Margins
            </p>
            <p className="text-white text-[10px] sm:text-xs" style={{ color: '#FFF', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 400 }}>
              © Eatro Tech 2025 — All Rights Reserved
            </p>
          </div>

          {/* Quick Links */}
          <div className='ml-0 md:ml-20 lg:ml-40'>
            <h3 className="text-white font-semibold underline text-base md:text-md mb-3 md:mb-4" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>Quick Links</h3>
            <ul className="space-y-2">
             
              <li>
                <a href="/#about" className="text-white text-[13px] sm:text-[14px] font-weight-400 font-normal hover:text-orange-400 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  About
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-white text-[13px] sm:text-[14px] font-weight-400 font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#features" className="text-white text-[13px] sm:text-[14px] font-weight-400 font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  Features
                </a>
              </li>
              
              <li>
                <a href="/#contact-form" className="text-white text-[13px] sm:text-[14px] font-weight-400 font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className='ml-0 md:ml-10 lg:ml-20'>
            <h3 className="text-white font-semibold underline text-base md:text-md mb-3 md:mb-4" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-white text-[13px] sm:text-[14px] font-weight-400 font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/tech-security-policy" onClick={() => window.scrollTo(0, 0)} className="text-white text-[13px] sm:text-[14px] font-weight-400 font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  Tech Security Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="text-white text-[13px] sm:text-[14px] font-weight-400 font-normal hover:text-orange-500 transition-colors" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className='ml-0 md:ml-4 lg:ml-8'>
            <h3 className="text-white font-normal font-weight-400 text-base md:text-lg mb-3 md:mb-4" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>Get in Touch</h3>
            <div className="flex gap-3 md:gap-4">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/eatrotech/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/eatro_?igsh=MWNnam5oZzk2aHoxNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="#" className="text-white hover:text-orange-500 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

