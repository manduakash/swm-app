"use client"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function WasteCollectionChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Waste Collected (tons)",
                data: [1200, 1300, 1400, 1350, 1500, 1450],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Monthly Waste Collection",
            },
        },
    }

    return <Bar data={data} options={options} />
}

