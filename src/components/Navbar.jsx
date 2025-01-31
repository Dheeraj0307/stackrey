import React from 'react'
import { FiPhone } from "react-icons/fi";
import { CiAt, CiGlobe } from "react-icons/ci";

const Navbar = () => {
    return (
        <nav className='shadow-[0_2px_10px_#0000000d]'>

            <div className='flex items-center justify-between  px-8 py-4 bg-[#052d4b] text-white' >
                <div className='flex gap-4'>
                    <div className='flex items-center gap-2 text-sm'>
                        <span><FiPhone color='#48bbd5' size={20} /></span>
                        <span>+1 781-491-0874</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <span><CiAt color='#48bbd5' size={20} /></span>
                        <span className='cursor-pointer'>support@stackry.com</span>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='flex items-center gap-2'>
                        <span><CiGlobe color='#48bbd5' size={20} /></span>
                        <span className='cursor-pointer'>Shipping Calculator</span>
                    </div>
                    <div>
                        <select className='bg-[#052d4b] text-white border-none w-20 cursor-pointer'>
                            <option value="#">English</option>
                            <option value="#">Portuques</option>
                            <option value="#">Hindi</option>
                            <option value="#">Punjabi</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex px-8'>
                    <div className='cursor-pointer'>
                        <img src="/images/logo/logo.svg" alt="logo" className='w-fit h-[60px]' />
                    </div>

                    <ul className='flex flex-1 items-center justify-end gap-[20px] capitalize font-medium pr-[20px]'>
                        <li className='nav-list'>getting started</li>
                        <li className='nav-list'>pricing & shipping</li>
                        <li className='nav-list'>resources & help</li>
                        <li className='nav-list'>stackery for business</li>
                    </ul>

                    <div className='flex items-center justify-end gap-4'>
                        <button className='nav-btn-type1'>sign up</button>
                        <button className='nav-btn-type2'>login</button>
                    </div>

                </div>

            </div>


        </nav>

    )
}

export default Navbar