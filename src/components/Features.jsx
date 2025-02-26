import { TrashIcon, TruckIcon, ChartBarIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

const features = [
    {
        name: "Smart Bins",
        description: "IoT-enabled bins with fill-level sensors for optimized collection schedules.",
        icon: TrashIcon,
    },
    {
        name: "Route Optimization",
        description: "AI-powered route planning for efficient waste collection and reduced fuel consumption.",
        icon: TruckIcon,
    },
    {
        name: "Real-time Analytics",
        description: "Comprehensive dashboards and reports for data-driven decision making.",
        icon: ChartBarIcon,
    },
    {
        name: "Environmental Impact",
        description: "Track and reduce carbon footprint with our eco-friendly waste management solutions.",
        icon: GlobeAltIcon,
    },
]

export default function Features() {
    return (
        <div className="py-12 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A smarter way to manage waste
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        SmartWaste offers a comprehensive set of tools to revolutionize your solid waste management processes and
                        improve sustainability.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

