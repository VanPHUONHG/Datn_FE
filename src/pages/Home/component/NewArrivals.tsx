import React from 'react'

const NewArrivals = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="relative flex-1 rounded-md overflow-hidden">
                    <img alt="Side view of a Nike running shoe with orange and black details hanging by laces against a dark blue background" className="w-full h-auto object-cover rounded-md" height="300" src="https://storage.googleapis.com/a1aa/image/019fcfc9-1cec-4918-cc1e-5ad182de1403.jpg" width="600" />
                    <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
                        <p
                            className="text-white font-extrabold text-lg md:text-xl tracking-widest"
                            style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
                        >
                            NIKE - JUST DO IT
                        </p>

                        <p className="text-white text-[8px] mt-1 font-normal">
                            SINCE 1972
                        </p>
                        <img alt="Just Do It Nike logo in white" className="absolute bottom-3 right-3 w-[50px] h-[20px] object-contain" height="20" src="" width="50" />
                    </div>
                </div>
                <div className="relative flex-1 rounded-md overflow-hidden">
                    <img alt="Nike running shoe glowing orange on the swoosh with stadium spotlights in the background" className="w-full h-auto object-cover rounded-md" height="300" src="https://storage.googleapis.com/a1aa/image/5e544e30-7827-4039-9d57-7fbab3122142.jpg" width="600" />
                    <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-center items-start px-6 pointer-events-none">
                        <h2 className="text-white font-extrabold text-5xl md:text-6xl leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
                            NIKE
                        </h2>
                        <p className="text-white text-xs tracking-widest mt-[-6px] mb-1">
                            N I T R O C H A R G E
                        </p>
                        <p className="text-white text-xs font-semibold leading-4">
                            IT PROCHARGE
                            <br />
                            BATTLE
                        </p>
                        <p className="text-white text-xs mt-1">
                            $ 299.99
                        </p>
                        <button aria-label="Shop Now" className="mt-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrivals