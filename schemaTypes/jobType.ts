import {defineField, defineType} from 'sanity'

export const jobType = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'employType',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      type: 'string',
      description: 'Enter the year and month (e.g., 2025-01)',
      validation: (rule) =>
        rule
          .regex(/^\d{4}-(0[1-9]|1[0-2])$/, {
            name: 'year-month', // Error message name
            invert: false, // Don't allow invalid patterns
          })
          .required(),
    }),
    defineField({
      name: 'endDate',
      type: 'string',
      description: 'Enter the year and month (e.g., 2025-01)',
      validation: (rule) =>
        rule
          .regex(/^\d{4}-(0[1-9]|1[0-2])$/, {
            name: 'year-month', // Error message name
            invert: false, // Don't allow invalid patterns
          })
          .required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'content',
      type: 'markdown', // 플러그인에서 제공하는 Markdown 필드 타입
      validation: (rule) => rule.required(),
      description: 'Add your content in Markdown format',
    }),
  ],
})
