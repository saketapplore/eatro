import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    numberOfLocations: ''
  })

  // Modal state
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // FAQ state - track which items are open
  const [openFAQs, setOpenFAQs] = useState({})

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to a server
    // For now, we'll just show the success modal
    setShowSuccessModal(true)
  }

  // Close modal
  const closeModal = () => {
    setShowSuccessModal(false)
  }

  // Scroll to contact form
  const scrollToContactForm = (e) => {
    e.preventDefault()
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div className="min-h-screen bg-[#fff8f2]">
      <Header scrollToContactForm={scrollToContactForm} />


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="relative">
                <img src="/images/own.png" alt="Own Your Growth" className="w-auto h-16 md:h-20 -ml-6 relative z-10 inline-block" />
                <p className="text-[#000] text-[30px] font-medium leading-[36px] -mt-4 relative z-0" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
                  Manage Orders, Power Direct Sales, 
                </p>
                <br />
                <p className="text-[#000] text-[30px] font-medium leading-[36px] -mt-8 relative z-0" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>Ensure Seamless Delivery, Build Loyalty.</p>
              </div>

              {/* Feature List */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-[10px] flex-shrink-0"></div>
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-orange-500">Reduced Delivery Fees:</span> <span className="text-black" style={{ color: '#282828', fontFamily: 'Poppins', fontSize: '14px', fontStyle: 'normal', fontWeight: 500 }}>Own your Sales Channel with your branded online store and application to accept direct orders</span>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-[10px] flex-shrink-0"></div>
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-orange-500">Operational Peace of Mind:</span> <span className="text-black" style={{ color: '#282828', fontFamily: 'Poppins', fontSize: '14px', fontStyle: 'normal', fontWeight: 500 }}>Stop juggling screens. Consolidate every order channel from direct site, app, and all aggregators for a single, seamless flow, optimizing your kitchen and courier efficiency.</span>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-[10px] flex-shrink-0"></div>
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-orange-500">The Blind Spot is Gone. Welcome to Full Customer Insights:</span> <span className="text-black" style={{ color: '#282828', fontFamily: 'Poppins', fontSize: '14px', fontStyle: 'normal', fontWeight: 500 }}>For the first time, know the names and order history of your best customers. Track which campaigns drive specific orders and measure the real cost of acquiring and retaining a customer, moving beyond guesswork.</span>
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button onClick={scrollToContactForm} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Book A Demo
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center">
              <img 
                src="/images/eat2.png" 
                alt="Eatro Dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section> 

      {/* Benefits Cards Section */}
      <section className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Save Delivery Fees */}
            <div className="relative">
              <img 
                src="/images/box1.png" 
                alt="Save Delivery Fees" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Card 2 - Increase Order Frequency */}
            <div className="relative">
              <img 
                src="/images/box2.png" 
                alt="Increase Order Frequency" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Card 3 - Increase Staff Productivity */}
            <div className="relative">
              <img 
                src="/images/box3.png" 
                alt="Increase Staff Productivity" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* One Platform Five Seamless Experiences Section */}
      <section className="relative min-h-[500px] md:min-h-[800px] mx-auto max-w-8xl mr-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/burg1.png" 
            alt="Background" 
            className="max-w-8xl mx-auto h-full object-fill"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto pt-20">
          <div className="flex justify-start ml-28">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-[#fff] text-[40px] font-normal font-weight-600 leading-[105%]" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
                <span>One Platform,</span>
                <br />
                <span>Five Seamless</span>
                <br />
                <span>Experiences</span>
              </h2>

              {/* CTA Button */}
              <button onClick={scrollToContactForm} className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-semibold text-base transition-colors">
                Book A Demo
              </button>
            </div>
          </div>
        </div>
      </section>

        {/* Integrated Partners Section */}
        <section className="max-w-7xl mx-auto -mt-24">
        <div className="container mx-auto px-4 mb-16">
          <div className="flex flex-col items-center space-y-8">
            {/* Heading */}
            <h2 className="text-[40px] font-bold leading-[105%] text-center" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
              <span className="text-black">Our</span>{' '}
              <span className="text-orange-500">Integrated Partners</span>
            </h2>

            {/* Careem Logo Box */}
            <div className="rounded-lg ">
              <img 
                src="/images/careem.png" 
                alt="Careem" 
                className="h-12 md:h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Integrations Section */}
      <section className="relative py-12 overflow-hidden" style={{ backgroundColor: '' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/desk1.png" 
            alt="Background" 
            className="w-full h-full object-fill"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Title and Subtitle - Centered at Top */}
          <div className="text-center mb-20">
            <h2 className="text-[40px] font-bold leading-[105%] mb-4" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
              <span className="text-black">Seamless</span>{' '}
              <span className="text-orange-500">Integrations for Restaurants</span>
            </h2>
            
            <p className="text-[#282828] text-center font-weight-400 text-[16px] font-normal max-w-4xl mx-auto" style={{ fontFamily: 'Poppins', fontStyle: 'normal', leadingTrim: 'both', textEdge: 'cap' }}>
              Achieve instant operational efficiency. Choose a top-tier POS integration or deploy the Eatro Tablet to ensure your menus, orders, and inventory are automatically synchronized in real-time.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 mb-20 gap-12 items-center">
            {/* Left Content - Features List */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-[#282828] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  Connect easily with POS providers
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-[#282828] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  Keep menus & prices synced automatically
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-[#282828] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  Track inventory and update in real time
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-[#282828] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  Post orders and print receipts ensuring a unified and <br /> efficient workflow
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-[#282828] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  Single Source of Truth For all Aggregator orders
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-[#282828] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  Live Tracking for Deliveries
                </p>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* Burger Image Section
      <section className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <img 
              src="/images/burger.png" 
              alt="Burger" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section> */}

    

      {/* Restro Image Section */}
      {/* <section className="max-w-full">
        <div className=" py-16">
          <div className="">
            <img 
              src="/images/restro.png" 
              alt="Restro" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section> */}

      {/* Restro Image Section 2 */}
      <section className="max-w-7xl mx-auto">
        <div className="py-16">
          <div>
            <img 
              src="/images/works.png" 
              alt="Restro" 
              className="w-full h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* One Platform Total Control Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/group12.png" 
            alt="Background" 
            className="w-full h-full object-fill"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-[50px] leading-tight" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
                <span className="text-white font-weight-500 font-normal">One Platform,</span>
                <br />
                <span className="text-orange-500 font-bold">Total Control</span>
              </h2>
              
              <p className="text-[#ffffff] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                Reclaim control by running all operations from one place. Our platform delivers the centralized visibility you need to manage your business effectively.
              </p>

              {/* Feature Icons Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-black/50 border border-gray-700 rounded-xl p-6 flex items-center justify-center hover:border-orange-500 transition-all">
                    <img 
                      src="/images/gr1.png" 
                      alt="Manage menus" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="text-white text-[14px] font-normal font-weight-400" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Manage menus & inventory
                  </p>
            </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-black/50 border border-gray-700 rounded-xl p-6 flex items-center justify-center hover:border-orange-500 transition-all">
                    <img 
                      src="/images/gr2.png" 
                      alt="Track incoming orders" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="text-white text-[14px] font-normal font-weight-400" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Track incoming orders in real-time
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-black/50 border border-gray-700 rounded-xl p-6 flex items-center justify-center hover:border-orange-500 transition-all">
                    <img 
                      src="/images/gr3.png" 
                      alt="Analyze revenue" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="text-white text-[14px] font-normal font-weight-400" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Analyze revenue & payouts
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-black/50 border border-gray-700 rounded-xl p-6 flex items-center justify-center hover:border-orange-500 transition-all">
                    <img 
                      src="/images/gr4.png" 
                      alt="Offer discounts" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="text-white text-[14px] font-normal font-weight-400" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Offer discounts & promotions
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button onClick={scrollToContactForm} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors">
                Book A Demo
              </button>
            </div>

            {/* Right Image - Dashboard Mockup */}
            {/* <div className="relative flex justify-center items-center">
              <div className="relative">
                <img 
                  src="/images/ii.png" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Loyalty Tastes Better Direct Section */}
      <section className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-36 items-center">
            {/* Left Image */}
            <div className="flex justify-center mt-24 items-center">
              <img 
                src="/images/scooty.png" 
                alt="Loyalty Tastes Better Direct" 
                className="w-full h-[500px] rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-normal font-weight-500 leading-tight" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
                <span className="text-black font-weight-500 font-normal">Loyalty Tastes</span>
                <br />
                <span className="text-orange-500 font-bold">Better Direct</span>
                <br />
                
              </h2>
              
              <p className="text-[#282828] max-w-lg font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                A seamless experience that makes food ordering <br />effortless
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
                  <p className="text-[#282828] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Order favourites directly with the restaurant
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
                  <p className="text-[#282828] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Track orders live with real-time GPS tracking
                  </p>
            </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
                  <p className="text-[#282828] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Secure checkout with Apple pay and Google pay
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
                  <p className="text-[#282828] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Reorder and accumulate loyalty points
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0"></div>
                  <p className="text-[#282828] font-weight-400 text-[16px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Rate and review your experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready To Chat Contact Form Section */}
      <section id="contact-form" className="relative py-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/orangebg.png" 
            alt="Background" 
            className="w-full h-full object-fill"
          />
        </div>

        {/* Form Container */}
        <div className="relative z-10 max-w-5xl mx-auto mt-16 px-4" style={{ perspective: '1500px' }}>
          <div className="bg-[#faf8f5] rounded-2xl p-8 md:p-10 shadow-lg" style={{ transform: 'rotateY(-16deg)' }}>
            {/* Title */}
            <div className="text-center mb-3">
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
                <span className="text-black font-weight-700 font-normal">Ready To</span>{' '}
                <span className="text-orange-500 font-bold">Chat</span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-center text-gray-600 text-sm mb-6">
              Drop your details and let's make things happen.
            </p>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full px-4 py-2 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-500 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-500 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-2 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-500 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="numberOfLocations"
                      value={formData.numberOfLocations}
                      onChange={handleInputChange}
                      placeholder="Number of Locations"
                      className="w-full px-4 py-2 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-500 text-sm"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-2 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-500 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-2 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-lg font-semibold transition-colors text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[45px] font-semibold mb-3" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
              <span className="text-black">Frequently</span>{' '}
              <span className="text-orange-500">Asked Questions</span>
            </h2>
            <p className="text-gray-600 text-base">
              Everything you need to know about our platform
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="relative bg-[#faf8f5] rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-5 flex items-center justify-between">
                <p className="text-[#282828] text-[20px] font-normal font-weight-400 pr-4 flex-1" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  How does Eatro help me maximize the value of my customer data?
                </p>
                <button 
                  onClick={() => toggleFAQ(0)}
                  className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl hover:bg-orange-600 transition-colors" 
                  style={{ lineHeight: '16' }}
                >
                  <span className="block" style={{ marginTop: '-2px' }}>{openFAQs[0] ? '−' : '+'}</span>
                </button>
              </div>
              {openFAQs[0] && (
                <div className="px-5 pb-5">
                  <p className="text-[#282828] font-weight-400 text-[20px] font-normal leading-relaxed" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Eatro provides comprehensive customer insights by tracking all orders across your direct channels and aggregators. You can see customer names, order history, preferences, and lifetime value. Our analytics help you identify your best customers, understand which campaigns drive specific orders, and measure the real cost of customer acquisition and retention.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-[#faf8f5] rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-5 flex items-center justify-between">
                <p className="text-[#282828] font-weight-400 text-[20px] font-normal pr-4 flex-1" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  How does Eatro integrate with my existing restaurant technology?
                </p>
                <button 
                  onClick={() => toggleFAQ(1)}
                  className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl hover:bg-orange-600 transition-colors" 
                  style={{ lineHeight: '16' }}
                >
                  <span className="block" style={{ marginTop: '-2px' }}>{openFAQs[1] ? '−' : '+'}</span>
                </button>
              </div>
              {openFAQs[1] && (
                <div className="px-5 pb-5">
                  <p className="text-[#282828] font-weight-400 text-[20px] font-normal leading-relaxed" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Eatro offers seamless integration with popular POS systems and can also deploy the Eatro Tablet for real-time synchronization. Our platform automatically syncs menus, prices, inventory, and orders, ensuring your operations run smoothly without manual data entry. We support integrations with major POS providers and can work with custom systems.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-[#faf8f5] rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-5 flex items-center justify-between">
                <p className="text-[#282828] font-weight-400 text-[20px] font-normal pr-4 flex-1" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  What payment methods are supported, and how does Eatro manage the transactions?
                </p>
                <button 
                  onClick={() => toggleFAQ(2)}
                  className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl hover:bg-orange-600 transition-colors" 
                  style={{ lineHeight: '16' }}
                >
                  <span className="block" style={{ marginTop: '-2px' }}>{openFAQs[2] ? '−' : '+'}</span>
                </button>
              </div>
              {openFAQs[2] && (
                <div className="px-5 pb-5">
                  <p className="text-[#282828] font-weight-400 text-[20px] font-normal leading-relaxed" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Eatro supports multiple payment methods including credit cards, debit cards, Apple Pay, Google Pay, and other digital wallets. All transactions are processed securely through our integrated payment gateway. You receive payouts according to your configured schedule, and all transaction data is tracked in your dashboard for easy reconciliation and reporting.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-[#faf8f5] rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-5 flex items-center justify-between">
                <p className="text-[#282828] font-weight-400 text-[20px] font-normal pr-4 flex-1" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  What is the onboarding process and how quickly can I launch my branded ordering channels?
                </p>
                <button 
                  onClick={() => toggleFAQ(3)}
                  className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl hover:bg-orange-600 transition-colors" 
                  style={{ lineHeight: '16' }}
                >
                  <span className="block" style={{ marginTop: '-2px' }}>{openFAQs[3] ? '−' : '+'}</span>
                </button>
              </div>
              {openFAQs[3] && (
                <div className="px-5 pb-5">
                  <p className="text-[#282828] font-weight-400 text-[20px] font-normal leading-relaxed" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Our onboarding process is streamlined and typically takes 1-2 weeks. We'll help you set up your branded online store and mobile app, integrate with your POS system, configure your menu and pricing, and set up payment processing. Our team provides dedicated support throughout the process to ensure a smooth launch. Most restaurants are live and accepting orders within 10-14 days.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-[#faf8f5] rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-5 flex items-center justify-between">
                <p className="text-[#282828] font-weight-400 text-[20px] font-normal pr-4 flex-1" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  How are deliveries fulfilled for orders placed on my Eatro channels?
                </p>
                <button 
                  onClick={() => toggleFAQ(4)}
                  className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl hover:bg-orange-600 transition-colors" 
                  style={{ lineHeight: '16' }}
                >
                  <span className="block" style={{ marginTop: '-2px' }}>{openFAQs[4] ? '−' : '+'}</span>
                </button>
              </div>
              {openFAQs[4] && (
                <div className="px-5 pb-5">
                  <p className="text-[#282828] font-weight-400 text-[20px] font-normal leading-relaxed" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Eatro integrates with delivery partners like Careem and other courier services to handle deliveries. You can also use your own delivery fleet if preferred. The platform provides real-time tracking for all deliveries, so both you and your customers can monitor order status. All delivery options and fees are configurable in your dashboard.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ready To Launch Section */}
      <section className="relative max-w-7xl mx-auto py-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/blackbg.png" 
            alt="Background" 
            className="w-full h-full object-fill"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="flex-1 ml-8">
              <h2 className="text-white text-[35px] font-semibold leading-tight mb-3 capitalize" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
                <span>Ready To Launch Your</span>
                <br />
                <span className="text-orange-500">Direct Ordering Sales </span>
                <br />
                <span className="text-orange-500">Channels?</span>
              </h2>
              <p className="text-white text-base">
                Let's Talk! Book a Demo with us!
              </p>
            </div>

            {/* Right Orange Section with Buttons */}
            <div className="relative mr-36">
              <div className=" rounded-3xl px-12 py-8 flex flex-col items-center justify-center space-y-4">
                {/* App Store Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  {/* App Store Button */}
                  <button className="bg-white rounded-full px-6 py-3 flex items-center gap-3 hover:bg-gray-100 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-gray-600">Download on the</p>
                      <p className="text-base font-semibold text-black">App Store</p>
                    </div>
                  </button>

                  {/* Google Play Button */}
                  <button className="bg-white rounded-full px-6 py-3 flex items-center gap-3 hover:bg-gray-100 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-gray-600">GET IT ON</p>
                      <p className="text-base font-semibold text-black">Google Play</p>
                    </div>
                  </button>
                </div>

                {/* One Platform Text */}
                <p className="text-white text-sm font-medium">
                  One Platform, Total Control
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white font-bold transition-colors z-10"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6 mt-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-orange-500 text-center mb-4 whitespace-nowrap">
              Form Submitted Successfully!
            </h2>

            {/* Body Text */}
            <p className="text-gray-600 text-center mb-8 text-sm leading-relaxed">
              Thank you! The form has been submitted successfully. We will reply to you soon!
            </p>

            {/* Go Back Button */}
            <div className="flex justify-center">
              <button
                onClick={closeModal}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

   </div>


   
  )
}

export default Home

