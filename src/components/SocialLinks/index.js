import React from 'react'
import { darken } from 'polished'

import { GithubOutline as Github } from '@styled-icons/evaicons-outline/GithubOutline'
import { TwitterOutline as Twitter } from '@styled-icons/evaicons-outline/TwitterOutline'
import { LinkedinOutline as Linkedin } from '@styled-icons/evaicons-outline/LinkedinOutline'

import {
  SocialLinksWrapper,
  SocialLinksList,
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper
} from './styles'

const SocialLinks = () => {
  const name = 'renan'
  const sname = 'arantes'

  const links = [
    {
      label: 'Github',
      url: `https://github.com/${name}${sname}`,
      color: '#eff3f6',
      colorHover: darken(0.4, '#eff3f6')
    },
    {
      label: 'Twitter',
      url: `https://twitter.com/${name}zimn`,
      color: '#1b95e0',
      colorHover: darken(0.1, '#1b95e0')
    },
    {
      label: 'Linkedin',
      url: `https://linkedin.com/in/${name}-m-${sname}`,
      color: '#0073b1',
      colorHover: darken(0.1, '#0073b1')
    }
  ]


  const icons = {
    Github,
    Twitter,
    Linkedin
  }

  return (
    <SocialLinksWrapper>
      <SocialLinksList>
        {links.map((link,index) => {
          const Icon = icons[link.label]

          return(
            <SocialLinksItem key={index}>
              <SocialLinksLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
                colorNormal={link.color}
                colorHover={link.colorHover}
              >
                <IconWrapper >
                  <Icon />
                </IconWrapper>
              </SocialLinksLink>
            </SocialLinksItem>
          )
        })}
      </SocialLinksList>
    </SocialLinksWrapper>
  )
}

export default SocialLinks
