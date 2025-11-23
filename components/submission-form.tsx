"use client"

import { useActionState, useState } from "react"
import { submitAct } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Send, Sparkles } from "lucide-react"
import { toast } from "sonner"

const categories = [
  { value: "Community", label: "Community Support", color: "bg-blue-500" },
  { value: "Environment", label: "Environmental Care", color: "bg-green-500" },
  { value: "Education", label: "Teaching & Learning", color: "bg-yellow-500" },
  { value: "Health", label: "Health & Wellness", color: "bg-red-500" },
  { value: "Other", label: "Other Kindness", color: "bg-purple-500" },
]

export function SubmissionForm() {
  const [state, formAction, isPending] = useActionState(submitAct, null)
  const [activeCategory, setActiveCategory] = useState<string>("")

  if (state?.success) {
    toast.success("Your act has been released into the stream!")
    // Reset form state logic would go here, but for now we show a success card
    return (
      <div className="glass p-8 rounded-2xl text-center space-y-6 animate-in zoom-in duration-500 border-primary/30 shadow-[0_0_50px_rgba(0,243,255,0.2)]">
        <div className="mx-auto w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
          <Sparkles className="w-10 h-10 text-primary animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Released to the Stream!</h3>
        <p className="text-muted-foreground">
          Your act of kindness is now flowing through the community. Watch as others allocate value to it.
        </p>
        <Button onClick={() => window.location.reload()} variant="outline" className="mt-4">
          Submit Another Act
        </Button>
      </div>
    )
  }

  return (
    <div className="glass p-8 rounded-2xl border-white/10 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
      {/* Decorational glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700" />

      <div className="relative z-10 mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Submit Kindness</h2>
        <p className="text-muted-foreground">Share what you've done. Let the community value it.</p>
      </div>

      <form action={formAction} className="space-y-6 relative z-10">
        <div className="space-y-2">
          <Label htmlFor="title">What did you do?</Label>
          <Input
            id="title"
            name="title"
            placeholder="e.g., Cleaned up the local park..."
            required
            className="bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all"
          />
          {state?.errors?.title && <p className="text-sm text-destructive">{state.errors.title}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select name="category" required onValueChange={setActiveCategory}>
              <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${cat.color}`} />
                      {cat.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state?.errors?.category && <p className="text-sm text-destructive">{state.errors.category}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="impact">Who did it help?</Label>
            <Input
              id="impact"
              name="impact"
              placeholder="e.g., 50 families in the neighborhood"
              required
              className="bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all"
            />
            {state?.errors?.impact && <p className="text-sm text-destructive">{state.errors.impact}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">The Story</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Tell us the details of your act..."
            required
            className="min-h-[120px] bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all"
          />
          {state?.errors?.description && <p className="text-sm text-destructive">{state.errors.description}</p>}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-12 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Releasing...
            </>
          ) : (
            <>
              Release into Stream
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
