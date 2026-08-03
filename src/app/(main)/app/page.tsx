"use client";
import Container from "@/components/global/container";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import type {ChartConfig}
from "@/components/ui/chart";
import {ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {ANALYTICS_DATA, RECENT_SALES} from "@/contants/dashboard";
import {
    ArrowDownIcon,
    ArrowUpIcon,
    ChartColumn,
    MessageSquare,
    Share2Icon,
    UserIcon
} from "lucide-react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis
} from "recharts";

const chartConfig: ChartConfig = {
    engagement: {
        label: "Engagement",
        color: "#22c55e"
    },
    reach: {
        label: "Reach",
        color: "#f97316"
    }
};

const Page = () => {
    return (
        <div className="w-full p-4">
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
                {/* Total Reach */}
                <Container>
                    <Card>
                        <CardHeader className="relative pb-2">
                            <CardTitle className="text-sm font-semibold">
                                Total Reach
                            </CardTitle>

                            <UserIcon className="absolute right-6 top-6 h-4 w-4 text-muted-foreground"/>
                        </CardHeader>

                        <CardContent>
                            <div className="text-2xl font-bold">2.4M</div>

                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                                <ArrowUpIcon className="ml-1 inline h-4 w-4 text-green-500"/>
                            </p>
                        </CardContent>
                    </Card>
                </Container>

                {/* Engagement Rate */}
                <Container delay={0.1}>
                    <Card>
                        <CardHeader className="relative pb-2">
                            <CardTitle className="text-sm font-semibold">
                                Engagement Rate
                            </CardTitle>

                            <Share2Icon className="absolute right-6 top-6 h-4 w-4 text-muted-foreground"/>
                        </CardHeader>

                        <CardContent>
                            <div className="text-2xl font-bold">4.3%</div>

                            <p className="text-xs text-muted-foreground">
                                +1.2% from last month
                                <ArrowUpIcon className="ml-1 inline h-4 w-4 text-muted-foreground"/>
                            </p>
                        </CardContent>
                    </Card>
                </Container>

                {/* Active Campaigns */}
                <Container delay={0.2}>
                    <Card>
                        <CardHeader className="relative pb-2">
                            <CardTitle className="text-sm font-semibold">
                                Active Campaigns
                            </CardTitle>

                            <ChartColumn className="absolute right-6 top-6 h-4 w-4 text-muted-foreground"/>
                        </CardHeader>

                        <CardContent>
                            <div className="text-2xl font-bold">12</div>

                            <p className="text-xs text-muted-foreground">
                                -2 from last month
                                <ArrowDownIcon className="ml-1 inline h-4 w-4 text-red-500"/>
                            </p>
                        </CardContent>
                    </Card>
                </Container>

                {/* Total Posts */}
                <Container delay={0.3}>
                    <Card>
                        <CardHeader className="relative pb-2">
                            <CardTitle className="text-sm font-semibold">
                                Total Posts
                            </CardTitle>

                            <MessageSquare className="absolute right-6 top-6 h-4 w-4 text-muted-foreground"/>
                        </CardHeader>

                        <CardContent>
                            <div className="text-2xl font-bold">812</div>

                            <p className="text-xs text-muted-foreground">
                                +48 from last month
                                <ArrowUpIcon className="ml-1 inline h-4 w-4 text-green-500"/>
                            </p>
                        </CardContent>
                    </Card>
                </Container>
            </div>

            {/* Chart & Recent Sales Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mt-8">
                {/* Performance Overview Chart */}
                <Container delay={0.2}
                    className="lg:col-span-2">
                    <Card className="h-full">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-semibold">
                                Performance Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ChartContainer config={chartConfig}
                                className="h-[400px] w-full">
                                <AreaChart accessibilityLayer
                                    data={ANALYTICS_DATA}
                                    margin={
                                        {
                                            left: 0,
                                            right: 0,
                                            top: 8,
                                            bottom: 8
                                        }
                                }>
                                    <CartesianGrid vertical={false}
                                        strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}/>
                                    <YAxis tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        width={50}/>

                                    <ChartTooltip cursor={false}
                                        content={<ChartTooltipContent/>}/>
                                    <defs>
                                        <linearGradient id="fillReach" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#f97316"
                                                stopOpacity={0.35}/>
                                            <stop offset="95%" stopColor="#f97316"
                                                stopOpacity={0.05}/>
                                        </linearGradient>

                                        <linearGradient id="fillEngagement" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#22c55e"
                                                stopOpacity={0.35}/>
                                            <stop offset="95%" stopColor="#22c55e"
                                                stopOpacity={0.05}/>
                                        </linearGradient>
                                    </defs>

                                    <Area dataKey="engagement" type="natural" fill="url(#fillEngagement)"
                                        fillOpacity={1}
                                        stroke="#22c55e"
                                        strokeWidth={2}
                                        dot={
                                            {
                                                fill: "#22c55e",
                                                r: 4
                                            }
                                        }
                                        activeDot={
                                            {
                                                r: 6,
                                                fill: "#22c55e",
                                                stroke: "#fff",
                                                strokeWidth: 2
                                            }
                                        }/>

                                    <Area dataKey="reach" type="natural" fill="url(#fillReach)"
                                        fillOpacity={1}
                                        stroke="#f97316"
                                        strokeWidth={2}
                                        dot={
                                            {
                                                fill: "#f97316",
                                                r: 4
                                            }
                                        }
                                        activeDot={
                                            {
                                                r: 6,
                                                fill: "#f97316",
                                                stroke: "#fff",
                                                strokeWidth: 2
                                            }
                                        }/>
                                </AreaChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </Container>

                {/* Recent Sales */}
                <Container delay={0.3}
                    className="lg:col-span-1">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">
                                Recent Sales
                            </CardTitle>
                            <CardDescription>You made 265 sales this month.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {
                            RECENT_SALES.map((sale, index) => {
                                const initials = sale.name.split(" ").map((n) => n[0]).join("");
                                return (
                                    <div key={index}
                                        className="flex items-center justify-between space-x-4">
                                        <div className="flex items-center space-x-4 overflow-hidden">
                                            <div className="space-y-1 overflow-hidden">
                                                <p className="text-sm font-medium leading-none truncate">
                                                    {
                                                    sale.name
                                                } </p>
                                                <p className="text-xs text-muted-foreground truncate">
                                                    {
                                                    sale.email
                                                } </p>
                                            </div>
                                        </div>
                                        <div className="font-medium text-sm shrink-0">
                                            {
                                            sale.amount
                                        } </div>
                                    </div>
                                );
                            })
                        } </CardContent>
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default Page;
