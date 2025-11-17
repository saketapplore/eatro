import React from 'react'

function App() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      {/* Header Section */}
<header className="relative">
  <div className="bg-black max-w-7xl mx-auto text-white rounded-b-3xl overflow-hidden clip-custom">
    <div className="container mx-auto px-4 py-4 relative">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center py-2 space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-bold text-xl text-white">
            E
          </div>
          <span className="text-2xl font-bold">Eatro</span>
        </div>

        {/* Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#features" className="hover:text-orange-500 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-orange-500 transition-colors">How It Work</a>
          <a href="#about" className="bg-orange-600 text-white px-4 py-2 transition-colors">About</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 ml-auto">
          <button className="hover:text-orange-500 transition-colors">Login</button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Book a Demo
          </button>
        </div>

      </div>
    </div>
  </div>
</header>


      {/* Hero Section */}
      <section className="bg-white max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-orange-500 leading-tight">
                Own Your Growth.
              </h1>
              
              <p className="text-xl text-gray-800 leading-relaxed">
                Manage Orders, Power Direct Sales, Ensure Seamless Delivery, Build Loyalty.
              </p>

              {/* Feature List */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-orange-500 mb-2">
                    Reduced Delivery Fees
                  </h3>
                  <p className="text-gray-700">
                    Own your Sales Channel with your branded online store and application to accept direct orders
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-orange-500 mb-2">
                    Operational Peace of Mind
                  </h3>
                  <p className="text-gray-700">
                    Stop juggling screens. Consolidate every order channel from direct site, app, and all aggregators for a single, seamless flow, optimizing your kitchen and courier efficiency.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-orange-500 mb-2">
                    The Blind Spot is Gone. Welcome to Full Customer Insights
                  </h3>
                  <p className="text-gray-700">
                    For the first time, know the names and order history of your best customers. Track which campaigns drive specific orders and measure the real cost of acquiring and retaining a customer, moving beyond guesswork.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Book A Demo
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center">
              <img 
                src="/images/eatro1.png" 
                alt="Eatro Dashboard" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section> 

   </div>


   
  )
}

export default App

