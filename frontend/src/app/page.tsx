"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  [{ core: "core 0", free: 69, used: 31 }],
  [{ core: "core 1", free: 42, used: 58 }],
  [{ core: "core 2", free: 35, used: 65 }],
  [{ core: "core 3", free: 79, used: 21 }],
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
        <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[250px]">
          <RadialBarChart data={chartData[0]} endAngle={180} innerRadius={80} outerRadius={150}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />}/>
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="fill-foreground text-2xl font-bold">
                          {chartData[0][0].used}%
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-muted-foreground">
                          Used
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar dataKey="free" stackId="a" cornerRadius={2} fill="var(--color-free)" className="stroke-transparent stroke-2"/>
            <RadialBar dataKey="used" fill="var(--color-used)" stackId="a" cornerRadius={2} className="stroke-transparent stroke-2"/>
          </RadialBarChart>
        </ChartContainer>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[250px]">
          <RadialBarChart data={chartData[1]} endAngle={180} innerRadius={80} outerRadius={150}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />}/>
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="fill-foreground text-2xl font-bold">
                          {chartData[1][0].used}%
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-muted-foreground">
                          Used
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar dataKey="free" stackId="a" cornerRadius={2} fill="var(--color-free)" className="stroke-transparent stroke-2"/>
            <RadialBar dataKey="used" fill="var(--color-used)" stackId="a" cornerRadius={2} className="stroke-transparent stroke-2"/>
          </RadialBarChart>
        </ChartContainer>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[250px]">
          <RadialBarChart data={chartData[2]} endAngle={180} innerRadius={80} outerRadius={150}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />}/>
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="fill-foreground text-2xl font-bold">
                          {chartData[2][0].used}%
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-muted-foreground">
                          Used
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar dataKey="free" stackId="a" cornerRadius={2} fill="var(--color-free)" className="stroke-transparent stroke-2"/>
            <RadialBar dataKey="used" fill="var(--color-used)" stackId="a" cornerRadius={2} className="stroke-transparent stroke-2"/>
          </RadialBarChart>
        </ChartContainer>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[250px]">
          <RadialBarChart data={chartData[3]} endAngle={180} innerRadius={80} outerRadius={150}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />}/>
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="fill-foreground text-2xl font-bold">
                          {chartData[3][0].used}%
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-muted-foreground">
                          Used
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar dataKey="free" stackId="a" cornerRadius={2} fill="var(--color-free)" className="stroke-transparent stroke-2"/>
            <RadialBar dataKey="used" fill="var(--color-used)" stackId="a" cornerRadius={2} className="stroke-transparent stroke-2"/>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
