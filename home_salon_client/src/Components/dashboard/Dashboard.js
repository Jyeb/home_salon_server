import React, { Fragmentv, Fragment}from 'react'
import {
    Button,
  } from '@material-ui/core'
import Deals from '../pages/deals/Deals'

const Dashboard = props => {
    return (
  <Fragment>
    <h1> Welcome Maxine</h1>
    <h2> These are your current deals</h2>
    <p> To delete a deal, simply press delete</p>
    <Deals />
   
<Button variant="contained" color="primary">
  Add Deal?
</Button>
</Fragment>
    )
}

export default Dashboard
