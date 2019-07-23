import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import counter from './counter';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter
  });
}
