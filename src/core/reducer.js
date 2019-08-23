import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) => (state, action) => (
  combineReducers({
    router: connectRouter(history),
  })(state, action)
);

export default rootReducer;