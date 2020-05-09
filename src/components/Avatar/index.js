import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { AvatarWrapper } from './styles'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-avatar.jpeg"}) {
          childImageSharp {
            fluid(maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return(
    <AvatarWrapper fluid={avatarImage.childImageSharp.fluid} style={{width: "60px"}}/>
  )

}

export default Avatar
