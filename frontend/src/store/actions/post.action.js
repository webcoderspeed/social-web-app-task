import * as postConstant from '../constants/post.constant';
import api from '../api/api';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: postConstant.GET_POSTS_REQUEST,
    });

    const { data } = await api.get('/posts');

    dispatch({
      type: postConstant.GET_POSTS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: postConstant.GET_POSTS_FAILURE,
      payload: message,
    });
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: postConstant.GET_POST_REQUEST,
    });

    const { data } = await api.get(`/posts/${id}`);

    dispatch({
      type: postConstant.GET_POST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: postConstant.GET_POST_FAILURE,
      payload: message,
    });
  }
};

export const createPost = (post) => async (dispatch, getState) => {
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
      type: postConstant.CREATE_POST_REQUEST,
    });

    const { data } = await api.post('/posts', post, config);

    dispatch({
      type: postConstant.CREATE_POST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: postConstant.CREATE_POST_FAILURE,
      payload: message,
    });
  }
};

export const getMyPosts = () => async (dispatch, getState) => {
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
      type: postConstant.GET_MY_POSTS_REQUEST,
    });

    const { data } = await api.get('/posts/my-posts', config);

    dispatch({
      type: postConstant.GET_MY_POSTS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: postConstant.GET_MY_POSTS_FAILURE,
      payload: message,
    });
  }
};

export const getFriendsPosts = () => async (dispatch, getState) => {
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
      type: postConstant.GET_FRIEND_POSTS_REQUEST,
    });

    const { data } = await api.get('/posts/friends-posts', config);

    dispatch({
      type: postConstant.GET_FRIEND_POSTS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: postConstant.GET_FRIEND_POSTS_FAILURE,
      payload: message,
    });
  }
};
