import { defineType, defineField } from 'sanity'

export const testimonialsPage = defineType({
  name:  'testimonialsPage',
  title: 'Testimonials Page',
  type:  'document',
  fields: [
    defineField({ name: 'region', title: 'Region', type: 'string', options: { list: ['AU', 'UK', 'NZ'], layout: 'radio' }, validation: r => r.required() }),
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({ name: 'intro', title: 'Introduction', type: 'text', rows: 2 }),
    defineField({
      name:  'aggregateRating',
      title: 'Overall Rating',
      type:  'object',
      description: 'Used for rich star snippets in search results.',
      fields: [
        defineField({ name: 'ratingValue', title: 'Average Rating (e.g. 4.8)', type: 'number' }),
        defineField({ name: 'ratingCount', title: 'Total Number of Reviews', type: 'number' }),
      ],
    }),
    defineField({
      name:  'testimonials',
      title: 'Testimonials',
      type:  'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'reviewerName', title: 'Reviewer Name', type: 'string' }),
          defineField({ name: 'stars', title: 'Star Rating (1–5)', type: 'number', options: { list: [1, 2, 3, 4, 5] } }),
          defineField({ name: 'text', title: 'Review Text', type: 'text', rows: 4 }),
          defineField({ name: 'readerName', title: 'Reader Name', type: 'string', description: 'Which reader the review is for.' }),
          defineField({ name: 'date', title: 'Date', type: 'date' }),
        ],
        preview: {
          select: { title: 'reviewerName', subtitle: 'readerName' },
        },
      }],
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seoFields' }),
  ],
  preview: {
    select: { title: 'region' },
    prepare: ({ title }) => ({ title: `Testimonials — ${title}` }),
  },
})
