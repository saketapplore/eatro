import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function CookiePolicy() {
  const scrollToContactForm = (e) => {
    e.preventDefault()
    window.location.href = '/#contact-form'
  }

  return (
    <div className="min-h-screen bg-[#fff8f2]">
      <Header scrollToContactForm={scrollToContactForm} />

      {/* Cookie Policy Content */}
      <section className="max-w-7xl mx-auto min-[1700px]:max-w-[1400px] min-[1700px]:ml-24 min-[1700px]:mr-auto min-[2100px]:max-w-[1600px] min-[2100px]:ml-32 min-[2100px]:mr-auto pt-2 px-4 min-[1700px]:px-12 min-[2100px]:px-16">
        <div className="bg-[#faf8f5] rounded-lg py-8 md:py-2 min-[1700px]:py-20 min-[2100px]:py-24 px-6 min-[1700px]:px-16 min-[2100px]:px-20 max-w-full">
          {/* Title */}
          <div className="mb-12 min-[1700px]:mb-14 min-[2100px]:mb-16">
            <img 
              src="/images/cookiepolicy.png" 
              alt="Eatro Cookie Policy" 
              className="w-[500px] sm:w-[550px] min-[1700px]:w-[600px] min-[2100px]:w-[650px] h-[70px] max-w-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 min-[1700px]:space-y-9 min-[2100px]:space-y-10 text-[#282828] max-w-full" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontSize: '16px', lineHeight: '1.8' }}>
            
            <div>
              <h2 className="mb-4 min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>1. What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files that are downloaded to your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide reporting information and personalized experiences.
              </p>
              <p className="mb-4">
                Other tracking technologies, like pixels and web beacons, may also be used for similar purposes. We refer to all these technologies as "cookies" in this policy.
              </p>
            </div>

            <div>
              <h2 className="mb-4 min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>2. How Eatro Uses Cookies</h2>
              <p className="mb-4">
                Eatro Tech FZ-LLC uses cookies for two primary purposes:
              </p>
              
              <h3 className="text-xl min-[1700px]:text-[21px] min-[2100px]:text-[22px] font-semibold mb-3 mt-6" style={{ fontFamily: 'Poppins', fontWeight: 600 }}>A. On the Eatro Corporate Website (eatrotech.ae)</h3>
              <p className="mb-4">
                We use cookies to manage our own corporate website, primarily for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Analytics:</strong> To understand how visitors use our site, track traffic sources, and improve website performance.</li>
                <li><strong>Functionality:</strong> To remember your preferences and settings (e.g., language selection).</li>
                <li><strong>Marketing & Advertising:</strong> To track the effectiveness of our campaigns and serve relevant advertisements to potential Merchants.</li>
              </ul>

              <h3 className="text-xl min-[1700px]:text-[21px] min-[2100px]:text-[22px] font-semibold mb-3 mt-6" style={{ fontFamily: 'Poppins', fontWeight: 600 }}>B. On Merchant Ordering Channels (e.g., yourrestaurant.eatrotech.ae)</h3>
              <p className="mb-4">
                When an End Customer places an order through a Merchant's branded website or app powered by Eatro, we use cookies <b> on behalf of that Merchant </b> for essential operational purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Strictly Necessary:</strong> To maintain the ordering session, keep items in the shopping cart, and ensure secure payment processing.</li>
                <li><strong>Performance:</strong> To measure the performance of the ordering application (e.g., load times).</li>
                <li><strong>Personalization & Loyalty:</strong> To remember the customer (for repeat orders), track loyalty points, and serve personalized content based on their order history, <b> as directed by the Merchant.</b></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>3. Types of Cookies We Use</h2>
              <p className="mb-4">
                We use first-party cookies (set by us) and third-party cookies (set by a different domain). The cookies used on our corporate site and on the Merchant ordering channels fall into the following categories:
              </p>
              
              <div className="space-y-4 mb-4">
                <div>
                  <p className="mb-2"><strong>a. Strictly Necessary Cookies</strong></p>
                  <p className="mb-2"> <span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Purpose:</strong> Essential for the website to function correctly and cannot be turned off in our systems. These are usually set only in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling out forms.</p>
                  <p className="mb-2"><strong>Examples:</strong> Session IDs, Shopping Cart contents, and security tokens.</p>
                </div>

                <div>
                  <p className="mb-2"><strong>b. Analytical/Performance Cookies</strong></p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Purpose:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site and the ordering channels. They help us know which pages are the most and least popular and see how visitors move around the site.</p>
                  <p className="mb-2"><strong>Examples:</strong> Google Analytics and internal performance metrics.</p>
                </div>

                <div>
                  <p className="mb-2"><strong>c. Functional Cookies</strong></p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Purpose:</strong> These enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                  <p className="mb-2"><strong>Examples:</strong> Remembering language preferences and maintaining the login status for Merchants.</p>
                </div>

                <div>
                  <p className="mb-2"><strong>d. Targeting/Advertising Cookies</strong></p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Purpose:</strong> These may be set through our site or the Merchant channels by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</p>
                  <p className="mb-2"><strong>Examples:</strong> Retargeting pixels and campaign tracking tags.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>4. Data Ownership and Third-Party Cookies</h2>
              <p className="mb-4">
              <span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span>  <strong>Merchant Sites:</strong> For cookies dropped on the Merchant's branded ordering channels, any data collected that tracks an End Customer's ordering behavior is owned by the <strong>Merchant (Data Controller)</strong> and processed by Eatro.
              </p>
              <p className="mb-4">
              <span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span> <strong>Third Parties:</strong> We partner with analytics and advertising providers (like Google and social media platforms) who may set third-party cookies. These providers are responsible for the data they collect through their own cookies, subject to their respective privacy policies.
              </p>
            </div>

            <div>
              <h2 className="mb-4 min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>5. Your Choices and Consent (UAE PDPL Compliant)</h2>
              <p className="mb-4">
                In line with the principles of the UAE PDPL, we are committed to obtaining your clear consent for non-essential cookies.
              </p>
              
              <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Consent Mechanism:</strong> When you visit the Eatro website or a Merchant's ordering channel for the first time, a clear <strong>Cookie Banner</strong> will appear.</p>
              
              <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Choice:</strong> You will have the option to:</p>
              <ul className="list-none pl-6 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Accept All</strong> cookies.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Manage Preferences</strong> to customize which categories of non-essential cookies (Analytics, Functional, Targeting) you accept.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Reject All</strong> non-essential cookies.</span>
                </li>
              </ul>
              
              <p className="mb-4">
              <span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span>  <strong>Browser Settings:</strong> You can also control and delete cookies through your web browser settings. Please note that blocking "Strictly Necessary" cookies may cause the Eatro platform or the Merchant ordering channel to function incorrectly.
              </p>
            </div>

            <div>
              <h2 className="mb-4 min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>6. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Effective Date."
              </p>
            </div>

            <div className=''>
              <h2 className="mb-4 min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <p className="mb-2">Eatro Tech FZ-LLC</p>
              <p className="mb-2">
                <strong style={{ color: '#f97316' }}>Address:</strong> Ground Floor, DMC5, Dubai Media City, Dubai, United Arab Emirates
              </p>
              <p className="mb-4">
                <strong style={{ color: '#f97316' }}>Email:</strong> legal@eatrotech.com
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CookiePolicy

