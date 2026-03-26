import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
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
      name: 'content',
      type: 'textarea',
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
    {
      name: 'featuredImage',
      type: 'upload', // ⚡ upload image
      relationTo: 'media', // Payload default media collection
    },
    {
      name: 'category',
      type: 'relationship', // ⚡ relation to categories
      relationTo: 'categories', // must match slug
      hasMany: false, // change to true if multiple categories per post
    },
  ],
}
