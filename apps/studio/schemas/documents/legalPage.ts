import { defineType, defineField } from 'sanity'

export const legalPage = defineType({
  name:  'legalPage',
  title: 'Legal Page',
  type:  'document',
  fields: [
    defineField({ name: 'region', title: 'Region', type: 'string', options: { list: ['AU', 'UK', 'NZ'], layout: 'radio' }, validation: r => r.required() }),
    defineField({ name: 'title', title: 'Page Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'lastUpdated', title: 'Last Updated', type: 'date' }),
    defineField({ name: 'body', title: 'Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'seo', title: 'SEO', type: 'seoFields' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'region' },
  },
})
