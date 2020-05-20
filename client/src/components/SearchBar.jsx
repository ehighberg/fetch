import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { useHistory } from 'react-router-dom'

import { getUsersByFieldAndQuery } from '../services/APIHelper'

export default function SearchBar() {
  const [searchResults, setSearchResults] = useState([])
  const history = useHistory()

  const fetchSearchResults = async (searchType, query) => {
    const searchResults = await getUsersByFieldAndQuery(searchType, query)
    console.log(searchResults)
    setSearchResults(searchResults)
  }

  const availableSearchTypes = ['name', 'tag', 'team', 'bio', 'presence']

  useEffect(() => {
    fetchSearchResults('bio', 'tumblr')
  }, [])

  return (
    <Formik
      initialValues={{ searchType: 'team', query: '' }}
      onSubmit={async () => {
        await fetchSearchResults()
        history.push()
      }}
    >

    </Formik>
  )
}
