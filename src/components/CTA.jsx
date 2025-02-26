import Link from "next/link"

export default function CTA() {
    return (
        <div className="bg-green-700">
            <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Ready to transform your waste management?</span>
                    <span className="block">Get started with SmartWaste today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-green-200 mb-8">
                    Optimize your collection routes, reduce costs, and improve sustainability with our intelligent waste
                    management system. Contact us for a personalized demo and pricing information.
                </p>
                <div className="mt-8 flex justify-center">
                    {/* <div className="inline-flex rounded-md shadow">
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
                        >
                            Request a Demo
                        </Link>
                    </div>
                    <div className="ml-3 inline-flex">
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600"
                        >
                            Contact Sales
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

