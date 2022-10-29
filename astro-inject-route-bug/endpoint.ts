import type { APIRoute } from 'astro'

export const get: APIRoute = ({ params }) => {
  return {
    body: String(params.slug)
  }
}
