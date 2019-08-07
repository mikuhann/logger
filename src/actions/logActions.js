import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG
} from './Constants';
import axios from 'axios';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('/logs');
    dispatch({
      type: GET_LOGS,
      payload: res.data,
      loading: false
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.data
    });
  }
};

export const addLog = (log) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    setLoading();
    const res = await axios.post('/logs', log, config);
    dispatch({
      type: ADD_LOG,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type:LOGS_ERROR,
      payload: e.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
};
