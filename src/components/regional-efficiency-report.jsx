"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const regions = [
    { name: "North Region", wasteCollected: 450, recyclingRate: 32, efficiency: 85 },
    { name: "South Region", wasteCollected: 380, recyclingRate: 28, efficiency: 79 },
    { name: "East Region", wasteCollected: 520, recyclingRate: 35, efficiency: 88 },
    { name: "West Region", wasteCollected: 410, recyclingRate: 30, efficiency: 82 },
]

export function RegionalEfficiencyReport() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Region</TableHead>
                    <TableHead>Waste Collected (tons)</TableHead>
                    <TableHead>Recycling Rate (%)</TableHead>
                    <TableHead>Efficiency Score</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {regions.map((region) => (
                    <TableRow key={region.name}>
                        <TableCell>{region.name}</TableCell>
                        <TableCell>{region.wasteCollected}</TableCell>
                        <TableCell>{region.recyclingRate}%</TableCell>
                        <TableCell>{region.efficiency}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

