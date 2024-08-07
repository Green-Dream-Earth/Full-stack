import { H1 } from '@/components/heading'
import React from 'react'

const Webinars = () => {
    return (
        <main className="container">
            <section className="py-12 flex flex-col items-center justify-center">
                <div className="">
                    <H1 className="text-center">Webinars</H1>
                    <p className="text-xl text-muted-foreground mt-7">
                        Attend our free-webinars to get the best study abroad experience!
                    </p>
                </div>
            </section>
            <section className="grid gap-10 md:grid-cols-3 pb-12">
                <div className="group justify-between relative flex flex-col space-y-2 p-4 h-60 w-auto bg-slate-100 rounded-lg border hover:cursor-pointer hover:scale-[1.02] shadow hover:shadow-lg hover:shadow-primary/20 transform transition ease-in-out delay-100"></div>
                <div className="group justify-between relative flex flex-col space-y-2 p-4 h-60 w-auto bg-slate-100 rounded-lg border hover:cursor-pointer hover:scale-[1.02] shadow hover:shadow-lg hover:shadow-primary/20 transform transition ease-in-out delay-100"></div>
                <div className="group justify-between relative flex flex-col space-y-2 p-4 h-60 w-auto bg-slate-100 rounded-lg border hover:cursor-pointer hover:scale-[1.02] shadow hover:shadow-lg hover:shadow-primary/20 transform transition ease-in-out delay-100"></div>
                <div className="group justify-between relative flex flex-col space-y-2 p-4 h-60 w-auto bg-slate-100 rounded-lg border hover:cursor-pointer hover:scale-[1.02] shadow hover:shadow-lg hover:shadow-primary/20 transform transition ease-in-out delay-100"></div>
                <div className="group justify-between relative flex flex-col space-y-2 p-4 h-60 w-auto bg-slate-100 rounded-lg border hover:cursor-pointer hover:scale-[1.02] shadow hover:shadow-lg hover:shadow-primary/20 transform transition ease-in-out delay-100"></div>
                <div className="group justify-between relative flex flex-col space-y-2 p-4 h-60 w-auto bg-slate-100 rounded-lg border hover:cursor-pointer hover:scale-[1.02] shadow hover:shadow-lg hover:shadow-primary/20 transform transition ease-in-out delay-100"></div>
            </section>
        </main>
    )
}

export default Webinars
