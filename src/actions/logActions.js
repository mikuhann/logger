import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR
} from './Constants';
import axios from 'axios';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('/logs');
    dispatch({
      type: GET_LOGS,
      payload: res.data
    });
    setLoading();
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
};
