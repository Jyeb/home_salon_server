import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import { AppBar, Button, makeStyles } from '@material-ui/core'
import Styling from '../../stylesheets/footer'
const styling = Styling
const Footer = ({ auth: { isAuthenticated, loading }, logout }) => {
  const navStyles = makeStyles(theme => styling)
  const classes = navStyles()
  const authLinks = (
    <ul>
      <Button>
        <Link to='/Deals'>Deals</Link>
      </Button>
      <br />
      <Button>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </Button>
      <br />
      <Button>
        <a onClick={logout} href='#!'>
          <i /> <span className='hide-sm'>Logout</span>
        </a>
      </Button>
    </ul>
  )

  const guestLinks = (
    <ul>
      <Button>
        <Link to='/login'>Login</Link>
      </Button>
    </ul>
  )

  return (
    <AppBar className={classes.footer}>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </AppBar>
  )
}

Footer.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Footer)
