import React from 'react'
import { hackathons } from "./data"


function HackathonCard() {

    return (
        <div className=" flex flex-row  items-center md:items-baseline justify-start flex-wrap gap-16 px-6 py-16 sm:mt-0 sm:p-16 font-mulish">


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
