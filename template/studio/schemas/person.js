export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  initialValue: {
    checkInFrequency: 'monthly'
  },
  fields: [
    {
      name: 'nickname',
      type: 'string',
      title: 'Nickname'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Full name'
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Photo'
    },
    {
      name: 'contact',
      type: 'contact',
      title: 'Contact'
    },
    {
      /**
       * @TODO: Make upcoming birthday structure
       */
      name: 'birthday',
      type: 'date',
      title: 'Birthday'
    },
    {
      name: 'checkInFrequency',
      type: 'string',
      title: 'Checkin frequency',
      options: {
        list: [
          'weekly',
          'monthly',
          'annualy',
          'never'
        ]
      }
    },
    {
      name: 'network',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'person',
              type: 'reference',
              to: [{type: 'person'}]
            },
            {
              name: 'type',
              type: 'string',
              options: {
                list: ['friend', 'foe', 'family','colleague', 'acquaintance', 'other']
              }
            }
          ],
          preview: {
            select: {
              title: 'person.nickname',
              subtitle: 'type',
              media: 'person.photo'
            }
          }
        }
      ]
    }
  ]
}
