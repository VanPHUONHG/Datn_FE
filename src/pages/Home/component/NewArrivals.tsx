import React from 'react'

const NewArrivals = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Box 1 */}
                <div className="group relative w-full h-[280px] rounded-md overflow-hidden cursor-pointer">
                    <img
                        alt="Nike running shoe side view"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        src="https://storage.googleapis.com/a1aa/image/019fcfc9-1cec-4918-cc1e-5ad182de1403.jpg"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500 ease-in-out" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:opacity-90">
                        <p className="font-extrabold text-lg md:text-xl tracking-widest" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
                            NIKE - JUST DO IT
                        </p>
                        <p className="text-[8px] mt-1 font-normal">SINCE 1972</p>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="group relative w-full h-[280px] rounded-md overflow-hidden cursor-pointer">
                    <img
                        alt="Nike running shoe with glowing swoosh"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        src="https://storage.googleapis.com/a1aa/image/5e544e30-7827-4039-9d57-7fbab3122142.jpg"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500 ease-in-out" />
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-6 text-white z-10 transition-all duration-500 ease-in-out group-hover:translate-y-[-4px] group-hover:opacity-90">
                        <h2 className="font-extrabold text-4xl md:text-5xl" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
                            NIKE
                        </h2>
                        <p className="text-xs tracking-widest mt-[-6px] mb-1">N I T R O C H A R G E</p>
                        <p className="text-xs font-semibold leading-4">
                            IT PROCHARGE
                            <br />
                            BATTLE
                        </p>
                        <p className="text-xs mt-1">$ 299.99</p>
                        <button className="mt-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded pointer-events-auto shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrivals
