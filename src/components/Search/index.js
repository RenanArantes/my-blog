import React from 'react'

import algoliaSearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
} from 'react-instantsearch-dom'

import Hit from './Hit'

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
  <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
    <SearchWrapper>
      <SearchBox translations={{placeholder: 'Pesquisar...'}}/>
      <Stats translations={{stats(nbHits, timeSpentMs) {
        return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
      }}}/>
    </SearchWrapper>
    <Hits hitComponent={Hit}/>
  </InstantSearch>
)

export default Search
