import {
  createMuiTheme
} from '@material-ui/core/styles'
import {
  blue,
  pink
} from '@material-ui/core/colors'

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: blue,
    secondary: pink
  },
  status: {
    danger: 'orange'
  }
})

export default theme
