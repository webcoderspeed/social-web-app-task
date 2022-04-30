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

    dispatch({
      type: userConstant.GET_MY_PROFILE_SUCCESS,
      payload: data.data,
    });

    localStorage.setItem('user', JSON.stringify(data.data));
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

    dispatch({
      type: userConstant.GET_MY_PROFILE_SUCCESS,
      payload: data.data,
    });

    localStorage.setItem('user', JSON.stringify(data.data));
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

export const getMyProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: userConstant.GET_MY_PROFILE_REQUEST,
    });

    const { data } = await api.get('/users/profile');

    dispatch({
      type: userConstant.GET_MY_PROFILE_SUCCESS,
      payload: data.data,
    });

    dispatch({
      type: userConstant.GET_MY_PROFILE_RESET,
    });
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: userConstant.GET_MY_PROFILE_FAILURE,
      payload: message,
    });
  }
};

export const logOut = () => async (dispatch) => {
  try {
    dispatch({
      type: userConstant.LOG_OUT_REQUEST,
    });

    localStorage.removeItem('user');

    dispatch({
      type: userConstant.LOG_OUT_SUCCESS,
    });

    dispatch({
      type: userConstant.LOG_OUT_RESET,
    });

    window.location.href = '/';
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: userConstant.LOG_OUT_FAILURE,
      payload: message,
    });
  }
};

export const getUsers = () => async (dispatch, getState) => {
  const { user } = getState();

  const {
    myProfile: {
      user: { token },
    },
  } = user;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    dispatch({
      type: userConstant.GET_ALL_USERS_REQUEST,
    });

    const { data } = await api.get('/users', config);

    dispatch({
      type: userConstant.GET_ALL_USERS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: userConstant.GET_ALL_USERS_FAILURE,
      payload: message,
    });
  }
};
