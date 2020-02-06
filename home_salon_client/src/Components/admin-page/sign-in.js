import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] =  useState ({
    name: '',
    password: ''
  });

  const { name, password} = formData;

  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    login(name, password)
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1>Login</h1>
      <p>
        Sign in to Account
      </p>
      <form data-cy="loginForm" onSubmit={e => onSubmit(e)}>
        <input data-cy="username"
        type='name'
        placeholder='name'
        name='name'
        value={name}
        onChange={e => onChange(e)}
        required
        />
        <input data-cy="password"
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        onChange={e => onChange(e)}
        />
        <input data-cy="loginSubmit" type='submit' value='Login'
        />
      </form>
    </Fragment>
  )
}


Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(
  mapStateToProps,
  { login }
)(Login);