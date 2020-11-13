import S from '@sanity/desk-tool/structure-builder'
import addMonths from 'date-fns/addMonths'
import {MdPermContactCalendar} from 'react-icons/md'

const hiddenTypes = listItem => !['event', 'person'].includes(listItem.getId())

export default S.list()
  .title('Rolodex')
  .items([
    ...S.documentTypeListItems().filter(hiddenTypes),
    S.documentTypeListItem('person').title('Persons').icon(MdPermContactCalendar),
    S.divider(),
    S.listItem()
      .title('Events')
      .child(
        S.list()
        .title('Events')
        .items([
          S.listItem()
          .title('Upcoming event')
          .child(
            S.documentList()
              .title('Upcoming events')
              .filter(`_type == "event" && duration.from > $from && duration.to < $to`)
              .params({from: new Date().toISOString(), to: addMonths(new Date(), 1)})
          ),
          S.listItem()
          .title('Past events')
          .child(
            S.documentList()
              .title('Past events')
              .filter(`_type == "event" && duration.to < $today`)
              .params({today: new Date().toISOString()})
          ),
          S.documentTypeListItem('event').title('All events')
        ])
      )


  ])


