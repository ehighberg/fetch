import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import SearchBar from './SearchBar'


export default function Nav(props) {
  const [searchActive, setSearchActive] = useState(false)
  const history = useHistory()


  return (
    <nav>
      {!searchActive &&
        <>
          <button onClick={() => history.goBack()}>Back</button>
          <button onClick={() => setSearchActive(true)}>Search</button>
        </>
      }
      {searchActive &&
        <SearchBar
          setSearchResults={props.setSearchResults}
          setSearchActive={setSearchActive}
        />
      }
    </nav>
  )
}
