import React from 'react'
import Head from 'next/head'
import useStyles from './styles'

const InfoPage = props => {
  const classes = useStyles(props)

  return (
    <>
      <Head>
        <title>React Hooks Demos</title>
      </Head>
      <div>
        <div className={classes.root}>
          <h2>Motivation</h2>
          <p>It’s hard to reuse stateful logic between components</p>
          <p>Complex components become hard to understand</p>
          <p>Classes confuse both people and machines</p>
        </div>
      </div>
    </>
  )
}

export default InfoPage
