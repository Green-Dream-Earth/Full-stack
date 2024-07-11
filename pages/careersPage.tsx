import Card from '@/components/careersCard'
import { H1 } from '@/components/heading'
import React from 'react'

const CareersPage = () => {
    return (
        <main className="container min-h-screen">
            <section className="py-12 flex flex-col items-center justify-center gap-4">
                <div className="items-center">
                    <p className="flex justify-center text-lg font-bold text-primary mb-7">
                        Find your place in our team!
                    </p>
                    <H1 className="text-slate-600 text-center">Open Positions</H1>



                </div>
                <div className="flex flex-col w-full mt-24 gap-3">
                    <Card role='Overseas Education Counsellor' location='In Person/Noida-IN' duration='Full Time' link='https://in.indeed.com/cmp/Green-Dream-Earth/jobs?jk=9d65e46e96c2ace6' />
                    <Card role='Content Creator Intern' location='In Person/Noida-IN' duration='Full Time' link='https://in.indeed.com/cmp/Green-Dream-Earth/jobs?jk=69986c7faa48e0a1' />
                    <Card role='Buisness Development Associate' location='In Person/Noida-IN' duration='Full Time' link='https://in.indeed.com/cmp/Green-Dream-Earth/jobs?jk=9d65e46e96c2ace6' />
                    <Card role='Video Content Creator' location='In Person/Noida-IN' duration='Full Time' link='https://in.indeed.com/cmp/Green-Dream-Earth/jobs?jk=49d865c27c3bfa32' />
                </div>

            </section>
        </main>
    )
}

export default CareersPage
