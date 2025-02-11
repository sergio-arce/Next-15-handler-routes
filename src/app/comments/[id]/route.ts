import { comments } from "../data"

export async function GET(req: Request, { params }: { params: Promise<{ id: string }>}) {

  const { id } = await params

  const comment = comments.find((comment) => comment.id === parseInt(id))

  return Response.json(comment)
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }>}) {

  const { id } = await params
  const { text } = await req.json()

  const index = comments.findIndex((comment) => comment.id === parseInt(id))
  comments[index].text = text

  return Response.json(comments[index])
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }>}) {
  const { id } = await params
  
  const index = comments.findIndex((comment) => comment.id === parseInt(id))

  if (index === -1) {
    return new Response(JSON.stringify({ error: "Comment no found"}), { status: 404 })
  }
  const deleteComment = comments[index]
  comments.splice(index, 1)

  // return new Response(JSON.stringify({ message: `Comment with id: ${ id } deleted successfully`}), { status: 200 })
  return Response.json(deleteComment)
}