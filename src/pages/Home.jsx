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
      <section className="
  w-full 
  max-w-6xl              
  lg:max-w-7xl           
  min-[1800px]:max-w-[1600px] 
  min-[2100px]:max-w-[1800px]
  min-[2560px]:max-w-[2000px]
  mx-auto
">

        <div className="px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-16 lg:py-20 min-[1800px]:py-28 min-[2100px]:py-32 min-[2560px]:py-36 min-[2560px]:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 min-[1800px]:gap-24 min-[2100px]:gap-28 min-[2560px]:gap-32 items-center">
            {/* Left Content */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 min-[1800px]:space-y-12 min-[2100px]:space-y-14 min-[2560px]:space-y-16">
              <div className="relative flex flex-col items-center text-center md:text-left md:items-start">
              <img
  src="/images/own.png"
  alt="Own Your Growth"
  className="
    w-full
    max-w-[380px] sm:max-w-[420px]
    md:max-w-[320px]
    h-16 sm:h-20 md:h-20 lg:h-20
    min-[1800px]:h-28 min-[2100px]:h-32 min-[2560px]:h-36
    sm:-ml-1 md:-ml-6
    relative z-10 inline-block object-contain
  "
/>


<p
  className="text-[#000] text-[19px] sm:text-[21px] md:text-[28px] lg:text-[26px]
  min-[1800px]:text-[42px] min-[2100px]:text-[48px] min-[2560px]:text-[56px]
  font-medium leading-tight md:leading-snug
  mt-1 sm:-mt-1 md:mt-0
  relative z-0"
  style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}
>
  Manage Orders, Power Direct Sales,
</p>

<p
  className="text-[#000] text-[19px] sm:text-[21px] md:text-[28px] lg:text-[26px]
  min-[1800px]:text-[42px] min-[2100px]:text-[48px] min-[2560px]:text-[56px]
  font-medium leading-tight md:leading-snug
  mt-0 sm:-mt-1 md:mt-1
  relative z-0"
  style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}
>
  Ensure Seamless Delivery, Build Loyalty.
</p>
    </div>

              {/* Feature List */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-7 min-[1800px]:space-y-8 min-[2100px]:space-y-9 min-[2560px]:space-y-10">
                <div className="flex items-start gap-2 md:gap-3 lg:gap-4 min-[1800px]:gap-5 min-[2100px]:gap-6 min-[2560px]:gap-7">
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 min-[1800px]:w-3 min-[1800px]:h-3 min-[2100px]:w-3.5 min-[2100px]:h-3.5 min-[2560px]:w-4 min-[2560px]:h-4 bg-orange-500 rounded-full mt-[6px] sm:mt-[8px] md:mt-[10px] lg:mt-[11px] min-[1800px]:mt-[13px] min-[2100px]:mt-[15px] min-[2560px]:mt-[17px] flex-shrink-0"></div>
                  <p className="text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed">
                    <span className="font-bold text-orange-500 text-[13px] sm:text-sm min-[1800px]:text-xl min-[2100px]:text-2xl min-[2560px]:text-3xl">Reduced Delivery Fees:</span> <span className="text-black text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] min-[1800px]:text-[18px] min-[2100px]:text-[20px] min-[2560px]:text-[24px]" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 500 }}>Own your Sales Channel with your branded online store and application to accept direct orders</span>
                  </p>
                </div>

                <div className="flex items-start gap-2 md:gap-3 lg:gap-4 min-[1800px]:gap-5 min-[2100px]:gap-6 min-[2560px]:gap-7">
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 min-[1800px]:w-3 min-[1800px]:h-3 min-[2100px]:w-3.5 min-[2100px]:h-3.5 min-[2560px]:w-4 min-[2560px]:h-4 bg-orange-500 rounded-full mt-[6px] sm:mt-[8px] md:mt-[10px] lg:mt-[11px] min-[1800px]:mt-[13px] min-[2100px]:mt-[15px] min-[2560px]:mt-[17px] flex-shrink-0"></div>
                  <p className="text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed">
                    <span className="font-bold text-orange-500 text-[13px] sm:text-sm min-[1800px]:text-xl min-[2100px]:text-2xl min-[2560px]:text-3xl">Operational Peace of Mind:</span> <span className="text-black text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] min-[1800px]:text-[18px] min-[2100px]:text-[20px] min-[2560px]:text-[24px]" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 500 }}>Stop juggling screens. Consolidate every order channel from direct site, app, and all aggregators for a single, seamless flow, optimizing your kitchen and courier efficiency.</span>
                  </p>
                </div>

                <div className="flex items-start gap-2 md:gap-3 lg:gap-4 min-[1800px]:gap-5 min-[2100px]:gap-6 min-[2560px]:gap-7">
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 min-[1800px]:w-3 min-[1800px]:h-3 min-[2100px]:w-3.5 min-[2100px]:h-3.5 min-[2560px]:w-4 min-[2560px]:h-4 bg-orange-500 rounded-full mt-[6px] sm:mt-[8px] md:mt-[10px] lg:mt-[11px] min-[1800px]:mt-[13px] min-[2100px]:mt-[15px] min-[2560px]:mt-[17px] flex-shrink-0"></div>
                  <p className="text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed">
                    <span className="font-bold text-orange-500 text-[13px] sm:text-sm min-[1800px]:text-xl min-[2100px]:text-2xl min-[2560px]:text-3xl">The Blind Spot is Gone. Welcome to Full Customer Insights:</span> <span className="text-black text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] min-[1800px]:text-[18px] min-[2100px]:text-[20px] min-[2560px]:text-[24px]" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 500 }}>For the first time, know the names and order history of your best customers. Track which campaigns drive specific orders and measure the real cost of acquiring and retaining a customer, moving beyond guesswork.</span>
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center md:justify-start">
                <button onClick={scrollToContactForm} className="bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-7 md:px-8 lg:px-8 min-[1800px]:px-14 min-[2100px]:px-16 min-[2560px]:px-20 py-3 sm:py-3 md:py-4 lg:py-5 min-[1800px]:py-6 min-[2100px]:py-7 min-[2560px]:py-8 rounded-lg font-semibold text-[15px] sm:text-base md:text-lg lg:text-xl min-[1800px]:text-2xl min-[2100px]:text-3xl min-[2560px]:text-4xl transition-colors w-auto">
                  Book A Demo
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-0">
              <img 
                src="/images/Header.png" 
                alt="Eatro Dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section> 

      {/* Benefits Cards Section */}
      <section className="w-full max-w-7xl min-[1800px]:max-w-[1600px] min-[2100px]:max-w-[1800px] min-[2560px]:max-w-[2000px] mx-auto">
        <div className="px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:pt-16 lg:pb-0 min-[1800px]:py-20 min-[2100px]:py-24 min-[2560px]:py-28 min-[2560px]:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 min-[1800px]:gap-5 min-[2100px]:gap-6 min-[2560px]:gap-8">
            {/* Card 1 - Save Delivery Fees */}
            <div className="relative">
              {/* Mobile Image */}
              <img 
                src="/images/save4.png" 
                alt="Save Delivery Fees" 
                className="sm:hidden w-full h-auto rounded-lg"
              />
              {/* Desktop Image */}
              <img 
                src="/images/box1.png" 
                alt="Save Delivery Fees" 
                className="hidden sm:block w-full h-auto rounded-lg"
              />
            </div>

            {/* Card 2 - Increase Order Frequency */}
            <div className="relative">
              {/* Mobile Image */}
              <img 
                src="/images/save5.png" 
                alt="Increase Order Frequency" 
                className="sm:hidden w-full h-auto rounded-lg"
              />
              {/* Desktop Image */}
              <img 
                src="/images/box2.png" 
                alt="Increase Order Frequency" 
                className="hidden sm:block w-full h-auto rounded-lg"
              />
            </div>

            {/* Card 3 - Increase Staff Productivity */}
            <div className="relative sm:col-span-2 md:col-span-1">
              {/* Mobile Image */}
              <img 
                src="/images/save6.png" 
                alt="Increase Staff Productivity" 
                className="sm:hidden w-full h-auto rounded-lg"
              />
              {/* Desktop Image */}
              <img 
                src="/images/box3.png" 
                alt="Increase Staff Productivity" 
                className="hidden sm:block w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

    {/* One Platform Five Seamless Experiences Section */}
{/* One Platform Five Seamless Experiences Section */}
<section className="relative w-full max-w-[1600px] md:max-w-[1300px] min-[1800px]:max-w-[1600px] min-[2100px]:max-w-[1800px] sm:w-full sm:mx-auto px-4 md:px-6 lg:px-8 overflow-hidden bg-[#fff8f2]">

  {/* Background Image Wrapper */}
  <div className="relative w-full h-auto min-h-[420px] sm:h-[500px] md:h-[520px] lg:h-[700px] min-[1800px]:h-[850px] min-[2100px]:h-[1000px] pt-6 md:pt-0 pb-10 sm:pb-0 flex flex-col gap-4 md:block">
    {/* Mobile overlay for readability */}
    <div className="absolute inset-0 md:hidden z-10"></div>

    {/* Mobile Image */}
    <img 
      src="/images/book.png" 
      alt="Background"
      className="
        md:hidden relative w-full h-full 
        object-contain
        p-4
        order-2 md:order-none
      "
    />

    {/* Desktop Image */}
    <img 
      src="/images/qq.png" 
      alt="Background"
      className="
        hidden md:block md:absolute md:inset-0 w-full h-full 
        object-contain
        md:p-0
        order-2 md:order-none
      "
    />

     {/* TEXT + BUTTON */}
     <div className="absolute top-8 left-0 right-0 md:top-[20%] md:left-[8%] md:right-auto lg:left-[10%] min-[1800px]:left-[12%] z-20 w-full md:w-auto px-4 pt-8 md:px-0 md:pt-0 order-1 md:order-none flex flex-col items-center md:items-start">
 
       {/* Title */}
       <h2 
         className="
           text-white
           text-[18px] sm:text-[22px] md:text-[24px] lg:text-[32px] min-[1800px]:text-[45px] min-[2100px]:text-[40px]
           leading-[1.2] sm:leading-tight font-semibold text-center md:text-left
           bg-transparent rounded-xl md:rounded-none px-4 py-3 md:px-0 md:py-0 max-w-full md:max-w-none
         "
         style={{ fontFamily: 'Chillax' }}
       >
         <span className="block md:hidden">One Platform, Five Seamless</span>
         <span className="block md:hidden">Experiences</span>
         <span className="hidden md:block">One Platform,<br />Five Seamless<br />Experiences</span>
       </h2>
 
       {/* Button */}
       <div className="mt-3 sm:mt-4 min-[1800px]:mt-6 min-[2100px]:mt-8">
         <button 
           onClick={scrollToContactForm}
           className="
             bg-white text-black
             px-6 py-3 md:px-8 min-[1800px]:px-10 min-[2100px]:px-12
             md:py-4 min-[1800px]:py-5 min-[2100px]:py-6
             rounded-lg font-semibold 
             text-[14px] md:text-base min-[1800px]:text-lg min-[2100px]:text-xl
             shadow-lg hover:bg-gray-100
             w-auto
           "
         >
           Book A Demo
         </button>
       </div>
 
     </div>
  </div>

