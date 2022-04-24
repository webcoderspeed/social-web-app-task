import * as userConstant from '../constants/user.constant';
import api from '../api/api';

export const signUp = (user) => async (dispatch) => {
  try {
    dispatch({
      type: userConstant.SIGN_UP_REQUEST,
    });

    const { data } = await api.post('/users', user);

    dispatch({
      type: userConstant.SIGN_UP_SUCCESS,
      payload: data.data,
    });

    localStorage.setItem('user', JSON.stringify(data.data));

    dispatch({
      type: userConstant.SIGN_UP_RESET,
    });
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: userConstant.SIGN_UP_FAILURE,
      payload: message,
    });
  }
};

export const signIn = (user) => async (dispatch) => {
  try {
    dispatch({
      type: userConstant.SIGN_IN_REQUEST,
    });

    const { data } = await api.post('/users/login', user);

    dispatch({
      type: userConstant.SIGN_IN_SUCCESS,
      payload: data.data,
    });

    localStorage.setItem('user', JSON.stringify(data.data));

    dispatch({
      type: userConstant.SIGN_IN_RESET,
    });
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: userConstant.SIGN_IN_FAILURE,
      payload: message,
    });
  }
};
