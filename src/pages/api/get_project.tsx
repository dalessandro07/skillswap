import type { NextApiRequest, NextApiResponse } from 'next'
import { URL } from 'url'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(404).json({ message: 'Method not allowed' })
    return
  }

  const { url } = req.body

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
      res.status(500).json({ message: 'No se pudo obtener el título.' })
    }

    if (!description) {
      res.status(500).json({ message: 'No se pudo obtener la descripción.' })
    }

    res.status(200).json({ title, description })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}
