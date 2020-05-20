import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useHistory } from 'react-router-dom'

import { getUsersByFieldAndQuery } from '../services/APIHelper'

export default function SearchBar(props) {
  const history = useHistory()

  const gotoSearchResults = async (values) => {
    const { searchType, query } = values
    const searchResults = await getUsersByFieldAndQuery(searchType, query)
    console.log(searchResults)
    if (searchType === 'team') {
      const teamId = searchResults[0].team.id
      history.push(`/teams/${teamId}`)
    } else {
      props.setSearchResults(searchResults)
    }
  }

  const availableSearchTypes = ['team', 'name', 'tag', 'presence', 'bio']
  const generateOptions = () => {
    return availableSearchTypes.map((searchType, index) => {
      const selected = (searchType === 'team')
      return (
        <option
          key={index}
          value={searchType}
          selected={selected}
        >
          {searchType}
        </option>
      )
    })
  }

  return (
    <Formik
      initialValues={{ searchType: 'team', query: '' }}
      onSubmit={gotoSearchResults}
    >
      <Form>
        <label>Search By:</label>
        <Field as='select' name='searchType'>
          {generateOptions()}
        </Field>
        <Field type='input' name='query' placeholder='Search for...'/>
        <button type='submit'>
          Search
        </button>
      </Form>
    </Formik>
  )
}
