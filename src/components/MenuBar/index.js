import React, { useState, useEffect} from 'react'

import {
  MenuBarWrapper,
  MenuBarLink,
  MenuBarGroup,
  MenuBarItem
} from './styles'

import { HomeOutline as Home } from '@styled-icons/evaicons-outline/HomeOutline'
import { SearchOutline as Search } from '@styled-icons/evaicons-outline/SearchOutline'
import { SunOutline as Sun } from '@styled-icons/evaicons-outline/SunOutline'
import { Moon } from '@styled-icons/fa-regular/Moon'
import { List } from '@styled-icons/evaicons-solid/List'
import { GridOutLine as Grid } from '@styled-icons/evaicons-outline/GridOutline'
import { ArrowUpwardOutline as Up } from '@styled-icons/evaicons-outline/ArrowUpwardOutline'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  },[])

  return (
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
        <MenuBarItem
          title="Mudar cores"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
        >
          { isDarkMode ? <Sun /> : <Moon /> }
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
}

export default MenuBar
