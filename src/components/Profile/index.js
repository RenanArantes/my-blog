import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'

import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from './styles'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site{
        siteMetadata {
          title
          description
          position
        }
      }
    }
`)

  return (
    <ProfileWrapper>
      <ProfileLink to="/about">
        <Avatar />
        <ProfileAuthor>{title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
      </ProfileLink>
      <ProfileDescription>{description}</ProfileDescription>
    </ProfileWrapper>
  )
}

export default Profile
