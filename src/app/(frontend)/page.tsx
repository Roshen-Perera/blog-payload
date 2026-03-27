import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Page() {
  const payload = await getPayload({ config })
  let posts: { docs: any[] } = { docs: [] }

  try {
    posts = await payload.find({
      collection: 'posts',
      depth: 1, // ensures featuredImage is populated as an object
    })
  } catch (error) {
    console.error(
      'Failed to load posts. Run Payload migrations to sync your database schema.',
      error,
    )
  }

  return (
    <div>
      <h1>F1 Cars</h1>
      {posts.docs.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          {post.featuredImage && (
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              width={600}
              height={400}
            />
          )}
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
