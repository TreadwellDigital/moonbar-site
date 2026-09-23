import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
  name:  'blogPost',
  title: 'Blog Post',
  type:  'document',
  fields: [
    defineField({ name: 'region', title: 'Region', type: 'string', options: { list: ['AU', 'UK', 'NZ'], layout: 'radio' }, validation: r => r.required() }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime', validation: r => r.required() }),
    defineField({ name: 'updatedAt', title: 'Last Updated', type: 'datetime' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, description: 'Short summary shown on the blog list page.' }),
    defineField({ name: 'thumbnail', title: 'Thumbnail Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name:  'author',
      title: 'Author',
      type:  'object',
      fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'avatar', title: 'Avatar', type: 'image' }),
        defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 2 }),
      ],
    }),
    defineField({ name: 'category', title: 'Category', type: 'string',
      options: { list: ['Psychic Tips', 'Tarot', 'Astrology', 'Spiritual Guidance', 'Love & Relationships', 'News'] },
    }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'seo', title: 'SEO', type: 'seoFields' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'thumbnail' },
  },
  orderings: [{ title: 'Published At, New', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})
