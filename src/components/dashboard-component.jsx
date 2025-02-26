'use client'
import React, { useEffect, useState } from "react";
import { DashboardCard1 } from "@/components/dashboard-cards";
import { Check, Trash2, Users, CalendarCheck, UserRoundCheck, PackageOpen, Recycle, Home } from "lucide-react";
import { getWasteManagementDashboard } from "@/app/commonAPIs";

const DashboardComponent = ({ dashboardData, loading, error }) => {
    

    const DashboardType1 = [
        {
            key: "NoOfProperty",
            link: "no-of-property",
            title: "Number of properties",
            value: dashboardData?.NoOfProperty || "0",
            icon: Home,
            gradient: "from-violet-400 to-violet-700",
        },
        {
            key: "WasteCollectedProperties",
            link: "waste-collected-properties",
            title: "Total Waste Collected",
            value: dashboardData?.WasteCollectedProperties || "0",
            icon: Trash2,
            gradient: "from-yellow-400 to-yellow-700",
        },
        {
            key: "TotalWasteCollectionAgents",
            link: "total-waste-collection-agents",
            title: "Waste Collection Agents",
            value: dashboardData?.TotalWasteCollectionAgents || "0",
            icon: Users,
            gradient: "from-teal-400 to-teal-700",
        },
        {
            key: "ActiveWasteCollectionAgents",
            link: "active-waste-collection-agents",
            title: "Active Waste Collection Agents",
            value: dashboardData?.ActiveWasteCollectionAgents || "0",
            icon: CalendarCheck,
            gradient: "from-cyan-400 to-cyan-700",
        },
        {
            key: "SegregatedWasteKG",
            link: "segregate-waste-kg",
            title: "Segregated Waste (in KG)",
            value: dashboardData?.SegregatedWasteKG || "0",
            icon: Recycle,
            gradient: "from-lime-400 to-lime-700",
        },
        {
            key: "NonSegregatedWasteKG",
            link: "non-segregated-waste-kg",
            title: "Non-Segregated (in KG)",
            value: dashboardData?.NonSegregatedWasteKG || "0",
            icon: PackageOpen,
            gradient: "from-sky-400 to-sky-700",
        },
    ];

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DashboardType1.map((card) => (
                <DashboardCard1
                    key={card.key}
                    title={card.title}
                    value={card.value}
                    icon={card.icon}
                    gradient={card.gradient}
                    loading={loading}
                    link={card.link}
                    color={card.color}
                />
            ))}
        </div>
    );
};

export default DashboardComponent;
