import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className ="w-full border-t border-gray-200">
        <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className ="flex flex-col md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0">
         
            <div className ="md:w-1/4 flex flex-col items-center md:items-start space-y-4">
              <img alt="Velora logo with black and white shoe icon and text Velora" className ="w-20 h-20 object-contain" height="80" src="https://storage.googleapis.com/a1aa/image/bc503720-458f-4c58-1276-f460728a2380.jpg" width="80" />
              <p className ="text-xs text-gray-500 text-center md:text-left leading-relaxed max-w-xs">
                Grabit is the biggest market of grocery products
                <br />
                Get your daily needs from our store.
              </p>
              <div className ="flex space-x-3">
                <a aria-label="Get on Google Play" href="#">
                  <img alt="Google Play store button with white text on dark background" className ="w-[110px] h-[30px] object-contain" height="30" src="https://storage.googleapis.com/a1aa/image/91f1ffdd-6d8c-4807-de3f-a21c63441580.jpg" width="110" />
                </a>
                <a aria-label="Download on App Store" href="#">
                  <img alt="App Store button with white text on dark background" className ="w-[110px] h-[30px] object-contain" height="30" src="https://storage.googleapis.com/a1aa/image/307d81f8-881d-422c-6329-e295c3823bee.jpg" width="110" />
                </a>
              </div>
            </div>
            
            <div className ="md:w-1/5">
              <h3 className ="text-sm font-medium text-gray-900 mb-4">
                Category
              </h3>
              <ul className ="space-y-2 text-xs text-gray-500">
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    Delivery
                  </a>
                </li>
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    Legal Notice
                  </a>
                </li>
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    Terms &amp; conditions
                  </a>
                </li>
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    Secure payment
                  </a>
                </li>
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          
            <div className ="md:w-1/5">
              <h3 className ="text-sm font-medium text-gray-900 mb-4">
                Company
              </h3>
              <ul className ="space-y-2 text-xs text-gray-500">
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    Sign in
                  </a>
                </li>
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    View Cart
                  </a>
                </li>
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    Become a Vendor
                  </a>
                </li>
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a className ="hover:text-gray-900" href="#">
                    Payments
                  </a>
                </li>
              </ul>
            </div>
            <div className ="md:w-1/4">
              <h3 className ="text-sm font-medium text-gray-900 mb-4">
                Contact
              </h3>
              <ul className ="space-y-4 text-xs text-gray-500">
                <li className ="flex items-start space-x-2">
                  <i className ="fas fa-map-marker-alt text-green-500 mt-1">
                  </i>
                  <div>
                    2548 Broadcha Maples Court, Madisonville KY
                    <br />
                    4783, USA
                  </div>
                </li>
                <li className ="flex items-center space-x-2">
                  <i className ="fab fa-whatsapp text-green-500">
                  </i>
                  <span>
                    +00 9876543210
                  </span>
                </li>
                <li className ="flex items-center space-x-2">
                  <i className ="far fa-envelope text-gray-400">
                  </i>
                  <span>
                    example@email.com
                  </span>
                </li>
                <li className ="flex space-x-3 mt-2">
                  <a aria-label="Facebook" className ="text-gray-500 hover:text-gray-900" href="#">
                    <i className ="fab fa-facebook-f text-xs">
                    </i>
                  </a>
                  <a aria-label="Twitter" className ="text-gray-500 hover:text-gray-900" href="#">
                    <i className ="fab fa-twitter text-xs">
                    </i>
                  </a>
                  <a aria-label="LinkedIn" className ="text-gray-500 hover:text-gray-900" href="#">
                    <i className ="fab fa-linkedin-in text-xs">
                    </i>
                  </a>
                  <a aria-label="Instagram" className ="text-gray-500 hover:text-gray-900" href="#">
                    <i className ="fab fa-instagram text-xs">
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className ="border-t border-gray-200">
          <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400">
            <div>
              Copyright © Grabit all rights reserved. Powered by Grabit
            </div>
            <div className ="flex space-x-2 mt-2 md:mt-0">
              <img alt="Visa card logo" className ="h-5 object-contain" height="20" src="https://storage.googleapis.com/a1aa/image/a2536a93-dc53-49fa-69cb-bfa624ca375d.jpg" width="40" />
              <img alt="Mastercard logo" className ="h-5 object-contain" height="20" src="https://storage.googleapis.com/a1aa/image/9028d74c-1845-495b-9353-5f479497e357.jpg" width="40" />
              <img alt="Paypal logo" className ="h-5 object-contain" height="20" src="https://storage.googleapis.com/a1aa/image/99cd7b66-e9d8-46bf-fc20-e9b2a4fffcf3.jpg" width="40" />
              <img alt="Skrill logo" className ="h-5 object-contain" height="20" src="https://storage.googleapis.com/a1aa/image/03ada870-7b9d-4e43-f372-fa22c3e04ec0.jpg" width="40" />
              <img alt="Maestro card logo" className ="h-5 object-contain" height="20" src="https://storage.googleapis.com/a1aa/image/b85af3b9-0e63-4a28-0b8f-cb2fa918e19f.jpg" width="40" />
              <img alt="Klarna logo" className ="h-5 object-contain" height="20" src="https://storage.googleapis.com/a1aa/image/3d456206-ff12-4a1e-affb-4cd2ad275168.jpg" width="40" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer