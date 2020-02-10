import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addDeal } from '../../../actions/deal'
import { makeStyles } from '@material-ui/core/styles'
import { Button, FormControl } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import '../../../stylesheets/DealForm.scss'
const DealForm = ({ addDeal }) => {
  const [formData, setFormData] = useState({
    dealname: '',
    price: '',
    services: ''
  })

  const { dealname, price, services } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    addDeal(formData)
  }
  const useStyles = makeStyles(theme => ({
    root: {
      width: '50vw',
      marginLeft: '25vw',
      marginTop: '10vh'
    }
  }))
  const classes = useStyles()
  return (
    <Fragment>
      <p>Make Deal</p>
      <FormControl className={classes.root} onSubmit={e => onSubmit(e)}>
        <TextField
          id='standard-full-width'
          type='dealname'
          placeholder='Deal Name'
          name='dealname'
          value={dealname}
          onChange={e => onChange(e)}
          required
        />
        <br />
        <TextField
          id='standard-full-width'
          type='price'
          placeholder='price'
          name='price'
          value={price}
          onChange={e => onChange(e)}
        />
        <br />
        <TextField
          id='standard-full-width'
          type='services'
          placeholder='Service'
          name='services'
          value={services}
          onChange={e => onChange(e)}
        />
        <br />
        <br />
        <Button variant='contained' type='submit'>
          Create
        </Button>
      </FormControl>
    </Fragment>
  )
}

DealForm.propTypes = {
  addDeal: PropTypes.func.isRequired
}

export default connect(null, { addDeal })(DealForm)
