export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  initialValue: {
    participants: [
      {
        _type: "reference",
        _ref: "faaea40c-f894-4d41-b3e7-083cb2a9519f"
      }
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'duration',
      type: 'duration',
      title: 'Duration'
    },
    {
      name: 'participants',
      type: 'array',
      validation: Rule => Rule.unique(),
      of: [
        {
          type: 'reference',
          to: [{type: 'person'}]
        }
      ]
    }
  ]
}
