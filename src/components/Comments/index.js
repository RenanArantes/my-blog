import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import { CommentsWrapper, CommentsTitle } from './styles'

const Comments = ({ url, title}) => {
  const completeURL = `https://renanzerablogsten.netlify.app${url}`

  return (
    <CommentsWrapper>
      <CommentsTitle>Comentarios</CommentsTitle>
      <ReactDisqusComments
        shortname="willianjusten"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
