import type { APIRoute } from 'astro'
import { z } from 'zod'
import prisma from '../../../prisma/client.ts'

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1)
})

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()
  const validation = createIssueSchema.safeParse(body)

  if (!validation.success) return new Response(JSON.stringify(validation.error.errors), { status: 400 })

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description }
  })

  return new Response(JSON.stringify(newIssue), { status: 201})
}

