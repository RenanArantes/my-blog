import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan("medium")`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: ${props => props.colorNormal};
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: ${props => props.colorHover};
  }
`

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
`
