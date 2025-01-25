import {defineField, defineType} from 'sanity'

export const planetType = defineType({
  name: 'planet',
  title: 'Planet',
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
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // 크롭 및 초점 조정 지원
      },
    }),
  ],
})
