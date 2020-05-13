import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const SeachPage = () => (
  <Layout>
    <SEO
      title="Seach"
      description={post.frontmatter.description}
      image={post.frontmatter.image}
    />
    <Search />
  </Layout>
)

export default SeachPage
