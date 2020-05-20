import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'

import { getUsersByFieldAndQuery } from '../services/APIHelper'

export default function SearchBar() {
  const [searchResults, setSearchResults] = useState([])

  const fetchSearchResults = async (field, query) => {
    const searchResults = await getUsersByFieldAndQuery(field, query)
    console.log(searchResults)
    setSearchResults(searchResults)
  }

  useEffect(() => {
    fetchSearchResults('tag', 'UX')
  }, [])

  return (
    <>
      <p>Searching...</p>
    </>
  )
}
