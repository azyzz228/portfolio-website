import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import profilephoto from '../images/profilephoto.png'
import { Link as ScrollLink } from 'react-scroll'
import { MailIcon } from '@heroicons/react/solid'

const NavWrapper = tw.div`hidden lg:flex justify-end md:text-sm lg:text-base px-10 pt-8 pb-24 font-mulish text-slate-500`;
const GrayBg = tw.div`
bg-slate-100
sm:px-16 px-4 pb-16
`;
const Container = tw.div`
rounded-lg shadow-lg bg-white relative overflow-hidden container mx-auto
`;

const HeroImageBg = tw.div`
flex flex-row justify-center items-center px-2 pt-2  rounded-full mt-6 sm:mt-12
bg-sky-500 shadow-inner overflow-hidden
`
function HeroNew() {
    const [over, setOver] = useState(false)
    const isOverFunc = () => (setOver(!over))
    return (
        <GrayBg>

            <ScrollLink to="contact" smooth={true} duration={1000} className='tracking-wider underline cursor-pointer'>
                <MailIcon className="fixed bottom-12 right-10 md:bottom-12 md:right-28 z-50 w-12 h-12 p-3 rounded-full text-sky-500 bg-white border border-sky-400  "></MailIcon>
            </ScrollLink>


            <Container>

                <NavWrapper>

                    <div className="hidden lg:flex flex-row items-center space-x-2 md:space-x-5 xl:space-x-12">

                        <ScrollLink to="skills" smooth={true} duration={1000} className="cursor-pointer hover:text-slate-900">Skills</ScrollLink>

                        <ScrollLink to="hackathons" smooth={true} duration={1000} className="cursor-pointer hover:text-slate-900">Hackathons</ScrollLink>

                        <ScrollLink to="services" smooth={true} duration={1000} className="cursor-pointer hover:text-slate-900">What do I do</ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={1000} className="cursor-pointer hover:text-slate-900">Projects</ScrollLink>
                    </div>
                </NavWrapper>

                <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-12 sm:px-16 lg:pl-32 lg:pr-24 relative">

                    <div className=" my-20  md:pr-24 sm:mb-16 z-10">
                        <p className='text-3xl sm:text-4xl font-mulish font-normal text-slate-400 '>I am</p>
                        <h1 className='text-4xl sm:text-5xl font-semibold font-poppins text-slate-800'>Aziz Abdullaev</h1>
                        <h3 className='pt-4 pb-8 text-lg sm:text-xl font-poppins text-slate-600'>Freelance UI designer, Web developer, and Blue Devil based in Durham, North Carolina</h3>

                        <ScrollLink to="contact" smooth={true} duration={1000}>

                            <button className='bg-sky-500 px-6 py-2 rounded-xl text-white font-semibold tracking-wide font-mulish shadow-lg hover:bg-sky-600 active:bg-sky-900 active:shadow-inner'>Contact me</button>
                        </ScrollLink>


                    </div>

                    <div className=" max-w-xs -mx-4 lg:max-w-sm flex flex-row-reverse lg:flex-row items-end  relative">
                        <svg viewBox="0 0 200 200" className='absolute lg:hidden' xmlns="http://www.w3.org/2000/svg">
                            <path fill="#0EA5E9" d="M68.2,-43.1C78.8,-21,71.2,7.8,56.8,26C42.4,44.2,21.2,51.7,-2.7,53.3C-26.7,54.9,-53.3,50.5,-65.3,33.7C-77.3,16.9,-74.7,-12.3,-61.3,-35.9C-48,-59.6,-24,-77.6,2.4,-79C28.8,-80.4,57.6,-65.1,68.2,-43.1Z" transform="translate(120 120)" />
                        </svg>
                        <img src={profilephoto} alt="" className=" w-10/12 sm:w-full  -mb-7 z-30 " />


                        <div className="flex flex-col items-center text-xl text-slate-300 sm:text-sky-200 py-24 pl-8 pr-8  space-y-6 z-30">
                            <a href="https://instagram.com/aziz_develops" target="_blank" rel="noreferrer">
                                <i class="fab fa-instagram hover:text-sky-50 transform duration-200 hover:scale-110 cursor-pointer"></i>
                            </a>

                            <a href="https://github.com/azyzz228" target="_blank" rel="noreferrer">
                                <i class="fab fa-github hover:text-sky-50 transform duration-200 hover:scale-110 cursor-pointer"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/aziz-abdullaev/" target="_blank" rel="noreferrer" >
                                <i class="fab fa-linkedin-in hover:text-sky-50 transform duration-200 hover:scale-110 cursor-pointer"></i>
                            </a >

                        </div >
                        <div className="w-[900px] h-[900px] bg-sky-500 rounded-full absolute hidden lg:block bottom-[-500px] -right-[400px] z-0 "></div>
                    </div >



                </div >
            </Container >
        </GrayBg >

    )
}

export default HeroNew