</section>



        {/* Integrated Partners Section */}
        <section className="max-w-7xl min-[2560px]:max-w-[2000px] mx-auto">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-16 min-[2560px]:mb-20 min-[2560px]:px-8">
          <div className="flex flex-col items-center space-y-8 min-[2560px]:space-y-10">
            {/* Heading */}
            <h2 className="text-[26px] md:text-[40px] min-[2560px]:text-[56px] font-bold leading-[105%] text-center" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
              <span className="text-black" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 500 }}>Our</span>{' '}
              <span className="text-orange-500">Integrated Partners</span>
            </h2>

            {/* Careem Logo Box */}
            <div className="rounded-lg ">
              <img 
                src="/images/careem.png" 
                alt="Careem" 
                className="h-12 md:h-16 min-[2560px]:h-20 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

     {/* Seamless Integrations Section */}
<section 
  className="
    relative 
    pt-4 pb-8 md:pt-6 md:pb-12 lg:pt-8 lg:pb-16 min-[1700px]:pt-4 min-[1700px]:pb-16 min-[2100px]:pt-6 min-[2100px]:pb-20 min-[2560px]:pt-8 min-[2560px]:pb-24
    overflow-hidden 
    min-h-[700px] sm:min-h-[850px] md:min-h-[700px] lg:min-h-[750px] xl:min-h-[800px] min-[2560px]:min-h-[900px]
  " 
  style={{ backgroundColor: '#fff8f2' }}
