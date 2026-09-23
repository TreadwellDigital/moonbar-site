import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name:  'homePage',
  title: 'Homepage',
  type:  'document',
  fields: [
    defineField({
      name:        'region',
      title:       'Region',
      type:        'string',
      options:     { list: ['AU', 'UK', 'NZ'], layout: 'radio' },
      validation:  r => r.required(),
      description: 'Which site this homepage is for.',
    }),
    defineField({
      name:  'hero',
      title: 'Hero Section',
      type:  'object',
      fields: [
        defineField({ name: 'headline',    title: 'Headline',    type: 'string' }),
        defineField({ name: 'subheadline', title: 'Sub-headline', type: 'text', rows: 2 }),
        defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image' }),
      ],
    }),
    defineField({
      name:  'introText',
      title: 'Intro Paragraph',
      type:  'text',
      rows:  4,
    }),
    defineField({
      name:  'whyMoonbar',
      title: 'Why Moonbar — Bullet Points',
      type:  'array',
      of:    [{ type: 'object', fields: [{ name: 'point', title: 'Point', type: 'string' }] }],
    }),
    defineField({
      name:  'seo',
      title: 'SEO',
      type:  'seoFields',
    }),
  ],
  preview: {
    select: { title: 'region' },
    prepare: ({ title }) => ({ title: `Homepage — ${title}` }),
  },
})
