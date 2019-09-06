import React from 'react'
import Head from 'next/head'
import useStyles from './styles'

import { MeasureExample } from '@components'
import Counter from '@components/counter'

const HomPage = props => {
  const classes = useStyles(props)

  return (
    <>
      <Head>
        <title>React Hooks Demos</title>
      </Head>
      <div>
        <div className={classes.root}>
          <div className={classes.formWrap}>
            <MeasureExample />
            <Counter />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomPage
