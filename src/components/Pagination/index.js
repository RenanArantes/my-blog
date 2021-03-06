import React from 'react'
import propTypes from 'prop-types'
import AnyLink from 'gatsby-plugin-transition-link/AniLink'

import getThemeColor from '../../utils/getThemeColor'

import { PaginationWrapper } from './styles'

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage
}) => (

  <PaginationWrapper>
    {!isFirst &&
      <AnyLink
      cover
      direction="left"
      bg={getThemeColor()}
      duration={0.6}
      to={prevPage}
      >
        Pagina anterior
      </AnyLink>
    }

    <p>{currentPage} de {numPages}</p>

    {!isLast &&
      <AnyLink
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        to={nextPage}
      >
        Proxima pagina
        </AnyLink>
    }
  </PaginationWrapper>

)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string
}

export default Pagination
