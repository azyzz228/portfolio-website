import React from 'react'
import designer from '../images/designer.png'
import gear from '../images/gear.png'
import coder from '../images/coder.png'


function WhatCanDo() {
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse md:items-center justify-between w-full md:w-10/12  mx-auto px-2 py-8 md:py-16" id="services">
            <div className="flex-1 space-y-12">

                <div className="flex flex-row px-8 md:px-4">
                    <img src={designer} alt="" className="w-12 h-12 mr-12" />

                    <div className="flex flex-col justify-start lg:pr-16">
                        <p className="tite text-xl font-bold pb-4">User Interface Design</p>
                        <p className="description text-lg text-gray-500">
                            I can design and develop selling website that you won't be ashamed to share with the world.
                        </p>
                    </div>
                </div>



                <div className="flex flex-row px-8 md:px-4">
                    <img src={coder} alt="" className="w-12 h-12 mr-12" />

                    <div className="flex flex-col justify-start lg:pr-16">
                        <p className="tite text-xl font-bold pb-4">Frontend development</p>
                        <p className="description text-lg text-gray-500">I can develop website from existing design, correct bugs, redesign the website. </p>
                    </div>
                </div>



                <div className="flex flex-row px-8 md:px-4">

                    <img src={gear} alt="" className="w-12 h-12 mr-12 animate-spin-slow " />


                    <div className="flex flex-col justify-start lg:pr-16">
                        <p className="tite text-xl font-bold pb-4">Web applications</p>
                        <p className="description text-lg text-gray-500">I can also help you develop any application you want: CRM system, online shop, blog.</p>
                    </div>
                </div>

            </div>

            <div className="flex-1 text-4xl md:text-6xl px-6 2xl:pl-40 font-extrabold mb-16">
                <div className="flex flex-col items-center md:items-start">
                    <p>Turning Ideas </p>

                    <div className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-300 to-pink-300">
                        <p className="">into products <span className="text-black">is</span></p>
                    </div>
                    <div className=" flex flex-row justify-start items-center">
                        <p>My expertise</p>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default WhatCanDo
