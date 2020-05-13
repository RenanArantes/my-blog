import React from 'react'

import getThemeColor from '../../utils/getThemeColor'

import {
  MenuLinksWrapper,
  MenuLinksList,
  MenuLinksItem,
  MenuLinksLink,
} from './styles'

const MenuLinks = () => {
  const links = [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'Sobre mim',
      url: '/about/',
    }
  ]

  return (
    <MenuLinksWrapper>
      <MenuLinksList>
        {links.map((link, index) => (
          <MenuLinksItem key={index}>
            <MenuLinksLink
              cover
              direction="left"
              bg={getThemeColor}
              duration={0.6}
              to={link.url}
              activeClassName="active"
            >
              {link.label}
            </MenuLinksLink>
          </MenuLinksItem>
        ))}
      </MenuLinksList>
    </MenuLinksWrapper>
  )

}

export default MenuLinks
