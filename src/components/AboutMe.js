import React from 'react'
import pointright from '../images/pointright.png'
import tw from "tailwind-styled-components"


const FeatureWrapper = tw.div`flex flex-row py-6 px-2 `;
const FeatureTextWrapper = tw.div`flex flex-col justify-start pl-12`;
const FeatureTitle = tw.p`text-lg font-bold`;
const FeatureInfo = tw.p`text-lg text-gray-500`;
const Column = tw.div`flex flex-col w-full md:w-5/12 `;

function AboutMe() {
    return (
        <div className="">
            <h1 className="text-3xl font-bold pt-6 pl-48" >About me</h1>
            <div className=" w-full bg-white flex flex-col md:flex-row px-6 justify-evenly">

                <Column>
                    <FeatureWrapper>
                        <img src={pointright} alt="" className="w-10 h-10" />

                        <FeatureTextWrapper>
                            <FeatureTitle className="text-lg font-bold">Frontend development</FeatureTitle>
                            <FeatureInfo className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum, cum corporis magnam possimus maiores?</FeatureInfo>
                        </FeatureTextWrapper>
                    </FeatureWrapper>


                    <FeatureWrapper>
                        <img src={pointright} alt="" className="w-10 h-10" />

                        <FeatureTextWrapper>
                            <FeatureTitle className="text-lg font-bold">Frontend development</FeatureTitle>
                            <FeatureInfo className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum, cum corporis magnam possimus maiores?</FeatureInfo>
                        </FeatureTextWrapper>
                    </FeatureWrapper>

                </Column>


                <Column>
                    <FeatureWrapper>
                        <img src={pointright} alt="" className="w-10 h-10" />

                        <FeatureTextWrapper>
                            <FeatureTitle className="text-lg font-bold">Frontend development</FeatureTitle>
                            <FeatureInfo className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum, cum corporis magnam possimus maiores?</FeatureInfo>
                        </FeatureTextWrapper>
                    </FeatureWrapper>


                    <FeatureWrapper>
                        <img src={pointright} alt="" className="w-10 h-10" />

                        <FeatureTextWrapper>
                            <FeatureTitle className="text-lg font-bold">Frontend development</FeatureTitle>
                            <FeatureInfo className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum, cum corporis magnam possimus maiores?</FeatureInfo>
                        </FeatureTextWrapper>
                    </FeatureWrapper>

                </Column>




            </div>


        </div>
    )
}

export default AboutMe
