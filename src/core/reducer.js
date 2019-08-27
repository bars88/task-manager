import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducers from './modules/user/reducers';

const rootReducer = (history) => (state, action) => (
  combineReducers({
    router: connectRouter(history),
    user: userReducers,
  })(state, action)
);

export default rootReducer;