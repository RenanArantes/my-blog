import React from 'react'

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
