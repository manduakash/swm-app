"use client"

import { Search } from "lucide-react"
import { useMemo } from "react"
import { useTable, usePagination } from "react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Example data (replace this with dynamic or prop-passed data)
const data = [
    {
        PropertyName: "AX298075956798900902",
        PropertyAddress: "RAJA DAS",
        BlockName: "Coochbehar (Kotwali)",
        GPName: "9810662126",
        VillageName: "A4/12, MARSHELIN CO-OP HOUSING SOCIETY, PHASE-II, E.K.T, KOLKATA-700107, WEST BENGAL, INDIA",
    },
    {
        PropertyName: "AX298075956798900902",
        PropertyAddress: "RAJA DAS",
        BlockName: "Coochbehar (Kotwali)",
        GPName: "9810662126",
        VillageName: "A4/12, MARSHELIN CO-OP HOUSING SOCIETY, PHASE-II, E.K.T, KOLKATA-700107, WEST BENGAL, INDIA",
    },
    // Add more rows as needed
]

export default function DataTable({ rows = data }) {
    const columns = useMemo(
        () => [
            {
                Header: "Property Name",
                accessor: "PropertyName",
            },
            {
                Header: "Property Address",
                accessor: "PropertyAddress",
            },
            {
                Header: "Block Name",
                accessor: "BlockName",
            },
            {
                Header: "GP Name",
                accessor: "GPName",
            },
            {
                Header: "Village Name",
                accessor: "VillageName",
            },
            {
                Header: "Actions",
                Cell: () => (
                    <Button variant="ghost" size="sm">
                        View
                    </Button>
                ),
            },
        ],
        [],
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data: rows,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        usePagination,
    )

    return (
        <div className="space-y-4">
            <div className="rounded-lg bg-[#4CAF50] p-4">
                <h1 className="text-xl font-semibold text-white">Total Pending Application</h1>
            </div>

            <div className="flex items-center justify-between">
                <div className="relative w-72">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-8" />
                </div>
                <Button variant="outline">Export Excel</Button>
            </div>

            <div className="rounded-lg border bg-card">
                <div className="relative w-full overflow-auto">
                    <table {...getTableProps()} className="w-full caption-bottom text-sm">
                        <thead className="bg-[#E3F2FD] [&_tr]:border-b">
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                                    {headerGroup.headers.map((column) => {
                                        const { key, ...restHeaderProps } = column.getHeaderProps()
                                        return (
                                            <th
                                                key={key}
                                                {...restHeaderProps}
                                                className="h-12 px-4 text-left align-middle font-medium text-muted-foreground"
                                            >
                                                {column.render("Header")}
                                            </th>
                                        )
                                    })}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()} className="[&_tr:last-child]:border-0">
                            {page.map((row) => {
                                prepareRow(row)
                                const { key, ...restRowProps } = row.getRowProps()
                                return (
                                    <tr key={key} {...restRowProps}>
                                        {row.cells.map((cell) => {
                                            const { key, ...restCellProps } = cell.getCellProps()
                                            return (
                                                <td key={key} {...restCellProps} className="p-4">
                                                    {cell.render("Cell")}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-between px-4 py-4">
                    <div className="text-sm text-muted-foreground">
                        Showing {pageIndex * pageSize + 1} to {Math.min((pageIndex + 1) * pageSize, rows.length)} of {rows.length}{" "}
                        entries
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" onClick={() => previousPage()} disabled={!canPreviousPage}>
                            Prev
                        </Button>
                        {Array.from({ length: pageCount }, (_, i) => (
                            <Button key={i} variant={pageIndex === i ? "default" : "outline"} size="sm" onClick={() => gotoPage(i)}>
                                {i + 1}
                            </Button>
                        ))}
                        <Button variant="outline" size="sm" onClick={() => nextPage()} disabled={!canNextPage}>
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

