import Image from "next/image"

export default function Testimonials() {
    return (
        <section className="bg-gray-50 overflow-hidden" id="testimonials">
            <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
                <div className="relative lg:flex lg:items-center">
                    <div className="hidden lg:block lg:flex-shrink-0">
                        <Image
                            className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                            src="/city-official.jpg"
                            alt="City Official"
                            width={320}
                            height={320}
                        />
                    </div>

                    <div className="relative lg:ml-10">
                        <svg
                            className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-green-200 opacity-50"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 144 144"
                            aria-hidden="true"
                        >
                            <path
                                strokeWidth={2}
                                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                            />
                        </svg>
                        <blockquote className="relative">
                            <div className="text-2xl leading-9 font-medium text-gray-900">
                                <p>
                                    "SmartWaste has transformed our city's waste management system. We've seen a 30% reduction in
                                    collection costs and a significant improvement in our recycling rates. The real-time data has been
                                    invaluable for our decision-making process."
                                </p>
                            </div>
                            <footer className="mt-8">
                                <div className="flex">
                                    <div className="flex-shrink-0 lg:hidden">
                                        <Image
                                            className="h-12 w-12 rounded-full"
                                            src="/city-official.jpg"
                                            alt="City Official"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <div className="ml-4 lg:ml-0">
                                        <div className="text-base font-medium text-gray-900">Sarah Johnson</div>
                                        <div className="text-base font-medium text-green-600">Director of Waste Management, Greenville</div>
                                    </div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}

