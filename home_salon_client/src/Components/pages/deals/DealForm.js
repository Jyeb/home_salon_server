import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addDeal } from '../../../actions/deal'

const DealForm = ({ addDeal }) => {
  const [formData, setFormData] =  useState ({
    dealname: '',
    price: '',
    services: ''
  });

  const { dealname, price, services} = formData;

  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value })
  
  const onSubmit = async e => {
    e.preventDefault();
    addDeal(formData)
  };

  return (
  
    <Fragment>
      <p>
        Make Deal
      </p>
      <form onSubmit={e => onSubmit(e)}>
        <input
        type='dealname'
        placeholder='Deal Name'
        name='dealname'
        value={dealname}
        onChange={e => onChange(e)}
        required
        />
        <input
        type='price'
        placeholder='price'
        name='price'
        value={price}
        onChange={e => onChange(e)}
        />
        <input
        type='services'
        placeholder='Service'
        name='services'
        value={services}
        onChange={e => onChange(e)}
        />
        <input type='submit' value='Create'
        />
      </form>
    </Fragment>
  )
}

DealForm.propTypes = {
  addDeal: PropTypes.func.isRequired
}

export default connect(null, { addDeal })(DealForm)
