import React, { useEffect, useState } from 'react'

import SearchBar from './SearchBar'

export default function Nav(props) {
  const [searchActive, setSearchActive] = useState(false)


  return (
    <nav>
      {!searchActive &&
        <button onClick={() => setSearchActive(true)}>Search</button>
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
