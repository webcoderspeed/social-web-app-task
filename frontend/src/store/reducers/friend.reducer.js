import { combineReducers } from 'redux';
import * as friendConstant from '../constants/friend.constant';

const frientListReducer = (
  state = {
    loading: false,
    success: false,
    friends: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case friendConstant.FRIEND_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case friendConstant.FRIEND_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        friends: action.payload,
        error: null,
      };
    case friendConstant.FRIEND_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case friendConstant.FRIEND_LIST_RESET:
      return {
        ...state,
        loading: false,
        success: false,
        friends: [],
        error: null,
      };
    default:
      return state;
  }
};

export const addFriendReducer = (
  state = {
    loading: false,
    success: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case friendConstant.ADD_FRIEND_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case friendConstant.ADD_FRIEND_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case friendConstant.ADD_FRIEND_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case friendConstant.ADD_FRIEND_RESET:
      return {
        ...state,
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

export const removeFriendReducer = (
  state = {
    loading: false,
    success: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case friendConstant.REMOVE_FRIEND_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case friendConstant.REMOVE_FRIEND_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case friendConstant.REMOVE_FRIEND_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case friendConstant.REMOVE_FRIEND_RESET:
      return {
        ...state,
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  friendList: frientListReducer,
  addFriend: addFriendReducer,
  removeFriend: removeFriendReducer,
});

export default reducer;
