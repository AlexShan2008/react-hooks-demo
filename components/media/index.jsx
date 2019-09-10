import React, { useState, useEffect } from 'react'
import useStyles from './styles'

function useMedia (query) {
  const [matches, setMatches] = useState(
    typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addListener(listener)

    return () => media.removeListener(listener)
  }, [query, matches])

  return matches
}

export default function Media () {
  const classes = useStyles()
  const small = useMedia('(max-width: 400px)')
  const large = useMedia('(min-width: 800px)')

  return (
    <>
      <div className={classes.mediaWrap}>
        <h1>Media</h1>
        <p>Small ? {small ? 'Yep' : 'Nope'}.</p>
        <p>Large ? {large ? 'Yep' : 'Nope'}.</p>
      </div>
    </>
  )
}
