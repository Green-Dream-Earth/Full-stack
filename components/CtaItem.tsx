import React from 'react'

const CtaItem = ({ className, circleColor, pathColor }: { className?: string, circleColor?: string, pathColor?: string }) => {
    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            <svg className="" width={221} height={191} viewBox="0 0 221 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="110.5" cy="112.5" rx="77.5" ry="78.5" fill={circleColor || "#D9D9D9"} />
                <path d="M207 109C202.734 56.7632 167.35 14.9712 110.5 14.0157C53.6504 13.0601 18.5947 55.9659 14 109" stroke={pathColor || "black"} strokeWidth={27} strokeDasharray="24 24" />
            </svg>
            <div className="flex justify-center items-center">
                <div className="w-fit px-4 py-2 bg-slate-200 rounded-xl">
                    <p className="p-0 m-0 text-lg font-semibold text-slate-700">This is good</p>
                </div>
            </div>
        </div>
    )
}

export default CtaItem
