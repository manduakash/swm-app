"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CollectionAgentAssignments() {
  const assignments = [
    { id: 1, agent: "John Doe", zone: "Zone A", status: "On Duty" },
    { id: 2, agent: "Jane Smith", zone: "Zone B", status: "On Duty" },
    { id: 3, agent: "Mike Johnson", zone: "Zone C", status: "On Duty" },
    { id: 4, agent: "Emily Brown", zone: "Zone D", status: "Off Duty" },
    { id: 5, agent: "Chris Lee", zone: "Zone E", status: "Off Duty" },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Agent</TableHead>
          <TableHead>Assigned Zone</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assignments.map((assignment) => (
          <TableRow key={assignment.id}>
            <TableCell>{assignment.agent}</TableCell>
            <TableCell>{assignment.zone}</TableCell>
            <TableCell>{assignment.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

