import React, { useState } from 'react'
import { useUniversalContext } from '../Contexts/UniversalContext'

function InstaTabs() {

    const { ActiveTab, setActiveTab, handleActiveTab, DataAboutTab } = useUniversalContext();

    return (
        <div className='h-12 bg-gray-300 w-full flex items-center justify-start'>
            {
                Object.keys(DataAboutTab).map((item, index) => (
                    <div key={index} className={` h-full w-full flex items-center justify-center cursor-pointer
                    ${ActiveTab === item.toLowerCase() ? "bg-white" : ""}
                    `}
                        onClick={() => handleActiveTab(item)}
                    >
                        <i class={DataAboutTab[item].logo}></i>&nbsp;{item.toUpperCase()}
                    </div>
                ))
            }
        </div>
    )
}

export default InstaTabs