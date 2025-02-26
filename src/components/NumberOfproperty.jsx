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
import { getProperties } from "@/app/commonAPIs"; // Use the new API function

const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

export function NumberOfproperty() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    useEffect(() => {
        fetchPropertiesData();
    }, []);

    const fetchPropertiesData = async () => {
        try {
            const data = await getProperties();
            if (data?.success) setProperties(data?.data);
        } catch (error) {
            console.error("Error fetching properties data:", error);
        } finally {
            setLoading(false);
        }
    };

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = properties.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(properties?.length / recordsPerPage) ?? 0;

    return (
        <div className="space-y-4">
            <Table>
                <TableHeader>
                    <TableRow className="bg-slate-100">
                        <TableHead>Property Name</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>State</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {loading ? (
                        [...Array(5)].map((_, index) => (
                            <TableRow key={index}>
                                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                                <TableCell><Skeleton className="h-8 w-16 rounded-full" /></TableCell>
                            </TableRow>
                        ))
                    ) : currentRecords?.length > 0 ? (
                        currentRecords?.map((property, index) => (
                            <TableRow key={index} className="cursor-pointer hover:bg-gray-100 transition">
                                <TableCell>{property?.PropertyName ?? "N/A"}</TableCell>
                                <TableCell>{property?.OwnerName ?? "N/A"}</TableCell>
                                <TableCell>{property?.PropertyAddress ?? "N/A"}</TableCell>
                                <TableCell>{property?.StateName ?? "N/A"}</TableCell>
                                <TableCell>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" className="hover:bg-sky-100 group rounded-full" onClick={() => setSelectedProperty(property)}>
                                                <Eye className="group-hover:text-blue-500" /> View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl w-full">
                                            <DialogHeader>
                                                <DialogTitle>Property Details</DialogTitle>
                                            </DialogHeader>
                                            {selectedProperty && (
                                                <div className="grid grid-cols-2 gap-4 flex-1 overflow-hidden">
                                                    <div className="h-96">
                                                        <MapContainer
                                                            center={[selectedProperty?.Latitude || 20, selectedProperty?.Longitude || 78]}
                                                            zoom={12}
                                                            scrollWheelZoom={false}
                                                            className="h-full w-full rounded-lg"
                                                        >
                                                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                                            <Marker
                                                                position={[selectedProperty?.Latitude || 20, selectedProperty?.Longitude || 78]}
                                                                icon={customIcon}
                                                            >
                                                                <Popup>{selectedProperty?.PropertyName}</Popup>
                                                            </Marker>
                                                        </MapContainer>
                                                    </div>
                                                    <div className="space-y-2 overflow-y-auto max-h-[70vh] pr-4">
                                                        <p><strong>Unique Number:</strong> {selectedProperty?.UniqueNumber ?? "N/A"}</p>
                                                        <p><strong>Address:</strong> {selectedProperty?.PropertyAddress ?? "N/A"}</p>
                                                        <p><strong>Owner:</strong> {selectedProperty?.OwnerName ?? "N/A"}</p>
                                                        <p><strong>State:</strong> {selectedProperty?.StateName ?? "N/A"}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center">No records found</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {properties.length > recordsPerPage && (
                <div className="flex justify-between items-center mt-4">
                    <Button variant="outline" size="sm" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                        <ArrowLeft className="text-zinc-400" /> Previous
                    </Button>
                    <span className="text-sm text-zinc-500">Page {currentPage} of {totalPages}</span>
                    <Button variant="outline" size="sm" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                        Next <ArrowRight className="text-zinc-400" />
                    </Button>
                </div>
            )}
        </div>
    );
}
