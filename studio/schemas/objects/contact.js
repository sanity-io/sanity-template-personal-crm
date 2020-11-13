import {getCodeList} from 'country-list'

const countries = Object
  .entries(getCodeList())
  .map(([code, name]) => ({title: name, value: code}))

export default {
  name: 'contact',
  type: 'object',
  title: 'Contact information',
  fields: [
    {
      name: 'country',
      type: 'string',
      title: 'Country',
      options: {
        list: countries.sort((a, b) => a.title.localeCompare(b.title))
      }
    },
    {
      name: 'city',
      type: 'string',
      title: 'City'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone number'
    },
    {
      name: 'mail',
      type: 'text',
      title: 'Mailing address',
      description: 'Where to send the physical mail'
    }
  ]
}
