import React from 'react'
import dkcc from '../images/dkcc.png'
import nevskiy from '../images/nevskiy.png'
import addstar from '../images/addstar.png'

import eyes from '../images/eyes.png'
import paper from '../images/paper.png'

function ProjectGallery() {
    return (
        <div id="projects">
            <div className="w-10/12 mx-auto my-10">

                <h1 className="text-3xl w-10/12 mx-auto md:pl-6 pb-4 border-b border-gray-200">Projects</h1>

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 py-16 space-y-8 md:space-y-0">

                    <div className="flex flex-col border border-blue-500  justify-start items-start px-4 shadow-md rounded-xl">
                        <img src={dkcc} alt="" className="w-full rounded-xl -mt-6 mx-auto shadow-lg" />
                        <h1 className="text-xl mt-6 font-semibold">Website for college club</h1>
                        <p className="text-base font-light mt-1">I designed and developed fully responsive website from scratch. The websites showcases the work college club does.
                        </p>


                        <div className="flex flex-col items-center mt-6 mb-2">
                            <a href="https://dkccdemo.netlify.app/" target="_blank">
                                <div className="flex flex-row items-center px-2 py-1 space-x-2 border border-gray-200 rounded-lg transform scale-100 hover:scale-110 ease-in-out duration-200 cursor-pointer mb-2 bg-blue-700">
                                    <p className="italic text-white ">Demo</p>
                                    <img src={eyes} alt="" className="w-6" />
                                </div>
                            </a>

                            <a href="https://github.com/azyzz228/dkcc" target="_blank">
                                <div className="flex flex-row items-center px-2 py-1 space-x-2 border border-gray-200 rounded-lg transform scale-100 hover:scale-110 ease-in-out duration-200 cursor-pointer mb-4 bg-blue-700">
                                    <p className="italic text-white ">Code</p>
                                    <img src={paper} alt="" className="w-6" />
                                </div>
                            </a>
                        </div>

                    </div>

                    <div className="flex flex-col border border-blue-500 justify-start items-start px-4 shadow-md rounded-xl">
                        <img src={nevskiy} alt="" className="w-full rounded-xl -mt-6 mx-auto shadow-lg" />
                        <h1 className="text-xl mt-6 font-semibold">Residence building website</h1>
                        <p className="text-base font-light  mt-1">Developed from existing design. Added features: contact form with email notification, apartment availability management via admin panel, parking spots availability management system. Note: not mobile responsive.</p>


                        <div className="flex flex-col items-center mt-6 mb-2">
                            <a href="http://email1for1bsh.pythonanywhere.com/" target="_blank">
                                <div className="flex flex-row items-center px-2 py-1 space-x-2 border border-gray-200 rounded-lg transform scale-100 hover:scale-110 ease-in-out duration-200 cursor-pointer mb-4 bg-blue-700">
                                    <p className="italic text-white ">Demo</p>
                                    <img src={eyes} alt="" className="w-6" />
                                </div>
                            </a>

                            <a href="https://github.com/azyzz228/nevskiy" target="_blank">
                                <div className="flex flex-row items-center px-2 py-1 space-x-2 border border-gray-200 rounded-lg transform scale-100 hover:scale-110 ease-in-out duration-200 cursor-pointer mb-4 bg-blue-700">
                                    <p className="italic text-white ">Code</p>
                                    <img src={paper} alt="" className="w-6" />
                                </div>
                            </a>
                        </div>
                    </div>





                    <div className="flex flex-col  justify-center items-center px-4 shadow-md rounded-xl ">



                        <p className=" text-3xl md:text-4xl py-8">Your next project...</p>

                    </div>






                </div>

            </div>
        </div>
    )
}

export default ProjectGallery
