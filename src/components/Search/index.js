import React from 'react'

import algoliaSearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox,
  Hits
} from 'react-instantsearch-dom'

import { SearchWrapper } from './styles'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliaSearch(
  algolia.appId,
  algolia.searchOnlyApiKey
)

const Search = () => (
  <SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox />
      <Hits />
    </InstantSearch>
  </SearchWrapper>
)

export default Search
