// export async function GET() {
//   return new Response('Profile route')
// }

import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";


export async function GET(req: NextRequest) {
  /**
   * Option 1
   */
  // const requestHeaders = new Headers(req.headers)
  // console.log(requestHeaders.get('Authorization'))

  /**
   * Option Next use headers
   */
  const headerList = await headers()
  console.log(headerList.get("Authorization"))

  const theme = req.cookies.get('theme')
  console.log(theme)

  /**
   * Option 2 set and get cookiens
   * there are has and delete methods
   */

  const cookiesStore = await cookies()
  cookiesStore.set('resultPerPage', "30")
  console.log(cookiesStore.get("resultPerPage"))

  return new Response('<h1 style="color: red">Profile route</h1>', {
    headers: { 
      "Content-Type": "text/html",
      /**
       * Option 1 set cookies
       */
      "Set-Cookie": "theme=dark"
    }
  })
}