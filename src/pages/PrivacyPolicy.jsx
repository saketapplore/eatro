import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PrivacyPolicy() {
  const scrollToContactForm = (e) => {
    e.preventDefault()
    window.location.href = '/#contact-form'
  }

  return (
    <div className="min-h-screen bg-[#fff8f2]">
      <Header scrollToContactForm={scrollToContactForm} />

      {/* Privacy Policy Content */}
      <section className="max-w-7xl mx-auto pb-16 pt-2">
        <div className="bg-[#faf8f5] rounded-lg py-8 md:py-12 max-w-7xl">
          {/* Title */}
          <div className="mb-12">
            <img 
              src="/images/policylogo.png" 
              alt="Eatro Privacy Policy" 
              className="w-[600px] h-[120px] max-w-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 text-[#282828] max-w-full" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontSize: '16px', lineHeight: '1.8' }}>
            
            <div>
              <h2 className="mb-4" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>1. Introduction and Scope</h2>
              <p className="mb-4">
                Eatro Tech FZ-LLC ("we," "us," or "our") operates an all-in-one ordering, delivery, and loyalty Platform designed for Quick Service Restaurants (QSRs) and other merchants <b>(our "Merchants")</b>.
              </p>
              <p className="mb-4">
                This policy details how we handle Personal Data—any data that can identify an individual—in accordance with the UAE Federal Decree-Law No.  45 of 2021 on the Protection of Personal Data (PDPL).
              </p>
              <p className="mb-4">
                This policy applies to:
              </p>
              <div className="space-y-2 mb-4">
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Merchants:</strong> Data related to our business partners (employees, managers, and owners).</p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>End Customers:</strong> Data related to individuals placing orders directly through a Merchant's Eatro-powered channel.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-4" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>2. Legal Basis for Processing</h2>
              <p className="mb-4">
              We process your Personal Data only when we have a legal basis to do so, as recognized under the UAE PDPL:
              </p>
              <div className="space-y-2 mb-4">
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Consent:</strong> You have given clear and unambiguous consent for a specific purpose (e.g., opting into marketing).</p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Contract:</strong> Processing is necessary to fulfill a contract with you or to take steps at your request before entering a contract (e.g., processing orders).</p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests or those of a third party, provided those interests do not override your fundamental rights and freedoms.                </p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Legal Obligation:</strong> Processing is necessary to comply with a legal obligation imposed on us in the UAE.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-4" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>3. Information We Collect</h2>
              
              <h3 className="mb-3 mt-6" style={{ fontFamily: 'Chillax', fontSize: '20px', fontStyle: 'normal', fontWeight: 600, color: '#282828' }}>A. Merchant Data (Data Controller: Eatro Tech FZ-LLC)</h3>
              <p className="mb-4">
              We collect and process this data for account management and service delivery:
              </p>
              <div className="space-y-2 mb-4">
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Contact & Account Data:</strong> Name, business email, phone number, business address, and login credentials.</p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Financial Data:</strong> Bank details, billing address, and transaction records for subscription and payment gateway fees.                </p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Operational Data:</strong> Restaurant details, POS system integration keys, and delivery service configurations.                </p>
              </div>

              <h3 className="mb-3 mt-6" style={{ fontFamily: 'Chillax', fontSize: '20px', fontStyle: 'normal', fontWeight: 600, color: '#282828' }}>B. End Customer Data (Data Controller: The Merchant)</h3>
              <p className="mb-4">
              When an order is placed through an Eatro-powered channel, we collect and process data <b> as a Data Processor on behalf of the Merchant (the Data Controller).
              </b>              </p>
              <div className="space-y-2 mb-4">
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Order & Contact Details:</strong> Customer name, phone number, email address, specific delivery address, full order history, and payment method details.</p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Technical Data:</strong> IP address and device information.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-4" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>4. How We Use the Information</h2>
              
              <h3 className="mb-3 mt-6" style={{ fontFamily: 'Chillax', fontSize: '20px', fontStyle: 'normal', fontWeight: 600, color: '#282828' }}>A. For Merchants</h3>
              <p className="mb-4">We use Merchant Data to:</p>
              <div className="space-y-2 mb-4">
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span>Provide and maintain the Platform services, ensuring continuous order management and functionality.</p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span>Manage billing and collect subscription and transaction fees.</p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span>Communicate updates, support notices, and essential service information.</p>
              </div>

              <h3 className="mb-3 mt-6" style={{ fontFamily: 'Chillax', fontSize: '20px', fontStyle: 'normal', fontWeight: 600, color: '#282828' }}>B. For End Customers (Processing on behalf of the Merchant)</h3>
              <p className="mb-4">We process End Customer Data strictly under the instructions of the Merchant to:</p>
              <div className="space-y-2 mb-4">
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span>Fulfill the customer's order (e.g., passing address to the delivery partner).</p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span>Facilitate order communication (confirmation, tracking) via SMS or email.</p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span>Power the Merchant's targeted and smart marketing and loyalty programs (e.g., sending triggered offers based on purchase history).</p>
              </div>
            </div>

            <div>
              <h2 className="mb-4" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>5. Data Ownership and Disclosure</h2>
              
              <h3 className="mb-3 mt-6" style={{ fontFamily: 'Chillax', fontSize: '20px', fontStyle: 'normal', fontWeight: 600, color: '#282828' }}>A. Ownership and Control</h3>
              <p className="mb-4">
                The Merchant retains full ownership and control over all End Customer Data. Eatro Tech FZ-LLC acts only as a processor and will not use, sell, or disclose this data for our own marketing or business purposes without the Merchant's express permission.
              </p>

              <h3 className="mb-3 mt-6" style={{ fontFamily: 'Chillax', fontSize: '20px', fontStyle: 'normal', fontWeight: 600, color: '#282828' }}>B. Disclosure (Sharing Data)</h3>
              <p className="mb-4">We may share your Personal Data (Merchant and End Customer, where relevant) with third parties who are necessary for service delivery:</p>
              <div className="space-y-2 mb-4">
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Service Providers:</strong> Entities providing essential functions like cloud hosting (data stored within the UAE or compliant jurisdictions), payment gateways (e.g., Eatro Pay partners), and communication services.</p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Delivery Partners:</strong> Integrated courier services to facilitate last-mile delivery.</p>
                <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Legal Requirements:</strong> Where disclosure is necessary to comply with the PDPL, other UAE federal laws, or lawful requests by public authorities.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-4" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>6. Data Transfer (Cross-Border)</h2>
              <p className="mb-4">
                We may store or process Personal Data outside the UAE only to the extent permitted by the PDPL and its Executive Regulations. When transferring data internationally, we ensure adequate protection through legally recognized mechanisms, such as contracts or approved data transfer protocols, to safeguard your data.
              </p>
            </div>

            <div>
              <h2 className="mb-4" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>7. Your Data Subject Rights (UAE PDPL)</h2>
              <p className="mb-4">
                Under the <b> UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL), </b> you have specific rights concerning your Personal Data:
              </p>
              
              <div className="space-y-4 mb-4">
                <div>
                  <p className="mb-2" style={{ fontFamily: 'Chillax', fontSize: '20px', fontStyle: 'normal', fontWeight: 600, color: '#282828' }}>a. Right to Access</p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Description:</strong> You have the right to obtain confirmation about the processing of your Personal Data and to access the data being held.</p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Action:</strong> Contact us/the Merchant to request details.</p>
                </div>

                <div>
                  <p className="mb-2" style={{ fontFamily: 'Chillax', fontSize: '20px', fontStyle: 'normal', fontWeight: 600, color: '#282828' }}>b. Right to Request Correction/Deletion</p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Description:</strong> You can request that inaccurate data be corrected or that your data be deleted when it is no longer necessary for the purpose for which it was collected.</p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Action:</strong> Contact us/the Merchant to request changes or deletion.</p>
                </div>

                <div>
                  <p className="mb-2"><strong>c. Right to Restrict Processing</strong></p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Description:</strong> You have the right to limit how we use your Personal Data in specific, legally defined circumstances.</p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Action:</strong> Contact us/the Merchant to lodge a request.</p>
                </div>

                <div>
                  <p className="mb-2"><strong>d. Right to Portability</strong></p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Description:</strong> You have the right to receive your Personal Data in a structured, commonly used, and electronic format.</p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Action:</strong> Contact us/the Merchant to request transfer.</p>
                </div>

                <div>
                  <p className="mb-2"><strong>e. Right to Object to Processing</strong></p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Description:</strong> You have the right to object to the processing of your Personal Data when it is based on legitimate interests or is used for direct marketing purposes.</p>
                  <p className="mb-2"><span className="inline-block w-2 h-2 bg-orange-500 mr-2"></span><strong>Action:</strong> Use the unsubscribe link in marketing communications or contact us/the Merchant.</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-2"><strong>Note for End Customers:</strong></p>
                <p className="mb-4">
                  To exercise your rights regarding your order data, you <strong>must contact the specific Merchant (the restaurant) first</strong>, as they are the Data Controller responsible for your information.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>8. Data Security and Breach Notification</h2>
              <p className="mb-4">
                We implement robust technical and organizational measures to protect Personal Data against unauthorized access, loss, or misuse, in compliance with PDPL standards.
              </p>
              <p className="mb-4">
                In the event of a security breach that is likely to harm the data subject, we will comply with the PDPL's requirement to notify the relevant UAE authorities and affected individuals within the legally stipulated timeframe.
              </p>
            </div>

            <div>
              <h2 className="mb-4" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>9. Contact Information</h2>
              <p className="mb-4">
                For questions regarding this policy or to exercise your rights:
              </p>
              <p className="mb-2">
                <strong style={{ color: '#f97316' }}>Data Controller:</strong> Eatro Tech FZ-LLC
              </p>
              <p className="mb-4">
                <strong style={{ color: '#f97316' }}>Email:</strong> legal@eatrotech.com
              </p>
            </div>

            {/* <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Poppins', fontWeight: 600, color: '#f97316' }}>10. Children's Privacy</h2>
              <p className="mb-4">
                Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div> */}

            {/* <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Poppins', fontWeight: 600, color: '#f97316' }}>11. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </div> */}

            {/* <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Poppins', fontWeight: 600, color: '#f97316' }}>12. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our Service after such changes constitutes acceptance of the updated policy.
              </p>
            </div> */}

            {/* <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Poppins', fontWeight: 600, color: '#f97316' }}>13. Contact Us</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mb-4">
                <strong>Email:</strong> privacy@eatro.com<br />
                <strong>Address:</strong> [Your Company Address]<br />
                <strong>Phone:</strong> [Your Contact Number]
              </p>
            </div> */}

            {/* <div className="mt-8 pt-8 border-t border-gray-300">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 2025
              </p>
            </div> */}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy

