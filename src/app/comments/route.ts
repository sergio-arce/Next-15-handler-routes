import { NextRequest } from "next/server"
import { comments } from "./data"

// export async function GET() {
//   return Response.json(comments)
// }

export async function GET(req: NextRequest) {
  const serchParams = req.nextUrl.searchParams
  const query = serchParams.get('query')
  const filteredComments = query 
    ? comments.filter((comment) => comment.text.includes(query))
    : comments
  return Response.json(filteredComments)
}

export async function POST(req: Request) {

  const comment = await req.json()

  const newComment = {
    id: comments.length + 1,
    text: comment.text
  }
  
  comments.push(newComment)

  return new Response(JSON.stringify(newComment), {
    headers: { "Conten-Type": "application/json" },
    status: 201
  })

}