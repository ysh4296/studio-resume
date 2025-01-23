import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'type',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'string',
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
      name: 'images', // 필드 이름 변경
      type: 'array',
      title: 'Images', // 필드 제목
      of: [{type: 'image'}], // 이미지 배열
      options: {
        layout: 'grid', // 배열 내 이미지를 그리드 형태로 표시
      },
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'skillCategory'}], // 전역 객체 타입 참조
    }),
    defineField({
      name: 'content',
      type: 'markdown', // 플러그인에서 제공하는 Markdown 필드 타입
      validation: (rule) => rule.required(),
      description: 'Add your content in Markdown format',
    }),
  ],
})
