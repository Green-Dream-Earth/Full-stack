import { H1 } from '@/components/heading'
import React from 'react'

const WebinarForm = () => {
    return (
        <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-slate-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col gap-4 ">
                <div className="flex flex-col">
                    <div className="flex items-center pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-slate-400">
                            <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                        </svg>
                        <p className="m-0 pl-2 font-semibold text-sm text-gray-500 sm:text-right shrink-0">
                            09-08-2024
                        </p>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-slate-400">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>

                        <p className="m-0 pl-2 font-semibold text-sm text-gray-500 sm:text-right shrink-0">
                            08:00 - 09:00
                        </p>
                    </div>

                </div>
                <div className="">
                    <h3 className="text-2xl font-semibold text-gray-600 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        <a href="#" className="hover:underline">Free Consultation on Universities in Germany</a>
                    </h3>
                    <p className="text-md text-gray-500">
                        Are you considering pursuing higher education in Germany but unsure where to start? Join our free webinar, &quot;Unlock Your Future: Free Consultation on Universities in Germany,&quot; where experts will guide you through everything you need to know about studying at top German universities.</p>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold mb-4 text-slate-500">Agenda</h3>
                    <ul className='text-slate-500 list-disc pl-7'>
                        <li>8:00 AM - 10:30 AM: Introduction to React</li>
                        <li>10:45 AM - 12:30 PM: Building a React Application</li>
                        <li>12:30 PM - 1:30 PM: Lunch Break</li>
                        <li>1:30 PM - 3:30 PM: Advanced React Concepts</li>
                        <li>3:45 PM - 5:00 PM: Q&A and Wrap-up</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold mb-7 text-slate-500">Speakers</h3>
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border bg-slate-300">
                                {/* <img src="/placeholder-user.jpg" alt="Jane Doe" /> */}
                            </div>
                            <div className="text-center">
                                <div className="font-semibold">Jane Doe</div>
                                <div className="text-muted-foreground text-sm">React Expert</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border bg-slate-300">
                                {/* <img src="/placeholder-user.jpg" alt="Jane Doe" /> */}
                            </div>
                            <div className="text-center">
                                <div className="font-semibold">John Smith</div>
                                <div className="text-muted-foreground text-sm">React Instructor</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border bg-slate-300">
                                {/* <img src="/placeholder-user.jpg" alt="Jane Doe" /> */}
                            </div>
                            <div className="text-center">
                                <div className="font-semibold">Sarah Lee</div>
                                <div className="text-muted-foreground text-sm">React Developer</div>
                            </div>
                        </div>
                    </div>
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
                        Book Your Seat
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
