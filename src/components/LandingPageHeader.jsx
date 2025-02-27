import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.jpg"

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center ">
                            <Image
                                src={logo || "/placeholder.svg"}
                                alt="SmartWaste Logo"
                                className="rounded-full"
                                width={50}
                                height={50}
                                priority
                            />
                            <span className="ml-2 text-xl font-bold text-gray-800">SmartWaste</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-10">
                        <Link href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Features
                        </Link>
                        <Link href="#testimonials" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Testimonials
                        </Link>
                    </nav>

                    <div className="flex items-center">
                        {/* <Link
                            href="/login"
                            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                        >
                            Login
                        </Link> */}
                    </div>
                </div>
            </div>
        </header>
    )
}