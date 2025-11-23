"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"

// Schema for validation
const actSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Please provide more detail in the description"),
  impact: z.string().min(10, "Describe the impact in more detail"),
  category: z.enum(["Community", "Environment", "Education", "Health", "Other"]),
})

export async function submitAct(prevState: any, formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const validatedFields = actSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    impact: formData.get("impact"),
    category: formData.get("category"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please check your entries.",
    }
  }

  // In a real app, we would insert into the DB here
  // await db.insert(acts).values(validatedFields.data)

  console.log("Act submitted:", validatedFields.data)

  revalidatePath("/")
  return {
    message: "Act released into the stream!",
    success: true,
  }
}
