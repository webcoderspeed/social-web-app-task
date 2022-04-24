import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/user.reducer';
import postReducer from './reducers/post.reducer';
import friendReducer from './reducers/friend.reducer';

const reducer = combineReducers({
  user: userReducer,
  post: postReducer,
  friend: friendReducer,
});

const userInfoFromLocalStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

const initialState = {
  user: {
    myProfile: { user: userInfoFromLocalStorage },
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
