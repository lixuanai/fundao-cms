import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemas } from './schemas'

export default defineConfig({
  name: 'fundao-cms',
  title: 'FunDAO CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '4wq2d1xx',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
