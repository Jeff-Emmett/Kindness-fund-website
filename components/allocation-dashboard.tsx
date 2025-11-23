"use client"

import { useState } from "react"
import { initialActs } from "@/lib/mock-data"
import { FlowVisual } from "./flow-visual"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Droplets, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

const categoryColors: Record<string, string> = {
  Environment: "var(--chart-3)", // Lime
  Education: "var(--chart-5)", // Orange
  Community: "var(--chart-1)", // Cyan
  Health: "var(--chart-2)", // Magenta
  Other: "var(--chart-4)", // Purple
}

const categoryHex: Record<string, string> = {
  Environment: "#84cc16", // Lime-500
  Education: "#f97316", // Orange-500
  Community: "#06b6d4", // Cyan-500
  Health: "#ec4899", // Pink-500
  Other: "#a855f7", // Purple-500
}

export function AllocationDashboard() {
  const [acts, setActs] = useState(initialActs)
  const [totalFlow, setTotalFlow] = useState(acts.reduce((acc, act) => acc + act.allocation, 0))

  const handleAllocationChange = (id: string, newValue: number[]) => {
    const value = newValue[0]
    setActs((prev) => prev.map((act) => (act.id === id ? { ...act, allocation: value } : act)))
    // Recalculate total (in a real app, this might be capped)
    setTotalFlow(acts.reduce((acc, act) => acc + (act.id === id ? value : act.allocation), 0))
  }

  return (
    <div className="w-full bg-background/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden flex flex-col min-h-[800px] relative">
      {/* Header / Source */}
      <div className="relative z-20 p-8 border-b border-white/5 bg-black/20 text-center">
        <div className="inline-flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 ring-4 ring-primary/10 animate-pulse">
            <Droplets className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Community Stream Source</h2>
          <div className="flex items-center space-x-2 mt-2 text-muted-foreground">
            <TrendingUp className="w-4 h-4" />
            <span>
              Total Active Flow: <span className="text-primary font-mono font-bold">${totalFlow.toLocaleString()}</span>{" "}
              / hr
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area with Visuals */}
      <div className="flex-1 relative p-8">
        {/* Visual Layer */}
        <div className="absolute inset-0 top-0 pointer-events-none">
          <FlowVisual
            allocations={acts.map((act) => ({
              id: act.id,
              amount: act.allocation,
              color: categoryHex[act.category] || "#ffffff",
            }))}
            containerHeight={300} // Visual height of the flow area
          />
        </div>

        {/* Spacing for the visual flow lines */}
        <div className="h-[250px] w-full flex items-center justify-center pointer-events-none">
          <div className="text-center opacity-30">
            <p className="text-sm tracking-[0.5em] uppercase">Flow Direction</p>
            <div className="h-16 w-[1px] bg-gradient-to-b from-white/50 to-transparent mx-auto mt-4" />
          </div>
        </div>

        {/* Acts Grid (Destinations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {acts.map((act) => (
            <div
              key={act.id}
              className="group relative flex flex-col bg-card/50 border border-white/5 hover:border-primary/30 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Connection Point (Top) */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-white/10 group-hover:border-primary transition-colors" />

              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <span
                  className={cn(
                    "text-xs font-bold px-2 py-1 rounded-full bg-white/5 border border-white/5",
                    `text-[${categoryHex[act.category]}]`, // Dynamic color hint
                  )}
                  style={{ color: categoryHex[act.category] }}
                >
                  {act.category}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg leading-tight mb-2 min-h-[3rem]">{act.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{act.description}</p>

              {/* Allocation Control */}
              <div className="mt-auto space-y-3 bg-black/20 p-3 rounded-xl">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Flow Rate</span>
                  <span className="font-mono font-bold text-primary">${act.allocation}/hr</span>
                </div>
                <Slider
                  value={[act.allocation]}
                  max={1500}
                  step={10}
                  onValueChange={(val) => handleAllocationChange(act.id, val)}
                  className="[&>.range]:bg-primary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
