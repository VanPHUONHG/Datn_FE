


const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start md:w-1/4 space-y-4">
          <img
            src="image/logo.png"
            alt="Velora Shoe Store"
            className="w-16 h-16 rounded-sm ml-24"
            style={{ minWidth: '64px', minHeight: '64px' }}
          />
          <p className="text-[13px] text-center md:text-left leading-relaxed max-w-xs text-gray-600">
            Grabit is the biggest market of grocery products.
            <br />
            Get your daily needs from our store.
          </p>
          <div className="flex space-x-3">
            <img src="/assets/images/android.png.png" alt="Android App" className="w-30 h-10 min-w-[120px]" />
            <img src="/assets/images/apple.png.png" alt="Apple App" className="w-30 h-10 min-w-[120px]" />
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:w-3/4">
          {[
            {
              title: 'Category',
              items: ['Dried Fruit', 'Cookies', 'Foods', 'Fresh Fruit', 'Tuber Root', 'Vegetables'],
            },
            {
              title: 'Company',
              items: ['About us', 'Delivery', 'Legal Notice', 'Terms & conditions', 'Secure payment', 'Contact us'],
            },
            {
              title: 'Account',
              items: ['Sign In', 'View Cart', 'Return Policy', 'Become a Vendor', 'Affiliate Program', 'Payments'],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="text-gray-700 font-medium text-lg mb-4 border-b border-gray-200 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-500">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-gray-700 font-medium text-lg mb-4 border-b border-gray-200 pb-2">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start space-x-2">
                <i className="fas fa-map-marker-alt text-green-500 mt-1 text-sm"></i>
                <span>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fab fa-whatsapp text-green-500 text-sm"></i>
                <span>+00 9876543210</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-green-500 text-sm"></i>
                <span>example@email.com</span>
              </li>
              <li className="flex space-x-2">
                {['facebook-f', 'twitter', 'linkedin-in', 'instagram'].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-6 h-6 flex items-center justify-center bg-gray-700 text-white rounded text-xs"
                    aria-label={icon}
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p className="mb-2 sm:mb-0">
            Copyright ©{' '}
            <a className="text-green-500 hover:underline" href="#">
              Grabit
            </a>{' '}
            all rights reserved. Powered by Grabit.
          </p>
          <div className="flex items-center">
            <img
              src="image/image.png"
              alt="Footer Logo"
              className="w-auto h-6"
              style={{ minWidth: 'auto', minHeight: '24px' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;