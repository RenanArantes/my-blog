import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About"/>
    <h1>About Page</h1>
    <Link to="/about" activeStyle={{color:'red'}}>About</Link>
    <Link to="/" >Home</Link>
  </Layout>
)

export default AboutPage