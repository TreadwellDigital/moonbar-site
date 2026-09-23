import { defineType, defineField } from 'sanity'

export const callBox = defineType({
  name:  'callBox',
  title: 'Call Box',
  type:  'object',
  description: 'A phone call offer block shown on the homepage and phone-readings page.',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. "20 Minute Special Offer"' }),
    defineField({ name: 'offer', title: 'Offer Text', type: 'string', description: 'e.g. "20 mins for $29.99"' }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'offer' },
  },
})
