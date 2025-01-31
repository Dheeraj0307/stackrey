import React from 'react'

const SectionHeading = ({ para }) => {
    return (
        <div className='flex flex-col items-center mb-8'>
            <h2 className='headings'>{para}</h2>
            <img src="/images/sections/Seperator.svg" alt="seprator" width={100} />
        </div>
    )
}
export default SectionHeading