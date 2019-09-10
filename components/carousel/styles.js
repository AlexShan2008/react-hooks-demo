import { makeStyles } from '@material-ui/core/styles'

const fadeIn = {
  transition: 'all .5s cubic-bezier(0.4, 0, 0.2, 1) 0ms'
}

const controls = {
  position: 'absolute',
  zIndex: 2,
  bottom: 40,
  right: 0
}

export default makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  },
  Carousel: {
    position: 'relative',
    overflow: 'hidden'
  },
  Slides: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative'
  },
  Slide: {
    width: '100%',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...fadeIn
  },
  SlideNav: {
    ...controls,
    left: 0,
    display: 'flex',
    paddingLeft: 20
  },
  SlideNavItem: {
    width: 15,
    height: 15,
    borderRadius: '50%',
    background: '#999',
    marginRight: 15,
    cursor: 'pointer',
    '&.active': {
      background: '#f3f3f3'
    }
  },
  Controls: {
    ...controls
  },
  IconButton: {
    cursor: 'pointer'
  },
  ProgressBar: {
    width: '100%',
    height: 20,
    background: 'rgba(100, 100, 100, .6)',
    position: 'absolute',
    zIndex: 2,
    bottom: 20,
    left: 0
  }
}))
