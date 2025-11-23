import type { Act } from "./types"

export const initialActs: Act[] = [
  {
    id: "1",
    title: "Community Garden Cleanup",
    description: "Cleared 500lbs of trash and planted native wildflowers in the downtown empty lot.",
    impact: "Local residents and pollinators",
    category: "Environment",
    createdAt: new Date(),
    allocation: 450,
  },
  {
    id: "2",
    title: "After-school Coding Club",
    description: "Providing free python lessons to 20 middle school students twice a week.",
    impact: "20 students + families",
    category: "Education",
    createdAt: new Date(),
    allocation: 890,
  },
  {
    id: "3",
    title: "Senior Grocery Delivery",
    description: "Delivered weekly groceries to 15 homebound seniors during the winter storm.",
    impact: "15 seniors",
    category: "Community",
    createdAt: new Date(),
    allocation: 320,
  },
  {
    id: "4",
    title: "Free Mental Health Workshop",
    description: "Hosted a weekend workshop on anxiety management techniques open to all.",
    impact: "45 attendees",
    category: "Health",
    createdAt: new Date(),
    allocation: 600,
  },
]
