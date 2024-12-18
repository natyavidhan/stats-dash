"use client"

import React from 'react'
import PropTypes from 'prop-types'

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

function perc_radial(props) {
  return (
    <ChartContainer config={props.chartConfig} className="mx-auto aspect-square w-full max-w-[250px]">
        <RadialBarChart data={[props.chartData]} endAngle={180} innerRadius={80} outerRadius={150}>
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                            <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="fill-foreground text-2xl font-bold">
                                {props.chartData.used}%
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
  )
}

perc_radial.propTypes = {
    chartConfig: PropTypes.array,
    chartData: PropTypes.array
}

export default perc_radial
