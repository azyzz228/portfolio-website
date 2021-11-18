import React from 'react'

import tw from "tailwind-styled-components"

/*Importing images */
import css3 from '../images/css3.png'
import html5 from '../images/html5.png'
import js from "../images/javascript.png"
import react from "../images/react.png"

import python from "../images/python.png"
import django from "../images/django.png"
import djrest from "../images/djrest.png"
import r from "../images/r.png"


import uzbekistan from '../images/uzbekistan.png'
import russia from '../images/russia.png'
import china from "../images/china.png"
import uk from "../images/uk.png"

import pointright from '../images/pointright.png'
import lupa from '../images/lupa.png'
import trophy from '../images/trophy.png'
import SkillsImages from './SkillsImages'


const FeatureWrapper = tw.div`flex flex-row py-6 px-2 w-full`;
const FeatureTextWrapper = tw.div`flex flex-col justify-start md:pl-12 w-full space-y-10`;
const FeatureTitle = tw.p`text-2xl font-bold`;
const FeatureInfo = tw.p`text-lg text-gray-500`;
const Column = tw.div`flex flex-col w-full md:w-10/12 mx-auto py-4`;

function AboutMe() {
    return (
        <div className="">

            <div className=" w-full bg-white flex flex-col px-6">

                <Column>
                    <FeatureWrapper>
                        <img src={pointright} alt="" className="w-6 h-6 md:w-10 md:h-10" />

                        <FeatureTextWrapper>
                            <p className="font-thin text-3xl italic" id="skills">Skills</p>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 flex-wrap w-full border-b border-gray-200 pb-6">
                                <h1 className=" text-xl md:text-2xl font-bold">Frontend development</h1>

                                <div className="flex flex-row  space-x-5 ">
                                    <SkillsImages src={css3} alt="" className="" />
                                    <SkillsImages src={html5} alt="" />
                                    <SkillsImages src={js} alt="" />
                                    <SkillsImages src={react} alt="" />

                                </div>


                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 flex-wrap w-full border-b border-gray-200 pb-6">
                                <h1 className="text-xl md:text-2xl font-bold">Backend development</h1>

                                <div className="flex flex-row items-center  space-x-5 ">

                                    <SkillsImages src={python} alt="" className="w-16 h-16" />
                                    <SkillsImages src={r} alt="" className="w-16 h-16" />
                                    <SkillsImages src={django} alt="" className="w-20" />
                                    <SkillsImages src={djrest} alt="" className="w-24" />
                                </div>


                            </div>



                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 flex-wrap w-full border-b border-gray-200 pb-6">
                                <h1 className="text-xl md:text-2xl font-bold">Languages</h1>

                                <div className="flex flex-row items-center  space-x-5 ">

                                    <SkillsImages src={uzbekistan} alt="" className="w-16" />

                                    <SkillsImages src={russia} alt="" className="w-16" />

                                    <SkillsImages src={uk} alt="" className="w-16" />

                                    <SkillsImages src={china} alt="" className="w-16" />
                                </div>


                            </div>

                        </FeatureTextWrapper>
                    </FeatureWrapper>


                </Column>



                {/* Hackthons */}
                <Column>
                    <FeatureWrapper>
                        <img src={trophy} alt="" className="w-6 h-6 md:w-10 md:h-10" />

                        <FeatureTextWrapper>
                            <p className="font-thin text-3xl italic" id="hackathons">Hackathons</p>


                            {/*Hackathon 1 */}
                            <div className="flex flex-row justify-between items-baseline space-y-0 w-full pb-4 border-b border-gray-200">

                                <div className="flex flex-col w-full md:w-6/12">

                                    <div className=" flex flex-row items-center space-x-2">
                                        <h1 className=" text-xl md:text-2xl font-bold">HackUMBC 2021</h1>
                                        <p className="bg-yellow-400 font-semibold rounded-md px-1 ">WINNER</p>
                                    </div>
                                    <p className="block md:hidden">Oct. 29–31, 2021</p>

                                    <p className="py-6">My team and I built QuikServer in 36 hours. QuikServe (empowered by AI) is the mobile application for waiters that helps to take orders, generate the receipt, scan the receipt, split it, and generate QR code for payment.
                                    </p>

                                    <div className="flex flex-row items-center space-x-2 text-blue-400">
                                        <a href="https://devpost.com/software/quikserve" target="_blank">Learn more</a>
                                        <img src={lupa} alt="" className="w-4" />
                                    </div>
                                </div>

                                <p className="hidden md:block">Oct. 29–31, 2021</p>
                            </div>





                            {/*Hackathon 2 */}
                            <div className="flex flex-row justify-between items-baseline space-y-0 w-full pb-4 border-b border-gray-200">

                                <div className="flex flex-col w-full md:w-6/12">

                                    <div className=" flex flex-row items-center space-x-2">
                                        <h1 className=" text-xl md:text-2xl font-bold">PittChallenge</h1>
                                        <p className="bg-yellow-400 font-semibold rounded-md px-1 ">WINNER</p>
                                    </div>
                                    <p className="block md:hidden">Oct. 22–24, 2021</p>

                                    <p className="py-6">In a team of 4 we have developed mobile application that helps healthcare workers in developing countries to digitalize database of patients, take notes (transcribing is also available) and diagnose patients based on symptoms.</p>

                                    <div className="flex flex-row items-center space-x-2 text-blue-400">
                                        <a href="https://devpost.com/software/sheerai" target="_blank">Learn more</a>
                                        <img src={lupa} alt="" className="w-4" />
                                    </div>
                                </div>

                                <p className="hidden md:block">Oct. 22–24, 2021</p>
                            </div>






                            {/*Hackathon 3 */}
                            <div className="flex flex-row justify-between items-baseline space-y-0 w-full pb-4 border-b border-gray-200">

                                <div className="flex flex-col w-full md:w-6/12">

                                    <div className=" flex flex-row items-center space-x-2">
                                        <h1 className=" text-xl md:text-2xl font-bold">MakeUC by IEEE</h1>
                                        <p className="bg-yellow-400 font-semibold rounded-md px-1 ">WINNER</p>
                                    </div>
                                    <p className="block md:hidden">Oct. 9–10, 2021</p>

                                    <p className="py-6">In a team of 4 we have developed Recaipe. Recaipe is mobile application that helps people to find recipes of food based on what groceries they have. User takes the photo, then our app recognizes items from the photo and suggests recipes of food user can cook. We also added NFT marketplace for recipes where users can buy/sell their recipes.</p>

                                    <div className="flex flex-row items-center space-x-2 text-blue-400">
                                        <a href="https://devpost.com/software/recaipe" target="_blank">Learn more</a>
                                        <img src={lupa} alt="" className="w-4" />
                                    </div>
                                </div>

                                <p className="hidden md:block">Oct. 9–10, 2021</p>
                            </div>




                        </FeatureTextWrapper>
                    </FeatureWrapper>


                </Column>



            </div>


        </div>
    )
}

export default AboutMe
