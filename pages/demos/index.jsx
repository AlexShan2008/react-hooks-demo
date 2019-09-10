import React, { useState } from 'react'
import Head from 'next/head'
import useStyles from './styles'

import { Carousel, Counter, MeasureExample, Media } from '@components'
import { SLIDES } from './data'

const HomPage = () => {
  const classes = useStyles()
  const [options] = useState({
    width: 500,
    height: 500,
    duration: 2000,
    slides: SLIDES
  })

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
          <h5 className={classes.title}>3 useMedia</h5>
          <Media />
          <h5 className={classes.title}>4 Carousel</h5>
          <Carousel options={options} />
        </div>
      </div>
    </>
  )
}

export default HomPage
