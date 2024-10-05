import React from 'react'
import { useUniversalContext } from '../Contexts/UniversalContext'
import InfoAboutTab from './InfoAboutTab'

function SelectedTabFunction() {

    const { ActiveTab, DataAboutTab, ActiveSubtab, setActiveSubtab, handleActiveSubtab } = useUniversalContext()

    const hasSubtabs = DataAboutTab[ActiveTab]?.DataAboutSubTab && Object.keys(DataAboutTab[ActiveTab]['DataAboutSubTab']).length > 0;

    return (
        <>
            <InfoAboutTab />
            {
                hasSubtabs && (
                    <>
                        <div className='MainFunction w-full uppercase flex mt-10'>
                            <div className='px-10 py-5'>
                                Download:
                            </div>
                            {
                                Object.keys(DataAboutTab[ActiveTab]['DataAboutSubTab']).map((item, index) => (
                                    <div key={index} className={` flex items-center justify-center px-10 py-5 min-w-[150px] cursor-pointer
                            ${ActiveSubtab === item ? "bg-gray-300" : ""} `}
                                        onClick={() => handleActiveSubtab(item)}
                                    >
                                        <i class={DataAboutTab[ActiveTab]['DataAboutSubTab'][item]['logo']}></i>&nbsp;{item}
                                    </div>
                                ))
                            }
                        </div>

                        <div className='bg-gray-300 w-full min-h-[100px] flex item-center justify-center p-5'>
                            <div className='flex gap-5 justify-between items-center px-5 w-full'>

                                <i className="ri-link-m text-2xl pt-5 text-blue-600"></i>

                                <input type="text" className='w-1/2 bg-transparent border-b-2 border-blue-600 focus:border-blue-400 outline-0 text-xl h-full pt-5 transition-all duration-300' />

                                <button className='w-1/2 py-4 bg-blue-600  text-white font-bold uppercase rounded-lg'> <i class="ri-download-2-fill"> </i>Download {ActiveSubtab}</button>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default SelectedTabFunction