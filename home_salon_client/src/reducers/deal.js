import {
    GET_DEALS,
    DEAL_ERROR,
    DELETE_DEAL,
    ADD_DEAL
  } from '../actions/types';
  
  const initialState = {
    deals: [],
    deal: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_DEALS:
        return {
          ...state,
          deals: payload,
          loading: false
        };
      case ADD_DEAL: 
      return {
        ...state,
        posts:[...state.deals, payload],
        loading: false
      };
      case DELETE_DEAL:
      return {
        ...state,
        deals: state.deals.filter(deal => deal._id !== payload),
        loading: false
      };
      
      case DEAL_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
   
      default:
        return state;
    }
  }
  