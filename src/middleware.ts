/**
 * En Next.js 15, el middleware se usa para ejecutar lógica antes de que una solicitud llegue a su destino final (una página o una API). 
 * Permite modificar la solicitud o la respuesta en función de ciertas condiciones.
 * ===== Algunas de sus aplicaciones más comunes incluyen: =====
 *  - Autenticación y autorización: Redirigir usuarios no autenticados o restringir acceso a ciertas rutas.
 *  - Reescritura y redirección de URLs: Modificar rutas dinámicamente sin necesidad de recargar la página.
 *  - Geolocalización y personalización: Mostrar contenido basado en la ubicación del usuario.
 *  - Registro y análisis: Capturar datos de navegación, errores o métricas de uso.
 *  - Optimización de rendimiento: Caché o compresión de respuestas antes de enviarlas al cliente.
 * El middleware en Next.js se ejecuta en el Edge Runtime, lo que significa que es rápido y eficiente porque se procesa en servidores distribuidos cerca del usuario.
 * 
 * *** importante ***: Si se hacen cambios se tiene q reiniciar la app
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 *  option 1
 */

 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// // See "Matching Paths" below 
// export const config = {
//   matcher: '/profile',
// }


/**
 * Option 2 conditional
 */
// export function middleware(request: NextRequest) {

//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/hello", request.nextUrl))
//   }
// }

/**
 * Option 3 cookies and headers
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const themePreference = request.cookies.get("theme")

  if (!themePreference) {
    response.cookies.set("theme", "dark")
  }

  response.headers.set("custom-header", "custom-value")
  return response

}