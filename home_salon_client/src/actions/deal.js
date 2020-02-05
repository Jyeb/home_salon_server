import axios from 'axios';
import { setAlert } from './alert'
import {
    GET_DEALS,
    DEAL_ERROR,
    DELETE_DEAL
} from './types'


// GET DEALS

export const getDeals = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/deal');

        dispatch({
            type: GET_DEALS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: DEAL_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
    
}

// Delete post
export const deleteDeal = id => async dispatch => {
    try {
      await axios.delete(`http://localhost:5000/api/deal/${id}`);
  
      dispatch({
        type: DELETE_DEAL,
        payload: id
      });
  
      dispatch(setAlert('Deal Removed'));
    } catch (err) {
      dispatch({
        type: DEAL_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };