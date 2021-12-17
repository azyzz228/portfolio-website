import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import profilephoto from '../images/profilephoto.png'
import wavinghand from '../images/wavinghand.png'
import lamp from '../images/lamp.png'

import pointdown from '../images/pointdown.png'
import { Link as ScrollLink } from 'react-scroll'
import Parallax from 'react-rellax'
import { MailIcon } from '@heroicons/react/solid'

const NavWrapper = tw.div`flex md:text-sm lg:text-base flex-row justify-between items-center w-full px-10 py-4`;
const GrayBg = tw.div`
bg-gray-100
sm:px-16 px-4 pb-16
`;
const Container = tw.div`
rounded-lg shadow-lg bg-white relative overflow-hidden 
`;

const HeroImageBg = tw.div`
flex flex-row justify-center items-center px-2 pt-2  rounded-full mt-6 sm:mt-12
bg-gradient-to-l from-blue-200 to-pink-200 overflow-hidden
`
function Hero() {
    const [over, setOver] = useState(false)
    const isOverFunc = () => (setOver(!over))
    return (
        <GrayBg>
            <ScrollLink to="contact" smooth={true} duration={1000} className='tracking-wider underline cursor-pointer'>
                <MailIcon className="fixed bottom-12 right-10 md:bottom-12 md:right-28 z-50 w-12 h-12 p-3 rounded-full text-sky-500 bg-white border border-sky-400  "></MailIcon>
            </ScrollLink>


            <Container>
                <div className="blobber hidden sm:block absolute -bottom-12 -left-12 text-transparent text-blue-200 ">
                    <div className=" w-full absolute h-full flex flex-col justify-center items-center text-black font-mono bottom-4 group" onMouseEnter={isOverFunc} onMouseLeave={isOverFunc}>
                        <img src={lamp} className={`w-16 mb-2 transform ease-in-out duration-300 scale-100 group-hover:scale-110 ${over ? 'opacity-0' : 'opacity-100'}  `} alt="" />
                        <p className={`leading-5 transform ease-in-out duration-300 ${over ? 'opacity-0' : 'opacity-100'}`}>Got a project?</p>
                        <ScrollLink to="contact" smooth={true} duration={1000} className={`tracking-wider underline cursor-pointer transform ease-in-out  duration-200 ${over ? '-translate-y-9 p-3 bg-white rounded-md' : ''}`}>
                            let's talk
                        </ScrollLink>

                    </div>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-64 h-64
                    ">
                        <path fill="currentColor" d="M37.9,-67.3C50.7,-58.3,63.8,-51.3,73.5,-40.4C83.2,-29.6,89.7,-14.8,88.9,-0.4C88.1,13.9,80.2,27.8,71.7,40.9C63.2,53.9,54.2,66.2,42.2,75.1C30.2,84,15.1,89.7,0.7,88.5C-13.7,87.3,-27.5,79.4,-41.3,71.5C-55.1,63.6,-69.1,55.7,-75,43.8C-80.9,31.9,-78.8,16,-77.5,0.7C-76.2,-14.5,-75.8,-29,-69.7,-40.7C-63.7,-52.4,-52.2,-61.4,-39.6,-70.6C-27.1,-79.8,-13.5,-89.2,-0.5,-88.4C12.6,-87.5,25.1,-76.4,37.9,-67.3Z" transform="translate(100 100)" />
                    </svg>

                </div>

                <NavWrapper>
                    <a href="mailto:aziz.abdullaev@protonmail.ch">
                        <div className="flex flex-row items-center justify-center space-x-4">
                            <i class="far fa-envelope"></i>
                            <p>aziz.abdullaev@protonmail.ch</p>
                        </div>
                    </a>
                    <div className="hidden md:flex flex-row items-center space-x-2 md:space-x-5 xl:space-x-12">

                        <ScrollLink to="skills" smooth={true} duration={1000} className="cursor-pointer hover:underline">Skills</ScrollLink>

                        <ScrollLink to="hackathons" smooth={true} duration={1000} className="cursor-pointer hover:underline">Hackathons</ScrollLink>

                        <ScrollLink to="services" smooth={true} duration={1000} className="cursor-pointer hover:underline">What do I do</ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={1000} className="cursor-pointer hover:underline">Projects</ScrollLink>
                    </div>
                </NavWrapper>

                <div className="flex flex-col justify-center items-center">

                    <HeroImageBg>

                        <img src={profilephoto} alt="" className="w-28 filter  -mb-10 ml-2" />

                    </HeroImageBg>

                    <div className="flex flex-row space-x-1 text-lg font-bold ">
                        <p>Hi, I'm Aziz</p>
                        <img src={wavinghand} alt="" className="w-6 h-6 animate-wiggle" />
                    </div>


                    <div className="w-2/4 flex flex-wrap justify-center items-center py-4" style={{ textAlign: 'center' }}>
                        <Parallax speed={-0.5} >
                            <p className=" text-3xl sm:text-5xl font-bold">
                                Building digital<br /> products, services, and experiences.
                            </p>
                        </Parallax>
                    </div>


                    <div className="w-10/12 sm:w-5/12 mt-2 text-base sm:text-lg flex flex-wrap justify-center items-center" style={{ textAlign: 'center' }}>
                        <p>A <span className="font-bold">Website designer</span> and <span className="font-bold">Developer</span> based in NC, <br />
                            I specialize in UI/UX Design, Frontend development, <br /> and Web applications. </p>
                    </div>

                    <div className=" my-8 flex flex-col justify-center items-center">
                        <p className="text-gray-500">Explore more</p>
                        <img src={pointdown} alt="" className="w-10 my-2 mb-6 mt-4 animate-bounce" />
                    </div>




                </div>
            </Container>
        </GrayBg>

    )
}

export default Hero
