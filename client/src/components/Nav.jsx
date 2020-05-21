import React from 'react'

import SearchBar from './SearchBar'

export default function Nav(props) {
  return (
    <nav>
      <SearchBar setSearchResults={props.setSearchResults}/>
    </nav>
  )
}
