// export async function GET() {
//   return new Response('Profile route')
// }

import { headers } from "next/headers";
import { NextRequest } from "next/server";


export async function GET(req: NextRequest) {
  /**
   * Opcion 1
   */
  // const requestHeaders = new Headers(req.headers)
  // console.log(requestHeaders.get('Authorization'))

  /**
   * Option Next use headers
   */
  const headerList = await headers()
  console.log(headerList.get("Authorization"))

  return new Response('<h1 style="color: red">Profile route</h1>', {
    headers: { "Content-Type": "text/html"}
  })
}