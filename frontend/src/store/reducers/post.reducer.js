import { combineReducers } from 'redux';
import * as postConstant from '../constants/post.constant';

const postsReducer = (
  state = {
    loading: false,
    error: null,
    posts: [],
  },
  action
) => {
  switch (action.type) {
    case postConstant.GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case postConstant.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      };
    case postConstant.GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const postReducer = (
  state = {
    loading: false,
    error: null,
    post: {},
  },
  action
) => {
  switch (action.type) {
    case postConstant.GET_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case postConstant.GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        post: action.payload,
      };
    case postConstant.GET_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const createPostReducer = (
  state = {
    loading: false,
    error: null,
    success: false,
  },
  action
) => {
  switch (action.type) {
    case postConstant.CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case postConstant.CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
      };
    case postConstant.CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case postConstant.CREATE_POST_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };
    default:
      return state;
  }
};

const myPostsReducer = (
  state = {
    loading: false,
    error: null,
    posts: [],
  },
  action
) => {
  switch (action.type) {
    case postConstant.GET_MY_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case postConstant.GET_MY_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      };
    case postConstant.GET_MY_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case postConstant.GET_MY_POSTS_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        posts: [],
      };
    default:
      return state;
  }
};

const friendPostsReducer = (
  state = {
    loading: false,
    error: null,
    posts: [],
  },
  action
) => {
  switch (action.type) {
    case postConstant.GET_FRIEND_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case postConstant.GET_FRIEND_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      };
    case postConstant.GET_FRIEND_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case postConstant.GET_FRIEND_POSTS_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        posts: [],
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  createPost: createPostReducer,
  myPosts: myPostsReducer,
  friendPosts: friendPostsReducer,
});

export default reducer;
