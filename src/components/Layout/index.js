import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from '../../styles/global'

import Profile from "../Profile"

import { LayoutMain, LayoutWrapper } from './styles'

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
