import React from "react"
import { Formik, Form, Field } from "formik"
import { useHistory } from "react-router-dom"

import { getUsersByFieldAndQuery } from "../services/APIHelper"

export default function SearchBar(props) {
  const history = useHistory()

  const gotoSearchResults = async (values) => {
    const { searchType, query } = values
    const searchResults = await getUsersByFieldAndQuery(searchType, query)
    if (searchType === "team") {
      const teamId = searchResults[0].team.id
      history.push(`/teams/${teamId}`)
    } else {
      props.setSearchResults(searchResults)
      history.push("/results")
    }
  }

  const availableSearchTypes = [
    "Team",
    "Bio",
    "Name",
    "Presence",
    "Tag",
    "Title",
  ]
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
      initialValues={{ searchType: "team", query: "" }}
      onSubmit={gotoSearchResults}
    >
      <Form>
        <Field
          as="select"
          name="searchType"
          className="focus:outline-none bg-transparent text-gray-700"
        >
          {generateOptions()}
        </Field>

        <div id="container">
          <Field
            type="input"
            name="query"
            placeholder="Alex, HR, Bio"
            className="text-gray-700"
          />
          <div id="search"></div>
        </div>
      </Form>
    </Formik>
  )
}