>

  {/* Background Image */}
  <div className="absolute inset-0 z-0 flex items-center justify-center">
    {/* Mobile Background Image - deck11.png */}
    <img 
      src="/images/deck11.png" 
      alt="Background" 
      className="
        md:hidden
        w-full h-full 
        object-cover
      "
    />
    {/* Desktop Background Image - ddesk.png */}
    <img 
      src="/images/ddesk.png" 
      alt="Background" 
      className="
        hidden md:block
        w-full h-full 
        object-cover 
        md:object-cover 
        lg:object-cover 
        xl:object-cover
      "
    />
  </div>

  {/* Content Wrapper (bigger max width for big screens) */}
  <div className="relative z-10 w-full max-w-[1500px] min-[1700px]:max-w-[1600px] min-[2100px]:max-w-[1800px] min-[2560px]:max-w-[2100px] mx-auto min-[1700px]:ml-24 min-[1700px]:mr-auto min-[2100px]:ml-32 min-[2100px]:mr-auto min-[2560px]:mx-auto px-4 md:px-8 lg:px-12 xl:px-16 min-[1700px]:pl-20 min-[1700px]:pr-24 min-[2100px]:pl-24 min-[2100px]:pr-32 min-[2560px]:px-32">

    {/* Title + Subtitle */}
    <div className="text-center mb-6 md:mb-10 lg:mb-12 xl:mb-14 min-[1700px]:mb-10 min-[2100px]:mb-12 min-[2560px]:mb-16">
      <h2 
        className="
          text-[20px] sm:text-[24px] md:text-[28px] 
          lg:text-[28px] xl:text-[42px] min-[1700px]:text-[44px] min-[2100px]:text-[48px] min-[2560px]:text-[56px]
          font-bold leading-[105%] mb-2 md:mb-3 min-[2560px]:mb-4 px-2
        " 
        style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}
      >
        <span className="text-[#000] font-normal font-weight-800">Seamless</span>{' '}
        <span className="text-orange-500">Integrations for Restaurants</span>
      </h2>

      <p 
        className="
          text-[#282828] 
          text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] min-[1700px]:text-[17px] min-[2100px]:text-[18px] min-[2560px]:text-[22px]
          max-w-4xl min-[1700px]:max-w-4xl min-[2100px]:max-w-5xl min-[2560px]:max-w-6xl mx-auto px-2
        " 
        style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}
      >
        Achieve instant operational efficiency. Choose a top-tier POS integration or deploy the Eatro Tablet to ensure your menus, orders, and inventory are automatically synchronized in real-time.
      </p>
    </div>

    {/* Two Column Layout with Larger Spacing on Big Screens */}
    <div className="
      grid grid-cols-1 md:grid-cols-2 
      mb-0 md:mb-12 lg:mb-16 xl:mb-20 min-[2560px]:mb-24
      gap-8 md:gap-10 lg:gap-14 xl:gap-20 min-[1700px]:gap-24 min-[2100px]:gap-32 min-[2560px]:gap-40
      items-center
      min-[1700px]:justify-items-start
    ">

      {/* Left Side Feature List */}
      <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 min-[1700px]:space-y-7 min-[2100px]:space-y-8 min-[2560px]:space-y-10 ml-4 md:ml-0 min-[1700px]:ml-0 min-[1700px]:pl-0 min-[2100px]:ml-0 min-[2100px]:pl-0">

        {[
          "Connect easily with POS providers",
          "Keep menus & prices synced automatically",
          "Track inventory and update in real time",
          "Post orders and print receipts ensuring a unified and efficient workflow",
          "Single Source of Truth For all Aggregator orders",
          "Live Tracking for Deliveries",
        ].map((text, i) => (
          <div className="flex items-start gap-2 sm:gap-3 md:gap-4 min-[1700px]:gap-5 min-[2100px]:gap-6 min-[2560px]:gap-7" key={i}>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 min-[1700px]:w-2.5 min-[1700px]:h-2.5 min-[2100px]:w-3 min-[2100px]:h-3 min-[2560px]:w-4 min-[2560px]:h-4 bg-orange-500 mt-1.5 sm:mt-2 min-[1700px]:mt-2.5 min-[2100px]:mt-3 min-[2560px]:mt-3.5 flex-shrink-0"></div>
            <p 
              className="
                text-[#282828] 
                text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] min-[1700px]:text-[18px] min-[2100px]:text-[20px] min-[2560px]:text-[24px]
                leading-tight sm:leading-normal
              " 
              style={{ fontFamily: 'Poppins' }}
            >
              {text}
            </p>
          </div>
        ))}

      </div>

      {/* RIGHT COLUMN - Empty on desktop, hidden on mobile since content is over background */}
      <div className="hidden md:block"></div>

    </div>
  </div>
</section>


      {/* Row Images Section */}
      <section id="how-it-works" className="w-full max-w-7xl min-[1800px]:max-w-[1600px] min-[2100px]:max-w-[1800px] min-[2560px]:max-w-[2000px] mx-auto py-20 min-[1800px]:py-28 min-[2100px]:py-32 min-[2560px]:py-36">
        {/* Title and Subtitle - Centered at Top */}
        <div className="text-center mb-12 min-[1800px]:mb-16 min-[2100px]:mb-20 min-[2560px]:mb-24 px-4 md:px-6 lg:px-8 min-[2560px]:px-8">
          <h2 className="text-[28px] md:text-[40px] min-[1800px]:text-[50px] min-[2100px]:text-[60px] min-[2560px]:text-[70px] font-bold leading-[105%] mb-4 min-[2560px]:mb-6" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
            <span className="text-black">How</span>{' '}
            <span className="text-orange-500">It Works</span>
          </h2>
          
          <p className="text-[#282828] text-center font-weight-400 text-[13px] md:text-[16px] min-[1800px]:text-[18px] min-[2100px]:text-[20px] min-[2560px]:text-[24px] font-normal max-w-4xl min-[2560px]:max-w-5xl mx-auto" style={{ fontFamily: 'Poppins', fontStyle: 'normal', leadingTrim: 'both', textEdge: 'cap' }}>
            Seamless order flow from start to finish
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 min-[1800px]:gap-10 min-[2100px]:gap-12 min-[2560px]:gap-16 px-4 md:px-6 lg:px-8 min-[2560px]:px-8">
          {/* Left Image */}
          <div className="hidden md:flex items-center justify-center">
            <img 
              src="/images/row1.png" 
              alt="Girl scanning QR code" 
              className="w-full max-w-[600px] min-[1800px]:max-w-[750px] min-[2100px]:max-w-[900px] h-auto object-contain"
            />
          </div>
          
          {/* Right Side - Timeline with Cards */}
          <div className="relative">
            {/* Timeline Cards Container */}
            <div className="relative">
              {/* Timeline Line - slide.png positioned on the left */}
              <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center min-[1800px]:w-[75px] min-[2100px]:w-[90px]" style={{ width: '50px' }}>
                <img 
                  src="/images/slide.png" 
                  alt="Timeline" 
                  className="h-full w-auto object-contain"
                />
              </div>
              
              {/* Cards positioned to the right of timeline */}
              <div className="ml-12 md:ml-16 min-[1800px]:ml-20 min-[2100px]:ml-24 space-y-3 md:space-y-4 min-[1800px]:space-y-6 min-[2100px]:space-y-8">
                {/* Card 1: User places order */}
                <div className="relative p-3 md:p-5 min-[1800px]:p-6 min-[2100px]:p-8 min-h-[90px] md:min-h-[110px]" style={{ borderRadius: '20px',opacity:1 ,background: '#EBE4DC' }}>
                  <div className="flex items-start gap-2 md:gap-4 lg:gap-5">
                    <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 min-[2100px]:w-16 min-[2100px]:h-16 flex items-center justify-center flex-shrink-0">
                      <img src="/images/l1.png" alt="Shopping basket icon" className="w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-[14px] md:text-[20px] min-[1800px]:text-[24px] min-[2100px]:text-[28px]" style={{ color: '#282828', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 700, margin: 0 }}>User places order</h3>
                      <p className="text-[11px] md:text-[15px] min-[1800px]:text-[17px] min-[2100px]:text-[19px] w-full" style={{ color: '#282828', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 400, margin: 0 }}>Though branded restaurant website/application</p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Restaurant confirms */}
                <div className="relative p-3 md:p-5 min-[1800px]:p-6 min-[2100px]:p-8 min-h-[90px] md:min-h-[110px]" style={{ borderRadius: '20px', opacity:1,background: '#EBE4DC' }}>
                  <div className="flex items-start gap-2 md:gap-4 lg:gap-5">
                    <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 min-[2100px]:w-16 min-[2100px]:h-16 flex items-center justify-center flex-shrink-0">
                      <img src="/images/l2.png" alt="Restaurant confirmation icon" className="w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-[14px] md:text-[20px] min-[1800px]:text-[24px] min-[2100px]:text-[28px]" style={{ color: '#282828', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 700, margin: 0 }}>Restaurant confirms</h3>
                      <p className="text-[11px] md:text-[15px] min-[1800px]:text-[17px] min-[2100px]:text-[19px] w-full" style={{ color: '#282828', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 400, margin: 0 }}>Accepts orders and starts to prepare users meal for estimated pickup time</p>
                    </div>
                  </div>
                </div>

                {/* Card 3: In Transit */}
                <div className="relative p-3 md:p-5 min-[1800px]:p-6 min-[2100px]:p-8 min-h-[90px] md:min-h-[110px]" style={{ borderRadius: '20px', opacity:1,background: '#EBE4DC' }}>
                  <div className="flex items-start gap-2 md:gap-4 lg:gap-5">
                    <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 min-[2100px]:w-16 min-[2100px]:h-16 flex items-center justify-center flex-shrink-0">
                      <img src="/images/group13.png" alt="In transit icon" className="w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-[14px] md:text-[20px] min-[1800px]:text-[24px] min-[2100px]:text-[28px]" style={{ color: '#282828', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 700, margin: 0 }}>In Transit</h3>
                      <p className="text-[11px] md:text-[15px] min-[1800px]:text-[17px] min-[2100px]:text-[19px] w-full" style={{ color: '#282828', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 400, margin: 0 }}>An Eatro network rider receives the order, begins the journey to your location, and then heads out for delivery</p>
                    </div>
                  </div>
                </div>

                {/* Card 4: Delivery Complete */}
                <div className="relative p-3 md:p-5 min-[1800px]:p-6 min-[2100px]:p-8 min-h-[90px] md:min-h-[110px]" style={{ borderRadius: '20px', opacity:1,background: '#EBE4DC' }}>
                  <div className="flex items-start gap-2 md:gap-4 lg:gap-5">
                    <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 min-[2100px]:w-16 min-[2100px]:h-16 flex items-center justify-center flex-shrink-0">
                      <img src="/images/l4.png" alt="Delivery complete icon" className="w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-[14px] md:text-[20px] min-[1800px]:text-[24px] min-[2100px]:text-[28px]" style={{ color: '#282828', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 700, margin: 0 }}>Delivery Complete</h3>
                      <p className="text-[11px] md:text-[15px] min-[1800px]:text-[17px] min-[2100px]:text-[19px] w-full" style={{ color: '#282828', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 400, margin: 0 }}>Delivery is completed!</p>
                    </div>
                  </div>
                </div>

                {/* Card 5: Loyalty */}
                <div className="relative p-3 md:p-5 min-[1800px]:p-6 min-[2100px]:p-8 min-h-[90px] md:min-h-[110px]" style={{ borderRadius: '20px',opacity:1, background: '#EBE4DC' }}>
                  <div className="flex items-start gap-2 md:gap-4 lg:gap-5">
                    <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 min-[2100px]:w-16 min-[2100px]:h-16 flex items-center justify-center flex-shrink-0">
                      <img src="/images/l5.png" alt="Loyalty icon" className="w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-[14px] md:text-[20px] min-[1800px]:text-[24px] min-[2100px]:text-[28px]" style={{ color: '#282828', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 700, margin: 0 }}>Loyalty</h3>
                      <p className="text-[11px] md:text-[15px] min-[1800px]:text-[17px] min-[2100px]:text-[19px] w-full" style={{ color: '#282828', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 400, margin: 0 }}>Customer Receives Loyalty points via the restaurant program, which boosts reorders</p>
                    </div>
                  </div>
                </div>
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
      {/* <section className="max-w-7xl mx-auto">
        <div className="py-16">
          <div>
            <img 
              src="/images/works.png" 
              alt="Restro" 
              className="w-full h-[600px]"
            />
          </div>
        </div>
      </section> */}

    {/* One Platform Total Control Section */}
