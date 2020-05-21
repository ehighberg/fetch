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
    props.setSearchActive(false)
    if (searchType === 'team') {
      const teamId = searchResults[0].team.id
      history.push(`/teams/${teamId}`)
    } else {
      props.setSearchResults(searchResults)
      history.push('/results')
    }
  }

  const availableSearchTypes = ['team', 'bio', 'name', 'presence', 'tag', 'title']
  const generateOptions = () => {
    return availableSearchTypes.map((searchType, index) => {
      return (
        <option key={index} value={searchType}>
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
        <button onClick={() => props.setSearchActive(false)}>X</button>
      </Form>
    </Formik>
  )
}
