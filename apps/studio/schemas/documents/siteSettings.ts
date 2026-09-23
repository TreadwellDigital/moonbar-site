import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name:  'siteSettings',
  title: 'Site Settings',
  type:  'document',
  fields: [
    defineField({ name: 'region', title: 'Region', type: 'string', options: { list: ['AU', 'UK', 'NZ'], layout: 'radio' }, validation: r => r.required() }),
    defineField({ name: 'siteName', title: 'Site Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({
      name:  'socialLinks',
      title: 'Social Links',
      type:  'object',
      fields: [
        defineField({ name: 'facebook',  title: 'Facebook URL',  type: 'url' }),
        defineField({ name: 'twitter',   title: 'Twitter URL',   type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
      ],
    }),
    defineField({ name: 'footerText', title: 'Footer Text', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'region' },
    prepare: ({ title }) => ({ title: `Site Settings — ${title}` }),
  },
})
