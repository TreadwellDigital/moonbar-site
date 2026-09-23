/**
 * /api/revalidate — called by Sanity webhook when content is published.
 * Triggers Next.js ISR to regenerate the affected pages.
 */
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const docType: string = body._type ?? ''

    // Revalidate paths based on the document type that changed
    switch (docType) {
      case 'homePage':
        revalidatePath('/')
        break
      case 'blogPost':
        revalidatePath('/psychic-blog-articles')
        revalidatePath(`/psychic-blog-articles/${body.slug?.current ?? ''}`)
        break
      case 'servicePage':
        revalidatePath('/our-psychic-services')
        revalidatePath(`/our-psychic-services/${body.slug?.current ?? ''}`)
        break
      case 'testimonialsPage':
        revalidatePath('/testimonials')
        break
      case 'siteSettings':
        // Rebuild layout on all pages
        revalidatePath('/', 'layout')
        break
      default:
        // Fallback: revalidate everything
        revalidatePath('/')
    }

    return NextResponse.json({ revalidated: true, type: docType })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
