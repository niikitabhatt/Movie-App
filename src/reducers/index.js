import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router'
import movieInfo from './searchReducer'; // import reducer with the name of the initial state
const rootReducer = history => combineReducers({
  router: connectRouter(history),
  movieInfo
});

export default rootReducer;
