import React from 'react'
import Head from 'next/head'
import useStyles from './styles'
import Link from 'next/link'

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
