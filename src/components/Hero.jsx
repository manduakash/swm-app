"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import img1 from "@/assets/img1.jpg"
import img2 from "@/assets/img2.jpg"

const images = [img1, img2]

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        const timer = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    if (!isClient) {
        return null // or a loading state
    }

    return (
        <section className="relative h-[600px] overflow-hidden">
            {images.map((img, index) => (
                <Image
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={`Waste Management Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                    style={{
                        opacity: index === currentImage ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Smart Solid Waste Management</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Revolutionizing waste management with intelligent solutions for a cleaner, greener future.
                    </p>
                    <Button size="lg" className="text-lg px-8 bg-white text-gray-800 hover:bg-gray-100">
                        <Link href="/login">
                            Login
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}