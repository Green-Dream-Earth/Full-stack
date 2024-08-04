import { MapPinIcon } from '@/pages/exploreUniversities'
import Link from 'next/link'
import React from 'react'

const Card = ({ role, location, duration, link }: { role: string, location: string, duration: string, link?: string }) => {
    return (
        <Link href={link || ''}>
        <div className="flex bg-slate-100 hover:bg-slate-200 sm:mb-2 w-full p-3 rounded-lg justify-center items-center">
            <div className="p-5 w-full items-center">
                <h3 className="font-bold text-lg text-gray-900">{role}</h3>
                <div className="flex justify-between items-center pt-3">
                    <div className="flex gap-4">
                        <div className="flex gap-2 items-center">
                            <MapPinIcon className="w-4 h-4 text-slate-400" />
                            <span className="font-semibold">{location}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MapPinIcon className="w-4 h-4 text-slate-400" />
                            <span className="font-semibold">{duration}</span>
                        </div>
                    </div>
                    <div className="">
                        <a className="inline-flex text-base text-primary font-semibold items-center">Apply on Indeed
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default Card
