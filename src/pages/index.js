import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <PostItem
      slug="/about/"
      background="red"
      category="Misc"
      date="10 de Fevereiro de 2020"
      timeToRead="5"
      title="Titulo do post"
      description="Essa e a descricao do que foi escrito no post."
    />
  </Layout>
)

export default IndexPage
