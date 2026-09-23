import { defineType, defineField } from 'sanity'

export const servicesHub = defineType({
  name:  'servicesHub',
  title: 'Services Hub',
  type:  'document',
  fields: [
    defineField({ name: 'region', title: 'Region', type: 'string', options: { list: ['AU', 'UK', 'NZ'], layout: 'radio' }, validation: r => r.required() }),
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({ name: 'intro', title: 'Introduction', type: 'text', rows: 3 }),
    defineField({ name: 'seo', title: 'SEO', type: 'seoFields' }),
  ],
})
