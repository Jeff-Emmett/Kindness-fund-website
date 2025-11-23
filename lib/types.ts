export interface Act {
  id: string
  title: string
  description: string
  impact: string
  category: "Community" | "Environment" | "Education" | "Health" | "Other"
  createdAt: Date
  allocation: number // The amount of "flow" allocated
}
