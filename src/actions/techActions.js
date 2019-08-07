import axios from 'axios';
import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './Constants';

export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get('/techs');
    dispatch({
      type: GET_TECHS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: TECHS_ERROR,
      payload: e.response.statusText
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