<section id="features" className="relative w-full pt-6 pb-16 md:py-20 min-[1700px]:py-24 min-[2100px]:py-28 min-[2560px]:py-32 overflow-hidden min-h-[700px] sm:min-h-[750px] md:min-h-0">
  
  {/* Background Image */}
  <div className="absolute inset-0 z-0 w-full">
    {/* Mobile Background - deck12.png */}
    <img 
      src="/images/ss11.png" 
      alt="Background" 
      className="md:hidden w-full h-full object-fill"
    />
    {/* Desktop Background - frame.png */}
    <img 
      src="/images/frame.png" 
      alt="Background" 
      className="hidden md:block w-full h-full object-cover md:object-center lg:object-fill"
    />
  </div>

  {/* Content Container */}
  <div className="relative z-10 w-full max-w-[1500px] min-[1700px]:max-w-[1600px] min-[2100px]:max-w-[1800px] min-[2560px]:max-w-[2100px] mx-auto min-[1700px]:ml-24 min-[1700px]:mr-0 min-[2100px]:ml-32 min-[2100px]:mr-0 min-[2560px]:ml-32 min-[2560px]:mr-0 px-4 md:px-8 lg:px-12 min-[1700px]:pl-20 min-[1700px]:pr-0 min-[2100px]:pl-24 min-[2100px]:pr-0 min-[2560px]:pl-24 min-[2560px]:pr-0">

    <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 min-[1700px]:gap-24 min-[2100px]:gap-32 min-[2560px]:gap-40 items-center">

      {/* Left Content */}
      <div className="space-y-4 md:space-y-8 min-[1700px]:space-y-10 min-[2100px]:space-y-12 min-[2560px]:space-y-14 text-center md:text-left w-full">
        <h2 
          className="text-[20px] sm:text-[28px] md:text-[50px] lg:text-[56px] min-[1700px]:text-[60px] min-[2100px]:text-[64px] min-[2560px]:text-[72px] leading-tight" 
          style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}
        >
          <span className="text-white font-weight-500 font-normal">One Platform, </span>
          <span className="text-orange-500 font-bold md:block">Total Control</span>
        </h2>
        
        <p 
          className="text-[#ffffff] font-weight-400 text-[12px] sm:text-[13px] md:text-[16px] min-[1700px]:text-[17px] min-[2100px]:text-[18px] min-[2560px]:text-[22px] font-normal leading-relaxed" 
          style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}
        >
          Reclaim control by running all operations from one place. Our platform delivers the centralized visibility you need to manage your business effectively.
        </p>

        {/* Feature Icons Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-6 min-[1700px]:gap-7 min-[2100px]:gap-8 min-[2560px]:gap-10">

          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 md:space-y-3 min-[1700px]:space-y-4 min-[2100px]:space-y-5 min-[2560px]:space-y-6">
            <div className="bg-black/50 border border-gray-700 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 min-[1700px]:p-7 min-[2100px]:p-8 min-[2560px]:p-10 flex items-center justify-center hover:border-orange-500 transition-all w-full aspect-square">
              <img 
                src="/images/gr1.png" 
                alt="Manage menus" 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 min-[1700px]:w-[72px] min-[1700px]:h-[72px] min-[2100px]:w-20 min-[2100px]:h-20 min-[2560px]:w-24 min-[2560px]:h-24 object-contain"
              />
            </div>
            <p 
              className="text-white text-[8px] sm:text-[10px] md:text-[14px] min-[1700px]:text-[15px] min-[2100px]:text-[16px] min-[2560px]:text-[18px] font-normal font-weight-400 leading-tight" 
              style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}
            >
              Manage menus & inventory
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 md:space-y-3 min-[1700px]:space-y-4 min-[2100px]:space-y-5 min-[2560px]:space-y-6">
            <div className="bg-black/50 border border-gray-700 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 min-[1700px]:p-7 min-[2100px]:p-8 min-[2560px]:p-10 flex items-center justify-center hover:border-orange-500 transition-all w-full aspect-square">
              <img 
                src="/images/gr2.png" 
                alt="Track incoming orders" 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 min-[1700px]:w-[72px] min-[1700px]:h-[72px] min-[2100px]:w-20 min-[2100px]:h-20 min-[2560px]:w-24 min-[2560px]:h-24 object-contain"
              />
            </div>
            <p 
              className="text-white text-[8px] sm:text-[10px] md:text-[14px] min-[1700px]:text-[15px] min-[2100px]:text-[16px] min-[2560px]:text-[18px] font-normal font-weight-400 leading-tight" 
              style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}
            >
              Track incoming orders in real-time
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 md:space-y-3 min-[1700px]:space-y-4 min-[2100px]:space-y-5 min-[2560px]:space-y-6">
            <div className="bg-black/50 border border-gray-700 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 min-[1700px]:p-7 min-[2100px]:p-8 min-[2560px]:p-10 flex items-center justify-center hover:border-orange-500 transition-all w-full aspect-square">
              <img 
                src="/images/gr3.png" 
                alt="Analyze revenue" 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 min-[1700px]:w-[72px] min-[1700px]:h-[72px] min-[2100px]:w-20 min-[2100px]:h-20 min-[2560px]:w-24 min-[2560px]:h-24 object-contain"
              />
            </div>
            <p 
              className="text-white text-[8px] sm:text-[10px] md:text-[14px] min-[1700px]:text-[15px] min-[2100px]:text-[16px] min-[2560px]:text-[18px] font-normal font-weight-400 leading-tight" 
              style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}
            >
              Analyze revenue & payouts
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 md:space-y-3 min-[1700px]:space-y-4 min-[2100px]:space-y-5 min-[2560px]:space-y-6">
            <div className="bg-black/50 border border-gray-700 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 min-[1700px]:p-7 min-[2100px]:p-8 min-[2560px]:p-10 flex items-center justify-center hover:border-orange-500 transition-all w-full aspect-square">
              <img 
                src="/images/gr4.png" 
                alt="Offer discounts" 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 min-[1700px]:w-[72px] min-[1700px]:h-[72px] min-[2100px]:w-20 min-[2100px]:h-20 min-[2560px]:w-24 min-[2560px]:h-24 object-contain"
              />
            </div>
            <p 
              className="text-white text-[8px] sm:text-[10px] md:text-[14px] min-[1700px]:text-[15px] min-[2100px]:text-[16px] min-[2560px]:text-[18px] font-normal font-weight-400 leading-tight" 
              style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}
            >
              Offer discounts & promotions
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center md:justify-start mb-12 md:mb-0">
          <button 
            onClick={scrollToContactForm} 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 min-[1700px]:px-10 min-[1700px]:py-5 min-[2100px]:px-12 min-[2100px]:py-6 min-[2560px]:px-16 min-[2560px]:py-8 rounded-lg font-semibold text-sm md:text-base min-[1700px]:text-[17px] min-[2100px]:text-lg min-[2560px]:text-2xl transition-colors"
          >
            Book A Demo
          </button>
        </div>
      </div>

    </div>
  </div>

</section>


      {/* Loyalty Tastes Better Direct Section */}
      <section className="w-full max-w-7xl min-[1800px]:max-w-[1400px] min-[2100px]:max-w-[1600px] min-[2560px]:max-w-[1900px] mx-auto">
        <div className="px-4 md:px-8 lg:px-12 min-[1800px]:px-16 min-[2100px]:px-20 min-[2560px]:px-24 py-8 md:py-12 lg:py-16 min-[1800px]:py-20 min-[2100px]:py-24 min-[2560px]:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 min-[1800px]:gap-20 min-[2100px]:gap-24 min-[2560px]:gap-28 items-center justify-items-center">
            {/* Left Image */}
            <div className="flex justify-center mt-0 md:mt-8 lg:mt-12 min-[1800px]:mt-16 min-[2100px]:mt-20 min-[2560px]:mt-24 items-center order-2 md:order-1">
              <img 
                src="/images/scooty.png" 
                alt="Loyalty Tastes Better Direct" 
                className="w-full h-auto md:h-[450px] lg:h-[500px] min-[1800px]:h-[550px] min-[2100px]:h-[650px] min-[2560px]:h-[750px] rounded-lg object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-6 min-[1800px]:space-y-7 min-[2100px]:space-y-8 min-[2560px]:space-y-10 order-1 md:order-2">
              <h2 className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl min-[1800px]:text-5xl min-[2100px]:text-6xl min-[2560px]:text-7xl font-normal font-weight-500 leading-tight" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
                <span className="text-black font-weight-500 font-normal">Loyalty Tastes </span>
                <span className="text-orange-500 font-bold md:block">Better Direct</span>
              </h2>
              
              <p className="text-[#282828] max-w-lg min-[1800px]:max-w-xl min-[2100px]:max-w-2xl min-[2560px]:max-w-3xl font-weight-400 text-[11px] sm:text-[13px] md:text-[16px] min-[1800px]:text-[17px] min-[2100px]:text-[18px] min-[2560px]:text-[20px] font-normal leading-tight sm:leading-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                A seamless experience that makes food ordering effortless
              </p>

              {/* Feature List */}
              <div className="space-y-3 md:space-y-4 min-[1800px]:space-y-4 min-[2100px]:space-y-5 min-[2560px]:space-y-6">
                <div className="flex items-start gap-2 md:gap-3 min-[1800px]:gap-3 min-[2100px]:gap-4 min-[2560px]:gap-5">
                  <div className="w-2 h-2 min-[1800px]:w-2.5 min-[1800px]:h-2.5 min-[2100px]:w-2.5 min-[2100px]:h-2.5 min-[2560px]:w-3 min-[2560px]:h-3 bg-orange-500 mt-2 min-[1800px]:mt-2 min-[2100px]:mt-2.5 min-[2560px]:mt-3 flex-shrink-0"></div>
                  <p className="text-[#282828] font-weight-400 text-[14px] sm:text-[15px] md:text-[16px] min-[1800px]:text-[17px] min-[2100px]:text-[18px] min-[2560px]:text-[20px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Order favourites directly with the restaurant
                  </p>
                </div>

                <div className="flex items-start gap-2 md:gap-3 min-[1800px]:gap-3 min-[2100px]:gap-4 min-[2560px]:gap-5">
                  <div className="w-2 h-2 min-[1800px]:w-2.5 min-[1800px]:h-2.5 min-[2100px]:w-2.5 min-[2100px]:h-2.5 min-[2560px]:w-3 min-[2560px]:h-3 bg-orange-500 mt-2 min-[1800px]:mt-2 min-[2100px]:mt-2.5 min-[2560px]:mt-3 flex-shrink-0"></div>
                  <p className="text-[#282828] font-weight-400 text-[14px] sm:text-[15px] md:text-[16px] min-[1800px]:text-[17px] min-[2100px]:text-[18px] min-[2560px]:text-[20px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Track orders live with real-time GPS tracking
                  </p>
                </div>

                <div className="flex items-start gap-2 md:gap-3 min-[1800px]:gap-3 min-[2100px]:gap-4 min-[2560px]:gap-5">
                  <div className="w-2 h-2 min-[1800px]:w-2.5 min-[1800px]:h-2.5 min-[2100px]:w-2.5 min-[2100px]:h-2.5 min-[2560px]:w-3 min-[2560px]:h-3 bg-orange-500 mt-2 min-[1800px]:mt-2 min-[2100px]:mt-2.5 min-[2560px]:mt-3 flex-shrink-0"></div>
                  <p className="text-[#282828] font-weight-400 text-[14px] sm:text-[15px] md:text-[16px] min-[1800px]:text-[17px] min-[2100px]:text-[18px] min-[2560px]:text-[20px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Secure checkout with Apple pay and Google pay
                  </p>
                </div>

                <div className="flex items-start gap-2 md:gap-3 min-[1800px]:gap-3 min-[2100px]:gap-4 min-[2560px]:gap-5">
                  <div className="w-2 h-2 min-[1800px]:w-2.5 min-[1800px]:h-2.5 min-[2100px]:w-2.5 min-[2100px]:h-2.5 min-[2560px]:w-3 min-[2560px]:h-3 bg-orange-500 mt-2 min-[1800px]:mt-2 min-[2100px]:mt-2.5 min-[2560px]:mt-3 flex-shrink-0"></div>
                  <p className="text-[#282828] font-weight-400 text-[14px] sm:text-[15px] md:text-[16px] min-[1800px]:text-[17px] min-[2100px]:text-[18px] min-[2560px]:text-[20px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Reorder and accumulate loyalty points
                  </p>
                </div>

                <div className="flex items-start gap-2 md:gap-3 min-[1800px]:gap-3 min-[2100px]:gap-4 min-[2560px]:gap-5">
                  <div className="w-2 h-2 min-[1800px]:w-2.5 min-[1800px]:h-2.5 min-[2100px]:w-2.5 min-[2100px]:h-2.5 min-[2560px]:w-3 min-[2560px]:h-3 bg-orange-500 mt-2 min-[1800px]:mt-2 min-[2100px]:mt-2.5 min-[2560px]:mt-3 flex-shrink-0"></div>
                  <p className="text-[#282828] font-weight-400 text-[14px] sm:text-[15px] md:text-[16px] min-[1800px]:text-[17px] min-[2100px]:text-[18px] min-[2560px]:text-[20px] font-normal" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Rate and review your experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready To Chat Contact Form Section */}
      <section id="contact-form" className="relative py-16 min-[2560px]:py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Background - orangebgs.png */}
          <img 
            src="/images/orangebgs.png" 
            alt="Background" 
            className="md:hidden w-full h-full object-cover"
          />
          {/* Desktop Background - orangebg.png */}
          <img 
            src="/images/orangebg.png" 
            alt="Background" 
            className="hidden md:block w-full h-full object-fill"
          />
        </div>

        {/* Form Container */}
        <div className="relative z-10 max-w-5xl min-[2560px]:max-w-6xl mx-auto mt-16 min-[2560px]:mt-20 px-4 md:px-6 lg:px-8" style={{ perspective: '1500px' }}>
          <div className="bg-[#faf8f5] rounded-2xl p-8 md:p-10 min-[2560px]:p-14 shadow-lg" style={{ transform: 'rotateY(-16deg)' }}>
            {/* Title */}
            <div className="text-center mb-3 min-[2560px]:mb-5">
              <h2 className="text-3xl md:text-4xl min-[2560px]:text-5xl" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
                <span className="text-black font-weight-700 font-normal">Ready To</span>{' '}
                <span className="text-orange-500 font-bold">Chat</span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-center text-black font-normal font-weight-700 text-sm min-[2560px]:text-base mb-6 min-[2560px]:mb-8" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
              Drop your details and let's make things happen.
            </p>

            {/* Placeholder Styling */}
            <style>{`
              form input::placeholder {
                color: #282828 !important;
                font-family: Poppins !important;
                font-size: 10px !important;
                font-style: normal !important;
                font-weight: 300 !important;
              }
              @media (min-width: 2560px) {
                form input::placeholder {
                  font-size: 12px !important;
                }
              }
            `}</style>

            {/* Form */}
            <form className="space-y-4 min-[2560px]:space-y-6" onSubmit={handleSubmit}>
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
                      className="w-full px-4 py-2 min-[2560px]:px-6 min-[2560px]:py-3 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 text-sm min-[2560px]:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 min-[2560px]:px-6 min-[2560px]:py-3 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 text-sm min-[2560px]:text-base"
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
                      className="w-full px-4 py-2 min-[2560px]:px-6 min-[2560px]:py-3 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 text-sm min-[2560px]:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-2 min-[2560px]:px-6 min-[2560px]:py-3 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 text-sm min-[2560px]:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Full Width Fields */}
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-2 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="numberOfLocations"
                    value={formData.numberOfLocations}
                    onChange={handleInputChange}
                    placeholder="Number of Locations"
                    className="w-full px-4 py-2 bg-[#f5f3f0] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-6 min-[2560px]:mt-8">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 min-[2560px]:px-10 min-[2560px]:py-3.5 rounded-lg font-semibold transition-colors text-sm min-[2560px]:text-base"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-7xl min-[1800px]:max-w-[1600px] min-[2100px]:max-w-[1800px] min-[2560px]:max-w-[2000px] mx-auto">
        <div className="px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 min-[1800px]:py-20 min-[2100px]:py-24 min-[2560px]:py-28">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-10 lg:mb-12 min-[1800px]:mb-16 min-[2100px]:mb-20 min-[2560px]:mb-24">
            <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[45px] min-[1800px]:text-[55px] min-[2100px]:text-[65px] min-[2560px]:text-[75px] font-semibold mb-2 md:mb-3 min-[2560px]:mb-4" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
              <span className="text-black">Frequently</span>{' '}
              <span className="text-orange-500">Asked Questions</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base min-[1800px]:text-lg min-[2100px]:text-xl min-[2560px]:text-2xl">
              Everything you need to know about our platform
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl min-[2560px]:max-w-5xl mx-auto space-y-3 md:space-y-4 min-[1800px]:space-y-5 min-[2100px]:space-y-6 min-[2560px]:space-y-7">
            {/* FAQ Item 1 */}
            <div className="relative bg-[#faf8f5] rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border-l-4 border-orange-500">
              <div className="p-4 md:p-5 min-[1800px]:p-6 min-[2100px]:p-7 min-[2560px]:p-8 flex items-center justify-between gap-3 min-[1800px]:gap-4 min-[2100px]:gap-5 min-[2560px]:gap-6">
                <p className="text-[#282828] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] min-[1800px]:text-[22px] min-[2100px]:text-[24px] min-[2560px]:text-[26px] font-normal font-weight-400 flex-1" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  How does Eatro help me maximize the value of my customer data?
                </p>
                <button 
                  onClick={() => toggleFAQ(0)}
                  className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 min-[1800px]:w-10 min-[1800px]:h-10 min-[2100px]:w-12 min-[2100px]:h-12 min-[2560px]:w-14 min-[2560px]:h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl min-[1800px]:text-2xl min-[2100px]:text-3xl min-[2560px]:text-4xl hover:bg-orange-600 transition-colors" 
                  style={{ lineHeight: '16' }}
                  aria-label="Toggle FAQ 1"
                >
                  <span className="block" style={{ marginTop: '-2px' }}>{openFAQs[0] ? '−' : '+'}</span>
                </button>
              </div>
              {openFAQs[0] && (
                <div className="px-4 md:px-5 min-[1800px]:px-6 min-[2100px]:px-7 min-[2560px]:px-8 pb-4 md:pb-5 min-[1800px]:pb-6 min-[2100px]:pb-7 min-[2560px]:pb-8">
                  <p className="text-[#282828] font-weight-400 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] min-[1800px]:text-[21px] min-[2100px]:text-[23px] min-[2560px]:text-[25px] font-normal leading-relaxed" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Eatro provides comprehensive customer insights by tracking all orders across your direct channels and aggregators. You can see customer names, order history, preferences, and lifetime value. Our analytics help you identify your best customers, understand which campaigns drive specific orders, and measure the real cost of customer acquisition and retention.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-[#faf8f5] rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border-l-4 border-orange-500">
              <div className="p-4 md:p-5 min-[1800px]:p-6 min-[2100px]:p-7 min-[2560px]:p-8 flex items-center justify-between gap-3 min-[1800px]:gap-4 min-[2100px]:gap-5 min-[2560px]:gap-6">
                <p className="text-[#282828] font-weight-400 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] min-[1800px]:text-[22px] min-[2100px]:text-[24px] min-[2560px]:text-[26px] font-normal flex-1" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  How does Eatro integrate with my existing restaurant technology?
                </p>
                <button 
                  onClick={() => toggleFAQ(1)}
                  className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 min-[1800px]:w-10 min-[1800px]:h-10 min-[2100px]:w-12 min-[2100px]:h-12 min-[2560px]:w-14 min-[2560px]:h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl min-[1800px]:text-2xl min-[2100px]:text-3xl min-[2560px]:text-4xl hover:bg-orange-600 transition-colors" 
                  style={{ lineHeight: '16' }}
                  aria-label="Toggle FAQ 2"
                >
                  <span className="block" style={{ marginTop: '-2px' }}>{openFAQs[1] ? '−' : '+'}</span>
                </button>
              </div>
              {openFAQs[1] && (
                <div className="px-4 md:px-5 min-[1800px]:px-6 min-[2100px]:px-7 min-[2560px]:px-8 pb-4 md:pb-5 min-[1800px]:pb-6 min-[2100px]:pb-7 min-[2560px]:pb-8">
                  <p className="text-[#282828] font-weight-400 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] min-[1800px]:text-[21px] min-[2100px]:text-[23px] min-[2560px]:text-[25px] font-normal leading-relaxed" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Eatro offers seamless integration with popular POS systems and can also deploy the Eatro Tablet for real-time synchronization. Our platform automatically syncs menus, prices, inventory, and orders, ensuring your operations run smoothly without manual data entry. We support integrations with major POS providers and can work with custom systems.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-[#faf8f5] rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border-l-4 border-orange-500">
              <div className="p-4 md:p-5 min-[1800px]:p-6 min-[2100px]:p-7 min-[2560px]:p-8 flex items-center justify-between gap-3 min-[1800px]:gap-4 min-[2100px]:gap-5 min-[2560px]:gap-6">
                <p className="text-[#282828] font-weight-400 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] min-[1800px]:text-[22px] min-[2100px]:text-[24px] min-[2560px]:text-[26px] font-normal flex-1" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  What payment methods are supported, and how does Eatro manage the transactions?
                </p>
                <button 
                  onClick={() => toggleFAQ(2)}
                  className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 min-[1800px]:w-10 min-[1800px]:h-10 min-[2100px]:w-12 min-[2100px]:h-12 min-[2560px]:w-14 min-[2560px]:h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl min-[1800px]:text-2xl min-[2100px]:text-3xl min-[2560px]:text-4xl hover:bg-orange-600 transition-colors" 
                  style={{ lineHeight: '16' }}
                  aria-label="Toggle FAQ 3"
                >
                  <span className="block" style={{ marginTop: '-2px' }}>{openFAQs[2] ? '−' : '+'}</span>
                </button>
              </div>
              {openFAQs[2] && (
                <div className="px-4 md:px-5 min-[1800px]:px-6 min-[2100px]:px-7 min-[2560px]:px-8 pb-4 md:pb-5 min-[1800px]:pb-6 min-[2100px]:pb-7 min-[2560px]:pb-8">
                  <p className="text-[#282828] font-weight-400 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] min-[1800px]:text-[21px] min-[2100px]:text-[23px] min-[2560px]:text-[25px] font-normal leading-relaxed" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Eatro supports multiple payment methods including credit cards, debit cards, Apple Pay, Google Pay, and other digital wallets. All transactions are processed securely through our integrated payment gateway. You receive payouts according to your configured schedule, and all transaction data is tracked in your dashboard for easy reconciliation and reporting.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-[#faf8f5] rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border-l-4 border-orange-500">
              <div className="p-4 md:p-5 min-[1800px]:p-6 min-[2100px]:p-7 min-[2560px]:p-8 flex items-center justify-between gap-3 min-[1800px]:gap-4 min-[2100px]:gap-5 min-[2560px]:gap-6">
                <p className="text-[#282828] font-weight-400 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] min-[1800px]:text-[22px] min-[2100px]:text-[24px] min-[2560px]:text-[26px] font-normal flex-1" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  What is the onboarding process and how quickly can I launch my branded ordering channels?
                </p>
                <button 
                  onClick={() => toggleFAQ(3)}
                  className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 min-[1800px]:w-10 min-[1800px]:h-10 min-[2100px]:w-12 min-[2100px]:h-12 min-[2560px]:w-14 min-[2560px]:h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl min-[1800px]:text-2xl min-[2100px]:text-3xl min-[2560px]:text-4xl hover:bg-orange-600 transition-colors" 
                  style={{ lineHeight: '16' }}
                  aria-label="Toggle FAQ 4"
                >
                  <span className="block" style={{ marginTop: '-2px' }}>{openFAQs[3] ? '−' : '+'}</span>
                </button>
              </div>
              {openFAQs[3] && (
                <div className="px-4 md:px-5 min-[1800px]:px-6 min-[2100px]:px-7 min-[2560px]:px-8 pb-4 md:pb-5 min-[1800px]:pb-6 min-[2100px]:pb-7 min-[2560px]:pb-8">
                  <p className="text-[#282828] font-weight-400 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] min-[1800px]:text-[21px] min-[2100px]:text-[23px] min-[2560px]:text-[25px] font-normal leading-relaxed" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Our onboarding process is streamlined and typically takes 1-2 weeks. We'll help you set up your branded online store and mobile app, integrate with your POS system, configure your menu and pricing, and set up payment processing. Our team provides dedicated support throughout the process to ensure a smooth launch. Most restaurants are live and accepting orders within 10-14 days.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-[#faf8f5] rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border-l-4 border-orange-500">
              <div className="p-4 md:p-5 min-[1800px]:p-6 min-[2100px]:p-7 min-[2560px]:p-8 flex items-center justify-between gap-3 min-[1800px]:gap-4 min-[2100px]:gap-5 min-[2560px]:gap-6">
                <p className="text-[#282828] font-weight-400 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] min-[1800px]:text-[22px] min-[2100px]:text-[24px] min-[2560px]:text-[26px] font-normal flex-1" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                  How are deliveries fulfilled for orders placed on my Eatro channels?
                </p>
                <button 
                  onClick={() => toggleFAQ(4)}
                  className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 min-[1800px]:w-10 min-[1800px]:h-10 min-[2100px]:w-12 min-[2100px]:h-12 min-[2560px]:w-14 min-[2560px]:h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl min-[1800px]:text-2xl min-[2100px]:text-3xl min-[2560px]:text-4xl hover:bg-orange-600 transition-colors" 
                  style={{ lineHeight: '16' }}
                  aria-label="Toggle FAQ 5"
                >
                  <span className="block" style={{ marginTop: '-2px' }}>{openFAQs[4] ? '−' : '+'}</span>
                </button>
              </div>
              {openFAQs[4] && (
                <div className="px-4 md:px-5 min-[1800px]:px-6 min-[2100px]:px-7 min-[2560px]:px-8 pb-4 md:pb-5 min-[1800px]:pb-6 min-[2100px]:pb-7 min-[2560px]:pb-8">
                  <p className="text-[#282828] font-weight-400 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] min-[1800px]:text-[21px] min-[2100px]:text-[23px] min-[2560px]:text-[25px] font-normal leading-relaxed" style={{ fontFamily: 'Poppins', fontStyle: 'normal' }}>
                    Eatro integrates with delivery partners like Careem and other courier services to handle deliveries. You can also use your own delivery fleet if preferred. The platform provides real-time tracking for all deliveries, so both you and your customers can monitor order status. All delivery options and fees are configurable in your dashboard.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ready To Launch Section */}
      <section className="relative max-w-7xl min-[1800px]:max-w-[1600px] min-[2100px]:max-w-[1800px] min-[2560px]:max-w-[1900px] mx-auto py-8 md:py-8 min-[2560px]:py-12 overflow-hidden">
        {/* Background Image - blackbgs.png for mobile, blackbg.png for desktop */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Background */}
          <img 
            src="/images/blackbgs.png" 
            alt="Background" 
            className="md:hidden w-full h-full object-fill"
          />
          {/* Desktop Background */}
          <img 
            src="/images/blackbg.png" 
            alt="Background" 
            className="hidden md:block w-full h-full object-fill"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl min-[1800px]:max-w-[1600px] min-[2100px]:max-w-[1800px] min-[2560px]:max-w-[1900px] mx-auto px-4 md:px-6 lg:px-8 min-[2560px]:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 min-[2560px]:gap-12">
            {/* Left Content */}
            <div className="flex-1 w-full md:w-auto md:ml-8 min-[1800px]:ml-10 min-[2100px]:ml-12 min-[2560px]:ml-12 text-center md:text-left">
              <h2 className="text-white text-[20px] sm:text-[24px] md:text-[35px] lg:text-[35px] min-[1800px]:text-[40px] min-[2100px]:text-[42px] min-[2560px]:text-[48px] font-semibold leading-tight mb-2 md:mb-3 min-[2560px]:mb-5" style={{ fontFamily: 'Chillax', fontStyle: 'normal' }}>
                <span>Ready To Launch Your</span>
                <br />
                <span className="text-orange-500">Direct Ordering Sales</span>
                {' '}
                <br className="md:hidden" />
                <span className="text-orange-500">Channels?</span>
              </h2>
              <p className="text-white text-sm md:text-base min-[1800px]:text-lg min-[2100px]:text-lg min-[2560px]:text-xl">
                Let's Talk! Book a Demo with us!
              </p>
            </div>

            {/* Right Section with Buttons */}
            <div className="relative w-full md:mt-10 lg:mt-10 md:w-auto md:mr-24 lg:mr-32 min-[1800px]:mr-36 min-[2100px]:mr-40 min-[2560px]:mr-48">
              <div className="md:bg-transparent px-6 py-6 md:px-12 md:py-8 min-[1800px]:px-14 min-[1800px]:py-10 min-[2100px]:px-14 min-[2100px]:py-10 min-[2560px]:px-16 min-[2560px]:py-12 flex flex-col items-center justify-center space-y-3 md:space-y-4 min-[2560px]:space-y-6">
                {/* App Store Buttons */}
                <div className="flex gap-3 sm:flex-row md:flex-row md:gap-4 min-[1800px]:gap-5 min-[2100px]:gap-5 min-[2560px]:gap-6 w-full md:w-auto">
                  {/* App Store Button */}
                  <button className="bg-white rounded-full px-5 py-3 md:px-6 md:py-3 min-[1800px]:px-7 min-[1800px]:py-3.5 min-[2100px]:px-7 min-[2100px]:py-3.5 min-[2560px]:px-8 min-[2560px]:py-4 flex items-center gap-2 md:gap-3 min-[2560px]:gap-4 hover:bg-gray-100 transition-colors w-full md:w-auto justify-center md:justify-start">
                    <svg className="w-7 h-7 md:w-8 md:h-8 min-[1800px]:w-9 min-[1800px]:h-9 min-[2100px]:w-9 min-[2100px]:h-9 min-[2560px]:w-10 min-[2560px]:h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] md:text-xs min-[1800px]:text-xs min-[2100px]:text-xs min-[2560px]:text-sm text-gray-600" style={{ fontFamily: 'Poppins' }}>Download on the</p>
                      <p className="text-sm md:text-base min-[1800px]:text-base min-[2100px]:text-base min-[2560px]:text-lg font-semibold text-black" style={{ fontFamily: 'Poppins' }}>App Store</p>
                    </div>
                  </button>

                  {/* Google Play Button */}
                  <button className="bg-white rounded-full px-5 py-3 md:px-6 md:py-3 min-[1800px]:px-7 min-[1800px]:py-3.5 min-[2100px]:px-7 min-[2100px]:py-3.5 min-[2560px]:px-8 min-[2560px]:py-4 flex items-center gap-2 md:gap-3 min-[2560px]:gap-4 hover:bg-gray-100 transition-colors w-full md:w-auto justify-center md:justify-start">
                    <svg className="w-7 h-7 md:w-8 md:h-8 min-[1800px]:w-9 min-[1800px]:h-9 min-[2100px]:w-9 min-[2100px]:h-9 min-[2560px]:w-10 min-[2560px]:h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] md:text-xs min-[1800px]:text-xs min-[2100px]:text-xs min-[2560px]:text-sm text-gray-600" style={{ fontFamily: 'Poppins' }}>GET IT ON</p>
                      <p className="text-sm md:text-base min-[1800px]:text-base min-[2100px]:text-base min-[2560px]:text-lg font-semibold text-black" style={{ fontFamily: 'Poppins' }}>Google Play</p>
                    </div>
                  </button>
                </div>

                {/* One Platform Text */}
                <p className="text-white text-sm md:text-sm min-[1800px]:text-base min-[2100px]:text-base min-[2560px]:text-base font-medium text-center" style={{ fontFamily: 'Poppins' }}>
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

