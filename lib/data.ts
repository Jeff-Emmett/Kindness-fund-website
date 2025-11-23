export interface Act {
  id: string
  title: string
  description: string
  author: string
  currentAllocation: number // Percentage or amount
  color?: string
}

export const TOTAL_POOL = 10000 // $10,000 total stream

export const initialActs: Act[] = [
  {
    id: "1",
    title: "Community Garden Cleanup",
    description:
      "Organized a weekend cleanup for the local community garden, planting 50 new flowers and removing 20 bags of trash.",
    author: "Sarah J.",
    currentAllocation: 2500,
    color: "hsl(var(--chart-1))",
  },
  {
    id: "2",
    title: "Senior Tech Support",
    description:
      "Spent 3 weekends teaching seniors at the local library how to video call their families and use tablets.",
    author: "Mike T.",
    currentAllocation: 1500,
    color: "hsl(var(--chart-2))",
  },
  {
    id: "3",
    title: "Homeless Shelter Meals",
    description: "Cooked and delivered 50 hot meals to the downtown shelter on a rainy Tuesday night.",
    author: "Elena R.",
    currentAllocation: 3000,
    color: "hsl(var(--chart-3))",
  },
  {
    id: "4",
    title: "Stray Cat Rescue",
    description:
      "Rescued a litter of 4 kittens found under a porch, got them vet care, and found them all forever homes.",
    author: "Davide B.",
    currentAllocation: 1000,
    color: "hsl(var(--chart-4))",
  },
  {
    id: "5",
    title: "Free Math Tutoring",
    description:
      "Provided 20 hours of free math tutoring to underprivileged high school students preparing for finals.",
    author: "Jenny W.",
    currentAllocation: 2000,
    color: "hsl(var(--chart-5))",
  },
]
