import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const SeachPage = () => (
  <Layout>
    <SEO
      title="Seach"
      description="Pagina de pesquisa"
    />
    <Search />
  </Layout>
)

export default SeachPage
