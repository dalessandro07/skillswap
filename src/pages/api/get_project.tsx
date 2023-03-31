import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
  regions: ['iad1']
}

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({
        message: 'Method Not Allowed'
      }),
      { status: 405 }
    )
  }

  const { url } = await req.json()

  try {
    const websiteUrl = new URL(url)

    if (websiteUrl.protocol !== 'http:' && websiteUrl.protocol !== 'https:') {
      throw new Error('URL must have http or https protocol')
    }

    const response = await fetch(websiteUrl.toString())
    const html = await response.text()

    const title = html.match(/<title>(.*?)<\/title>/)?.[1]
    const description = html.match(/<meta.*?name="description".*?content="(.*?)".*?>/)?.[1]

    if (!title) {
      return new Response(JSON.stringify({ message: 'No se pudo obtener el título.' }), {
        status: 500
      })
    }

    if (!description) {
      return new Response(JSON.stringify({ message: 'No se pudo obtener la descripción.' }), {
        status: 500
      })
    }

    return new Response(JSON.stringify({ title, description }), { status: 200 })
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 })
  }
}
