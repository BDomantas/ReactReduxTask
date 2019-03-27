import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReduced from "./reducers";

import logger from 'redux-logger'

const initialState = {};

const devMiddleware = [logger];

const middleWare = [thunk];

const finalMiddleware = [
  ...middleWare,
  ...(!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? devMiddleware : []),
];

const store = createStore(
  rootReduced,
  initialState,
  applyMiddleware(...finalMiddleware)
);

export default store;
