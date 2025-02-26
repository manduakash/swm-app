import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton"


export function DashboardCard1({ title, value, description, icon: Icon, gradient, loading=true, link='#' }) {
    return (
        <Link href={link} passHref>
            <div className="block">
                <Card className={`group bg-gradient-to-br ${gradient} hover:scale-[102%] cursor-pointer transition hover:shadow-2xl hover:ring-1 hover:ring-white`}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-white flex justify-between w-full">
                            {loading ? (
                                <div className="flex items-center justify-between space-x-4 w-full">
                                    <div className="space-y-2">
                                        <Skeleton className="h-6 w-[150px] bg-gray-100/50" />
                                    </div>
                                    <Skeleton className="h-10 w-10 rounded-full bg-gray-100/50" />
                                </div>
                            ) : (
                                <>
                                    <span className="font-bold">{title}</span>
                                    <Icon size={35} className={`bg-white/20 rounded-3xl p-[4px] m-0`} />
                                </>
                            )}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <Skeleton className="h-6 w-[30px] bg-gray-100/50" />
                        ) : (
                            <div className="text-2xl font-bold text-white">{value}</div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </Link>
    );
}

export function DashboardCard2({ title, icon: Icon, gradient, values }) {
    return (
        <Card className={`bg-gradient-to-br ${gradient}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white flex justify-between w-full">
                    <span className="font-bold">{title}</span>
                    <Icon size={30} className="bg-white/20 rounded-full p-1 m-0" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-4">
                    {values.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-white">{item.value}</div>
                            <p className="text-xs text-slate-200 font-medium">{item.label}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}


