import { defineType, defineField } from 'sanity'

export const servicePage = defineType({
  name:  'servicePage',
  title: 'Service Page',
  type:  'document',
  fields: [
    defineField({
      name:       'region',
      title:      'Region',
      type:       'string',
      options:    { list: ['AU', 'UK', 'NZ'], layout: 'radio' },
      validation: r => r.required(),
    }),
    defineField({
      name:       'title',
      title:      'Page Title',
      type:       'string',
      validation: r => r.required(),
    }),
    defineField({
      name:       'slug',
      title:      'URL Slug',
      type:       'slug',
      options:    { source: 'title', maxLength: 96 },
      validation: r => r.required(),
      description: 'Auto-generated from title. e.g. tarot-card-readings',
    }),
    defineField({
      name:  'teaser',
      title: 'Teaser (used on Services Hub)',
      type:  'string',
    }),
    defineField({
      name:  'icon',
      title: 'Icon Emoji',
      type:  'string',
      description: 'Single emoji displayed on the services grid. e.g. 🔮',
    }),
    defineField({
      name:  'intro',
      title: 'Introduction Paragraph',
      type:  'text',
      rows:  3,
    }),
    defineField({
      name:  'body',
      title: 'Page Body',
      type:  'array',
      of:    [{ type: 'block' }],
      description: 'Main content. Aim for 600+ words for best SEO results.',
    }),
    defineField({
      name:  'faqs',
      title: 'FAQ Section',
      type:  'array',
      of:    [{ type: 'faqItem' }],
      description: 'Add 5–10 Q&As. These appear on the page and in Google\'s FAQ rich results.',
    }),
    defineField({
      name:  'relatedServices',
      title: 'Related Services',
      type:  'array',
      of:    [{ type: 'reference', to: [{ type: 'servicePage' }] }],
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seoFields' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'region' },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `Region: ${subtitle}` }),
  },
})
