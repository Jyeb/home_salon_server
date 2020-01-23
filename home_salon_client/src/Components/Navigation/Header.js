import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  IconButton,
  AppBar,
  Toolbar,
  makeStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useMediaQuery } from 'react-responsive'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Styling from '../../stylesheets/header'
import Drawer from '@material-ui/core/Drawer'
const styling = Styling
const Header = () => {
  const navStyles = makeStyles(theme => styling)
  const mobileDevice = useMediaQuery({ query: '(max-width: 1224px)' })
  const navList = ['Home', 'About', 'Packages', 'Testimonials', 'Contact']
  const classes = navStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const navItem = navList.map(item => (
    <Button className={classes.navButton}>
      {item === 'Home' ? (
        <Link to='/' exact>
          {item}
        </Link>
      ) : (
        <Link to={`/${item}`} exact>
          {item}
        </Link>
      )}
    </Button>
  ))
  const sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {navList.map(item => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <AppBar position='static' classes={{ root: classes.root }}>
      <Toolbar classes={{ root: classes.root }}>
        <div>
          <Button onClick={toggleDrawer('right', true)}>
            {' '}
            <IconButton
              edge='start'
              className={classes.menuButton}
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
          </Button>
          <Drawer
            anchor='right'
            open={state.right}
            onClose={toggleDrawer('right', false)}
          >
            {sideList('right')}
          </Drawer>
        </div>
        {mobileDevice ? sideList : navItem}
      </Toolbar>
    </AppBar>
  )
}

export default Header

// function TemporaryDrawer() {
//   const classes = useStyles()
