import { defineType, defineField } from 'sanity'

export const faqItem = defineType({
  name:  'faqItem',
  title: 'FAQ Item',
  type:  'object',
  fields: [
    defineField({
      name:        'question',
      title:       'Question',
      type:        'string',
      description: 'Write as a natural question a customer would ask. This feeds AI answer engines.',
      validation:  r => r.required(),
    }),
    defineField({
      name:        'answer',
      title:       'Answer',
      type:        'text',
      rows:        4,
      description: 'Clear, factual answer in 40–80 words. Will appear in Google search results.',
      validation:  r => r.required(),
    }),
  ],
  preview: {
    select: { title: 'question' },
  },
})
