import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not found"
      description={post.frontmatter.description}
      image={post.frontmatter.image}
    />
    <h1>404 PAGE NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
