import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'object',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'skill',
      title: 'Skill',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
