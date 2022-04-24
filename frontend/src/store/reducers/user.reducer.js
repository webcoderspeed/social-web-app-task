import * as userConstant from '../constants/user.constant';

const initialState = {
  signUp: {
    loading: false,
    error: null,
    success: null,
  },
  login: {
    loading: false,
    error: null,
    success: null,
  },
  userInfo: {
    loading: false,
    error: null,
    data: null,
  },
};

const signActionTypes = {
  [userConstant.SIGN_UP_REQUEST]: (state, payload) => ({
    ...state,
    signUp: {
      loading: true,
      error: null,
      success: null,
    },
  }),
  [userConstant.SIGN_UP_SUCCESS]: (state, payload) => ({
    ...state,
    signUp: {
      loading: false,
      error: null,
      success: true,
      userInfo: {
        ...state.userInfo,
        data: payload,
      },
    },
  }),
  [userConstant.SIGN_UP_FAILURE]: (state, payload) => ({
    ...state,
    signUp: {
      loading: false,
      error: payload,
      success: null,
    },
  }),
  [userConstant.SIGN_UP_RESET]: (state, payload) => ({
    ...state,
    signUp: {
      loading: false,
      error: null,
      success: null,
    },
  }),
};

const loginActionTypes = {
  [userConstant.SIGN_IN_REQUEST]: (state, payload) => ({
    ...state,
    login: {
      loading: true,
      error: null,
      success: null,
    },
  }),
  [userConstant.SIGN_IN_SUCCESS]: (state, payload) => ({
    ...state,
    login: {
      loading: false,
      error: null,
      success: true,
    },
    userInfo: {
      ...state.userInfo,
      data: payload,
    },
  }),
  [userConstant.SIGN_IN_FAILURE]: (state, payload) => ({
    ...state,
    login: {
      loading: false,
      error: payload,
      success: null,
    },
  }),
  [userConstant.SIGN_IN_RESET]: (state, payload) => ({
    ...state,
    login: {
      loading: false,
      error: null,
      success: null,
    },
  }),
};

const userInfoActionTypes = {
  [userConstant.GET_MY_PROFILE_REQUEST]: (state, payload) => ({
    ...state,
    userInfo: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [userConstant.GET_MY_PROFILE_SUCCESS]: (state, payload) => ({
    ...state,
    userInfo: {
      loading: false,
      error: null,
      data: payload,
    },
  }),
  [userConstant.GET_MY_PROFILE_FAILURE]: (state, payload) => ({
    ...state,
    userInfo: {
      loading: false,
      error: payload,
      data: null,
    },
  }),
  [userConstant.GET_MY_PROFILE_RESET]: (state, payload) => ({
    ...state,
    userInfo: {
      loading: false,
      error: null,
      data: null,
    },
  }),
};

const actionTypes = {
  ...signActionTypes,
  ...loginActionTypes,
  ...userInfoActionTypes,
};

const userReducer = (state = initialState, { type, payload }) => {
  return actionTypes[type] ? actionTypes[type](state, payload) : state;
};

export default userReducer;
