import React from 'react'

const Hero = () => {


    return (
        <div className='py-9'>
            <div className='containerr'>

                <div className='flex gap-4 py-5'>
                    <div className='flex flex-col gap-6 w-[55%]'>
                        <h1 className='text-[40px]  text-[#0087db] font-thin leading-[43px] '>
                            Welcome to Stackry, the world’s most trusted international package forwarder
                        </h1>
                        <p className='text-xl'>
                            Stackry provides a free U.S. based address for all your worldwide shipping needs. Sign up and use your Stackry address when checking out at any U.S. store.
                        </p>
                        <div className='flex justify-start gap-4'>
                            <button className='nav-btn-type1 text-xl'>How does Stackry work?</button>
                            <button className='nav-btn-type2 text-xl'>Estimate your shipping costs</button>
                        </div>
                    </div>

                    <div className='w-[45%] self-center justify-items-center'>
                        <img src="/images/hero/hero-pic.webp" alt="hero-pic" className='max-w-[350px]' />
                    </div>
                </div>

                <div className='p-4 flex items-center gap-4 flex-wrap'>
                    <div className='flex-1'>
                        <p className='text-2xl font-semibold pl-10'>20,000+ five star reviews</p>
                        <img width='100%' className='max-w-[350px]' src="/images/hero/ratings.svg" alt="ratings" />
                    </div>
                    <p className='w-fit  '>Rated ‘Excellent’ by</p>
                    <img className='w-[110px]' src="/images/hero/1.webp" alt="img" />
                    <img className='w-[110px]' src="/images/hero/google.webp" alt="img" />
                    <img className='w-[110px]' src="/images/hero/sitejabber.webp" alt="img" />

                </div>
            </div>

        </div>
    )

}

export default Hero