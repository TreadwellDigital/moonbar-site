import { defineType, defineField } from 'sanity'

export const simplePage = defineType({
  name:  'simplePage',
  title: 'Simple Page',
  type:  'document',
  description: 'Used for Phone Readings, Email Readings, Live Chat, Customer Service.',
  fields: [
    defineField({ name: 'region', title: 'Region', type: 'string', options: { list: ['AU', 'UK', 'NZ'], layout: 'radio' }, validation: r => r.required() }),
    defineField({ name: 'title', title: 'Page Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'intro', title: 'Introduction', type: 'text', rows: 3 }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'seo', title: 'SEO', type: 'seoFields' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'region' },
  },
})
