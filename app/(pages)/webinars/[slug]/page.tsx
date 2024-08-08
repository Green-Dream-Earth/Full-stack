import { H1 } from '@/components/heading'
import React from 'react'

const WebinarForm = () => {
    return (
        <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-slate-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col gap-4 ">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    <p className="w-28 pb-2 font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                        08:00 - 09:00
                    </p>
                </div>
                <div className="">
                    <h3 className="text-2xl font-semibold text-gray-600">
                        <a href="#" className="hover:underline">Free Consultation on Universities in Germany</a>
                    </h3>
                    <p className="text-md text-gray-500">
                        Are you considering pursuing higher education in Germany but unsure where to start? Join our free webinar, "Unlock Your Future: Free Consultation on Universities in Germany," where experts will guide you through everything you need to know about studying at top German universities.</p>
                </div>

            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <H1>Free-Webinar</H1>
                <p className="leading-relaxed mb-5 text-gray-600">
                    Fill the form below to register yourself for our upcoming webinar!
                </p>
                {/* @ts-ignore */}
                {/* <form ref={form} onSubmit={sendEmail}> */}
                <form>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold">
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="user_name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-semibold">
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="user_email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="phone" className="leading-7 text-sm text-gray-600 font-semibold">
                            Phone Number
                        </label>
                        <input
                            required
                            type="text"
                            id="phone"
                            name="user_phone"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-600 font-semibold"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            defaultValue={""}
                        />
                    </div>
                    <button type="submit" value={"Send"} className="text-white w-full bg-primary/90 border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
                        Send!
                    </button>

                    {/* <Button variant="primary">Send!</Button> */}
                </form>
                <p className="text-xs text-gray-500 mt-3">
                    Please note that timings of these webinars are subjected to the availability of our experts</p>
            </div>
        </div>
    )
}

export default WebinarForm
