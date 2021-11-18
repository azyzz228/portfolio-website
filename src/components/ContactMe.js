import React from 'react'
import email from '../images/email.png'
function ContactMe() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 class=" sm:pr-16 text-2xl font-medium title-font text-gray-900">Interested in collaborating or getting the best website?</h1>

                    <div className=" flex flex-row items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-pink-400  text-white rounded my-2 cursor-pointer">
                        <a href="mailto:email@gmail.com"><p className="text-xl font-bold">Contact Me</p></a>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactMe
