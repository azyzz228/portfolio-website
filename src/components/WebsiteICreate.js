import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import DotsSvg from './DotsSvg'
function WebsiteICreate() {
    return (
        <div className='  font-mulish text-white bg-white py-20 sm:py-40 relative  '>
            <div className="flex flex-col sm:flex-row items-center justify-center bg-white">

                <div className="absolute hidden md:block top-8 right-8">
                    <DotsSvg />
                </div>

                <div className=" text-3xl text-center sm:text-left font-semibold italic font-poppins sm:pr-24 sm:pl-16 text-slate-500 z-40 mb-12 ">
                    <p className='  '>I build</p>
                    <p className='  '>Websites</p>
                    <p className=''>that are</p>
                </div>


                <div className="py-10 sm:py-12 px-16 sm:px-24 rounded-lg shadow-lg uppercase tracking-wide space-y-16 sm:-my-24 bg-white text-black border-t-8 border-t-sky-500 sm:z-40 ">

                    <div className="flex flex-row items-center space-x-12 ">
                        <CheckCircleIcon className='w-6 text-sky-500' />
                        <p>Responsive</p>
                    </div>

                    <div className="flex flex-row items-center space-x-12 ">
                        <CheckCircleIcon className='w-6 text-sky-500' />
                        <p>Fast</p>
                    </div>

                    <div className="flex flex-row items-center space-x-12 ">
                        <CheckCircleIcon className='w-6 text-sky-500' />
                        <p>Reliable</p>
                    </div>

                    <div className="flex flex-row items-center space-x-12 ">
                        <CheckCircleIcon className='w-6 text-sky-500' />
                        <p>Secure</p>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default WebsiteICreate
