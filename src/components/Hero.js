import React from 'react'
import tw from "tailwind-styled-components"
import profilephoto from '../images/profilephoto.png'
import wavinghand from '../images/wavinghand.png'
import pointdown from '../images/pointdown.png'

const NavWrapper = tw.div`hidden sm:flex flex-row justify-between items-center w-full px-10 py-4`;
const NavLinkWrapper = tw.div``;
const GrayBg = tw.div`
bg-gray-100
sm:px-16 px-4 pb-16
`;
const Container = tw.div`
rounded-lg shadow-lg bg-white
`;

const HeroImageBg = tw.div`
flex flex-row justify-center items-center px-2 pt-2 bg-green-200 rounded-full mt-6 sm:mt-12
`
function Hero() {
    return (
        <GrayBg>
            <Container>

                <NavWrapper>

                    <div className="flex flex-row items-center justify-center space-x-4">
                        <i class="far fa-envelope"></i>
                        <p>aziz@duke.edu</p>
                    </div>

                    <div className="flex flex-row items-center space-x-12">
                        <p>Test 1</p>
                        <p>Test 1</p>
                        <p>Test 1</p>
                        <p>Test 1</p>
                    </div>
                </NavWrapper>

                <div className="flex flex-col justify-center items-center">
                    <HeroImageBg>
                        <img src={profilephoto} alt="" className="w-28 filter " />
                    </HeroImageBg>

                    <div className="flex flex-row space-x-1 text-lg font-bold">
                        <p>Hi, I'm Aziz</p>
                        <img src={wavinghand} alt="" className="w-6" />
                    </div>

                    <div className="w-2/4 flex flex-wrap justify-center items-center py-4" style={{ textAlign: 'center' }}>
                        <p className=" text-3xl sm:text-5xl font-bold">
                            Building digital<br /> products, brands, and expience.
                        </p>
                    </div>

                    <div className="w-10/12 sm:w-5/12 mt-2 text-base sm:text-lg flex flex-wrap justify-center items-center" style={{ textAlign: 'center' }}>
                        <p>A <span className="font-bold">Product designer</span> and <span className="font-bold">Product designer</span> in SF, <br />
                            I specialize in UI/UX Design, Reponsive Web Design, <br /> and Visual Development. </p>
                    </div>

                    <div className=" my-8 flex flex-col justify-center items-center">
                        <p className="text-gray-500">Explore more</p>
                        <img src={pointdown} alt="" className="w-10 my-2 mb-6" />
                    </div>

                    {/*<div className="px-6 py-1 my-10 text-white text-lg rounded-full flex justify-center items-center bg-black">
                        <p>Contact me</p>
                    </div> */}


                </div>
            </Container>
        </GrayBg>

    )
}

export default Hero
