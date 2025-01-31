import React from 'react'
import SectionHeading from './SectionHeading'

const Features = () => {

    const arrayOfData = [
        <>Sign up for a Stackry account and U.S. address. It’s FREE and so is our membership</>,
        <> <b>Pay no U.S. sales tax when you shop</b> – a savings of up to 7.25% on your purchases</>,
        <> <b>Store packages FREE </b > at Stackry for up to 45 days</>,
        <>Consolidate multiple items or re-pack a single box and<b> save BIG on shipping</b></>,
        <>100% transparent pricing. <b>No hidden fees.</b></>
    ]


    return (
        <section className='py-9 bg-[#052d4b]'>
            <div className='containerr'>
                <SectionHeading para={'SAVE and only pay for what you use, when you use it'} />

                <div className='grid grid-cols-[repeat(5,1fr)] gap-4 '>
                    {Array.from(arrayOfData, (v, i) => (
                        <div key={i}>
                            <img src={`/images/features/${i + 1}.webp`} alt="imgs" />
                            <p className='text-lg text-white '>
                                {v}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Features