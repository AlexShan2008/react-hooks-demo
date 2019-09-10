import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import useStyles from './styles'

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
            <h3 className={classes.title}>React Hooks</h3>
            <Link href='/infos'>
              <p className={classes.subTitle}>Introduction</p>
            </Link>
            <Link href='/demos'>
              <p className={classes.subTitle}>Demos</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomPage
