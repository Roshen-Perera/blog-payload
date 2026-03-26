import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts', // The slug is the unique identifier for the collection and is used in the API routes
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'textarea',
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
  ],
}
