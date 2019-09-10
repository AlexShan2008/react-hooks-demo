import {
  makeStyles
} from '@material-ui/core/styles'

export default makeStyles(theme => ({
  root: {
    textAlign: 'center',
    color: '#333',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%'
  },
  title: {
    width: '100%',
    textAlign: 'left',
    fontSize: 24,
    paddingLeft: 20,
    lineHeight: '48px',
    background: '#999',
    color: '#fff'
  }
}))
