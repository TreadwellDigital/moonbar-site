import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import {
  homePage, simplePage, servicePage, servicesHub,
  blogPost, testimonialsPage, legalPage, siteSettings,
  seoFields, faqItem, callBox,
} from './schemas'

export default defineConfig({
  name:      'moonbar',
  title:     'Moonbar CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset:   process.env.SANITY_STUDIO_DATASET ?? 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Moonbar Content')
          .items([
            S.listItem().title('Homepages').child(
              S.documentTypeList('homePage').title('Homepages')
            ),
            S.listItem().title('Service Pages').child(
              S.documentTypeList('servicePage').title('Service Pages')
            ),
            S.listItem().title('Services Hub').child(
              S.documentTypeList('servicesHub').title('Services Hub')
            ),
            S.listItem().title('Simple Pages').child(
              S.documentTypeList('simplePage').title('Simple Pages')
            ),
            S.listItem().title('Blog Posts').child(
              S.documentTypeList('blogPost').title('Blog Posts')
            ),
            S.listItem().title('Testimonials').child(
              S.documentTypeList('testimonialsPage').title('Testimonials')
            ),
            S.listItem().title('Legal Pages').child(
              S.documentTypeList('legalPage').title('Legal Pages')
            ),
            S.divider(),
            S.listItem().title('Site Settings').child(
              S.documentTypeList('siteSettings').title('Site Settings')
            ),
          ]),
    }),
    visionTool(), // GROQ query explorer (dev only)
  ],

  schema: {
    types: [
      // Documents
      homePage, simplePage, servicePage, servicesHub,
      blogPost, testimonialsPage, legalPage, siteSettings,
      // Objects
      seoFields, faqItem, callBox,
    ],
  },
})
