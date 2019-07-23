import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';
import { CounterStateType } from '../reducers/types';

const history = createHashHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: CounterStateType) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
