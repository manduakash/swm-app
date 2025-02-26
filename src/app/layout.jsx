
import "@/app/globals.css"
import 'leaflet/dist/leaflet.css';

import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from 'nextjs-toploader';


export const metadata = {
    title: 'Smart Solid Waste Management',
    description: 'Revolutionizing waste management with intelligent solutions',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <NextTopLoader color="#8576FF" // Custom color
                    initialPosition={0.08} // Start position
                    crawlSpeed={200} // Speed of progress bar
                    height={4} // Height of the progress bar
                    crawl={true} // Enables crawling
                    showSpinner={false} // Hides spinner
                    speed={200} // Animation speed
                    easing="ease" />
                <Toaster />
                {children}
            </body>
        </html>
    )
}



