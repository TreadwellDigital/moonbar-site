import { defineType, defineField } from 'sanity'

export const seoFields = defineType({
  name:  'seoFields',
  title: 'SEO & Sharing',
  type:  'object',
  fields: [
    defineField({
      name:        'metaTitle',
      title:       'Meta Title',
      type:        'string',
      description: 'Shown in browser tab and search results. 50–60 characters recommended.',
      validation:  r => r.max(70),
    }),
    defineField({
      name:        'metaDescription',
      title:       'Meta Description',
      type:        'text',
      rows:        3,
      description: 'Shown in search result snippets. 150–160 characters recommended.',
      validation:  r => r.max(160),
    }),
    defineField({
      name:  'ogImage',
      title: 'Social Share Image',
      type:  'image',
      description: '1200×630px. Shown when page is shared on Facebook, Twitter, etc.',
    }),
    defineField({
      name:        'canonicalUrl',
      title:       'Canonical URL (optional)',
      type:        'url',
      description: 'Override only if this page is syndicated elsewhere. Leave blank normally.',
    }),
  ],
})
