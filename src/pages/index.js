import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from '../components/PostItem'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        nodes {
          frontmatter {
            background
            category
            description
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          }
          timeToRead
        }
      }
    }
  `)

  const postList = allMarkdownRemark.nodes;

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      {postList.map(({
        frontmatter: { background, category, date, description, title },
        timeToRead
      },
      ) => (
        <PostItem
          slug="/about/"
          key={date}
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      ))}

    </Layout>
  )
}

export default IndexPage
