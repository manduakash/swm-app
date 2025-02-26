'use client'
import { Suspense } from 'react'
import Header from "@/components/LandingPageHeader"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonial"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Suspense fallback={<div>Loading...</div>}>
                    <Hero />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Features />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Testimonials />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <CTA />
                </Suspense>
            </main>
            <Footer />
        </div>
    )
}