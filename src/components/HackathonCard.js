import React from 'react'
import { hackathons } from "./data"
function HackathonCard() {


    const makeUcLogo = "https://cdn.discordapp.com/icons/842222839254876212/a1564a3522de52bc09ee4b433ab3bac5.webp?size=96"
    const hackUmbcLogo = "https://cdn.discordapp.com/icons/889222242695786546/7a5a976eb6386c98f52f01091f5d5270.webp?size=96"
    const pittChallengeLogo = "https://cdn.discordapp.com/icons/895087348046495765/e658ac82f2906adb34828a7392e982ff.webp?size=96"
    const metroHacksLogo = "https://cdn.discordapp.com/icons/881950509462876250/0c9e9be8bded2a912457d02b47396a78.webp?size=96"

    return (
        <div className=" flex flex-row  items-center md:items-baseline justify-start flex-wrap gap-16 px-6 mt-24 sm:mt-0 sm:p-16 font-mulish">


            {hackathons.map((item, key) => (
                <div className='w-[384px] bg-white shadow-xl rounded-2xl p-12 relative overflow-hidden font-mulish transform ease-in-out duration-200  sm:hover:-translate-y-1 group' key={key}>

                    <img src={item.image} alt="" className='transform opacity-50 rounded-xl absolute -top-3 -right-3 group-sm:hover:opacity-70 ' />

                    <span className='px-4 py-2  text-xs font-bold tracking-wider rounded-3xl text-yellow-800 bg-yellow-200'>Winner</span>
                    <h1 className='mt-8 text-xl text-slate-700 font-extrabold tracking-wider'>{item.title}</h1>
                    <p className='mt-4 text-xl text-slate-600'>{item.description}.</p>
                    <a href={item.link} target="_blank" rel='noreferrer'>
                        <p className=' text-xl inline-block mt-12 text-sky-700 cursor-pointer '>Learn more</p>
                    </a>
                </div>
            ))
            }

        </div>
    )
}

export default HackathonCard
