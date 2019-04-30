import requestGifsReducer from './requestGifs';
import recieveGifsReducer from './recieveGifs';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  requestGifs: requestGifsReducer,
  recieveGifs: recieveGifsReducer
});

export default rootReducer;