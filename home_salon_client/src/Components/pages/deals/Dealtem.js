import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteDeal } from '../../../actions/deal';


const DealItem = ({
  auth,
  deleteDeal,
  deal: { _id, dealname, price, services},
}) => (
  <div className='deal bg-white p-1 my-1'>
    <h4>{dealname}</h4>
    <h4>{price}</h4>
    <h4>{services}</h4>
    {!auth.loading && auth.admin && (
            <button onClick={e => deleteDeal(_id)}>
              Delete
            </button>
          )}
  </div>
);

DealItem.defaultProps = {
  showActions: true
};

DealItem.propTypes = {
  deal: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteDeal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,{ deleteDeal }
)(DealItem);
