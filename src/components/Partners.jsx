import React from 'react'
import SectionHeading from './SectionHeading'

const Partners = () => {

    const images = ['']

    return (
        <section className='py-9'>
            <div className='containerr'>
                <SectionHeading para={'Shop any U.S. retailer'} />

                <div className='grid grid-cols-[repeat(6,1fr)] gap-1'>
                    {Array.from({ length: 18 }, (v, i) => (
                        <div key={i} className='group h-40 flex items-center justify-center hover:bg-black bg-[#f0f3f4]  '>
                            <img src={`/images/logo/${i + 1}.svg`} alt={`imageNo${i}`} className='group-hover:invert' />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Partners