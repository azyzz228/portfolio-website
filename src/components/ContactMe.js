import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

import tw from 'tailwind-styled-components'
import { PhoneIcon, MailIcon as MailSolidIcon } from '@heroicons/react/solid'
import { ClipboardListIcon, MailIcon } from '@heroicons/react/outline'
import { RingLoader } from 'react-spinners'


const Wrapper = tw.div` bg-purple-800 rounded-2xl `;

function ContactMe() {

    const [isSent, setIsSent] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
        setLoading(true)
        setClicked(true)
        emailjs.sendForm('service_m2ob3k8', 'template_w61xw48', form.current, "user_0Mnkc44zS931z4MgLbLeO")
            .then((result) => {
                setLoading(false)
                setIsSent(true)
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <section class="w-full h-full bg-[#fceaff] md:px-12 py-8" id="contact">

            <Wrapper>
                <div className="flex flex-col justify-center items-start md:flex-row md:px-16 py-12   ">

                    <div className="flex flex-col items-center w-full lg:space-y-5">

                        <div className=" text-center mb-6">
                            <h1 className='text-white text-3xl lg:text-5xl font-bold tracking-wide  mb-4'>Let's get in touch</h1>
                            <p className='text-purple-200 text-base lg:text-xl leading-5 '>Fill up the form and I will get back <br /> to you in less than 24 hours!</p>
                        </div>


                        <div className="bg-white p-2 lg:p-5 md:rounded-xl w-[380px] md:w-auto ">
                            <div className="flex flex-row items-center space-x-4 py-2 px-4 ">
                                <PhoneIcon className='w-7 h-7 text-purple-700' />
                                <span className='text-black text-xl md:text-base lg:text-xl tracking-wide'>+1 (929) 438 9427</span>
                            </div>

                            <div className="flex flex-row items-center space-x-4 py-2 px-4 ">
                                <MailSolidIcon className='w-7 h-7 text-purple-700' />

                                <a href="mailto:azizabdullaev@protonmail.ch" className='text-black text-xl md:text-base lg:text-xl tracking-wide hover:underline decoration-purple-700 '>aziz.abdullaev@protonmail.ch</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-row justify-center lg:justify-end ">

                        <div className=" bg-white md:rounded-3xl py-4  px-8 w-[380px]">
                            <form ref={form} onSubmit={sendEmail}>
                                <p className='tracking-tighter mb-1'>Your name</p>
                                <div className="flex flex-row w-full rounded-xl mb-4 px-4 
                             py-2 items-center space-x-4  ring-1 ring-offset-0 ring-gray-400 focus-within:ring-blue-on-purple focus-within:text-blue-on-purple ">
                                    <ClipboardListIcon className=' w-6 h-6   ' />
                                    <input type="text" name="name" id="" className='outline-none border-b border-gray-300 w-full bg-transparent text-gray-900' placeholder='Enter your name' required />
                                </div>


                                <p className='tracking-tighter mb-1'>Mail</p>
                                <div className="flex flex-row w-full rounded-xl mb-4 px-4 
                             py-2 items-center space-x-4  ring-1 ring-offset-1 ring-gray-400 focus-within:ring-blue-on-purple focus-within:text-blue-on-purple">
                                    <MailIcon className=' w-6 h-6   ' />
                                    <input type="email" name="email" id="" className='outline-none border-b border-gray-300 w-full bg-transparent text-black' placeholder='johndoe@mail.com' required />
                                </div>

                                <p className='tracking-tighter mb-1'>Message</p>
                                <textarea name="message" id="" rows="4" className='w-full mb-6 outline-none ring-1 ring-offset-1 ring-gray-400 focus-within:ring-blue-on-purple rounded-xl p-4 bg-gray-50' placeholder='Message' required></textarea>

                                <div className=" w-full mt-2 flex flex-col items-center justify-center">
                                    <RingLoader color={"#0085ff"} loading={loading} size={60} />
                                </div>

                                {!clicked && <button type="submit" className='w-full grid place-content-center rounded-xl py-2 text-white tracking-wide text-lg bg-blue-on-purple transform ease-in-out duration-200 font-medium hover:opacity-80'
                                > Submit</button>}

                                {
                                    isSent &&
                                    <p className={`w-full py-2 text-white text-lg grid place-items-center bg-[#00b897]`}
                                    >Thanks! I will get back very soon!</p>


                                }

                            </form>


                        </div>
                    </div>
                </div>
            </Wrapper>


        </section >
    )
}

export default ContactMe
