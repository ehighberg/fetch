import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useHistory } from 'react-router-dom'

import { getUsersByFieldAndQuery } from '../services/APIHelper'

export default function SearchBar(props)
{
  const history = useHistory()

  const gotoSearchResults = async (values) =>
  {
    const { searchType, query } = values
    const searchResults = await getUsersByFieldAndQuery(searchType, query)
    if (searchType === 'team')
    {
      const teamId = searchResults[0].team.id
      history.push(`/teams/${teamId}`)
    } else
    {
      props.setSearchResults(searchResults)
      history.push('/results')
    }
  }

  const availableSearchTypes = ['Team', 'Bio', 'Name', 'Presence', 'Tag', 'Title']
  const generateOptions = () =>
  {
    return availableSearchTypes.map((searchType, index) =>
    {
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
        {/* <div className='flex flex-row justify-between bg-gray-100 border border-yellow-400 rounded-full p-6 mx-auto'>
          <Field
            type='input'
            name='query'
            placeholder='Alex; Engineering; Updates'
            className='bg-gray-100 w-full'
          />
          <button
            type='submit'
            className='cursor-pointer inline-block text-xl bg-gray-100'
          >
            ICON
          </button>
        </div> */}
              
        <div id='container'>
            <Field
                type='input'
                name='query'
                placeholder='Alex, HR, Bio'
                className=''
            />
            <div id='search'></div>
        </div>
      </Form>
    </Formik>
  )
}
