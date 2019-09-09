import React from 'react'
import Head from 'next/head'
import useStyles from './styles'

import { Counter, MeasureExample } from '@components'

const HomPage = props => {
  const classes = useStyles(props)

  return (
    <>
      <Head>
        <title>React Hooks Demos</title>
      </Head>
      <div>
        <div className={classes.root}>
          <h5 className={classes.title}>1 测量Header高度</h5>
          <MeasureExample />
          <h5 className={classes.title}>2 计数器</h5>
          <Counter />
        </div>
      </div>
    </>
  )
}

export default HomPage
