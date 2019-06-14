import axios from 'axios';
import {
  USERS_LIST,
  GET_ERRORS,
  CLEAR_ERRORS,
  INVENTORY_LOADING
  
} from './types';
import { API_URL } from './global';
import headers from './headers';
const baseURL = API_URL;



export const getUserList= (data) => dispatch => {
  dispatch(setInventoryLoading());
  axios
      .post(baseURL + '/dashboard/user/', data,headers())
      .then(res =>
          dispatch({
              type: USERS_LIST,
              payload: res.data
          })
      )
      .catch(err =>
          dispatch({
              type: GET_ERRORS,
              payload: null
          })
      );
};


// Set loading state
export const setInventoryLoading = (state) => {
  if (!state) {
      state = false
  }
  return {
      type: INVENTORY_LOADING,
      payload: state
  };
};

// Clear errors
export const clearErrors = () => {
  return {
      type: CLEAR_ERRORS
  };
};