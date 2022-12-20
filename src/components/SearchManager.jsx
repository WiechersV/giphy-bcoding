import React from 'react';
import {
  SearchContextManager,
} from '@giphy/react-components'

import Search from './Search'


const SearchManager = () => {
  return(
    <SearchContextManager apiKey={process.env.REACT_APP_GIPHY_API_KEY}>
      <Search />
    </SearchContextManager>
  )
}

export default SearchManager;