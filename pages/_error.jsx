import React from 'react'
import PropTypes from 'prop-types'
import Error from 'next/error'

function ErrorPage ({ errorCode, stars }) {
  if (errorCode) {
    return (
      <React.Fragment>
        <Error statusCode={errorCode} />
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      Next stars:&nbsp;
      {stars}
    </React.Fragment>
  )
}

ErrorPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer']
})

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number
}

ErrorPage.defaultProps = {
  errorCode: '404',
  stars: 0
}

export default ErrorPage
