import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useHistory } from 'react-router-dom'

import { getUsersByFieldAndQuery } from '../services/APIHelper'

export default function SearchBar(props) {
  const history = useHistory()

  const gotoSearchResults = async (values) => {
    const { searchType, query } = values
    const searchResults = await getUsersByFieldAndQuery(searchType, query)
    if (searchType === 'team') {
      const teamId = searchResults[0].team.id
      history.push(`/teams/${teamId}`)
    } else {
      props.setSearchResults(searchResults)
      history.push('/results')
    }
  }

  const availableSearchTypes = ['Team', 'Bio', 'Name', 'Presence', 'Tag', 'Title']
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
      <Form className='mt-24'>
        <label>Search By:</label>
        <Field as='select' name='searchType'>
          {generateOptions()}
        </Field>
        <div className='flex flex-row justify-between bg-white border-2 border-purple-700 rounded-full w-3/4 p-4 mx-auto my-10'>
            <Field
                type='input'
                name='query'
                placeholder='Alex; Engineering; Updates'
                className=''
            />
            <button
                type='submit'
                className='cursor-pointer inline-block text-xl'
            >
                ICON
            </button>
        </div>
      </Form>
    </Formik>
  )
}
