import { Button } from '@/components/button'
import { H1 } from '@/components/heading'
import React from 'react'

const AdminDashboard = () => {
  return (
    <section className="min-h-screen container py-12">
        <H1>Admin Dashboard</H1>
        <div className="mt-7">
            <div className="flex gap-6">
                <Button variant="secondary" className="w-full">Create New Webinar</Button>
                <Button variant="secondary" className="w-full">Edit Existing Webinar</Button>
            </div>
        </div>
    </section>  
  )
}

export default AdminDashboard
