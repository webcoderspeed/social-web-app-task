import api from '../api/api';
import * as friendConstant from '../constants/friend.constant';
import { getUsers } from './user.action';

export const getFriendList = () => async (dispatch, getState) => {
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
      type: friendConstant.FRIEND_LIST_REQUEST,
    });

    const { data } = await api.get('/friends', config);

    dispatch({
      type: friendConstant.FRIEND_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: friendConstant.FRIEND_LIST_FAILURE,
      payload: message,
    });
  }
};

export const removeFriend = (id) => async (dispatch, getState) => {
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
      type: friendConstant.REMOVE_FRIEND_REQUEST,
    });

    await api.delete(`/friends/${id}`, config);

    dispatch({
      type: friendConstant.REMOVE_FRIEND_SUCCESS,
    });

    dispatch(getFriendList());
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: friendConstant.REMOVE_FRIEND_FAILURE,
      payload: message,
    });
  }
};

export const addFriend = (id) => async (dispatch, getState) => {
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
      type: friendConstant.ADD_FRIEND_REQUEST,
    });

    await api.post(
      `/friends`,
      {
        friendId: id,
      },
      config
    );

    dispatch({
      type: friendConstant.ADD_FRIEND_SUCCESS,
    });

    dispatch(getFriendList());
    dispatch(getUsers());
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: friendConstant.ADD_FRIEND_FAILURE,
      payload: message,
    });
  }
};
