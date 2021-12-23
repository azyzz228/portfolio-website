import React, { useState } from 'react'

function ProjectPassport() {

    const baseColor500 = "#0EA5E9"

    const baseColor100 = "#E0F2FE"
    const baseColor200 = "#BAE6FD"
    const baseColor300 = "#7DD3FC"
    const baseColor400 = "#38BDF8"
    const baseColor600 = "#0284C7"
    const baseColor700 = "#0369A1"
    const baseColor800 = "#075985"
    const baseColor900 = "#0C4A6E"

    return (
        <div className="px-24 pt-14 font-mulish">
            <h1 className="text-5xl text-gray-900 font-bold uppercase tracking-wider">1. Defining colors</h1>
            <h2 className="text-4xl text-gray-700">Choosing base colors and its shades</h2>

            <div className="flex flex-row my-16 space-x-64">

                <div className="flex flex-col justify-start  space-y-4">
                    <h3 className='text-3xl text-gray-800'>1. Choosing <span className=' font-semibold'>base</span> color</h3>
                    <button className={`px-5 py-2 text-white rounded-lg text-2xl`} style={{ backgroundColor: baseColor500 }}>GET STARTED</button>
                </div>

                <div className="flex flex-col py-8 px-6 max-w-xl rounded-lg border " style={{ backgroundColor: baseColor100, borderColor: baseColor300 }}>
                    <h2 className='text-xl font-bold' style={{ color: baseColor900 }}>This is a message alert that can help define shades. (lighest and darkest ones)</h2>
                    <p className='text-lg text-sky-600 '>Make sure you know how these changes affect you.</p>
                </div>

            </div>

            <div className="grid grid-cols-2 items-baseline ">
                <h1 className='text-2xl text-gray-700 mt-12'>Primary (base color)</h1>
                <div className="flex flex-row items-center justify-start  space-x-6">

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl " style={{ backgroundColor: baseColor900 }}>
                        </div>
                        <p>900</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12  rounded-xl " style={{ backgroundColor: baseColor800 }}>
                        </div>
                        <p>800</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12  rounded-xl " style={{ backgroundColor: baseColor700 }}>
                        </div>
                        <p>700</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12  rounded-xl " style={{ backgroundColor: baseColor600 }}>
                        </div>
                        <p>600</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl " style={{ backgroundColor: baseColor500 }}>
                        </div>
                        <p>500</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12  rounded-xl " style={{ backgroundColor: baseColor400 }}>
                        </div>
                        <p>400</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12  rounded-xl " style={{ backgroundColor: baseColor300 }}>
                        </div>
                        <p>300</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12  rounded-xl " style={{ backgroundColor: baseColor200 }}>
                        </div>
                        <p>200</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12  rounded-xl " style={{ backgroundColor: baseColor100 }}>
                        </div>
                        <p>100</p>
                    </div>


                </div>

                <div className="col-span-2 h-[2px] w-full bg-gray-300 mt-8"></div>

                <h1 className='text-2xl text-gray-700 mt-12'>Neutral (gray color)</h1>
                <div className="flex flex-row items-center justify-start  space-x-6">

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-900 rounded-xl ">
                        </div>
                        <p>900</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-xl ">
                        </div>
                        <p>800</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-700 rounded-xl ">
                        </div>
                        <p>700</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-600 rounded-xl ">
                        </div>
                        <p>600</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-500 rounded-xl ">
                        </div>
                        <p>500</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-400 rounded-xl ">
                        </div>
                        <p>400</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-xl ">
                        </div>
                        <p>300</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-xl ">
                        </div>
                        <p>200</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl ">
                        </div>
                        <p>100</p>
                    </div>


                </div>
                <div className="col-span-2 h-[2px] w-full bg-gray-300 mt-8"></div>


                <h1 className='text-2xl text-gray-700 mt-12'>Accent colors</h1>
                <div className="flex flex-row items-center justify-start  space-x-6">

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-900 rounded-xl ">
                        </div>
                        <p>900</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-800 rounded-xl ">
                        </div>
                        <p>800</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-700 rounded-xl ">
                        </div>
                        <p>700</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-600 rounded-xl ">
                        </div>
                        <p>600</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-500 rounded-xl ">
                        </div>
                        <p>500</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-400 rounded-xl ">
                        </div>
                        <p>400</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-300 rounded-xl ">
                        </div>
                        <p>300</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-200 rounded-xl ">
                        </div>
                        <p>200</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-100 rounded-xl ">
                        </div>
                        <p>100</p>
                    </div>


                </div>

                <div className=" my-8 col-start-2 flex flex-row items-center justify-start  space-x-6">

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-red-900 rounded-xl ">
                        </div>
                        <p>900</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-red-800 rounded-xl ">
                        </div>
                        <p>800</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-red-700 rounded-xl ">
                        </div>
                        <p>700</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-red-600 rounded-xl ">
                        </div>
                        <p>600</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-red-500 rounded-xl ">
                        </div>
                        <p>500</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-red-400 rounded-xl ">
                        </div>
                        <p>400</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-red-300 rounded-xl ">
                        </div>
                        <p>300</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-red-200 rounded-xl ">
                        </div>
                        <p>200</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-red-100 rounded-xl ">
                        </div>
                        <p>100</p>
                    </div>


                </div>

                <div className="  col-start-2 flex flex-row items-center justify-start  space-x-6">

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-900 rounded-xl ">
                        </div>
                        <p>900</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-800 rounded-xl ">
                        </div>
                        <p>800</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-700 rounded-xl ">
                        </div>
                        <p>700</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-600 rounded-xl ">
                        </div>
                        <p>600</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-500 rounded-xl ">
                        </div>
                        <p>500</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-400 rounded-xl ">
                        </div>
                        <p>400</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-300 rounded-xl ">
                        </div>
                        <p>300</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-200 rounded-xl ">
                        </div>
                        <p>200</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-xl ">
                        </div>
                        <p>100</p>
                    </div>


                </div>


            </div>



        </div>
    )
}

export default ProjectPassport
