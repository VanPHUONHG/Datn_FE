import React, { memo } from 'react'

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row md:space-x bg-gradient-to-r from-white to-[#f3f5f4] rounded-lg overflow-hidden" style={{ height: '300px' }}>
          <div className="flex flex-col justify-center flex-1 px-8 md:px-12">
            <p className="text-sm text-[#3a8a7d] font-semibold mb-2">
              Starting at
              <span className="font-bold"> $ 29.99</span>
            </p>
            <h2 className="text-4xl font-extrabold text-[#3a4756] leading-tight max-w-xs">
              Explore fresh &amp;
              <br />
              stylish kicks
            </h2>
            <button className="mt-6 bg-[#3a4756] text-white text-sm font-semibold px-6 py-3 rounded-sm w-max hover:bg-[#2c3744] transition-colors">
              Shop Now »
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center bg-black text-white" style={{ minWidth: '400px' }}>
            <img
              alt="Smartwatch with red frame and black strap showing time 16:00"
              className="absolute left-10 top-16 w-32 h-32 object-contain z-20"
              src="https://storage.googleapis.com/a1aa/image/fbc09574-871c-4a7b-6608-70db7fc65f3b.jpg"
            />
            <img
              alt="Blue sneaker shoe side view with white sole"
              className="absolute left-24 top-20 w-72 h-36 object-contain z-30"
              src="https://storage.googleapis.com/a1aa/image/37777c1d-ab14-4145-ae3b-654617e6348d.jpg"
            />
            <img
              alt="Transparent circle behind sneaker"
              className="absolute left-44 top-24 w-28 h-28 rounded-full bg-white/30 z-10"
              src="https://storage.googleapis.com/a1aa/image/27c9d2a1-67fb-4a6d-d03c-f64aded367ed.jpg"
            />
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-b from-purple-500 to-blue-400 flex flex-col justify-center items-center text-white font-extrabold text-5xl leading-none tracking-tight" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
              <span>BLACK</span>
              <span>FRIDAY</span>
              <span className="text-sm font-normal mt-2 tracking-widest bg-pink-600 px-3 py-2 rounded-sm">
                SAVE UP TO 50%
              </span>
            </div>
            <div className="absolute bottom-6 left-8 flex space-x-2 z-40">
              {[1, 0.5, 0.5, 0.5].map((opacity, index) => (
                <span
                  key={index}
                  className={`w-4 h-4 rounded-full bg-pink-600`}
                  style={{ opacity }}
                />
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default memo(Banner)