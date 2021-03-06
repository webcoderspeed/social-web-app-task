import { combineReducers } from 'redux';
import * as userConstant from '../constants/user.constant';

const signUpReducer = (
  state = {
    loading: false,
    error: null,
    user: null,
  },
  action
) => {
  switch (action.type) {
    case userConstant.SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userConstant.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case userConstant.SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case userConstant.SIGN_UP_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        user: null,
      };
    default:
      return state;
  }
};

export const signInReducer = (
  state = {
    loading: false,
    error: null,
    user: null,
  },
  action
) => {
  switch (action.type) {
    case userConstant.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userConstant.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case userConstant.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case userConstant.SIGN_IN_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        user: null,
      };
    default:
      return state;
  }
};

export const logOutReducer = (
  state = {
    loading: false,
    error: null,
    user: null,
  },
  action
) => {
  switch (action.type) {
    case userConstant.LOG_OUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userConstant.LOG_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case userConstant.LOG_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case userConstant.LOG_OUT_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        user: null,
      };
    default:
      return state;
  }
};

const myProfileReducer = (
  state = {
    loading: false,
    error: null,
    user: {},
  },
  action
) => {
  switch (action.type) {
    case userConstant.GET_MY_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userConstant.GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case userConstant.GET_MY_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case userConstant.GET_MY_PROFILE_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        user: {},
      };
    default:
      return state;
  }
};

const allUsersReducer = (
  state = {
    loading: false,
    error: null,
    users: [],
  },
  action
) => {
  switch (action.type) {
    case userConstant.GET_ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userConstant.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case userConstant.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case userConstant.GET_ALL_USERS_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        users: [],
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  logOut: logOutReducer,
  myProfile: myProfileReducer,
  allUsers: allUsersReducer,
});

export default reducer;
