"use client"

import { useEffect, useRef, useState } from "react"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

interface FlowVisualProps {
  allocations: { id: string; amount: number; color: string }[]
  containerHeight: number
}

export function FlowVisual({ allocations, containerHeight }: FlowVisualProps) {
  const [paths, setPaths] = useState<JSX.Element[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate paths whenever allocations change or window resizes
  useEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.clientWidth
      const sourceX = containerWidth / 2
      const sourceY = 0 // Top center

      const newPaths = allocations.map((alloc, index) => {
        // Calculate target position based on index and total items
        // We assume the target cards are distributed evenly at the bottom
        // This is a visual approximation to match the grid layout
        const totalItems = allocations.length
        const sectionWidth = containerWidth / totalItems
        const targetX = sectionWidth * index + sectionWidth / 2
        const targetY = containerHeight - 20 // Bottom, slightly offset

        // Bezier curve control points
        const cp1x = sourceX
        const cp1y = containerHeight * 0.5
        const cp2x = targetX
        const cp2y = containerHeight * 0.5

        // Stroke width based on allocation amount (normalized)
        const maxAllocation = Math.max(...allocations.map((a) => a.amount))
        const strokeWidth = Math.max(2, (alloc.amount / maxAllocation) * 20)

        return (
          <g key={alloc.id}>
            {/* Glow Effect Path */}
            <path
              d={`M ${sourceX} ${sourceY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${targetX} ${targetY}`}
              fill="none"
              stroke={alloc.color}
              strokeWidth={strokeWidth + 8}
              strokeOpacity="0.1"
              strokeLinecap="round"
            />
            {/* Main Flow Path */}
            <path
              d={`M ${sourceX} ${sourceY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${targetX} ${targetY}`}
              fill="none"
              stroke={alloc.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              className="opacity-80"
            >
              <animate
                attributeName="stroke-dasharray"
                from={`0, ${strokeWidth * 20}`}
                to={`${strokeWidth * 20}, 0`}
                dur={`${30000 / (alloc.amount + 100)}s`}
                repeatCount="indefinite"
              />
            </path>
            {/* Moving Particle */}
            <circle r={strokeWidth / 2 + 2} fill="white">
              <animateMotion
                dur={`${20000 / (alloc.amount + 100)}s`}
                repeatCount="indefinite"
                path={`M ${sourceX} ${sourceY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${targetX} ${targetY}`}
              />
            </circle>
          </g>
        )
      })

      setPaths(newPaths)
    }

    updatePaths()
    window.addEventListener("resize", updatePaths)
    return () => window.removeEventListener("resize", updatePaths)
  }, [allocations, containerHeight])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%" className="overflow-visible">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {paths}
      </svg>
    </div>
  )
}
