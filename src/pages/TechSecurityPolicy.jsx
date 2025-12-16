import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function TechSecurityPolicy() {
  const scrollToContactForm = (e) => {
    e.preventDefault()
    window.location.href = '/#contact-form'
  }

  return (
    <div className="min-h-screen bg-[#fff8f2]">
      <Header scrollToContactForm={scrollToContactForm} />

      {/* Tech Security Policy Content */}
      <section className="max-w-7xl mx-auto min-[1700px]:max-w-[1400px] min-[1700px]:ml-24 min-[1700px]:mr-auto min-[2100px]:max-w-[1600px] min-[2100px]:ml-32 min-[2100px]:mr-auto pt-2 px-4 min-[1700px]:px-12 min-[2100px]:px-16">
        <div className="bg-[#faf8f5] rounded-lg py-8 md:py-2 min-[1700px]:py-20 min-[2100px]:py-24 px-6 min-[1700px]:px-16 min-[2100px]:px-20 max-w-full">
          {/* Title */}
          <div className="mb-12 min-[1700px]:mb-14 min-[2100px]:mb-16">
            <img 
              src="/images/techpolicy.png" 
              alt="Eatro Tech FZ-LLC Security Policy" 
              className="w-[500px] sm:w-[550px] min-[1700px]:w-[600px] min-[2100px]:w-[650px] h-[70px] max-w-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 min-[1700px]:space-y-9 min-[2100px]:space-y-10 text-[#282828] max-w-full" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontSize: '16px', lineHeight: '1.8' }}>
            
            <div>
              <p className="mb-4">
              At <span className = "text-[#EF7714]"> Eatro Tech FZ-LLC,</span> security isn't a feature; it's the foundation of our platform. We are committed to protecting our Merchants' data, operational integrity, and their customers' privacy using industry-leading practices and robust infrastructure.
              </p>
            </div>

            <div>
              <h2 className="mb-4 leading-tight min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>Infrastructure and Cloud Security</h2>
              <p className="mb-4">
             <b> Eatro Tech FZ-LLC's </b> entire platform and data are hosted within <b> Amazon Web Services (AWS),</b> leveraging their globally recognized security and compliance framework.

              </p>
              <ul className="list-none pl-6 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>World-Class Data Centers:</strong> Our infrastructure benefits from the security provided by AWS data centers, which are protected by extensive physical security controls, surveillance, and redundancy.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Regional Isolation:</strong> We host our services in <b>secure AWS Regions</b>, allowing for isolation and compliance with regional data residency requirements where applicable.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Compliance Inheritance:</strong> We inherit the core security controls, certifications, and standards of AWS (including SOC 2, ISO 27001, and more), meaning the underlying cloud infrastructure meets stringent global security benchmarks.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Scalable Defense:</strong> AWS security services (like <b>Security Hub, GuardDuty, and Shield</b>) provide real-time threat detection, continuous monitoring, and scalable protection against DDoS attacks.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 leading-tight min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>Application and Network Security</h2>
              <p className="mb-4">
              We maintain security controls at every layer of the <b>Eatro Tech FZ-LLC </b>application and network architecture.
              </p>
              
              <h3 className="mb-3 mt-6 leading-tight min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>1. Data Encryption</h3>
              <p className="mb-4">
              All sensitive data, including customer records, payment tokens, and operational logs, is protected:
              </p>
              <ul className="list-none pl-6 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Encryption In Transit (TLS/SSL):</strong> All communication between our Merchants, their customers,<b> Eatro Tech FZ-LLC's</b> servers, and integrated partners is secured using <b> Transport Layer Security (TLS 1.2 or higher)</b>, ensuring data is encrypted during transmission.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Encryption At Rest (AES-256):</strong> All data stored in our databases and file storage (AWS S3, RDS) is encrypted using industry-standard <b> AES-256 encryption keys.</b>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 leading-tight min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>2. Access Control</h2>
              <p className="mb-4">
              Access to the <b>Eatro Tech FZ-LLC </b>platform and internal systems is strictly managed:
              </p>
              <ul className="list-none pl-6 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Least Privilege:</strong> Access rights are granted only on a need-to-know basis (the principle of <b> Least Privilege</b>).</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Strong Authentication:</strong> We enforce strong, complex passwords and encourage (or mandate for internal staff) <b>Multi-Factor Authentication (MFA)</b> for all administrative and operational access points.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Role-Based Access Control (RBAC):</strong> Merchant dashboard access is restricted based on defined user roles (e.g., Owner, Manager, Staff) to ensure employees only see the data and functions necessary for their job.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 leading-tight min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>3. Network Security</h2>
              <ul className="list-none pl-6 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Firewalls and VPCs:</strong> We use AWS <b> Virtual Private Clouds (VPCs)</b> and strict network security groups to logically isolate our systems from the public internet. Access is restricted only to necessary ports and protocols.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>API Security:</strong> All integrated APIs (for POS, Delivery Partners) are secured using <b> OAuth 2.0</b> or robust API keys and rate-limiting to prevent abuse.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 leading-tight min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>Operational Security and Development</h2>
              <p className="mb-4">
                Security is integrated into daily operations and the development lifecycle.
              </p>
              <ul className="list-none pl-6 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Vulnerability Management:</strong> We utilize automated tools and conduct regular <b>vulnerability scanning</b> and <b>penetration testing</b> of our applications and infrastructure to proactively identify and patch potential weaknesses.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Secure Development Lifecycle (SDL):</strong> Security reviews are a mandatory part of our software development process (DevSecOps) before any code is deployed to production.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Incident Response:</strong> We maintain a formal <b> Security Incident Response Plan (SIRP)</b>. In the event of an incident, we have clear protocols for detection, containment, eradication, and recovery, with timely notification to affected parties as required by law (e.g., UAE PDPL).
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 leading-tight min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>Data Privacy and Compliance</h2>
              <p className="mb-4">
                We treat data privacy as a critical component of security, adhering to best practices and regional laws.
              </p>
              <ul className="list-none pl-6 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>UAE PDPL Alignment:</strong> Our platform and policies are designed to align with the <strong>UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL)</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Data Controller / Processor:</strong> We clearly define our role as the <strong>Data Processor</strong> for End Customer data, meaning the Merchant retains ownership and control (<strong>Data Controller</strong>). Our systems and processes support the Merchant's compliance obligations.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 mr-2 mt-2 flex-shrink-0"></span>
                  <span><strong>Zero Commission, Full Data Ownership:</strong> We guarantee that End Customer data collected via your branded <strong>Eatro Tech FZ-LLC</strong> channels will <strong> never be sold or used by Eatro Tech FZ-LLC</strong> for our own marketing purposes.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 leading-tight min-[1700px]:text-[28px] min-[2100px]:text-[30px]" style={{ fontFamily: 'Chillax', fontSize: '26px', fontStyle: 'normal', fontWeight: 600, color: '#EF7714' }}>Need to Know More?</h2>
              <p className="mb-4">
                For technical questions or to report a potential security vulnerability, please contact our security team:
              </p>
              <p className="mb-4">
                <strong style={{ color: '#f97316' }}>Email:</strong> <span style={{ color: 'black' }}>legal@eatrotech.com</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TechSecurityPolicy

