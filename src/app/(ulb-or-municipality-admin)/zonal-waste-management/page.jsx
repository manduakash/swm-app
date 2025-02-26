"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MapPin, QrCode, Clock, User, Trash2, Activity, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock data for demonstration
const dumpingZones = [
  { id: 1, name: "Zone A", location: "North City", status: "Active", lastCollection: "2023-06-10 09:30 AM" },
  { id: 2, name: "Zone B", location: "South City", status: "Inactive", lastCollection: "2023-06-09 02:15 PM" },
  { id: 3, name: "Zone C", location: "East City", status: "Active", lastCollection: "2023-06-10 11:45 AM" },
  { id: 4, name: "Zone D", location: "West City", status: "Active", lastCollection: "2023-06-10 10:00 AM" },
]

const activityLogs = [
  { id: 1, type: "NFC", zoneId: 1, timestamp: "2023-06-10 09:30:15", user: "John Doe", action: "Waste Collected" },
  { id: 2, type: "QR", zoneId: 3, timestamp: "2023-06-10 11:45:30", user: "Jane Smith", action: "Zone Scanned" },
  { id: 3, type: "NFC", zoneId: 4, timestamp: "2023-06-10 10:00:45", user: "Bob Johnson", action: "Waste Collected" },
  { id: 4, type: "QR", zoneId: 2, timestamp: "2023-06-09 14:15:00", user: "Alice Brown", action: "Zone Scanned" },
]

export default function ZonalWasteManagement() {
  const [selectedZone, setSelectedZone] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredZones = dumpingZones.filter(
    (zone) =>
      zone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      zone.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredLogs = activityLogs.filter(
    (log) =>
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Zonal Waste Management</h1>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Input
            type="text"
            placeholder="Search zones, locations, users, or actions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <Tabs defaultValue="dumping-zones" className="space-y-4">
        <TabsList className="bg-white shadow-md rounded-lg p-1">
          <TabsTrigger value="dumping-zones" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <MapPin className="w-4 h-4 mr-2" />
            Dumping Zones
          </TabsTrigger>
          <TabsTrigger value="activity-logs" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <Activity className="w-4 h-4 mr-2" />
            NFC/QR Activity Logs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dumping-zones">
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-gray-50 border-b border-gray-200">
              <CardTitle className="text-xl text-gray-800">Zonal Dumping Zones</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-gray-600">Zone Name</TableHead>
                    <TableHead className="font-semibold text-gray-600">Location</TableHead>
                    <TableHead className="font-semibold text-gray-600">Status</TableHead>
                    <TableHead className="font-semibold text-gray-600">Last Collection</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredZones.map((zone) => (
                    <TableRow
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      className="cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                    >
                      <TableCell className="font-medium text-blue-600">{zone.name}</TableCell>
                      <TableCell>{zone.location}</TableCell>
                      <TableCell>
                        <Badge
                          variant={zone.status === "Active" ? "success" : "secondary"}
                          className="px-2 py-1 rounded-full text-xs"
                        >
                          {zone.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{zone.lastCollection}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          {selectedZone && (
            <Card className="mt-4 bg-white shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle className="text-xl text-gray-800">Zone Details: {selectedZone.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                    <MapPin className="mr-3 text-blue-500" />
                    <span className="text-gray-700">Location: {selectedZone.location}</span>
                  </div>
                  <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                    <Badge
                      variant={selectedZone.status === "Active" ? "success" : "secondary"}
                      className="px-3 py-1 rounded-full text-sm"
                    >
                      {selectedZone.status}
                    </Badge>
                  </div>
                  <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                    <Clock className="mr-3 text-blue-500" />
                    <span className="text-gray-700">Last Collection: {selectedZone.lastCollection}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="activity-logs">
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-gray-50 border-b border-gray-200">
              <CardTitle className="text-xl text-gray-800">NFC/QR Activity Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex justify-center">
                <div className="relative w-64 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                  <img
                    src="/placeholder.svg?height=256&width=256"
                    alt="QR Scanner"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                    <p className="text-lg font-semibold">Scan QR Code</p>
                    <p className="text-sm">Place QR code within the frame</p>
                  </div>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-gray-600">Type</TableHead>
                    <TableHead className="font-semibold text-gray-600">Zone</TableHead>
                    <TableHead className="font-semibold text-gray-600">Timestamp</TableHead>
                    <TableHead className="font-semibold text-gray-600">User</TableHead>
                    <TableHead className="font-semibold text-gray-600">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLogs.map((log) => (
                    <TableRow key={log.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <TableCell>
                        {log.type === "NFC" ? (
                          <Badge
                            variant="outline"
                            className="bg-blue-100 text-blue-800 border-blue-300 px-2 py-1 rounded-full text-xs"
                          >
                            NFC
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 border-green-300 px-2 py-1 rounded-full text-xs"
                          >
                            <QrCode className="w-3 h-3 mr-1 inline" />
                            QR
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="font-medium text-blue-600">
                        {dumpingZones.find((zone) => zone.id === log.zoneId)?.name}
                      </TableCell>
                      <TableCell>{log.timestamp}</TableCell>
                      <TableCell className="flex items-center">
                        <User className="mr-2 w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{log.user}</span>
                      </TableCell>
                      <TableCell className="flex items-center">
                        <Trash2 className="mr-2 w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{log.action}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

