import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  root: {
    textAlign: 'center',
    color: '#333',
    display: 'flex',
    justifyContent: 'center',
    background: 'url(../static/images/login-banner.jpg) no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%'
  },
  formWrap: {
    width: 550,
    height: '100%',
    background: 'rgba(0,0,0, .8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 50px',
    color: '#fff'
  },
  title: {
    color: '#fff',
    width: '100%',
    borderBottom: '2px solid #fff',
    fontSize: 32,
    paddingBottom: 10,
    marginBottom: 20,
    fontFamily: 'geiut'
  },
  subTitle: {
    color: '#999',
    cursor: 'pointer',
    fontSize: 20,
    fontFamily: 'PingFang',
    textDecoration: 'underline',
    '&:hover': {
      color: '#fff'
    }
  }
}))
