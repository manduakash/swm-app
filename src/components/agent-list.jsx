"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import moment from "moment";
import { getEmployeeAttendance } from "@/app/commonAPIs";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export function AgentList({ status="" }) {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    fetchAttendanceData(status);
  }, []);

  const fetchAttendanceData = async (status) => {
    try {

      const data = await getEmployeeAttendance(status);

      if (data?.success) {
        setAgents(data?.data);
      }
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Pagination Logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = agents.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(agents?.length / recordsPerPage) ?? 0;

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-100 hover:bg-slate-100">
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Check-in Time</TableHead>
            <TableHead>Check-out Time</TableHead>
            <TableHead>District</TableHead>
            <TableHead>Block</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ?  [...Array(5)].map((_, index) => (
              <TableRow key={index}>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-4 w-14" /></TableCell>
                <TableCell><Skeleton className="h-4 w-30" /></TableCell>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                <TableCell><Skeleton className="h-8 w-16 rounded-full" /></TableCell>
              </TableRow>
            ))
            : currentRecords.length > 0
              ? currentRecords.map((agent, index) => (
                <TableRow key={index} className="cursor-pointer hover:bg-gray-50 transition">
                  <TableCell>{agent?.FullName ?? "N/A"}</TableCell>
                  <TableCell>
                    <Badge className={
                      agent?.AttendanceStatus === "Active" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-amber-700 hover:bg-amber-800"
                    }>
                      {agent?.AttendanceStatus ?? "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell>{agent?.CheckInTime ? moment(agent?.CheckInTime).format("DD/MM/YYYY, hh:mm A") : "N/A"}</TableCell>
                  <TableCell>{agent?.CheckOutTime ? moment(agent?.CheckOutTime).format("DD/MM/YYYY, hh:mm A") : "N/A"}</TableCell>
                  <TableCell>{agent?.DistrictName ?? "N/A"}</TableCell>
                  <TableCell>{agent?.BlockName || "N/A"}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="hover:bg-sky-100 group rounded-full" onClick={() => setSelectedAgent(agent)}>
                          <Eye className="group-hover:text-blue-500" /> View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <DialogHeader>
                          <DialogTitle>Agent Details</DialogTitle>
                        </DialogHeader>
                        {selectedAgent && (
                          <div className="grid grid-cols-2 gap-4">
                            <div className="h-96">
                              <MapContainer center={[selectedAgent?.Latitude, selectedAgent?.Longitude]} zoom={12} scrollWheelZoom={true} className="h-full w-full rounded-lg">
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={[selectedAgent?.Latitude, selectedAgent?.Longitude]} icon={customIcon}>
                                  <Popup>{selectedAgent?.FullName}'s Location</Popup>
                                </Marker>
                              </MapContainer>
                            </div>
                            <div className="space-y-2">
                              <p><strong>Name:</strong> {selectedAgent?.FullName ?? "N/A"}</p>
                              <p><strong>User Type:</strong> {selectedAgent?.UserTypeName ?? "N/A"}</p>
                              <p><strong>Attendance Status:</strong> {selectedAgent?.AttendanceStatus ?? "Inactive"}</p>
                              <p><strong>State:</strong> {selectedAgent?.StateName ?? "N/A"}</p>
                              <p><strong>District:</strong> {selectedAgent?.DistrictName ?? "N/A"}</p>
                              <p><strong>Block:</strong> {selectedAgent?.BlockName || "N/A"}</p>
                              <p><strong>Check-in Time:</strong> {selectedAgent?.CheckInTime ? moment(selectedAgent?.CheckInTime).format("DD/MM/YYYY, hh:mm A") : "N/A"}</p>
                              <p><strong>Check-out Time:</strong> {selectedAgent?.CheckOutTime ? moment(selectedAgent?.CheckOutTime).format("DD/MM/YYYY, hh:mm A") : "N/A"}</p>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))
              : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">No records found</TableCell>
                </TableRow>
              )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      {agents.length > recordsPerPage && (
        <div className="flex justify-between items-center mt-4">
          <Button variant="outline" size="sm" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            <ArrowLeft className="text-zinc-400" /> Previous
          </Button>
          <span className="text-sm text-zinc-500">Page {currentPage ?? 0} of {totalPages ?? 0}</span>
          <Button variant="outline" size="sm" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            Next <ArrowRight className="text-zinc-400" />
          </Button>
        </div>
      )}
    </div>
  );
}