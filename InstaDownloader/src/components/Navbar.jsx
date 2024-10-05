import React from 'react'
import InflactLogo from '../assets/InflactLogo.svg'

function Navbar() {
    return (
        <div className='w-full h-[100px] flex justify-between items-center'>
            <img src={InflactLogo} alt="Inflact Logo" className="h-12" />
            <div className='flex gap-12'>
                {
                    ["General", "Pricing", "Services", "Tools", "Lab"].map((item, index) => (
                        <div className='cursor-pointer'>
                            {item}
                        </div>
                    ))
                }
            </div>
            <div className='flex gap-3'>
                <button className='hover:bg-gray-400 rounded-lg px-10 py-2 border-[1px] border-gray-400 uppercase font-bold transition-all duration-200'>Sign In</button>

                <button className='text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg px-10 py-2 border-[1px] border-blue-600 uppercase font-bold transition-all duration-200'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar