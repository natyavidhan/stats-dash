"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig
} from "@/components/ui/chart"

import PercRadial from "@/components/elements/perc_radial"

const chartData = [
  { core: "core 0", free: 69, used: 31 },
  { core: "core 1", free: 42, used: 58 },
  { core: "core 2", free: 35, used: 65 },
  { core: "core 3", free: 79, used: 21 },
]

const chartConfig = {
  free: {
    label: "free",
    color: "#d0d0d0",
  },
  used: {
    label: "used",
    color: "#0069BA",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>CPU Usage</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-4 mt-10">
        <PercRadial chartConfig={chartConfig} chartData={chartData[0]} />
        <PercRadial chartConfig={chartConfig} chartData={chartData[1]} />
        <PercRadial chartConfig={chartConfig} chartData={chartData[2]} />
        <PercRadial chartConfig={chartConfig} chartData={chartData[3]} />
      </CardContent>
    </Card>
  )
}
