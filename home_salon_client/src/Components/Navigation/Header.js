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
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Styling from '../../stylesheets/header'
import Drawer from '@material-ui/core/Drawer'
const styling = Styling
const Header = () => {
  const navStyles = makeStyles(theme => styling)
  const mobileDevice = useMediaQuery({ query: '(max-width: 1224px)' })
  const navList = ['Home', 'About', 'Deals', 'Testimonials', 'Contact']
  const classes = navStyles()
  const [state, setState] = React.useState({
    right: false
  })
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ state, [side]: open })
  }

  const navItem = navList.map(item => (
    <Button className={classes.navButton} key={item}>
      {item === 'Home' ? (
        <Link to='/'>{item}</Link>
      ) : (
        <Link to={`/${item}`}>{item}</Link>
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
          <ListItem key={item}>
            {item === 'Home' ? (
              <Link to='/' key={item}>
                {item}
              </Link>
            ) : (
              <Link to={`/${item}`} key={item}>
                {item}
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <AppBar position='static' classes={{ root: classes.root }}>
      <Toolbar classes={{ root: classes.root }}>
        <div>
          {' '}
          <img className="img1" src={`${process.env.PUBLIC_URL}/images/salon-logo.png`} />
          <IconButton
            edge='start'
            className={classes.menuButton}
            aria-label='menu'
            onClick={toggleDrawer('right', true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor='right'
            open={state.right}
            onClose={toggleDrawer('right', false)}
          >
            {mobileDevice && sideList('right')}
          </Drawer>
          {!mobileDevice && navItem}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
