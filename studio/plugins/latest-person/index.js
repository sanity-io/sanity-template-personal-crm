import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {IntentLink} from 'part:@sanity/base/router'
import IntentButton from 'part:@sanity/components/buttons/intent'
import {getPublishedId} from 'part:@sanity/base/util/draft-utils'
import Spinner from 'part:@sanity/components/loading/spinner'
import client from 'part:@sanity/base/client'

import styles from './latestPerson.css'

const query = `*[_type == "person"][0]|order(_createdAt desc){
  ...,
  "photo": photo.asset->url
}`

function latestPerson () {
  const [person, setPerson] = useState(false)
  useEffect(() => {
    const sub = client.observable.fetch(query).subscribe(doc => setPerson(doc))
    return () => sub.unsubscribe()
  }, [])

  if (!person) {
    return (
      <div className={styles.container}>
        <Spinner center message="Loading..." />
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Latest person: {person.nickname}</h2>
      </header>
      <div className={styles.content}>
        <IntentLink
          intent="edit"
          params={{
            type: person._type,
            id: getPublishedId(person._id)
          }}
        >
          {person.photo ? <figure>
            <img className={styles.img} src={person.photo} />
          </figure> : `Go to ${person.name}`}
        </IntentLink>
      </div>
      <div className={styles.footer}>
        <IntentButton
          bleed
          color="primary"
          kind="simple"
          intent="create"
          params={{ type: 'person' }}
        >
          {`Create new person`}
        </IntentButton>
      </div>
    </div>
  )
}

export default {
  name: 'latestPerson',
  component: latestPerson
}
