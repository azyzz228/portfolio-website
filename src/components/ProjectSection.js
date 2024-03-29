import React from 'react'
import nevskiy from "../images/nevskiymac.png"
import tailwindsite from "../images/image1.png"
import DotsSvg from './DotsSvg'
import { ChevronRightIcon } from '@heroicons/react/outline'

function ProjectSection() {
    return (
        <div className="bg-slate-50" id='projects'>
            <div className=' px-4 md:px-16 lg:px-24 py-12 font-mulish '>
                <p className='text-2xl text-slate-900 text-center my-8 sm:my-12'>Portfolio</p>

                <div className="container flex flex-col-reverse sm:flex-row justify-center items-center shadow-xl border-l-4 border-sky-500 z-40 relative bg-white ">

                    <div className=" flex flex-col max-w-sm py-16 lg:py-24 flex-shrink pl-6 pr-6 sm:pl-10 sm:pr-0 lg:pl-16 ">
                        <h1 className='text-2xl lg:text-3xl font-bold text-slate-500 mb-8 lg:mb-12'>Nevskiy</h1>
                        <p className='text-base lg:text-lg text-slate-900'>I have built a website for construction company with parking and apartment availability management from admin panel. The website is built using Django. <span className='italic'>Not mobile responsive</span> </p>


                        <div className="flex flex-row items-center space-x-12 mt-10 lg:mt-16  ">
                            <a href="http://email1for1bsh.pythonanywhere.com/" target="_blank" rel='noreferrer'>
                                <p className='  text-slate-900 border-b-2 hover:border-sky-500  '>See the demo</p>
                            </a>

                            <a href="https://github.com/azyzz228/nevskiy3" target="_blank" rel='noreferrer'>
                                <p className=' text-slate-600 hover:text-slate-900 '>Source code</p>
                            </a>
                        </div>
                    </div>

                    <div className=" max-w-3xl  ">
                        <img src={nevskiy} alt="" />
                    </div>


                </div>


                <div className="container flex flex-col-reverse sm:flex-row-reverse my-24 justify-center items-center shadow-xl border-r-4 border-sky-500 relative bg-white">
                    <div className="absolute -top-20 -left-12 -z-30 ">
                        <DotsSvg />
                    </div>
                    <div className=" flex flex-col max-w-sm py-16 lg:py-24  flex-shrink
                    pl-6 pr-6 sm:pr-10 sm:pl-0 lg:pr-16
                    ">
                        <h1 className='text-2xl lg:text-3xl font-bold text-slate-500 mb-8 lg:mb-12'>Bookmark website</h1>
                        <p className='text-base lg:text-lg text-slate-900'>I have developed fully responsive landing page website from existing design using TailwindCSS.</p>

                        <div className="flex flex-col space-y-12">
                            <div className="flex flex-row items-center space-x-12 mt-8 md:mt-16  ">
                                <a href="https://tailwindsite.pythonanywhere.com/" target="_blank" rel='noreferrer'>
                                    <p className='  text-slate-900 border-b-2 hover:border-sky-500  '>See the demo</p>
                                </a>


                                <a href="https://github.com/azyzz228/tailwindsite" target="_blank" rel='noreferrer'>
                                    <p className=' text-slate-600 hover:text-slate-900 '>Source code</p>

                                </a>
                            </div>

                            <a href="https://github.com/azyzz228" target="_blank" rel='noreferrer' className='flex flex-row items-center justify-center space-x-1 text-slate-600 hover:text-slate-900'>
                                <span className=''>See more</span>
                                <ChevronRightIcon className='w-5 h-5 -mb-1' />
                            </a>
                        </div>

                    </div>

                    <div className=" max-w-3xl  ">
                        <img src={tailwindsite} alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProjectSection
