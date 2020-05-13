import React, { useState, useEffect} from 'react'

import getThemeColor from '../../utils/getThemeColor'

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
import { GridOn } from '@styled-icons/material/GridOn'
import { ArrowUpwardOutline as Up } from '@styled-icons/evaicons-outline/ArrowUpwardOutline'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  },[])

  return (
    <MenuBarWrapper>
      <MenuBarGroup>
        <MenuBarLink
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          to="/"
          title="Voltar para Home"
        >
          <MenuBarItem>
            <Home />
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          to="/search/"
          title="Pesquisar"
        >
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
        <MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
          className="display"
        >
          { isListMode ? <GridOn /> : <List />}
        </MenuBarItem>
        <MenuBarItem
        title="Ir para o topo"
        onClick={() => {
          window.scroll({ top: 0, behavior: 'smooth' })
        }}>
          <Up />
        </MenuBarItem>
      </MenuBarGroup>
    </MenuBarWrapper>
  )
}

export default MenuBar
