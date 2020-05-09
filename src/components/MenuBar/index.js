import React from 'react'

import {
  MenuBarWrapper,
  MenuBarLink,
  MenuBarGroup,
  MenuBarItem
} from './styles'

import { HomeOutline as Home } from '@styled-icons/evaicons-outline/HomeOutline'
import { SearchOutline as Search } from '@styled-icons/evaicons-outline/SearchOutline'
import { SunOutline as Sun } from '@styled-icons/evaicons-outline/SunOutline'
import { MoonOutLine as Moon } from '@styled-icons/evaicons-outline/MoonOutline'
import { List } from '@styled-icons/evaicons-solid/List'
import { GridOutLine as Grid } from '@styled-icons/evaicons-outline/GridOutline'
import { ArrowUpwardOutline as Up } from '@styled-icons/evaicons-outline/ArrowUpwardOutline'

const MenuBar = () => (
  <MenuBarWrapper>
    <MenuBarGroup>
      <MenuBarLink to="/" title="Voltar para Home">
        <MenuBarItem>
          <Home />
        </MenuBarItem>
      </MenuBarLink>
      <MenuBarLink to="/search/" title="Pesquisar">
        <MenuBarItem>
          <Search />
        </MenuBarItem>
      </MenuBarLink>
    </MenuBarGroup>

    <MenuBarGroup>
      <MenuBarItem title="Mudar cores">
        <Sun />
      </MenuBarItem>
      <MenuBarItem title="Mudar o tema">
        <List />
      </MenuBarItem>
      <MenuBarItem title="Ir para o topo">
        <Up />
      </MenuBarItem>
    </MenuBarGroup>
  </MenuBarWrapper>
)

export default MenuBar
