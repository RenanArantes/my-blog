import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext

  return(
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead,
            fields: {
              slug
            }
          }
        }) => (
        <PostItem
          slug={slug}
          key={date}
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
        )
      )}
      <Pagination
        isFirst={currentPage === 1 ? true : false}
        isLast={currentPage === numPages ? true : false}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={
          currentPage === 2 ? '/' : `/page/${currentPage - 1}`
        }
        nextPage={`/page/${currentPage + 1}`}
      />
    </Layout>
  )

}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip
      ) {
      edges {
        node {
          timeToRead
          frontmatter {
            background
            category
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            description
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList
