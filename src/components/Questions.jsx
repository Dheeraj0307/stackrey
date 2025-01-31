import React, { useState } from 'react'
import SectionHeading from './SectionHeading'

const Questions = () => {

    const [state, setState] = useState(false)

    return (
        <section className='py-9'>
            <div className="containerr">
                <SectionHeading para={'Your questions answered'} />

                <div id='div1' className='border-t transition delay-150 duration-300 ease-in-out '  >
                    <div onClick={() => setState(!state)}>
                        <div className='flex justify-between py-1'>
                            <p>Which shipping carriers does Stackry work with?</p>
                            <span>{`<`}</span>
                        </div>
                        <p style={state ? { height: '100%', visibility: 'visible' } : { height: '0px', visibility: 'hidden' }}>
                            Stackry customers can ship with DHL, FedEx, Aramex and the U.S. Postal Service. See Stackry's international shipping options page for more detail on service levels.Stackry customers can ship with DHL, FedEx, Aramex and the U.S. Postal Service. See Stackry's international shipping options page for more detail on service levels.
                        </p>
                    </div>
                    <div onClick={() => setState(!state)}>
                        <div className='flex justify-between py-1'>
                            <p>Which shipping carriers does Stackry work with?</p>
                            <span>{`<`}</span>
                        </div>
                        <p style={state ? { height: '100%', visibility: 'visible' } : { height: '0px', visibility: 'hidden' }}>
                            Stackry customers can ship with DHL, FedEx, Aramex and the U.S. Postal Service. See Stackry's international shipping options page for more detail on service levels.Stackry customers can ship with DHL, FedEx, Aramex and the U.S. Postal Service. See Stackry's international shipping options page for more detail on service levels.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Questions