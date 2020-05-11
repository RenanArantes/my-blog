import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import {
  PostWrapper,
  PostHeader,
  PostTitle,
  PostDescription,
  PostDate,
  MainContent,
} from "../components/Post/styles"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return(
    <>
      <Layout>
        <SEO title={post.frontmatter.title} />
        <PostWrapper>
          <PostHeader>
            <PostDate>
              {post.frontmatter.date} - {post.timeToRead} min de leitura
            </PostDate>
            <PostTitle> {post.frontmatter.title} </PostTitle>
            <PostDescription> {post.frontmatter.description} </PostDescription>
          </PostHeader>
          <MainContent>
            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </MainContent>
        </PostWrapper>
      </Layout>
    </>
  )

}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost