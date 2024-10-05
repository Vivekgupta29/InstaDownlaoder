import React from 'react'
import { useUniversalContext } from '../Contexts/UniversalContext'

function InfoAboutTab() {
    const { ActiveTab, DataAboutTab } = useUniversalContext()
    return (
        <div className='Info w-full h-full'>
            {
                Object.keys(DataAboutTab).map((item, index) => (

                    ActiveTab === item ?
                        (
                            <>
                                <div className='heading font-montserrat p-10 text-4xl font-extrabold w-full'>
                                    {DataAboutTab[item].heading}
                                </div>
                                <div className='description px-10  text-gray-600 text-xl w-full'>
                                    {DataAboutTab[item].description}
                                </div>
                            </>
                        ) : "")
                )
            }
        </div>
    )
}

export default InfoAboutTab