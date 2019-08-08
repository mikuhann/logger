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

export const addTech = (tech) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    setLoading();
    const res = await axios.post('/techs', tech, config);
    dispatch({
      type: ADD_TECH,
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
