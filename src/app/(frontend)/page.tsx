import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function Page() {
  const payload = await getPayload({ config })

  const posts = await payload.find({
    collection: 'posts',
  })

  return (
    <div>
      <h1>Payload Blog</h1>

      {posts.docs.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
