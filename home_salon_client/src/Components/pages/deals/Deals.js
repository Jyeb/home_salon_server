import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import DealItem from './Dealtem';
import { getDeals } from '../../../actions/deal';
import DealForm from './DealForm';

const Deals = ({ getDeals, deal: { deals, loading } }) => {
  useEffect(() => {
    getDeals();
  }, [getDeals]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Deals</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome to the community
      </p>
      <div className='deals'>
        {deals.map(deal => (
          <DealItem key={deal._id} deal={deal} />
        ))}
      </div>
 

    </Fragment>
  );
};

Deals.propTypes = {
  getDeals: PropTypes.func.isRequired,
  deal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  deal: state.deal
});

export default connect(
  mapStateToProps,
  { getDeals }
)(Deals);
