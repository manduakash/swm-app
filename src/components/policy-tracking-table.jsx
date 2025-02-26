// components/policy-tracking-table.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/progress"

const policies = [
    { id: 1, name: "Mandatory Waste Segregation", status: "Implemented", progress: 100, implementationDate: "2023-01-15" },
    { id: 2, name: "Plastic Ban in Government Offices", status: "In Progress", progress: 75, implementationDate: "2023-06-01" },
    { id: 3, name: "Composting Incentives", status: "Planned", progress: 0, implementationDate: "2023-09-01" },
    { id: 4, name: "E-waste Collection Drive", status: "In Progress", progress: 50, implementationDate: "2023-03-15" },
    { id: 5, name: "Green Building Certification", status: "Implemented", progress: 100, implementationDate: "2022-11-30" },
];

export function PolicyTrackingTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Policy Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Implementation Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {policies.map((policy) => (
                    <TableRow key={policy.id}>
                        <TableCell className="font-medium">{policy.name}</TableCell>
                        <TableCell>
                            <Badge
                                variant={
                                    policy.status === "Implemented" ? "success" :
                                        policy.status === "In Progress" ? "warning" :
                                            "secondary"
                                }
                            >
                                {policy.status}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Progress value={policy.progress} className="w-[60%]" />
                                <span className="text-sm text-gray-500">{policy.progress}%</span>
                            </div>
                        </TableCell>
                        <TableCell>{policy.implementationDate}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}